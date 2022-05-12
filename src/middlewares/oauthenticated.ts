import { Handler, Request } from "express"
import { StatusCodes } from "http-status-codes"
import requestToken from "../services/oauth/request-token"
import buildAuthLink from "../services/plurk/build-auth-link"

const skipOauthCheck = (req: any) => req.operationDoc?.["x-skip-oauth-check"]

const needsAuthentication = (req: Request) => {
  const accessToken = req.header("oauth-token")
  const accessTokenSecret = req.header("oauth-secret")
  return !skipOauthCheck(req) && (!accessToken || !accessTokenSecret)
}

const authenticated: Handler = async (req, res, next) => {
  if (needsAuthentication(req)) {
    const requestTokenResponse = await requestToken(req.app.locals.oauth)
      .catch(error => console.error("problem requesting token", error))
    
    if (!requestTokenResponse)
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
    
    const { requestTokenKey, requestTokenSecret } = requestTokenResponse
    req.app.locals.requestTokenKey = requestTokenKey
    req.app.locals.requestTokenSecret = requestTokenSecret
    return res.status(StatusCodes.UNAUTHORIZED).json({ auth_link: buildAuthLink(requestTokenKey) })
  }
  
  return next()
}

export default authenticated