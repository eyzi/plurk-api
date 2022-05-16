import { PlurkEndpoints } from "../../../constants"
import sendPost from "../../oauth/send-post"
import { OauthObject } from "../../oauth/types"
import buildUrl from "../url/build-url"
import { Token } from "./types"

export default (
  oauthObject: OauthObject
) => sendPost<Token | undefined>(oauthObject, buildUrl(PlurkEndpoints.CHECK_TOKEN))