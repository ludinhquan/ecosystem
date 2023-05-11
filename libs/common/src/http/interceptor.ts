import {CustomError, Left, pick, removeEmptyProps, Result, Right} from '@ecosystem/core';
import {
  CallHandler,
  ExecutionContext, Injectable,
  Logger,
  NestInterceptor
} from '@nestjs/common';
import {Request, Response} from 'express';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {v4} from 'uuid';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  private logger = new Logger(this.constructor.name);
    
  getClient(request: Request) {
    const requestId = v4();
    const {ip, originalUrl} = request;
    const userAgent = request.get('user-agent') || '';
    return [decodeURIComponent(originalUrl), requestId, userAgent, ip].join(' ');
  }

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const last = performance.now();

    const {method, params, body, query, user} = request;

    const client = this.getClient(request);
    const userInfo = pick(user, ['id', 'name','email'])

    this.logger.log(
      `[REQUEST][${method}] ${client} ${JSON.stringify(
        removeEmptyProps({...userInfo, params, query, body}, [undefined]),
      )}`,
    );

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      let log = this.logger.log.bind(this.logger);
      if (statusCode >= 400) log = this.logger.error.bind(this.logger);

      log(`[RESPONSE][${method}] ${client} status:${statusCode}, length: ${contentLength ?? 0}, duration: ${performance.now() - last}ms`);
    });

    return handler.handle().pipe(
      map((data: any) => {
        if (data instanceof CustomError) throw data
        return data;
      }),
    );
  }
}
