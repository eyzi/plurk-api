import { PlurkEndpoints } from "../../constants"
import defaultHandler from "../../services/misc/passthrough-handler"
export const getEmoticons = defaultHandler(PlurkEndpoints.GET_EMOTICONS)