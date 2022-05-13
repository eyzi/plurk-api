import { OAuth } from "oauth"
import createOauth from "./create-oauth"

export default (
  customConsumerKey: string | undefined,
  customConsumerSecret: string | undefined,
  customCallbackUrl: string | undefined
): OAuth | undefined => {
  const {
    CONSUMER_KEY: defaultConsumerKey,
    CONSUMER_SECRET: defaultConsumerSecret,
    CALLBACK_URL: defaultCallbackUrl
  } = process.env

  if (customConsumerKey && customConsumerSecret) {
    return createOauth(
      customConsumerKey,
      customConsumerSecret,
      customCallbackUrl
    )
  } else if (defaultConsumerKey && defaultConsumerSecret) {
    return createOauth(
      defaultConsumerKey,
      defaultConsumerSecret,
      defaultCallbackUrl
    )
  }
  return undefined
}
