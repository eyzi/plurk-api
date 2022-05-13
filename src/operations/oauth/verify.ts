import { Handler, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import buildOauthFromReq from "../../services/oauth/build-oauth-from-req"
import getAccessToken from "../../services/oauth/get-access-token"

const getVerifyParameters = (req: Request) => ({
  oauth: buildOauthFromReq(req),
  requestTokenKey: req.app.locals.requestTokenKey,
  requestTokenSecret: req.app.locals.requestTokenSecret,
  oauthVerifier: req.query.oauth_verifier as string
})

export const verifyOauth: Handler = async (req, res) => {
  const accessTokenResponse = await getAccessToken(getVerifyParameters(req))
    .catch(console.error)

  if (!accessTokenResponse)
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .end(`Could not verify authentication`)

  res.status(StatusCodes.OK).json(accessTokenResponse)
}