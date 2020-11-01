import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Importing image
import Pencil from '../assets/pencil.png';

class Home extends Component {
  // Local Component State
  state = {
    posts: [],
  }

  // Lifecycle Hook
  componentDidMount() {
    // Requesting from fake api and slicing data array to 10 posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      });
  }

  // Template Rendering
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={ post.id }>
            <img src={Pencil} alt="A post"/>
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

export default Home;