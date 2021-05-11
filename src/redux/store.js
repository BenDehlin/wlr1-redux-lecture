// In order to set up the store we import the following things:
// 1. createStore is always imported because it is how we actually create the store
// 2. combineReducers we need if we need to have more than 1 reducer or we want to leave the option
// to have more than 1 reducer.
// 3. applyMiddleware we will only need if we want to use redux-promise-middleware
// 4. promiseMiddleware we will only need if we want to use redux-promise-middleware
// 5. All of our reducers will need to be imported here so we can combine them.
import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import movieReducer from './movieReducer.js'
import pokemonReducer from './pokemonReducer'

// If we have more than 1 reducer or want to leave the option to have more than 1 reducer we will
// need to use combineReducers here to combine our multiple reducers into 1 that we can use to create
// our store.
const rootReducer = combineReducers({
  movieReducer: movieReducer,
  pokemonReducer: pokemonReducer
  // movieReducer
})

// Finally we export default createStore and pass in the rootReducer as the first argument. An optional
// second argument would be any middleware we are using. If you are not using middleware the second argument
// is unecessary.
export default createStore(rootReducer, applyMiddleware(promiseMiddleware))

// Go look in ../index.js (in the src folder) to see what we need to do to attach this store to our project