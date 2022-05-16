import { Response } from "express"
import { StatusCodes } from "http-status-codes"

export default (res: Response, statusCode: number = StatusCodes.OK) =>
  <T>(data: T) => res.status(statusCode).json(data)