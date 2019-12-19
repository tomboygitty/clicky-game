import React, {Component} from 'react';
import "./style.css";

export default class Grid extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">
                    JoJo's Bizarre Clicky-Game
                </h1>
                <h3 className="text-center">
                    Click on an image to earn points, but don't click on any more than once!
                </h3>
            </div>
        )
    }
}