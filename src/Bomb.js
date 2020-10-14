// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
    //The initial state of Bomb should have a property called secondsLeft.
    //The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return (
      <div>{message}</div>
    )
  }
}
export default Bomb;
