import buildUrl from "./build-url"

export default (requestTokenKey: string) =>
  buildUrl("/OAuth/authorize?oauth_token=" + requestTokenKey)