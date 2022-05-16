import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (query: any) => ({
  clique_name: req.params.name,
  new_name: query.name
})

export const renameClique = defaultHandler(PlurkEndpoints.RENAME_CLIQUE, reqBuilder)