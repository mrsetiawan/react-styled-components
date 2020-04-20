import React from 'react';
import Radium from 'radium';
import styles from '../banner-radium/style/slide-style.js';

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

export default Radium(SlideDescription);
