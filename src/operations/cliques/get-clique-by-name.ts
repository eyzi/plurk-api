import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (_: any) => ({
  clique_name: req.params.name
})

export const getCliqueByName = defaultHandler(PlurkEndpoints.GET_CLIQUE, reqBuilder)