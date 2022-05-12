import { Handler } from "express"
import { StatusCodes } from "http-status-codes"

export const docsRedirect: Handler = (_, res) => res
  .set("location", "/docs")
  .status(StatusCodes.MOVED_PERMANENTLY)
  .end()
