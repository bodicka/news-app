import React, { useRef } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactElement;
  step?: number | undefined;
}

const Slider = ({ children, step = 250 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
    sliderRef.current.style.scrollBehavior = 'smooth';
  }

  const scrollRight = () => {
    if (!sliderRef.current) return;
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