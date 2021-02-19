import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home </Link> •
      <Link to="/new">Add New</Link>
    </nav>
  )
}
export default Nav;