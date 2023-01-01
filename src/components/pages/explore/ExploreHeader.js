
const ExploreHeader = ({searchPark, setSearchPark}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchPark(e.target.value);
    }
    
    return(
    <div className="explore-header">

    <h1 className="welcome">
    Welcome to the U.S. National Parks Explore Page!
    </h1>
    <p className="header-1">
        The United States has <b>63</b> national parks, which are congressionally designated protected areas operated by the National Park Service, an agency of the Department of the Interior. 
    </p>
    <p className="header-1">
        National parks are designated for their natural beauty, unique geological features, diverse ecosystems, and recreational opportunities.
    </p>
    <p className="header-1">
        Scroll down ⇩ to explore some of the amazing features of the United States National Parks, or visit <a href="https://www.nationalparks.org/explore/parks" target="_blank" rel="noopener noreferrer">nationalparks.org</a> for more information and to learn about how you can contribute.
    </p>
    
    <form className="search-bar">
    <input
        onChange={handleSearch}
        type="search"
        name="search"
        pattern=".*\S.*" 
        value={searchPark}
        placeholder="   Search by keyword, name, location, climate..."
        required>    
    </input>
    <button className="search-btn">
        <span>Search</span>
    </button>
    </form>
    </div>
)
}

export default ExploreHeader;