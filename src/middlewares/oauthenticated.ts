import { Handler, Request } from "express"
import { StatusCodes } from "http-status-codes"
import buildOauthFromReq from "../services/oauth/build-oauth-from-req"
import requestToken from "../services/oauth/request-token"
import buildAuthLink from "../services/plurk/url/build-auth-link"
import { HeaderKeys } from "../constants"
import setTokenSecretInLocals from "../services/oauth/set-token-secret-in-locals"

const skipOauthCheck = (req: any) => req.operationDoc?.["x-skip-oauth-check"]

const needsAuthentication = (req: Request) => {
  if (skipOauthCheck(req)) return false

  const { NODE_ENV, OAUTH_TOKEN, OAUTH_SECRET } = process.env
  if (NODE_ENV === "development" && OAUTH_TOKEN && OAUTH_SECRET) {
    return false
  }

  const accessToken = req.header(HeaderKeys.OAUTH_TOKEN)
  const accessTokenSecret = req.header(HeaderKeys.OAUTH_SECRET)
  return (!accessToken || !accessTokenSecret)
}

const authenticated: Handler = async (req, res, next) => {
  if (needsAuthentication(req)) {
    const requestTokenResponse = await requestToken(buildOauthFromReq(req))
      .catch(error => console.error("problem requesting token", error))
    
    if (!requestTokenResponse)
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
    
    const { requestTokenKey, requestTokenSecret } = requestTokenResponse
    setTokenSecretInLocals(req, requestTokenKey, requestTokenSecret)
    return res.status(StatusCodes.UNAUTHORIZED).json({ auth_link: buildAuthLink(requestTokenKey) })
  }
  
  return next()
}

export default authenticated