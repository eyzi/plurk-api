import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"
export const getBlocked = defaultHandler(PlurkEndpoints.GET_BLOCKED)