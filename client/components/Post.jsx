import React, {PropTypes} from 'react'

function convertUTC (utc) {
  let d= new Date(utc).toString()
  console.log(d)
  return d
}
const Post = (props) => (
  <div>{props.title} - Date: {convertUTC(props.created_utc)}</div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
