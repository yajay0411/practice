import React, { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import styles from './Carousel.module.css';

export const CarouselIndicators: React.FC = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('CarouselIndicators must be used within Carousel');
  return (
    <div className={styles['carousel-indicators']} role="tablist">
      {Array.from({ length: context.slideCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => context.setActiveIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-selected={context.activeIndex === i}
          className={context.activeIndex === i ? styles.active : ''}
          role="tab"
        >
          ●
        </button>
      ))}
    </div>
  );
};
