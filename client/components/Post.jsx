import React, {PropTypes} from 'react'
import moment from 'moment'

const Post = (props) => (
  <div>{props.title} - Date: {moment.unix(props.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}{console.log(moment.unix(props.created)._d)}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
