export function manageFriends(state = { friends: [] }, action) {
  switch(action.type){
    case "friends/add":
      return { "friends": [...state.friends, action.payload]}
    case "friends/remove":
      let new_friends = state.friends.filter((friend) => friend.id !== action.payload)
      return { "friends": new_friends}
    default:
      return state
  }
}
