import React, {PropTypes} from 'react'
import moment from 'moment'

const Post = (props) => (
  <div><img src={props.thumbnail} height={props.thumbnail_height} width={props.thumbnail_width}/><h1>{props.title}</h1> <span>Date: {moment.unix(props.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>
  <div>{props.selftext}</div>
  {console.log(props)}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
