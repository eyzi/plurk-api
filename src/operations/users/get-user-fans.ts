import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => omitNilProperties({
  user_id: req.params.userId,
  offset: req.query.offset,
  limit: req.query.limit,
})

export const getUserFans = defaultHandler(PlurkEndpoints.GET_USER_FANS, reqBuilder)