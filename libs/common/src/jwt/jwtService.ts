import {JwtService} from "@nestjs/jwt";
import {configs} from "../config";
import {IJwtService, Options} from "./IJwtService";

export class JwtServiceImpl implements IJwtService {
  constructor(
    private jwtService: JwtService = new JwtService({
      secret: configs.get('JWT_ACCESS_TOKEN_SECRET'),
      signOptions: {expiresIn: configs.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}
    })
  ) {}

  sign<T>(payload: T, options: Options): string {
    return this.jwtService.sign(payload as string, options)
  }

  verify(token: string, options: Options) {
    return this.jwtService.verify(token, options)
  }
}
