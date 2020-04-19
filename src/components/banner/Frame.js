import React from 'react';
import styles from './style/frame-style.css.js';

function Frame(props) {
  return (
    <div style={styles.root}>
      {props.children}
    </div>
  )
}

export default Frame;
