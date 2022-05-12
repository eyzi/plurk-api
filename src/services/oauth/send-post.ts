import { OauthObject } from "./types"

export default (
  oauthObject: OauthObject,
  path: string,
  requestBody: object = {}
) => new Promise((resolve, reject) => {
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