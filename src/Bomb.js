// your Bomb code here!
// your ImageSlider code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const timer = this.state.secondsLeft;
    return(
      <div>
      {timer===0 ? 'Boom!' : `${timer} seconds left before I go boom!`}</div>
        )
      }
}

export default Bomb;
