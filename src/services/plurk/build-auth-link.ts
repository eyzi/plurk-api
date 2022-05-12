import { PLURK_BASE_URL } from "../../constants"

export default (requestTokenKey: string) =>
  PLURK_BASE_URL + "/OAuth/authorize?oauth_token=" + requestTokenKey