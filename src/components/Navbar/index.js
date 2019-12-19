import React, {Component} from 'react';
import "./style.css";

export default class Grid extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="nav ">Click an image to begin!</li>
                    <li className="nav ">Score: 0 | Top Score: 0</li>
                </ul>
            </nav>
        )
    }
}