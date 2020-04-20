import React, { Component } from 'react';
import Frame from '../banner-radium/Frame';
import Carousel from '../banner-radium/Carousel';
// import CarouselControl from '../banner-radium/CarouselControl';
import SlideDescription from '../banner-radium/SlideDescription';
import imageSlide1 from '../../images/1.jpg';
import { Style } from 'radium';
import configStyles from '../banner-radium/style/config-style.js';
import styles from '../banner-radium/style/app-style.js';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Frame>
        <Style rules={styles} />
        <Carousel
          title='tes 1'
          width={configStyles.imageWidth}
        />
        <SlideDescription
          image={imageSlide1}
          title='Star wars lego'
        >
          Everything in Judah&lsquo;s imaginary world revolves around Star
          Wars: The Clone Wars these days. Between Wii Lightsaber Duels to the
          Star Wars Lego set that took he and Micheal three hours to assemble.
        </SlideDescription>
      </Frame>
    )
  }
}

export default Main
