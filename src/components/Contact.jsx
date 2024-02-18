import {useState} from "react";
import img from "../components/images/img-9.png";
const Contact = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
    })
    const userData = (event) => {
        const {name,value} = event.target;
    
    setData((prev) => {
        return( 
        {
            ...prev,
           [name] : value,
        }
        )
    })
}

const getData = (elem) => {
    elem.preventDefault();

    if(data.name === "" || data.phone === "" || data.email === "" || data.message === "") {
        alert ("Please fill all the fields");
    }
    else {
    alert(`Thank you for contacting us.
Your name is ${data.name},Your phone no. is ${data.phone}, Your email is  ${data.email},Your message is ${data.message},`);

    setData ({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
    })
}
}
    return (
        <div className="contact-div">
        <div className="container-fluid">
        <h1 className="text-center contact-heading overflow-y-hidden">
        Contact Us
        </h1>
        <div className="row">
            <div className="col-md-6 position-relative">
                <img src = {img} alt="" className="img-fluid contact-img"/>
                <form method="POST" onSubmit={getData} className="outer-element">
                    <div>
                    <input autoComplete="off" type="text" placeholder="Name" name="name" value={data.name} onChange={userData} className="input-div" />
                    </div>
                    <div>
                    <input autoComplete="off" type="email" placeholder="Email Address" name="email" value={data.email} onChange={userData}  className="input-div mt-3" />
                    </div>
                    <div>
                    <input autoComplete="off" type="number" placeholder="Phone Number" name="phone" value={data.phone} onChange={userData}  className="input-div mt-3" />
                    </div>
                    <div>
                    <input autoComplete="off" type="text" placeholder="Your Message" name="message" value={data.message} onChange={userData} className="input-div input-msg mt-3" />
                    </div>
                    <div className="text-center">
                    <button className="contact-btn nav-btn mt-3">Send</button>
                    </div>
                </form>
            </div>

            <div className="col-md-6 contact-info">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8936553192584!2d90.38806817507252!3d23.751171388747228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1697781878722!5m2!1sen!2sbd" title="map" width="100%" height="503" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Contact;