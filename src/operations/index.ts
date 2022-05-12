import { Handler } from "express"
import { StatusCodes } from "http-status-codes"

export * from "./info"
export * from "./oauth"
export * from "./me"

export const notImplemented: Handler = (_, res) => res
  .status(StatusCodes.NOT_IMPLEMENTED)
  .end()
