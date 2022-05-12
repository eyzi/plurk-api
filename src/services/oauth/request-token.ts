import { OAuth } from "oauth"

type RequestTokenError = {
  statusCode: number,
  data?: any
}

type RequestTokenResponse = {
  requestTokenKey: string,
  requestTokenSecret: string
}

export default (
  oauth: OAuth
) => new Promise<RequestTokenResponse>((resolve, reject) => {
  if (!oauth) return undefined

  const callback = (error: RequestTokenError, requestTokenKey: string, requestTokenSecret: string) => {
    if (error) return reject(error)
    return resolve({ requestTokenKey, requestTokenSecret })
  }
  oauth.getOAuthRequestToken(callback)
})
