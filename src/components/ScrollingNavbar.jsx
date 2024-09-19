import React, { useEffect,useRef } from 'react'
import { gsap } from 'gsap';
import '../Css/ScrollingNavbar.css'
const ScrollingNavbar = () => {
    const textRef = useRef(null);
  const scrollAnimation = useRef(null); 

    useEffect(() => {
        gsap.to('.rotate', {
          rotation: 360,
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        });
    
        const scrollingText = textRef.current;
        const distance = scrollingText.offsetWidth / 2;
    
      
        scrollAnimation.current = gsap.fromTo(
          scrollingText,
          { x: 0 },
          {
            x: -distance,
            duration: 70,
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
      <div className='scrollbox'> 

          <div
        className="scrolling-text"
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
        <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
         <span>FREE SHIPPING on orders $35+ </span>
        <span>
          <svg className="rotate" viewBox="0 0 200 200">
            <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" />
          </svg>
        </span>
      </div>
    </div>
      
        </div>
  )
}

export default ScrollingNavbar