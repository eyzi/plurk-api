import { Handler } from "express"
import { StatusCodes } from "http-status-codes"

export const health: Handler = (_, res) =>  res
  .status(StatusCodes.OK)
  .json({ status: "UP" })