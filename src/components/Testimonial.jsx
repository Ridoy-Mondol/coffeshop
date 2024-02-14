import { useState, useEffect } from "react";
import img from "../components/images/quick-icon.png";
import { AnimatePresence, motion } from "framer-motion";
const variants = {
    initial : direction => {
        return {
            x : direction > 0 ? "140%" : "-140%",
            opacity : 0,
        }   
    },
    animate : {
        x : 0,
        opacity : 1,
        transition : {
            x : {
            type : "spring",
            stiffness : 150,
            damping : 30,
            },
            opacity : {
                duration : 0.2
            },
        }
    },
    exit : direction => {
        return {
            x : direction > 0 ? "-140%" : "140%",
            opacity : 1,
            transition : {
                x : {
                type : "spring",
                stiffness : 150,
                damping : 30,
                },
                opacity : {
                    duration : 0.2
                },
            }
        }
        
    }
}
const User = [
    {
        id : 1,
        name : "Daniel",
        review : "Absolutely love the cozy ambiance and the aromatic blend of coffee at this café! It's become my go-to spot for,catching up with friends or just enjoying some 'me time'. The staff is friendly, and the quality of service is top-notch. Highly recommend their specialty brews!"
    },
    {
        id : 2,
        name : "Olivia",
        review : "What a gem! The latte I had here was hands down the best I've tasted. The attention to detail in their coffee is remarkable. The atmosphere is inviting, making it a perfect spot for a productive work session. I can't wait to try more items from their menu!"
        
    },
    {
        id : 3,
        name : "David",
        review : "This café exceeded my expectations! The latte design was shareable, and the pastries were divine. The staff was knowledgeable about their offerings and helped me find the perfect blend to suit my taste. A definite must-visitfor coffee enthusiasts!"
    },
]
const Testimonial = () => {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [btn1Active, setBtn1Active] = useState (false);
    const [btn2Active, setBtn2Active] = useState (false);
    const increment = () => {
        if (!isTransitioning) {
        setBtn1Active (false);
        setBtn2Active (true);
        setDirection(1);
        setIsTransitioning ( true );
        if (count < User.length -1) {
            setCount(count + 1);
        }
        else if (count >= User.length -1){
            setCount((count + 1) % 3);
            // setCount (0);
            // here both are correct.as the first one looks very cool to me so i keep it
        }
        setTimeout ( () => {
            setIsTransitioning ( false );
        },1000)
    };
    };
    // useEffect( () => {
    //     const interval = setInterval ( () => {
    //         increment();
    //     },5000);
    //     return () => clearInterval(interval);
    // },[count, isTransitioning]);
    const decrement = () => {
        if(!isTransitioning) {
        setBtn1Active (true);
        setBtn2Active (false);
        setDirection(-1);
        setIsTransitioning ( true );
        if (count > 0) {
            setCount(count - 1);
        }
        else if (count <= 0){
            setCount(2);
        };
        setTimeout ( () => {
            setIsTransitioning ( false );
        },1000);
    };   
    };
    useEffect( () => {
        const interval = setInterval ( () => {
            if ( isTransitioning === false) {
            increment();
            }
        },5000);
        return () => clearInterval(interval);
    },[count, isTransitioning]);
    return (
        <>
         <div className="testimonial-div position-relative">
            <div className="testimoni-text">
            <h1 className="testimoni-heading big-heading overflow-y-hidden">Testimonial</h1>
            <span className="testimoni-desc">Throughout our journey, clients have shared their thoughts on our service.<br/> Here are a few experiences</span>
            </div>
            <AnimatePresence initial={direction} custom={direction}>
            <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={count}
            custom={direction}
            className="review-div">
            <div className="margin"></div>
            <div className="review-margin"></div>
                <div className="review-inner">
                <h3 className="testimoni-heading overflow-y-hidden">{User[count].name}</h3>
                <img src = {img} alt="" className="img-fluid" width="22"/>
                </div>
                <div className="user-review">
                <span className="review">{User[count].review}</span>
                </div>
            </motion.div>
            </AnimatePresence>
            <div className="d-flex testimoni-button">
            <div className={`testimoni-button-1 slide-btn ${btn1Active ? "active-btn" : ""}`} onClick={decrement}></div>
            <div className={`testimoni-button-2 slide-btn ${btn2Active ? "active-btn" : ""}`} onClick={increment}></div>
            </div>
         </div>
        </>
    )
}
export default Testimonial;