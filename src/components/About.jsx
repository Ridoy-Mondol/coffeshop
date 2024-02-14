import img from "../components/images/about-img.png"
import { useState } from "react";
const About = () => {
  const [show, setShow] = useState (false);
  const showText = () => {
    setShow (!show);
  }
    return (
      <div>
        <div className="about-bg d-flex align-items-center">
          <div className="container-md container-fluid-sm">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="left-margin">
                  <h1 className="about-text overflow-y-hidden">ABOUT US</h1>
                  <span className="my-description">Welcome to our coffee haven! We're not just about coffee; we're about creating moments. Every cup is a flavorful adventure, <span className={show ? "more" : "show-less"}>carefully brewed to perfection. Join us in our cozy space, savor the rich aromas, and be a part of our coffee-loving community. It's more than just a drink—it's an experience waiting for you</span></span><br/>
                  <button type="button" className="home-btn abt-btn" onClick={showText}>Read More</button>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src = {img} alt = "" width="540" className="img-fluid right-margin"/>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default About;