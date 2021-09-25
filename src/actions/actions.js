
export const SET_MOVIES = 'SET_MOVIES'; // initialize the movies list with movies
export const SET_FILTER = 'SET_FILTER'; // sets a filter to filter movies list
export const SET_USER = 'SET_USER';
export const SET_FAVORITE = 'SET_FAVORITE';
export const SUBMIT_USER = 'SUBMIT_USER';
export const UPDATE_INFO = 'UPDATE_INFO';
export const SET_FAVORITES = 'SET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


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

export function updateInfo(value, id) {
  return {
    type: UPDATE_INFO,
    value,
    id
  }
}

export function setFavorites(value) {
  return {
    type: SET_FAVORITES,
    value
  }
}

/*export function addFavorite(id) {
  return {
    type: ADD_FAVORITE,
    id
  }
}*/



export function removeFavorite(id) {
  return {
    type: REMOVE_FAVORITE,
    id
  }
}

export function loginUser() {
  return {
    type: LOGIN_USER
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}



