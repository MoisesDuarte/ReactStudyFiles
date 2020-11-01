// Initial Store State
const initState = {
  posts: [
    { id: 1, title: 'Post One', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tincidunt sem sagittis sodales nec ut diam. Suspendisse dapibus felis sed erat semper semper. Duis convallis felis et lorem laoreet, nec tincidunt nibh vestibulum. Phasellus varius dolor vel euismod rhoncus. Fusce lorem ipsum, sodales ac nunc auctor, facilisis feugiat libero.' },
    { id: 2, title: 'Post Two', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tincidunt sem sagittis sodales nec ut diam. Suspendisse dapibus felis sed erat semper semper. Duis convallis felis et lorem laoreet, nec tincidunt nibh vestibulum. Phasellus varius dolor vel euismod rhoncus. Fusce lorem ipsum, sodales ac nunc auctor, facilisis feugiat libero.' },
    { id: 3, title: 'Post Three', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae augue tincidunt sem sagittis sodales nec ut diam. Suspendisse dapibus felis sed erat semper semper. Duis convallis felis et lorem laoreet, nec tincidunt nibh vestibulum. Phasellus varius dolor vel euismod rhoncus. Fusce lorem ipsum, sodales ac nunc auctor, facilisis feugiat libero.' },
  ]
}

// Main Reducer
const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    // Filtering posts by action id
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });

    // Returning updated state object
    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer;