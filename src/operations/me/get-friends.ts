import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"
export const getOwnFriends = defaultHandler(PlurkEndpoints.GET_OWN_FRIENDS)