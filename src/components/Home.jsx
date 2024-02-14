import About from "./About";
import Gallery from "./Gallery";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import img from "../components/images/banner-bg.png";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const variants = {
  initial : direction => {
    return {
      x : direction > 0 ? "100vw" : "-100vw",
      opacity : 0,
    }
  }, 
  animate : {
    x : 0,
    opacity : 1,
    transition : {
      x : {
        type : "spring",
        stiffness : 140,
        damping : 30,
      },
      opacity : {
        duration : 0.2
      }
    }
  },
  exit : direction => {
    return {
      x : direction > 0 ? "-100vw" : "100vw",
      opacity : 1,
      transition : {
        x : {
          type : "spring",
          stiffness : 140,
          damping : 30,
        },
        opacity : {
          duration : 0.2
        }
      }
    }
  }, 
}
const Home = (props) => { 
  const { data } = props;
 const [show, setShow] = useState (false);
 const [count, setCount] = useState (0);
 const [direction, setDirection] = useState (1);
 const [isTransitioning, setIsTransitioning] = useState(false);
 const [btn1Active, setBtn1Active] = useState (false);
const [btn2Active, setBtn2Active] = useState (false);
 const showText = () => {
    setShow (!show);
 }
//  const increase = () => {
//   setDirection (1);
//   if(count>=0 &&count<2){
//     setCount (count + 1);
//    }
//    else {
//     setCount (0);
//    }
//  }
 const increase = () => {
  if (!isTransitioning) {
    setBtn1Active (false);
    setBtn2Active (true);
    setDirection(1);
    setIsTransitioning(true);
    if(count>=0 &&count<2){
      setCount (count + 1);
     }
     else {
      setCount (0);
     }
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); 
  };
};
const decrease = () => {
  if(!isTransitioning) {
    setBtn1Active (true);
    setBtn2Active (false);
    setDirection (-1);
    setIsTransitioning (true);
    if (count > 0) {
      setCount(count - 1);
  }
  else if (count <= 0){
      setCount(2);
  }
  setTimeout ( () => {
    setIsTransitioning(false);
  },1000);   
  };
};
//  const decrease = () => {
//   setDirection (-1);
//   setCount ( (prevCount) => {
//     if(prevCount > 0){
//         //  setCount (count - 1);
//         return (prevCount - 1);
//        }
//       else {
//        return 2;
//       }
//   });
//  };
 useEffect ( () => {
  const interval = setInterval (() => {
      if (isTransitioning === false) {
        increase ();
      }
  },5000);
  return () => clearInterval (interval);
},[count, isTransitioning]);
 const currentItem = data.find(item => item.id === count + 1);
    return (
        <>
          <div className="position-relative home-div">
            <img src = {img} alt="banner" className="img-fluid home-img" width="100%"/>
            <AnimatePresence custom={direction}>
            <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={count}
            custom={direction}
            className= "home-text"
            >
                <span className="black-para">
                {currentItem ? currentItem[`complement${count + 1}`] : ""}
                  </span>
                <span className="white-para">
                {currentItem ? currentItem[`heading${count + 1}`] : ""}
                  </span>
                <span className="home-desc">Welcome to our cozy corner! Dive into a world of rich aromas and delightful flavors. Explore our artisanal blends crafted with love,<span className={show ? "more" : "show-less"}>all served in a warm and inviting atmosphere</span><br/></span>
                <button type="button" className="home-btn" onClick={showText}>LEARN MORE</button>
            </motion.div>
            </AnimatePresence>
            <div className="carousel-btn">
            <i class={`fa-solid fa-angle-left slide-btn ${btn1Active ? 'active-btn' : ""}`} onClick = {decrease}></i>
            <i class={`fa-solid fa-angle-right slide-btn ${btn2Active ? 'active-btn' : ""}`} onClick = {increase}></i>
            </div>
          </div>
          <About />
          <Gallery />
          <Service />
          <Testimonial />
          <Contact />
        </>
    )
}
export default Home;