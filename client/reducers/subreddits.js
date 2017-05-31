function subreddits (state = {subreddits:[], loading:false}, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return {
        subreddits: [...action.posts],
        loading: false
      }
    case 'LOAD_POSTS':
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}

export default subreddits
