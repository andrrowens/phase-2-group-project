

const Navbar = () => {
    return (
    <nav className="nav">
      <a href="/" className="home-title">Home</a>
      <ul>
        <li>
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