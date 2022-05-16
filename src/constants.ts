export const PLURK_BASE_URL = "https://www.plurk.com"

export enum HeaderKeys {
  CONSUMER_KEY = "consumer-key",
  CONSUMER_SECRET = "consumer-secret",
  OAUTH_TOKEN = "oauth-token",
  OAUTH_SECRET = "oauth-secret",
  CALLBACK_URL = "x-callback-url",
}

export enum PlurkEndpoints {
  GET_OWN_PROFILE = "/APP/Profile/getOwnProfile",
  GET_OWN_INFO = "/APP/Users/me",
  UPDATE_OWN_INFO = "/APP/Users/update",
  GET_KARMA_TREND = "/APP/Users/getKarmaStats",
  GET_OWN_FRIENDS = "/APP/FriendsFans/getCompletion",
  GET_OWN_FANS = "/APP/FriendsFans/getFollowingByOffset",
  GET_BLOCKED = "/APP/Blocks/get",
  CHECK_TOKEN = "/APP/checkToken",
  EXPIRE_TOKEN = "/APP/expireToken",
  ECHO = "/APP/echo",
  CHECK_TIME = "/APP/checkTime",
  GET_EMOTICONS = "/APP/Emoticons/get",
  PLURK_SEARCH = "/APP/PlurkSearch/search",
  USER_SEARCH = "/APP/UserSearch/search",
  GET_CLIQUES = "/APP/Cliques/getCliques",
  GET_CLIQUE = "/APP/Cliques/getClique",
  CREATE_CLIQUE = "/APP/Cliques/createClique",
  RENAME_CLIQUE = "/APP/Cliques/renameClique",
  ADD_CLIQUE_USER = "/APP/Cliques/add",
  REMOVE_CLIQUE_USER = "/APP/Cliques/remove",
}
