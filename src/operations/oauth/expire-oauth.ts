import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import { PlurkEndpoints } from "../../constants"
import buildOauthObj from "../../services/oauth/build-oauth-object"
import sendPost from "../../services/oauth/send-post"
import buildErrorResponse from "../../services/plurk/response/build-error-response"
import buildToken from "../../services/plurk/token/build-token"
import { Token } from "../../services/plurk/token/types"
import buildUrl from "../../services/plurk/url/build-url"

export const expireOauth: Handler = async (req, res) => sendPost<Token | undefined>(buildOauthObj(req), buildUrl(PlurkEndpoints.EXPIRE_TOKEN))
.then(token => {
  if (!token) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
  return res.status(StatusCodes.OK).json(buildToken(token))
})
.catch(buildErrorResponse(res))