// Here we will use both the state from the pokemonReducer as well as the
// getPokemon action builder. In the movies example our Movies.js used the redux
// state and our AddMovie.js used the addMovie action builder but here we will
// be using both. Go look at the connect down at the bottom to see how we connect
// both of these things to our props.
import {getPokemon} from '../redux/pokemonReducer'
import {connect} from 'react-redux'

const Pokemon = (props) => {
  return(
    <div>
      <h1>Pokemon</h1>
      {/* here we have a button that calls the getPokemon action builder we have placed
      on our props using connect. This will execute the getPokemon action builder
      from our pokemonReducer which will do an axios call to get all the pokemon
      info and save it to our pokemon redux state. Something interesting to note,
      if we fetch our pokemon data and then navigate away from this page and navigate back
      the pokemon data is still there since it's still saved in redux. This means we will not
      need to click this button again every time we visit this page and only the 1 axios call
      is necessary. */}
      <button onClick={props.getPokemon}>Get Pokemon</button>
      {/* we also have access to our pokemon array from the pokemonReducer because of the
      mapStateToProps we defined below. Here we map over that and display the name of
      each pokemon. */}
      {props.pokemon.map((poke) => (
        <div key={poke.name}>
          {poke.name}
        </div>
      ))}
    </div>
  )
}

// We define our mapStateToProps to just get the pokemonReducer part of our
// redux state and put it onto our props.
const mapStateToProps = (store) => store.pokemonReducer

// Our connect takes in 2 arguments, the mapStateToProps function we just defined and
// an object with the action builders we want, which in this case is just the getPokemon
// action builder we imported from our pokemonReducer up at the top of the page. Remember, we
// made this action builder to do an axios call to the pokeApi to get a list of pokemon and save
// it to the pokemonReducer state in the pokemon array. Go look at the contents of this component
// to see how this will all work.
export default connect(mapStateToProps, {getPokemon})(Pokemon)