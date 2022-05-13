import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import sendPost from "../../services/oauth/send-post"
import buildOauthObj from "../../services/oauth/build-oauth-object"
import buildUrl from "../../services/plurk/url/build-url"
import { PlurkEndpoints } from "../../constants"

export const getMyProfile: Handler = async (req, res) => {
  const profile = await sendPost(
    buildOauthObj(req),
    buildUrl(PlurkEndpoints.GET_OWN_PROFILE)
  ).catch(console.error)

  if (!profile) return res.status(StatusCodes.BAD_REQUEST).end()
  return res.status(StatusCodes.OK).json(profile)
}
