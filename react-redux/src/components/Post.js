import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../store/actions/postActions';

class Post extends Component {
  handleClick = () => {
    // ? Calling dispatch function from props
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{ this.props.post.title }</h4>
        <p>{ this.props.post.body }</p>
        <div className="center">
          <button className="btn indigo" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );

    return (
      <div className="container">
        { post }
      </div>
    )
  }
}

// * Redux methods
const mapStateToProps = (state, ownProps) => {
  // ? Id passed through route params
  let id = parseInt(ownProps.match.params.post_id);
  return {
    // ? Returning post from store that matches param id
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // ? Mapping action dispatch function to component props
    deletePost: (id) => { dispatch(deletePost(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);