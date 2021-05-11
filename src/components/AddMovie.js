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

export default connect(null, {addMovie})(AddMovie)