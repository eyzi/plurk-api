import { Request } from "express"
import { PlurkEndpoints } from "../../constants"
import omitNilProperties from "../../services/misc/omit-nil-properties"
import defaultHandler from "../../services/misc/passthrough-handler"

const reqBuilder = (req: Request) => omitNilProperties({
  full_name: req.query.full_name,
  email: req.query.email,
  display_name: req.query.display_name,
  privacy: req.query.privacy,
  date_of_birth: req.query.date_of_birth,
})

export const updateUserInfo = defaultHandler(PlurkEndpoints.UPDATE_OWN_INFO, reqBuilder)