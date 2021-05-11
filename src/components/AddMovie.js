// For this component we need to import connect as well as the addMovie action
// builder. Remember, connect takes 2 potential arguments, a function to determine
// how we want our redux state mapped to our props, and an object containing all the
// action builders we need access to in this component. For our purposes well will not
// need access to the redux state so when we get to the bottom of the file you'll see we
// pass in null as the first argument for connect. Go look down at the bottom of the file
// next to see how we will set up our import for this situation.
import {Component} from 'react'
import {connect} from 'react-redux'
import {addMovie} from '../redux/movieReducer'

class AddMovie extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      director: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // Our handleAddMovie function (that we call when we click the Add Movie button in our jsx)
  // will call the addMovie action builder that we have placed on our props using connect. It will
  // then pass in a movie object with a title and director that it is pulling off of the state tied
  // to our title input field and our director input field. To remind yourself where this movie object
  // will go you can briefly go back and look at our movie reducer to see how that dataflow works.
  // It will take the movie object and save it as the payload for that action with a type of ADD_MOVIE
  // and then the resulting object gets passed into the movieReducer function which then evaluates how
  // it's supposed to update the redux state based on the type. This dataflow can be very confusing
  // because it's all kind of happening behind the scenes but as you get more practice with it it will
  // become a bit more clear. When you are done reviewing how this addMovie action builder works we're
  // done with how redux works. From here you can review the flow again starting from the movieReducer
  // or you can move on to the pokemonReducer to see how things differ slightly if we need to do an
  // axios call in our reducer.
  handleAddMovie = () => {
    this.props.addMovie({
      title: this.state.title,
      director: this.state.director
    })
  }

  render(){
    const {title, director} = this.state
    return(
      <div>
        <h1>Add Movie</h1>
        <input placeholder='Enter Title' name='title' value={title} onChange={this.handleChange} />
        <input placeholder='Enter Director' name='director' value={director} onChange={this.handleChange} />
        <button onClick={this.handleAddMovie}>Add Movie</button>
      </div>
    )
  }
}


// Notice how just like in the Movies component we are using connect but this time since
// we don't need the redux state here in this component we left the first argument blank and
// simply passed in an object with the addMovie action builder on it. This will take the
// addMovie action builder and put it onto our props. When we access the addMovie action builder
// off of our props what connect does under the hood is get the object that the action builder
// returns and passes it into the reducer function. The reducer function then evaluates how it should
// update based on what that action is. This can be confusing for students but just know that this
// is what connect does under the hood for us. Next go up and look at our handleAddMovie function
// so we can see this in action.
export default connect(null, {addMovie})(AddMovie)