import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={ post.id }>
            <div className="card-content">
              {/* Sending post id through link as param */}
              <Link to={'/' + post.id}>
                <span className="card-title indigo-text">{ post.title }</span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    );

    return(
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
};

// Redux Store Methods
// Method to pass store data as props
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

// Wrapping component in react-redux connect component 
export default connect(mapStateToProps)(Home);