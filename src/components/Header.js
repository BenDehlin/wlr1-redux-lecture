import {Link} from 'react-router-dom'

const Header = (props) => {
  return(
    <header>
      <Link to='/movies'>Movies</Link>
      <Link to='/add_movie'>Add Movie</Link>
      <Link to='/pokemon'>Pokemon</Link>
    </header>
  )
}

export default Header