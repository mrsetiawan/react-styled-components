import React, { Component } from 'react'
import Frame from './Frame';
import Carousel from './Carousel';
import SlideDescription from './SlideDescription';
import configStyles from './style/config-style.js';
import CarouselControl from './CarouselControl.js';
import imageSlide1 from '../../images/1.jpg';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ''
    }
  }

  render() {
    return (
      <Frame>
        <Carousel
          width={configStyles.root}
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
