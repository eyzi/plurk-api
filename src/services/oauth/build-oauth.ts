import { Request } from "express"
import { OauthObject } from "./types"

export default (req: Request): OauthObject => ({
  oauth: req.app.locals.oauth,
  oauthToken: req.header("oauth-token") as string,
  oauthSecret: req.header("oauth-secret") as string,
})