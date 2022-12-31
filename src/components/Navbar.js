

const Navbar = () => {
    return (
    <nav className="nav">
      <a href="/" className="site-title">Site Name</a>
      <ul>
        <li className="active">
          <a href="/explore">Explore Parks</a>
        </li>
        <li>
          <a href="/reviews">Park Reviews</a>
        </li>
        <li>
          <a href="/trivia">Park Trivia</a>
        </li>
      </ul>
      </nav>
    )
}
    
  export default Navbar;