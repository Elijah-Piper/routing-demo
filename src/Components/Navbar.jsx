import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/one">Lorem Ipsum 1</Link>
        <Link to="/two">Lorem Ipsum 2</Link>
        <Link to="/three">Lorem Ipsum 3</Link>
        <Link to="/four">Lorem Ipsum 4</Link>
        <Link to="/five">Lorem Ipsum 5</Link>
    </nav>
  )
}

export default Navbar