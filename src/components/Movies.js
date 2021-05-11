import {connect} from 'react-redux'
import {getPokemon} from '../redux/pokemonReducer'

const Movies = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Movies</h1>
      <button onClick={props.getPokemon}>Get Pokemon</button>
      {props.movieReducer.movies.map((movie) => (
        <div >
          {movie.title}
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (store) => store

export default connect(mapStateToProps, {getPokemon})(Movies)