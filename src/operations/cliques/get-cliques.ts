import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"
export const getCliques = defaultHandler(PlurkEndpoints.GET_CLIQUES)