import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => (query: any) => (omitNilProperties({
  full_name: query.full_name,
  email: query.email,
  display_name: query.display_name,
  privacy: query.privacy,
  date_of_birth: query.date_of_birth,
}))

export const updateUserInfo = defaultHandler(PlurkEndpoints.UPDATE_OWN_INFO, reqBuilder)