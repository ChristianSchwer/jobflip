import React from 'react';
import Logo from '../../Logo.png';

function Account () {
    return (
        <div className="jobs-item">
            <img src={Logo} alt="job"></img>
            <p className="item-title">Hallo User</p>
            <p className="item-description">option1</p>
            <p className="item-price">option2</p>
        </div>
    )
}

export default Account;