import React from 'react';
import './style.css';

function Button(props) {
    return (
        <img onClick={props.handler} alt={props.name} src={props.src} id={props.id}/>
    )
}

export default Button;