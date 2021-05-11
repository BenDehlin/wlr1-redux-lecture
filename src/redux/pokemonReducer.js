import axios from 'axios'
const initialState = {
  pokemon: []
}

const GET_POKEMON = "GET_POKEMON"

export function getPokemon(){
  const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon`)
  return {
    type: GET_POKEMON,
    payload: pokemon
  }
}

export default function pokemonReducer(state = initialState, action){
  switch(action.type){
    case GET_POKEMON + "_FULFILLED":
      return {...state, pokemon: action.payload.data.results}
    default:
      return {...state}
  }
}