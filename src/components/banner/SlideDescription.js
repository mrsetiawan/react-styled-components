import React from 'react';
import styles from './style/slide.style.css.js';

function SlideDescription(props) {
  return (
    <article style={styles.root}>
      <img src={props.image} alt={props.title} />
      <footer style={styles.footer}>
        <h2 style={styles.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

export default SlideDescription;
