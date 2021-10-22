import React from 'react';
import Logo from '../Logo.png';

function Job () {
    return (
        <div className="jobs-item">
            <img src={Logo} alt="job"></img>
            <p className="item-title">Schnee schaufeln</p>
            <p className="item-description">5 m² schaufeln - Einfahrt</p>
            <p className="item-price">10€</p>
        </div>
    )
}

export default Job;