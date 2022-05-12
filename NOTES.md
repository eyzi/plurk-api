# tech notes

- main objects are Plurk and User

- `avatar` property will have `small`, `medium`, and `large` properties

- `karma_trend` property will be an array of `timestamp`, `karma`, and
`reason`

- get plurks and get unread plurks can be merged and have a query
property `unread` instead

- current user endpoints can be shortened to `/me` instead of `/users/me`

- endpoints dealing with update images will be out of scope for now

## endpoints

### current-user-related
- /APP/Users/me: current user info (GET /users/me)
- /APP/Users/update: update current user info (PATCH /users/me)
- /APP/Users/updateAvatar: update current user avatar (out of scope)
- /APP/Users/getKarmaStats: karma trend (GET /users/me/karma)
- /APP/Profile/getOwnProfile: get current user profile (GET /users/me/profile)

```
GET /me
PATCH /me
GET /me/profile
GET /me/karma
GET /me/fans
GET /me/friends
GET /me/blocked
```

### user-related
- /APP/Profile/getPublicProfile: get profile of another user (GET /users/:id/profile)
- /APP/FriendsFans/getFriendsByOffset: (GET /users/:id/friends)
- /APP/FriendsFans/getFansByOffset: (GET /users/:id/fans)
- /APP/FriendsFans/getFollowingByOffset: (GET /users/me/fans)
- /APP/FriendsFans/becomeFriend: (POST /users/me/friends/:id or POST /users/:id/befriend)
- /APP/FriendsFans/removeAsFriend: (DELETE /users/me/friends/:id or DELETE /users/:id/befriend)
- /APP/FriendsFans/becomeFan: (POST /users/me/fans/:id or POST /users/:id/befan?)
- /APP/FriendsFans/setFollowing: (PATCH /users/:id/follow)
- /APP/FriendsFans/getCompletion: (GET /users/me/friends/online)
- /APP/Blocks/get: get block list: (GET /me/blocked)
- /APP/Blocks/block: block user: (POST /users/:id/block)
- /APP/Blocks/unblock: unblock user: (DELETE /users/:id/block)

```
GET /users/:id/profile
GET /users/:id/friends
GET /users/:id/fans
POST /users/:id/befriend
DELETE /users/:id/befriend
POST /users/:id/follow
DELETE /users/:id/follow
POST /users/:id/block
DELETE /users/:id/block
```

### clique-related
- /APP/Cliques/getCliques: get cliques
- /APP/Cliques/getClique: get clique by name
- /APP/Cliques/createClique: create clique
- /APP/Cliques/renameClique: rename clique
- /APP/Cliques/add: add user id to clique
- /APP/Cliques/remove: remove user id from clique

```
GET /cliques
GET /cliques/:name
POST /cliques/:name
PATCH /cliques/:name/rename
POST /cliques/:name/users/:id
DELETE /cliques/:name/users/:id
```

### notifications
- /APP/Realtime/getUserChannel: apparently better than polling
- /APP/Polling/getPlurks: get unread plurks
- /APP/Polling/getUnreadCount: get unread plurks counts
- /APP/Alerts/getActive: get active alerts
- /APP/Alerts/getHistory: get past 30 alerts
- /APP/Alerts/addAsFan: accept friend request as fan
- /APP/Alerts/addAllAsFan: accept all friend requests as fans
- /APP/Alerts/addAllAsFriends: accept all friend requests as friends
- /APP/Alerts/addAsFriend: accept friend request as friend
- /APP/Alerts/denyFriendship: decline friend request
- /APP/Alerts/removeNotification: remove friend request notification by user id

```
GET /alerts (query: active, limit)
```

### plurks
- /APP/Timeline/getPlurk: (GET /plurks/:id)
- /APP/Timeline/getPlurks: (GET /plurks)
- /APP/Timeline/getUnreadPlurks: - same as /APP/Timeline/getPlurks
- /APP/Timeline/getPublicPlurks: (GET /users/:id/plurks)
- /APP/Timeline/plurkAdd: (POST /plurks)
- /APP/Timeline/plurkDelete: (DELETE /plurks/:id)
- /APP/Timeline/plurkEdit: (PATCH /plurks/:id)
- /APP/Timeline/toggleComments: (GET /plurks/:id/comments)
- /APP/Timeline/mutePlurks: (PATCH /plurks/mute)
- /APP/Timeline/unmutePlurks : (PATCH /plurks/unmute)
- /APP/Timeline/favoritePlurks: (PATCH /plurks/favorite)
- /APP/Timeline/unfavoritePlurks: (PATCH /plurks/unfavorite)
- /APP/Timeline/replurk: (POST /plurks/replurk)
- /APP/Timeline/unreplurk: (POST /plurks/unreplurk)
- /APP/Timeline/markAsRead: (PATCH /plurks/read)
- /APP/Timeline/uploadPicture: (out of scope)
- /APP/Timeline/reportAbuse: (POST /plurks/:id/report)
- /APP/Responses/get: (GET /plurks/:id/responses)
- /APP/Responses/responseAdd: (POST /plurks/:id/responses)
- /APP/Responses/responseDelete: (DELETE /plurks/:pid/responses/:rid)

```
GET /users/:id/plurks
GET /plurks (query: unread, slim)
POST /plurks
GET /plurks/:id
PATCH /plurks/:id
DELETE /plurks/:id

GET /plurks/:id/comments
GET /plurks/:id/responses
POST /plurks/:id/responses
DELETE /plurks/:pid/responses:/rid
POST /plurks/:id/report

POST /plurks/:id/mute
DELETE /plurks/:id/mute
POST /plurks/:id/favorite
DELETE /plurks/:id/favorite
POST /plurks/:id/replurk
DELETE /plurks/:id/replurk
```

### multiple plurk operation

```
POST /plurks/batch/mute
DELETE /plurks/batch/mute
POST /plurks/batch/favorite
DELETE /plurks/batch/favorite
POST /plurks/batch/replurk
DELETE /plurks/batch/replurk
```

### other
- /APP/PlurkSearch/search: search latest 20 plurks by term
- /APP/UserSearch/search: search top 10 users by karma
- /APP/Emoticons/get: get emoticons
- /APP/checkTime: get server time
- /APP/echo: echo

```
GET /search/plurks (query: term)
GET /search/users (query: term)
POST /echo
GET /emoticons
GET /time
```

### oauth
- /APP/checkToken: check oauth token
- /APP/expireToken: expire oauth token

```
GET /oauth/token
DELETE /oauth
```