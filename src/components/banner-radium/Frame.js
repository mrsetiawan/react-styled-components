import React from 'react';
import Radium from 'radium';
import styles from '../banner-radium/style/frame-style.js';

export default Radium(function Frame(props) {
  return (
    <div style={styles.root}>
      {props.children}
    </div>
  )
})

