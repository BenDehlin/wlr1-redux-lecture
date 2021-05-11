import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import movieReducer from './movieReducer.js'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
  movieReducer: movieReducer,
  pokemonReducer: pokemonReducer
  // movieReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))