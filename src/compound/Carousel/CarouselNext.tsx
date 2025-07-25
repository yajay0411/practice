import React, { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import styles from './Carousel.module.css';

export const CarouselNext: React.FC = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('CarouselNext must be used within Carousel');
  return (
    <button onClick={context.next} aria-label="Next slide" className={styles['carousel-next']}>
      ▶
    </button>
  );
};
