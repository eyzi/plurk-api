import { Handler } from "express"
import { StatusCodes } from "http-status-codes"

export const notImplemented: Handler = (_, res) => res
  .status(StatusCodes.NOT_IMPLEMENTED)
  .end()