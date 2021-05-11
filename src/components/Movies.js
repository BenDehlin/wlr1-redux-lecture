// In our Movies component we import connect so that we can connect to our
// redux state. This function takes in up to 2 arguments. The first is a function
// that determines what pieces of our redux state we would like to put on our props.
// It can also take a second argument that is an object containing all of the action
// builders we'd like to have access to in the component. Note that in this component
// all we wanted was to get the movies array from our movieReducer so we did not import
// any action builders. Go look at the bottom of the page next to see how we use connect
// and mapStateToProps to put our redux state onto our props.
import {connect} from 'react-redux'

const Movies = (props) => {
  // here I console log my props so that I can go look in the page to see how the redux state
  // gets set up on our props. Here you should note that we have a "movies" array on our props.
  // This will be what we map over in this component. For now all we are doing is displaying the
  // title of each of our movies. This is the last thing we need to do in this file, so go look
  // at ./AddMovie.js next to see how we use the addMovie action builder we created in our movieReducer.
  console.log(props)
  return(
    <div>
      <h1>Movies</h1>
      {props.movies.map((movie) => (
        <div >
          {movie.title}
        </div>
      ))}
    </div>
  )
}


// Here we have defined a mapStateToProps function that will take our entire redux
// state, grab the movieReducer portion of that state, and put it onto our props.
// What this will mean in this case is it will take the movies array from our movieReducer
// and put it onto the props of this component.
const mapStateToProps = (store) => store.movieReducer


// Here we use connect and mapStateToProps to actuall put the redux state we need onto
// the props for this component. Go look at the top of our component next to see how we
// will use this.
export default connect(mapStateToProps)(Movies)