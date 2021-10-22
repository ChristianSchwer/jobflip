import React from 'react';
import Job from '../Job';
import './Alljobs.css';

function Alljobs() {
    return (
        <div>
            <div className="filter">
                <input placeholder="Job suche"></input>
                <input placeholder="Entfernung"></input>
                <input placeholder="Lohn"></input>
                <select>
                    <option>Neuste Jobs zuerst</option>
                    <option>In meiner Nähe zuerst</option>
                    <option>Lohn absteigend</option>
                    <option>Lohn aufsteigend</option>
                </select>
            </div>
            <div className="joblist">
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    )
}

export default Alljobs;