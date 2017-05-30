import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (<div><button
    onClick={() => this.props.dispatch(fetchPosts('newzealand'))}
    >Fetch Posts</button></div>)
  }
}

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
