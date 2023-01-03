import { FaTemperatureLow, FaMapMarkerAlt } from 'react-icons/fa';

const Park = ({ name, region, image1, image2, image3, image4, image5, poster, description, climate}) => {


    return (
    <>
        <div className="parks-container">
        <h2 className="name">{name} National Park</h2>
        <div className="description">
        <img className="poster" src={poster} alt={name}/>
        <br/>
        <h3>About {name}</h3>
        <p className="about">{description}</p>
        <div className="region">
            <ul>
            <FaMapMarkerAlt /> U.S. Region: {region}
            <br/><br/>
            <FaTemperatureLow /> Climate Type: {climate} 
            </ul>
        </div>
        <br/>
        </div>
        <span className="scroll-container">
            <img className="scrollableimages" src={image1} alt={name}/>
            <img className="scrollableimages" src={image2} alt={name}/>
            <img className="scrollableimages" src={image3} alt={name}/>
            <img className="scrollableimages" src={image4} alt={name}/>
            <img className="scrollableimages" src={image5} alt={name}/>
        </span>
      </div>
    </>
    )
}

<<<<<<< .merge_file_QFveaU
export default Park

=======
export default Park
>>>>>>> .merge_file_Nvo6yY
