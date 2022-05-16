import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (query: any) => (omitNilProperties({
  offset: query.offset ?? 0,
  limit: query.limit ?? 1000,
}))

export const getOwnFans = defaultHandler(PlurkEndpoints.GET_OWN_FANS, reqBuilder)