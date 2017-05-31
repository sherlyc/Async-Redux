import {connect} from 'react-redux'

import Subreddit from '../components/Subreddit'

const mapStateToProps = (state) => {
  console.log(state.subreddits)
  return {
    subreddits: state.subreddits.subreddits,
    status: state.subreddits.loading
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
