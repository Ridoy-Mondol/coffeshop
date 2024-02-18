import {Link,NavLink} from "react-router-dom";
const Footer1 = () => {
    return (
      <div className="position-relative">
        <div className="container-fluid footer-container">
        <div className="footer-border">
        <div className="container footer-div">
            <div>
            <h4 className="footer-about overflow-y-hidden">About</h4>
            <p className="footer-menu-text">Embracing the artistry of coffee, we curate flavors that awaken your senses, fostering a community one brew at a time.</p>
          </div>
          <div>
            <h4 className="footer-menu overflow-y-hidden">Menu</h4>
            <div className="margin-list">
            <li className="footer-list overflow-y-hidden">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/coffeshop/">
            Home
            </NavLink>
            </li>
            <li className="footer-list overflow-y-hidden">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/coffeshop/about">
            About Us
            </NavLink>
            </li>
            <li className="footer-list overflow-y-hidden">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/coffeshop/gallery">
            Gallery
            </NavLink>
            </li>
            <li className="footer-list overflow-y-hidden">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/coffeshop/service">
            Services
            </NavLink>
            </li>
            <li className="footer-list overflow-y-hidden">
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/coffeshop/contact">
            Contact Us
            </NavLink>
            </li>
            </div>
          </div>
          <div className="margin-tab">
            <h4 className="footer-mergin overflow-y-hidden">Follow us</h4>
            <div className="mt-lg-4">
            <Link to="https://web.facebook.com/profile.php?id=100015131225530" className="d-flex text-decoration-none">
            <i class="fa-brands fa-facebook footer-icon"></i>
            <span className="social-media">
            Facebook : Ridoy Mondol
            </span>
            </Link>
            <Link to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/" className="d-flex text-decoration-none">
            <i class="fa-brands fa-linkedin footer-icon"></i>
            <span className="social-media">
            LinkedIn : Md.Ridoy Mondol
            </span>
            </Link>
            <Link to="https://web.facebook.com/profile.php?id=100015131225530" className="d-flex text-decoration-none">
            <i class="fa-brands fa-instagram footer-icon"></i>
            <span className="social-media">
            Instagram : Ridoy 4006
            </span>
            </Link>
            </div>
          </div>
          <div className="margin-tab">
            <h4 className="footer-mergin overflow-y-hidden">Contact Us</h4>
            <div className="mt-lg-4">
            <Link to="https://web.facebook.com/profile.php?id=100015131225530" className="d-flex text-decoration-none very-small">
            <i class="fa-solid fa-location-dot footer-icon footer-icon-2"></i>
            <span className="social-media">
            Address : <span className = "footer-persional-info">Rajshahi,Bangladesh</span>
            </span>
            </Link>
            <Link to="https://www.linkedin.com/feed/" className="d-flex text-decoration-none very-small">
            <i class="fa-brands fa-whatsapp footer-icon footer-icon-2"></i>
            <span className="social-media">
            What's App : <span className = "footer-persional-info">+8801319118383</span>
            </span>
            </Link>
            <Link to="https://web.facebook.com/profile.php?id=100015131225530" className="d-flex text-decoration-none very-small">
            <i class="fa-solid fa-envelope footer-icon footer-icon-2"></i>
            <span className="social-media">
            Email : <span className = "footer-persional-info">ridoymondol140@gmail.com</span>
            </span>
            </Link>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Footer1;