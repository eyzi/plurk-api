import oauth from "oauth"

export default (
  consumerKey: string,
  consumerSecret: string,
) => new oauth.OAuth(
  "https://www.plurk.com/OAuth/request_token",
  "https://www.plurk.com/OAuth/access_token",
  consumerKey,
  consumerSecret,
  "1.0",
  null,
  "HMAC-SHA1"
)
