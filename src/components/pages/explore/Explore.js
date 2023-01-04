import React from 'react';
import Park from "./Park"
import ExploreHeader from "./ExploreHeader";

const Explore = ({parks, searchPark, setSearchPark}) => {
    const mappedParks = parks.map(park => <Park {...park} key={park.id} searchPark={searchPark} setSearchPark={setSearchPark}/>);
    return(
       <div className="parks">
        <ExploreHeader searchPark={searchPark} setSearchPark={setSearchPark}/>
        {mappedParks}
       </div>
    )
}

export default Explore;
