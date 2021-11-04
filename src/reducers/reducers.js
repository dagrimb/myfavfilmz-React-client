import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_USER, SET_FAVORITES, UPDATE_INFO, ADD_FAVORITE, 
REMOVE_FAVORITE } from '../actions/actions';



function visibilityFilter(state = '', action) { // signature, or identity card, of reducer
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) { // signature, or identity card, of reducer
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function user(state = [], action) {
  switch (action.type) {
    case SET_USER: // via login
      return action.value;
    case UPDATE_INFO: // via profile edit view form
      return action.value;
    default:
      return state;
  }
}

function favorites(state = [], action) {
  switch (action.type) {
    case SET_FAVORITES: // via logging
      return action.value;
    case ADD_FAVORITE: // via the two buttons to add movies
      return state.concat((id) => id === action.id);
    case REMOVE_FAVORITE: // via the remove button feature
      return state.filter((id) => id !== action.id);
    default:
        return state;
  }
}

// groups all the reducers together and only passes them the state they're concerned with
const moviesApp = combineReducers({ 
    visibilityFilter,
    movies,
    user,
    favorites
  });


export default moviesApp;