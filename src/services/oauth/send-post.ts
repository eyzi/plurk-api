import { OauthObject } from "./types"

export default <T>(
  oauthObject: OauthObject | undefined,
  path: string,
  requestBody: object = {}
) => new Promise<T>((resolve, reject) => {
  if (!oauthObject) return undefined
  oauthObject.oauth.post(
    path,
    oauthObject.oauthToken,
    oauthObject.oauthSecret,
    requestBody,
    "application/json",
    (err, data) => {
      if (err) return reject(err)
      const parsedData = data ? JSON.parse(data.toString()) : undefined
      return resolve(parsedData)
    }
  )
})