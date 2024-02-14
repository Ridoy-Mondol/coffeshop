import { images } from "./Api";
import { useState, } from "react";
const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const imagesNumberToShow = showAll ? images.length : 6;
    const showImages = () => {
        setShowAll (!showAll);
    };
    return (
        <>
          <div>
        <div className="container-fluid gallery-div">
          <h1 className="pt-5 gallary overflow-y-hidden"> Our Gallery</h1>
          <div className="container text-center">
            <span className="gallery-desc">
            Every sip tells a story – explore the essence of our coffee journey through moments captured in our gallery.
            </span>
            <div className="row">
                {
                    images.slice(0,imagesNumberToShow).map((elem, index) => {
                        return (
                            <div className="col-lg-4 col-md-4" key={index}>
                                <div className="img-div">
                                <img src = {elem.img_src} alt ="" className="img-fluid img-gallery"/>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <button 
            type ="button" 
            className="home-btn gallery-btn mt-0" 
            onClick={showImages}>
            {showAll ? 'See Less' : 'See More'}
            </button>
          </div>
        </div> 
        </div>
        </>
    )
}
export default Gallery;