<<<<<<< .merge_file_3wWMWZ
import {useState} from 'react'

const ExploreHeader = ({searchPark, setSearchPark}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchPark(input);
        setInput("");
=======

const ExploreHeader = ({searchPark, setSearchPark}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchPark(e.target.value);
>>>>>>> .merge_file_WYl9p4
    }
    
    return(
    <div className="explore-header">

    <h1 className="welcome">
<<<<<<< .merge_file_3wWMWZ
    Explore America's National Parks
    </h1>
    <p className="discover">Discover our most treasured places, supported by people like <b>you</b>.</p>
=======
    Welcome to the U.S. National Parks Explore Page!
    </h1>
>>>>>>> .merge_file_WYl9p4
    <p className="header-1">
        The United States has <b>63</b> national parks, which are congressionally designated protected areas operated by the National Park Service, an agency of the Department of the Interior. 
    </p>
    <p className="header-1">
        National parks are designated for their natural beauty, unique geological features, diverse ecosystems, and recreational opportunities.
    </p>
    <p className="header-1">
        Scroll down ⇩ to explore some of the amazing features of the United States National Parks, or visit <a href="https://www.nationalparks.org/explore/parks" target="_blank" rel="noopener noreferrer">nationalparks.org</a> for more information and to learn about how you can contribute.
    </p>
    
<<<<<<< .merge_file_3wWMWZ
    <form  onSubmit={handleSubmit} className="search-bar">
    <input
        onChange={(e) => setInput(e.target.value)}
        type="search"
        name="search"
        pattern=".*\S.*" 
        value={input}
        placeholder="   Search by keyword, name, location, climate..."
        required>    
    </input>
    <button type="submit" className="search-btn">
=======
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
>>>>>>> .merge_file_WYl9p4
        <span>Search</span>
    </button>
    </form>
    </div>
)
}
<<<<<<< .merge_file_3wWMWZ
export default ExploreHeader;

=======

export default ExploreHeader;
>>>>>>> .merge_file_WYl9p4
