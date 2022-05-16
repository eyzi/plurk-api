import { Token } from "./types"

export default (token: Token) => ({
  user_id: token.user_id,
  issue_date: token.issued,
  device_id: token.deviceid,
  model: token.model
})