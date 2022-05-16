import { Response } from "express"
import { StatusCodes } from "http-status-codes"

export default (res: Response, statusCodeOverride?: number) => (error: any) => {
  const defaultMessage = { data: "Something went wrong" }
  if (error.statusCode) {
    return res
      .status(statusCodeOverride ?? error.statusCode)
      .json(JSON.parse(error.data ?? defaultMessage))
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(defaultMessage)
}