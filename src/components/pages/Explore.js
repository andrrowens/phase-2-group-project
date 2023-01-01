import Park from "./Park"
const Explore = ({parks}) => {
    const mappedParks = parks.map(park => <Park {...park} key={park.id}/>);
    return(
       <div className="parks">
        {mappedParks}
       </div>
    )
}

export default Explore;