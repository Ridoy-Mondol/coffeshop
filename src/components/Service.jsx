import { useState } from "react";
import img1 from "../components/images/icon1.png";
import img2 from "../components/images/icon2.png";
import img3 from "../components/images/icon3.png";
const data = [
  {
    id : 1,
    img_src : img1,
    title : "Original Coffee",
    description : "Discover great coffee, cozy spaces, and exciting events at our shop!"
  },
  {
    id : 2,
    img_src : img2,
    title : "20 Coffee Flavors",
    description : "Savor the authentic taste of our original, handcrafted coffees."
  },
  {
    id : 3,
    img_src : img3,
    title : "Pleasant Ambient",
    description : "Enjoy our cozy atmosphere while savoring 20 unique coffee flavors."
  }
]
const Service = () => {
  const [show, setShow] = useState (null);
  const showButton = (id) => {
    setShow (id);
    };
  const hideButton = () => {
      setShow (null);
      };
    return (
      
        <>
          <div className="position-relative service-div">
            <div className="service-text">
            <h1 className="text-lg-center service-heading overflow-y-hidden">Our Services</h1>
          <div className="container text-lg-center">
            <span className="service-desc">
            Enjoy great coffee, community gatherings, and fun events at our coffee shop!
            </span>
            </div> 
            </div>
            <div className="service-card">
              {
                data.map ((elem) => {
                  return (
                    <div className={`single-card ${show === elem.id ? "show-full" : "" }`} key={elem.id}
                    onMouseEnter={ () => showButton(elem.id)}
                    onMouseLeave={hideButton}
                    >
                    <img src = {elem.img_src} className="img-fluid single-img" alt="" width="45"/>
                    <h3 className="single-heading overflow-y-hidden">{elem.title}</h3>
                    <span className="single-desc">
                    {elem.description}
                    </span><br/>
                    <button type = "button" className={`home-btn service-btn ${show === elem.id ? "show" : "show-less"}`}>READ MORE</button>
                    </div>
                  )
                })
              }
           </div> 
          </div>
        </>
    )
}
export default Service;