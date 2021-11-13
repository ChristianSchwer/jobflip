import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Job from '../Job.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <p>Jobs annehmen oder</p>
                    <p>Jobs online stellen</p>
                    <p>Jobflip comming soon...</p>
                </div>
                <div className="choose">
                    <Link to='/Alljobs' className='choose-links'>
                        JOB ANNEHMEN
                    </Link>
                    <Link to='/Jobinsert' className='choose-links'>
                        JOB INSERIEREN
                    </Link>
                </div>
                <div>
                        <p>Sieh dir die neusten Jobs an</p>
                    <div className="jobs">
                        <Job jobdata={{title: 'Blumen umtopfen', desc: 'Blumen umtopfen da ich nicht dreckig werden will.'}} />
                        <Job jobdata={{title: 'Spielplatz gehen', desc: 'Mit Kindern am Spielpaltz spielen'}} />
                        <Job jobdata={{title: 'Werkstatt reinigen', desc: 'Werkstatt heraus kehren'}} />
                        <Job jobdata={{title: 'Koch unterstützung', desc: 'Einkaufen für Mittagessen'}} />
                        <Job jobdata={{title: 'Schnee schaufeln', desc: '5 m² schaufeln - Einfahrt'}} />
                        <Job jobdata={{title: 'Wohnung reinigen', desc: 'Wohnung saugen'}} />
                        {/* <Job />
                        <Job />
                        <Job />
                        <Job /> */}
                    </div>
                </div>
            </div>            
        );
    }

}

export default Home;