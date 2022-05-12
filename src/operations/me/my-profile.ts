import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import sendPost from "../../services/oauth/send-post"
import buildOauth from "../../services/oauth/build-oauth"
import buildUrl from "../../services/plurk/build-url"

export const getMyProfile: Handler = async (req, res) => {
  const profile = await sendPost(buildOauth(req), buildUrl("/APP/Profile/getOwnProfile"))
    .catch(console.error)
  if (!profile) return res.status(StatusCodes.BAD_REQUEST).end()
  return res.status(StatusCodes.OK).json(profile)
}
