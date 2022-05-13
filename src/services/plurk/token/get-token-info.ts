import { PlurkEndpoints } from "../../../constants"
import sendPost from "../../oauth/send-post"
import { OauthObject } from "../../oauth/types"
import buildUrl from "../url/build-url"

type Token = {
  user_id: number,
  app_id: number,
  issued: string,
  deviceid: string,
  model: string | null
}

export default (
  oauthObject: OauthObject
) => sendPost<Token | undefined>(oauthObject, buildUrl(PlurkEndpoints.CHECK_TOKEN))