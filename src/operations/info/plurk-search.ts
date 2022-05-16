import { Handler } from "express";
import { PlurkEndpoints } from "../../constants";
import buildOauthObject from "../../services/oauth/build-oauth-object";
import sendPost from "../../services/oauth/send-post";
import buildErrorResponse from "../../services/plurk/response/build-error-response";
import buildResponse from "../../services/plurk/response/build-response";
import buildUrl from "../../services/plurk/url/build-url";

export const plurkSearch: Handler = (req, res) => sendPost(
  buildOauthObject(req),
  buildUrl(PlurkEndpoints.PLURK_SEARCH),
  req.query)
    .then(buildResponse(res))
    .catch(buildErrorResponse(res))