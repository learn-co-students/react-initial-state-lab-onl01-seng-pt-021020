// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
    //Its initial state should have a property called currentSlideIndex that starts at 0.
  }

  render() {
    return (
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
      //It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
    )
  }
}

export default ImageSlider;
