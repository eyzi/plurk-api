import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => omitNilProperties({
  user_id: req.params.userId,
  offset: req.query.offset,
  limit: req.query.limit,
  favorers_detail: req.query.favorers_detail,
  limited_detail: req.query.limited_detail,
  replurkers_detail: req.query.replurkers_detail,
})

export const getUserPlurks = defaultHandler(PlurkEndpoints.GET_USER_PLURKS, reqBuilder)