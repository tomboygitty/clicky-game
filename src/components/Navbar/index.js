import React from 'react';
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar nav navbar-static-top">
            <div>
                <li className="navbar-left">Click an image to begin!</li>
            </div>
            <div>
                <li className="navbar-center">{(props.success === null) ? '' : props.success ? 'You guessed correctly!' : 'You guessed incorrectly!'}</li>
            </div>
            <div>
                <li className="navbar-right">Score: {props.currentScore} | Top Score: {props.topScore}</li>
            </div>
        </nav>
    )
}

export default Navbar;