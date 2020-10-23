import React, {Component} from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {
        const timer = this.state.secondsLeft !== 0 ? "120 seconds left before I go boom!"  : "Boom!"
        return (
        <div>{timer}</div>
        )
    }
}