import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Test.css';

const Test = () => {
  const [count, setCount] = useState(0);
  const targetsRef = useRef([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const targets = targetsRef.current;
    gsap.set(targets, { xPercent: 100 });
    gsap.set(targets[0], { xPercent: 0 });

    const slideOneNext = () => {
      gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { duration: 1.2, xPercent: -100, zIndex: -10 });
      const nextCount = count < targets.length - 1 ? count + 1 : 0;
      gsap.fromTo(targets[nextCount], { xPercent: 100, zIndex: 10 }, { duration: 1.2, xPercent: 0, zIndex: 0 });
      setCount(nextCount);
    };

    const slideOnePrev = () => {
      gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { duration: 1.2, xPercent: 100, zIndex: -10 });
      const prevCount = count > 0 ? count - 1 : targets.length - 1;
      gsap.fromTo(targets[prevCount], { xPercent: -100, zIndex: 10 }, { duration: 1.2, xPercent: 0, zIndex: 0 });
      setCount(prevCount);
    };

    nextButtonRef.current.addEventListener('click', slideOneNext);
    prevButtonRef.current.addEventListener('click', slideOnePrev);

    return () => {
      nextButtonRef.current.removeEventListener('click', slideOneNext);
      prevButtonRef.current.removeEventListener('click', slideOnePrev);
    };
  }, [count]);

  return (
    <div>
      <div className="box-container">
        <div className="box" ref={(el) => (targetsRef.current[0] = el)}>SLIDE-01</div>
        <div className="box" ref={(el) => (targetsRef.current[1] = el)}>SLIDE-02</div>
        <div className="box" ref={(el) => (targetsRef.current[2] = el)}>SLIDE-03</div>
        <div className="box" ref={(el) => (targetsRef.current[3] = el)}>SLIDE-04</div>
      </div>

      <div className="controls">
        <button ref={prevButtonRef} id="prevButton">Prev</button>
        <button ref={nextButtonRef} id="nextButton">Next</button>
      </div>
    </div>
  );
};

export default Test;
