// INITIAL STATE
const initialState = {
  movies: [
    {
      movie_id: 1,
      title: "Star Wars",
      director: "George Lucas"
    }
  ]
}

// ACTION TYPES
const ADD_MOVIE = "ADD_MOVIE"

// ACTION BUILDERS

export function addMovie(movie){
  return {
    type: ADD_MOVIE,
    payload: movie
  }
  // return action
}

// REDUCER

export default function movieReducer(state = initialState, action){
  switch(action.type){
    case ADD_MOVIE:
      return {...state, movies: [...state.movies, action.payload]}
    default:
      return {...state}
  }
}