import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import { PlurkEndpoints } from "../../constants"
import buildOauthObj from "../../services/oauth/build-oauth-object"
import sendPost from "../../services/oauth/send-post"

export const expireOauth: Handler = async (req, res) => {
  const token = await sendPost(buildOauthObj(req), PlurkEndpoints.EXPIRE_TOKEN)
  if (!token) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
  return res.status(StatusCodes.NO_CONTENT).end()
}