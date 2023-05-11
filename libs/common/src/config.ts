type TConfig = {
  RABBITMQ_URL: string,
  MONGODB_URL: string,

  JWT_ACCESS_TOKEN_SECRET: string,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: string,

  TWILIO_ACCOUNT_SID: string,
  TWILIO_AUTH_TOKEN: string,

  OTP_FORMAT_MESSAGE: string
  OTP_RESEND_TIME: string
  OTP_EXPIRY_TIME: string
}

const configs = {
  get: function (key: keyof TConfig) {
    return process.env[key]
  },
  getNumber: function (key: keyof TConfig) {
    return +process.env[key]
  }
}
export {configs}
