import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => ({
  query: req.query.query,
  offset: req.query.offset,
})

export const plurkSearch = defaultHandler(PlurkEndpoints.PLURK_SEARCH, reqBuilder)