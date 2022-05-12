import { Handler, Request } from "express";
import getAccessToken from "../../services/oauth/get-access-token";

const getVerifyParameters = (req: Request) => ({
  oauth: req.app.locals.oauth,
  requestTokenKey: req.app.locals.requestTokenKey,
  requestTokenSecret: req.app.locals.requestTokenSecret,
  oauthVerifier: req.query.oauth_verifier as string
})

export const verifyOauth: Handler = async (req, res) => {
  const verifyParams = getVerifyParameters(req)
  const accessTokenResponse = await getAccessToken(verifyParams)
    .catch(console.error)

  if (!accessTokenResponse)
    return res.status(422).end()

  res.status(200).json(accessTokenResponse)
}