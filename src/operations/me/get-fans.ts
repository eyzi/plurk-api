import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (omitNilProperties({
  offset: req.query.offset ?? 0,
  limit: req.query.limit ?? 1000,
}))

export const getOwnFans = defaultHandler(PlurkEndpoints.GET_OWN_FANS, reqBuilder)