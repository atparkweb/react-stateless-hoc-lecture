// Import Redux
const { combineReducers, createStore } = require('redux');

// Actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const FILTER_SET = 'FILTER_SET';

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
function todoReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return applyAddTodo(state, action);
    case TOGGLE_TODO:
      return applyToggleTodo(state, action);
    default:
      return state;
  }
}
function applyAddTodo(state, action) {
  return [...state, action.payload];
}
function applyToggleTodo(state, action) {
  return state.map(todo => {
    if (todo.id === action.payload.id) {
      return Object.assign({}, todo, { completed: !todo.completed });
    } else {
      return todo;
    }
  });
}

function filterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case FILTER_SET:
      return applySetFilter(state, action);
    default: return state;
  }
}
function applySetFilter(state, action) {
  return action.filter;
}

// Combine reducers
const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer
});

// Create store
const store = createStore(rootReducer, { filterState: 'SHOW_NONE' });

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
