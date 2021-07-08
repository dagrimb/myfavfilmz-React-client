
export const SET_MOVIES = 'SET_MOVIES'; // initialize the movies list with movies
export const SET_FILTER = 'SET_FILTER'; // sets a filter to filter movies list
export const SET_USER = 'SET_USER';
export const SET_FAVORITES = 'SET_FAVORITES';

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

export function setFavorites(value) {
  return {
    type: SET_FAVORITES,
    value
  }
}