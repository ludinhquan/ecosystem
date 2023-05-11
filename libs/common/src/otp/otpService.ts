import {hotp, authenticator} from "otplib";
import {HashAlgorithms} from "@otplib/core";
import {IOtpService} from "./IOtpService";

export class OtpServiceImpl implements IOtpService {
  private readonly OTP_DIGITS = 6;

  constructor() {
    hotp.options = {
      digits: this.OTP_DIGITS,
      algorithm: HashAlgorithms.SHA512
    }
  }

  public generate(counter: number) {
    const secret = authenticator.generateSecret();
    counter = counter ? counter : 0;

    const otp = hotp.generate(secret, counter);

    return {otp, secret, counter}
  }

  public verify(token: string, secret: string, counter: number): boolean {
    return hotp.check(token, secret, counter)
  }
}
