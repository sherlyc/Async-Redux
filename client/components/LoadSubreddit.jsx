import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subreddit: '',
      status: ''
    }
  }

  handleChange (e) {
    this.setState({subreddit: e.target.value})
  }

  handleClick () {
    this.setState({status: 'loading'})
    this.props.dispatch(fetchPosts(this.state.subreddit))
  }

  render(){
    return (<div><input type='text' name='subreddit' value={this.state.subreddit} onChange={this.handleChange.bind(this)}/>
    <button
    onClick={this.handleClick.bind(this)}
    >Fetch Posts</button><div>{this.state.status}</div></div>)
  }
}

LoadSubreddit = connect()(LoadSubreddit)

export default LoadSubreddit
