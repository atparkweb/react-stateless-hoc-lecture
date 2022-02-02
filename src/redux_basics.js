// Import Redux
const { createStore } = require('redux');

// Actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
function doAddTodo(id, name) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      name,
      completed: false
    }
  };
}
function doToggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
}

// Reducer
function reducer(state, action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

// Create store
const store = createStore(reducer, []);

// Subscribe
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch Actions
// without action creator:
store.dispatch({type: ADD_TODO, payload: { id: '0', name: 'learn redux' }});
store.dispatch({type: TOGGLE_TODO, payload: { id: '0'}});

// with action creators:
store.dispatch(doAddTodo('1', 'learn react'));
store.dispatch(doAddTodo('2', 'learn vue'));
store.dispatch(doToggleTodo('2'));

// Unsubscribe
unsubscribe();
