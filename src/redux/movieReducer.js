// When we set up a reducer we will generally follow the same pattern to set it
// up. We will have:
// 1. initialState up at the top
// 2. some number of "action types"
// 3. some number of "action builder functions"
// 4. our reducer itself

// INITIAL STATE
// This will be the initial value for the state that we track in this reducer.
// As we perform different actions this initial state will change from whatever the
// default is based on what our reducer says to do.
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
// Here we will create "action types" that will determine what we call the "type"
// for each action we create down below. We create these variables because we're planning
// on using the same string "ADD_MOVIE" for the type in our action builder as well as
// in the switch statement of our reducer. Defining them as variables will allow us to error
// handle a little bit better. This is not required but it is recommended.
const ADD_MOVIE = "ADD_MOVIE"

// ACTION BUILDERS
// Here we will define our action builders. Notice that this action builder will take in a movie
// object and then return an "action" object with 2 things on it, a type of ADD_MOVIE and a payload
// of the movie object that we were passed. Each action builder we create should always return an object
// with a type and a payload. When we call this function in any of our components what happens under the
// hood is it takes this action object here and passes it into our reducer. Our reducer then will use
// the type of our action object to determine how it is supposed to update the state for this reducer.
export function addMovie(movie){
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

// REDUCER
// Down here our reducer itself is the final piece of the pattern for reducer files. Our reducer will
// always take in 2 parameters, the current state and an action object. NOTE THAT WE DO NOT CALL THE REDUCER
// DIRECTLY. This happens under the hood when we use connect to attach an action builder to our props and
// then call it.
export default function movieReducer(state = initialState, action){
  // The switch statement in the reducer looks at the type on our action object to see how it is supposed to
  // update our redux state. In this case we only have the ADD_MOVIE action type 
  // but theoretically we could have any number of action builders 
  // and any number of cases down here to handle them. Note how the case in this
  // switch statement matches the type from the addMovie function up above.
  switch(action.type){
    // our ADD_MOVIE case returns a new version of state that is the same as the existing version of state
    // but with the movies array changed to be: whatever is currently on the movies array, plus the new item
    // that was the payload from our action. Go look at the addMovie function to see where the payload comes
    // from. When we eventually call the addMovie function in one of our components we will be passing in a 
    // movie object and that movie object will be what is saved on our action as the payload.
    case ADD_MOVIE:
      return {...state, movies: [...state.movies, action.payload]}
      // the switch statement also always needs to have a default that just returns the state as-is
    default:
      return {...state}
  }
}

// After we have a reducer built out go look in the ./store.js to see how we set up the store next.