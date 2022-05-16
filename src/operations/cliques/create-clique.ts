import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (query: any) => ({
  clique_name: req.params.name
})

export const createClique = defaultHandler(PlurkEndpoints.CREATE_CLIQUE, reqBuilder)