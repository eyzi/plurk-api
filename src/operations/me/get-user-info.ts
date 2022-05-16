import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

export const getUserInfo = defaultHandler(PlurkEndpoints.GET_OWN_INFO)