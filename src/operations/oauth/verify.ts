import { Handler, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import buildOauthFromReq from "../../services/oauth/build-oauth-from-req"
import deleteTokenSecretInLocals from "../../services/oauth/delete-token-secret-in-locals"
import getAccessToken from "../../services/oauth/get-access-token"
import getTokenSecretInLocals from "../../services/oauth/get-token-secret-in-locals"

const getVerifyParameters = (req: Request) => {
  const requestTokenKey = req.query.oauth_token as string
  if (!requestTokenKey) return undefined

  const requestTokenSecret = getTokenSecretInLocals(req, requestTokenKey)
  if (!requestTokenSecret) return undefined

  deleteTokenSecretInLocals(req, requestTokenKey)

  return {
    oauth: buildOauthFromReq(req),
    requestTokenKey,
    requestTokenSecret,
    oauthVerifier: req.query.oauth_verifier as string
  }
}

export const verifyOauth: Handler = async (req, res) => {
  const verifyParams = getVerifyParameters(req)
  if (!verifyParams || !verifyParams.oauth)
    return res.status(StatusCodes.BAD_REQUEST).end()

  const accessTokenResponse = await getAccessToken(verifyParams)
    .catch(console.error)

  if (!accessTokenResponse)
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .end(`Could not verify authentication`)

  res.status(StatusCodes.OK).json(accessTokenResponse)
}