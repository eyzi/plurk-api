import { Request } from "express"
import { OAuth } from "oauth"
import { HeaderKeys } from "../../constants"
import buildOauth from "./build-oauth"

export default (req: Request): OAuth | undefined => {
  const consumerKey = req.header(HeaderKeys.CONSUMER_KEY)
  const consumerSecret = req.header(HeaderKeys.CONSUMER_SECRET)
  const callbackUrl = req.header(HeaderKeys.CALLBACK_URL)
  return buildOauth(consumerKey, consumerSecret, callbackUrl)
}
