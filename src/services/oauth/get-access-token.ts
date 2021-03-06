import { OAuth } from "oauth"

type RequestTokenError = {
  statusCode: number,
  data?: any
}

type GetAccessTokenResponse = {
  accessToken: string,
  accessTokenSecret: string
}

type VerifyParams = {
  oauth: OAuth | undefined,
  requestTokenKey: string,
  requestTokenSecret: string,
  oauthVerifier: string,
}

export default ({
  oauth,
  requestTokenKey,
  requestTokenSecret,
  oauthVerifier,
}: VerifyParams) => new Promise<GetAccessTokenResponse>((resolve, reject) => {
  if (!oauth) return undefined
  const callback = (error: RequestTokenError, accessToken: string, accessTokenSecret: string) => {
    if (error) return reject(error)
    return resolve({ accessToken, accessTokenSecret })
  }
  oauth.getOAuthAccessToken(requestTokenKey, requestTokenSecret, oauthVerifier, callback)
})
