import React from 'react';
import Logo from '../../Logo.png';

function Jobinsert () {
    return (
        <div className="jobs-item">
            <img src='' alt="Drop Picture here" style={{height: '100px', border: '1px solid black'}}></img>
            <input placeholder="Titel"></input>
            <input placeholder="Description"></input>
            <input placeholder="Price"></input>
        </div>
    )
}

export default Jobinsert;