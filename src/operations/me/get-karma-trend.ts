import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"

export const getKarmaTrend = defaultHandler(PlurkEndpoints.GET_KARMA_TREND)