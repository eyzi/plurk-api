import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import buildOauthObj from "../../services/oauth/build-oauth-object"
import buildErrorResponse from "../../services/plurk/response/build-error-response"
import buildToken from "../../services/plurk/token/build-token"
import getTokenInfo from "../../services/plurk/token/get-token-info"

export const getOauth: Handler = async (req, res) => {
  const oauthObj = buildOauthObj(req)
  if (!oauthObj) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()

  return getTokenInfo(oauthObj)
    .then(token => {
      if (!token) return res.status(StatusCodes.NOT_FOUND).end()

      return res
        .status(StatusCodes.OK)
        .json(buildToken(token))
    })
    .catch(buildErrorResponse(res))
}