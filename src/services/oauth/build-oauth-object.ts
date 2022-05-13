import { Request } from "express"
import { HeaderKeys } from "../../constants"
import buildOauthFromReq from "./build-oauth-from-req"
import { OauthObject } from "./types"

export default (req: Request): OauthObject | undefined => {
  const oauth = buildOauthFromReq(req)
  if (!oauth) return undefined

  const {
    OAUTH_TOKEN,
    OAUTH_SECRET,
  } = process.env

  // only allow env oauthToken while developing
  if (
    process.env.NODE_ENV === "development" &&
    OAUTH_TOKEN &&
    OAUTH_SECRET
  ) {
    return {
      oauth,
      oauthToken: OAUTH_TOKEN,
      oauthSecret: OAUTH_SECRET,
    }
  }

  return {
    oauth,
    oauthToken: req.header(HeaderKeys.OAUTH_TOKEN) as string,
    oauthSecret: req.header(HeaderKeys.OAUTH_SECRET) as string,
  }
}
