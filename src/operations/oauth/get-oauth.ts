import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
import buildOauthObj from "../../services/oauth/build-oauth-object"
import getTokenInfo from "../../services/plurk/token/get-token-info"

export const getOauth: Handler = async (req, res) => {
  const oauthObj = buildOauthObj(req)
  if (!oauthObj) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()

  const token = await getTokenInfo(oauthObj)

  if (!token) return res.status(StatusCodes.NOT_FOUND).end()
  return res
    .status(StatusCodes.OK)
    .json({
      user_id: token.user_id,
      issue_date: token.issued,
      device_id: token.deviceid,
    })
}