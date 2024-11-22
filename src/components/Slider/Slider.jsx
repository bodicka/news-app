import React, { useRef } from "react";
import styles from "./styles.module.css";

const Slider = ({ children, step = 250 }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
    sliderRef.current.style.scrollBehavior = 'smooth';
  }

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step
    sliderRef.current.style.scrollBehavior = 'smooth';
  }


  return (
    <div className={styles.sliders}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
        {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  )
}

export default Slider