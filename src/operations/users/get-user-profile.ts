import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => ({
  user_id: req.params.userId
})

export const getUserProfile = defaultHandler(PlurkEndpoints.GET_USER_PROFILE, reqBuilder)