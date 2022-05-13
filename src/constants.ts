export const PLURK_BASE_URL = "https://www.plurk.com"

export enum HeaderKeys {
  CONSUMER_KEY = "consumer-key",
  CONSUMER_SECRET = "consumer-secret",
  OAUTH_TOKEN = "oauth-token",
  OAUTH_SECRET = "oauth-secret",
  CALLBACK_URL = "x-callback-url",
}

export enum PlurkEndpoints {
  GET_OWN_PROFILE = "/APP/Profile/getOwnProfile",
  CHECK_TOKEN = "/APP/checkToken",
  EXPIRE_TOKEN = "/APP/expireToken",
}
