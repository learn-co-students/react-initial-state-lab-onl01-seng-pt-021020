// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countdown = () => {
        setTimeout(() => {
            {this.state.secondsLeft} - 1
        }, 1000)
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return (
                <div>Boom!</div>
            )
        } else {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
    }
}