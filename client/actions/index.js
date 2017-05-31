import request from 'superagent'

export const receivePosts = (posts, status) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data),
    status: status
  }
}

export const loading = () => {
  return {
    type: 'LOAD_POSTS'
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(loading())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          receivePosts([], err.message)
          return
        }
        dispatch(receivePosts(res.body, ''))
      })
  }
}
