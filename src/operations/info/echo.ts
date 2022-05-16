import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { PlurkEndpoints } from "../../constants";
import whiteBox from "../../services/misc/white-box";
import buildOauthObject from "../../services/oauth/build-oauth-object";
import sendPost from "../../services/oauth/send-post";
import buildErrorResponse from "../../services/plurk/response/build-error-response";
import buildResponse from "../../services/plurk/response/build-response";
import buildUrl from "../../services/plurk/url/build-url";

export const echo: Handler = (req, res) => sendPost(
  buildOauthObject(req),
  buildUrl(PlurkEndpoints.ECHO),
  req.query)
    .then(buildResponse(res))
    .catch(buildErrorResponse(res))