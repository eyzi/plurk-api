import { Handler, Request } from "express"
import { PlurkEndpoints } from "../../constants"
import buildOauthObject from "../oauth/build-oauth-object"
import sendPost from "../oauth/send-post"
import buildErrorResponse from "..//plurk/response/build-error-response"
import buildResponse from "..//plurk/response/build-response"
import buildUrl from "../plurk/url/build-url"
import getXEndpoint from "./get-x-endpoint"
import { StatusCodes } from "http-status-codes"

type RequestBuilder = (req: Request) => <T>(data: T) => any

const defaultBuilder = (_: Request) => <T>(data: T) => data

const defaultHandler = (plurkEndpoint: PlurkEndpoints | undefined, queryBuilder: RequestBuilder = defaultBuilder): Handler => (req, res) => {
  const endpoint = plurkEndpoint ?? getXEndpoint(req)
  if (!endpoint) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()

  return sendPost(
    buildOauthObject(req),
    buildUrl(endpoint),
    queryBuilder(req)(req.query))
      .then(buildResponse(res))
      .catch(buildErrorResponse(res))
}

export default defaultHandler