import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const remainingTimeMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <h1>
                {remainingTimeMessage}
            </h1>
        )
    }
}
