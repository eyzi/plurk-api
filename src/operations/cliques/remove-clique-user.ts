import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (query: any) => ({
  clique_name: req.params.name,
  user_id: req.params.userId
})

export const removeCliqueUser = defaultHandler(PlurkEndpoints.REMOVE_CLIQUE_USER, reqBuilder)