import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => ({
  data: req.query.data
})

export const echo = defaultHandler(PlurkEndpoints.ECHO, reqBuilder)