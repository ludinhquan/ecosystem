export const JwtService = Symbol('JwtService')


export type Options = {
  secret: string,
  expiresIn: string
}

export interface IJwtService {
  sign<T>(payload: T, options?: Options): string
  verify<T extends object>(token: string, options?: Options): T
}
