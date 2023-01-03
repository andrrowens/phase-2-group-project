<<<<<<< .merge_file_Pdv7F7

=======
>>>>>>> .merge_file_R0M20d
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

<<<<<<< .merge_file_Pdv7F7
export default Explore;
=======
export default Explore;
>>>>>>> .merge_file_R0M20d
