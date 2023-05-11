export const OtpService = Symbol('OtpService')

export interface IOtpService {
  generate(counter: number): {otp: string, counter: number, secret: string}
  verify(token: string, secret: string, counter: number): boolean
}
