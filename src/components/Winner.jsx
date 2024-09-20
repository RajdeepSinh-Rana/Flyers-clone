import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import '../Css/Winner.css'
const Winner = () => {
    const textRef = useRef(null);
    const scrollAnimation = useRef(null);
  
    useEffect(() => {
      const scrollingText = textRef.current;
      const distance = scrollingText.offsetWidth / 2;
  
      
  
      scrollAnimation.current = gsap.fromTo(
        scrollingText,
        { x: 0 },
        {
          x: -distance,
          duration: 8, 
          ease: 'linear',
          repeat: -1,
          onRepeat: () => {
            gsap.set(scrollingText, { x: 0 });
          },
        }
      );
    }, []);
  
    const handleMouseEnter = () => {
      scrollAnimation.current.pause();
    };
  
    const handleMouseLeave = () => {
      scrollAnimation.current.play();
    };
  
  return (
    <div>
        <div className="  Winnerbox">

<div
  className="scrolling"
  ref={textRef}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  >
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-09.png?v=1712859568&width=500" alt="Flyer 1" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-10.png?v=1712859568&width=500" alt="Flyer 2" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-14.png?v=1712859568&width=500" alt="Flyer 3" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-11.png?v=1712859568&width=500" alt="Flyer 4" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-15.png?v=1712859568&width=500" alt="Flyer 5" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-12.png?v=1712859568&width=500" alt="Flyer 6" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards.png?v=1712859747&width=500" alt="Flyer 7" />
  </span>
  <span className="img-wrapper-box">
    <img className="imgsizebox" src="https://drinkflyers.com/cdn/shop/files/flyers_website_awards-13.png?v=1712859568&width=500" alt="Flyer 8" />
  </span>
    </div>
</div>
    </div>
  )
}

export default Winner