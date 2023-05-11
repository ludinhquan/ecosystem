import {Module} from '@nestjs/common';
import {JwtService, JwtServiceImpl} from './jwt';
import {OtpService, OtpServiceImpl} from './otp';
import {SmsService, TwilioSmsService} from './sms';

@Module({
  providers: [
    {provide: OtpService, useClass: OtpServiceImpl},
    {provide: SmsService, useClass: TwilioSmsService},
    {provide: JwtService, useClass: JwtServiceImpl}
  ],
  exports: [OtpService, SmsService, JwtService],
})
export class CommonModule {}
