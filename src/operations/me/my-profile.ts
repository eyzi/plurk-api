import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"
export const getMyProfile = defaultHandler(PlurkEndpoints.GET_OWN_PROFILE)