import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        {...post}
        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

export default Subreddit
