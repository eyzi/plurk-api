import { Handler, Request } from "express";
import { StatusCodes } from "http-status-codes";
import buildOauthObject from "../../services/oauth/build-oauth-object";
import sendPost from "../../services/oauth/send-post";
import buildUrl from "../../services/plurk/url/build-url";

const getEndpoint = (req: any) => req.operationDoc?.["x-endpoint"]

export const lazyPassthrough: Handler = async (req, res) => {
  const endpoint = getEndpoint(req)
  if (!endpoint)
    return res.status(400).end("Could not get endpoint of operation")

  sendPost(buildOauthObject(req), buildUrl(endpoint), req.query ?? {})
    .then(response => {
      return res
        .status(StatusCodes.OK)
        .json(response)
    })
    .catch(error => {
      if (error.statusCode) {
        return res
          .status(error.statusCode)
          .json(JSON.parse(error.data ?? ''))
      }

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
    })
}