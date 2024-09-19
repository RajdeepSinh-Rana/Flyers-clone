import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Css/ScrollingText.css";


const ScrollingText = () => {
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
        duration: 15, 
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
    <>
        <div className="Maincontainer">

      <div
        className="scrollingtext"
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-11.png?v=1712844068&" alt="Flyer 1" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-12.png?v=1712844069&width=500" alt="Flyer 2" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-13.png?v=1712844069&width=500" alt="Flyer 3" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-14.png?v=1712844069&width=500" alt="Flyer 4" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_website_assets_Recovered.png?v=1716991430&width=500" alt="Flyer 5" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-11.png?v=1712844068&" alt="Flyer 1" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-12.png?v=1712844069&width=500" alt="Flyer 2" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-13.png?v=1712844069&width=500" alt="Flyer 3" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-14.png?v=1712844069&width=500" alt="Flyer 4" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_website_assets_Recovered.png?v=1716991430&width=500" alt="Flyer 5" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-11.png?v=1712844068&" alt="Flyer 1" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-12.png?v=1712844069&width=500" alt="Flyer 2" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-13.png?v=1712844069&width=500" alt="Flyer 3" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_logobank-14.png?v=1712844069&width=500" alt="Flyer 4" />
        </span>
        <span className="img-wrapper">
          <img className="imgsize" src="https://drinkflyers.com/cdn/shop/files/flyers_website_assets_Recovered.png?v=1716991430&width=500" alt="Flyer 5" />
        </span>
          </div>
          
      </div>
          <div className="sloganBox">
            <div className="slogan">

            <h4>"Taste(s) like an alcohol-free version of your favorite cocktail-

...feel more comfortable and relaxed from head to toe. The best of both worlds. ”

 - ROLLING STONE
</h4>
            </div>
          </div>
          <div className="spbox">
                <div className="sptextbox">
                <h3>The flowery citrus of Japanese Yuzu with the smooth sweetness of Orange and a hint of chili heat.  </h3>
                <button>The Spicy Marg' Reimagined</button>
                </div>
                <div className="spimgbox">

                </div>
          </div>
            

        
    </>
  );
};

export default ScrollingText;
