import {ISmsService} from "./ISmsService";
import * as twilio from "twilio";
import {configs} from "../config";

export class TwilioSmsService implements ISmsService {
  private readonly client: twilio.Twilio

  constructor() {
    this.client = twilio(configs.get('TWILIO_ACCOUNT_SID'), configs.get('TWILIO_AUTH_TOKEN'))
  }

  async sendSms(phoneNumber: string, message: string) {
    try {
       await this.client.messages.create({
        from: '+16813666737',
        to: phoneNumber,
        body: message,
      });
    } catch (e) {
      console.log(e)
    }
  }
}
