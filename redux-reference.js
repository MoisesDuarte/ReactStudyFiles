const { createStore } = Redux;

const initState = {
  todos: [],
  posts: [],
}

// REDUCER (direct access to store state)
// Reducer uses initState as default value if state is empty
function myreducer(state = initState, action) {
  // Checking which type of action was passed
  if (action.type === 'ADD_TODO') {
    // Returning updated state object
    return { 
      ...state,  // Spreading state to maintain store structure
      todos: [...state.todos, action.todo]
    }
  }
  
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
}

const store = createStore(myreducer);

// SUBSCRIPTION (Reacts to changes on store state)
store.subscribe(() => {
    console.log('State updated');
    console.log(store.getState());
})

// ACTIONS
// Add new todo
// type = describes the action
// payload (optional) = data passed through action
store.dispatch({ type: 'ADD_TODO', todo: 'play something' });
store.dispatch({ type: 'ADD_TODO', todo: 'live another day' });
store.dispatch({ type: 'ADD_POST', post: 'the dangers of sleeping' });