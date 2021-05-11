import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import AddMovie from './components/AddMovie'
import Pokemon from './components/Pokemon'

export default(
  <Switch>
    <Route path='/movies' component={Movies} />
    <Route path = '/add_movie' component={AddMovie} />
    <Route path='/pokemon' component={Pokemon} />
  </Switch>
)