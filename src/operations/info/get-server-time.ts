import { Handler } from "express";
import { StatusCodes } from "http-status-codes";
import { PlurkEndpoints } from "../../constants";
import buildOauthObject from "../../services/oauth/build-oauth-object";
import sendPost from "../../services/oauth/send-post";
import buildErrorResponse from "../../services/plurk/response/build-error-response";
import buildUrl from "../../services/plurk/url/build-url";

type ServerTimeResponse = {
  now: string,
  timestamp: string,
  app_id: string
  user_id: string
}

export const getServerTime: Handler = (req, res) => sendPost<ServerTimeResponse>(
  buildOauthObject(req),
  buildUrl(PlurkEndpoints.CHECK_TIME))
    .then(serverTime => res.status(StatusCodes.OK).json({
      now: serverTime.now,
      timestamp: serverTime.timestamp,
      user_id: serverTime.user_id,
    }))
    .catch(buildErrorResponse(res))