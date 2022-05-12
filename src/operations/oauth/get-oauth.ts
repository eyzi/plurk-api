import { Handler } from "express"
import { StatusCodes } from "http-status-codes"
export const getOauth: Handler = async (_, res) => res
  .status(StatusCodes.NO_CONTENT)
  .end()