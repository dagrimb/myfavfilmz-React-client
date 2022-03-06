export const SET_MOVIES = 'SET_MOVIES'; // initialize the movies list with movies
export const SET_FILTER = 'SET_FILTER'; // sets a filter to filter movies list
export const SET_USER = 'SET_USER';
export const SET_FAVORITE = 'SET_FAVORITE';
export const SUBMIT_USER = 'SUBMIT_USER';
export const UPDATE_INFO = 'UPDATE_INFO';
export const SET_FAVORITES = 'SET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';


export function setMovies(value) {
  return { 
    type: SET_MOVIES, 
    value 
  };
}

export function setFilter(value) {
  return { 
    type: SET_FILTER, 
    value 
  };
}

export function setUser(value) {
  return {
    type: SET_USER,
    value
  };
}

export function submitUser(value) {
  return {
    type: SUBMIT_USER,
    value
  }
}

export function updateInfo(value, username) {
  return {
    type: UPDATE_INFO,
    value,
    username
  }
}

export function setFavorites(value) {
  return {
    type: SET_FAVORITES,
    value
  }
}

export function addFavorite(username) {
  return {
    type: ADD_FAVORITE,
    username
  }
}

export function removeFavorite(username) {
  return {
    type: REMOVE_FAVORITE,
    username
  }
}