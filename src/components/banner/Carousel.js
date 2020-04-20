import React from 'react';
import styles from './style/carousel-style.css.js'


function renderSlides(props) {
  return React.Children.map(props.children, (slide, i) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    });
  });
}

function Carousel(props) {
  return (
    <div style={styles.root}>
      {renderSlides(props)}
      {props.control}
    </div>
  )
}

export default Carousel;
