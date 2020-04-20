import React from 'react';
import styles from './style/carousel-control.css.js';

function CarouselControl(props) {
  return (
    <div style={styles.root}>
      <button style={styles.prev}>&#10094;</button>
      <button style={styles.next}>&#10095;</button>
    </div>
  )
}

export default CarouselControl;
