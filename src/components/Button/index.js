import React from 'react';
import './style.css';

function Button(props) {
        return (
            <img alt={props.name} src={props.src}/>
        )
}

export default Button;