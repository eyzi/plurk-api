import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const handleErrors: ErrorRequestHandler = (err, _, res) => {
  console.error(err)
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end()
}

export default handleErrors