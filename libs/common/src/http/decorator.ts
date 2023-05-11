import {applyDecorators, createParamDecorator, ExecutionContext, UseFilters, UseInterceptors} from "@nestjs/common";
import {Request} from 'express';
import {HttpExceptionFilter} from "./exceptionFilter";
import {HttpInterceptor} from "./interceptor";

export function Http() {
  return applyDecorators(
    UseFilters(HttpExceptionFilter),
    UseInterceptors(HttpInterceptor)
  )
} 


export const CurrentUser = createParamDecorator(
  (_: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<Request>();
    return req.user;
  },
);
