import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    handleTimer = () => {
        if (this.props.initialCount < 0) {
            setTimeout(() => {
                this.setState({ 
                    secondsLeft: (this.props.initialCount - 1)
                })
            }, 1000)
            return this.state.secondsLeft
        }
        else {
            const div = document.querySelector('.seconds-left')
            div.innerText = "Boom!"
        }
    }

    render() {
        const timer = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return(
            <div>{timer}</div>
        )
    }
}