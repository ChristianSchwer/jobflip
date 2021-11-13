import React from 'react';
import Job from '../Job';
import './Alljobs.css';

function Alljobs() {
    return (
        <div>
            <div className="filter">
                <input placeholder="Job suche" className="filter-search"></input>
                <select className="filter-category">
                    <option>Kategorie 1</option>
                    <option>Kategorie 2</option>
                    <option>Garten</option>
                    <option>Wohnung</option>
                </select>
                <input placeholder="Entfernung" className="filter-radius"></input>
                <input placeholder="Lohn" className="filter-salary"></input>
                <select className="filter-priority">
                    <option>Neuste Jobs zuerst</option>
                    <option>In meiner Nähe zuerst</option>
                    <option>Lohn absteigend</option>
                    <option>Lohn aufsteigend</option>
                </select>
            </div>
            <div className="joblist">
                <Job jobdata={{title: 'Schnee schaufeln', desc: '5 m² schaufeln - Einfahrt'}} />
                <Job jobdata={{title: 'Blumen umtopfen', desc: 'Blumen umtopfen da ich nicht dreckig werden will.'}} />
                <Job jobdata={{title: 'Spielplatz gehen', desc: 'Mit Kindern am Spielpaltz spielen'}} />
                <Job jobdata={{title: 'Werkstatt reinigen', desc: 'Werkstatt heraus kehren'}} />
                <Job jobdata={{title: 'Koch unterstützung', desc: 'Einkaufen für Mittagessen'}} />
                <Job jobdata={{title: 'Wohnung reinigen', desc: 'Wohnung saugen'}} />
                <Job jobdata={{title: 'Schnee schaufeln', desc: '5 m² schaufeln - Einfahrt'}} />
                <Job jobdata={{title: 'Garten schaufeln'}} />
                <Job jobdata={{title: 'Garten arbeit'}} />
                <Job jobdata={{title: 'Wohnung schaufeln'}} />
                <Job jobdata={{title: 'Auto waschen'}} />
                <Job jobdata={{title: 'Gasi gehen'}} />
                <Job jobdata={{title: 'Katze streicheln'}} />
                <Job jobdata={{title: 'Fische streicheln'}} />
                <Job jobdata={{title: 'Ball spielen'}} />
                <Job jobdata={{title: 'Babysitten'}} />
            </div>
        </div>
    )
}

export default Alljobs;