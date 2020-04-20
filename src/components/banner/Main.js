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
      showIndex: 0,
      numSlide: 5
    }
  }

  onPrevious = () => {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    })
  }

  onNext = () => {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    });
  }

  controlButton = () => {
    return (
       <CarouselControl
        prev={this.onPrevious}
        next={this.onNext}
        hasPrev={this.onPrevious}
        hasNext={this.state.showIndex < this.state.numSlide -1}
      />
    )
  }

  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          width={configStyles.imageWidth}
          control={this.controlButton()}
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
