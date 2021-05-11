// Here in the pokemon reducer we want to keep track of a pokemon array and then
// also have an action that does an axios call that goes and gets the pokemon data
// from the pokeapi.
import axios from 'axios'
const initialState = {
  pokemon: []
}

// here we've created an action type called GET_POKEMON
const GET_POKEMON = "GET_POKEMON"


// here we've created an action builder that will do an axios call to the pokeapi
// and save the result of that to our payload. Because of redux-promise-middleware and
// the way axios calls work with redux this will behave a bit differently than you might expect.
// Instead of just working out of the box what actually will happen here is this action will get
// passed in initially with a type of GET_POKEMON_PENDING instead of just GET_POKEMON when our
// axios happens. Then after the axios call completes successfully it will pass in the same action
// but this time with a type of GET_POKEMON_FULFILLED. The reason this happens is because
// redux can't handle promises by default so redux-promise-middlware adds on these values to the end
// of the string so that we can handle the promise properly in redux.
export function getPokemon(){
  const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon`)
  return {
    type: GET_POKEMON,
    payload: pokemon
  }
}

export default function pokemonReducer(state = initialState, action){
  switch(action.type){
    // here you can see our case for GET_POKEMON we have added "_FULFILLED" onto the end of
    // it. Once again, if we do an axios call in redux then redux-promise-middleware will do this
    // automatically for us. If you do an axios call in redux you will need to have your case
    // look for _FULFILLED on the end. You can also do different cases for _PENDING or _REJECTED
    // if you'd like, but at the very least you'll want to handle _FULFILLED since that will be what
    // the success case is.
    case GET_POKEMON + "_FULFILLED":
      // note that the payload has a .data.results on it, this is because this is where we actually find
      // the array of pokemon that comes back from this axios call.
      return {...state, pokemon: action.payload.data.results}
    default:
      return {...state}
  }
}

// IF THIS redux-promise-middleware CASE IS CONFUSING TO YOU ANOTHER ALTERNATIVE IS JUST TO NOT
// DO AXIOS CALLS IN REDUX FOR NOW AND JUST DO THEM IN THE COMPONENTS THEMSELVES.
// If you'd like to see us using this reducer in action go look in ../components/Pokemon.js next.
