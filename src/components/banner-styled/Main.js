import React from 'react';
import Frame from './Frame';
import Carousel from './Carousel';
import Slide from './Slide';
import myImage from '../../images/1.jpg';
import configStyles from './style/config-style.js';

function Main(props) {
  return (
    <Frame>
      <Carousel
        width={configStyles.imageWidth}
      />
      <Slide
        image={myImage}
        title='Star wars lego'
      >
        Everything in Judah&lsquo;s imaginary world revolves around Star
        Wars: The Clone Wars these days. Between Wii Lightsaber Duels to the
        Star Wars Lego set that took he and Micheal three hours to assemble.
      </Slide>
    </Frame>
  )
}

export default Main;
