import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Job from '../jobComponent/Job.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="headline">
                    <p>Jobs annehmen oder</p>
                    <p>Jobs online stellen</p>
                    <p>Jobflip comming soon...</p>
                </div>
                <div className="choose">
                    <Link to='/Alljobs' className='choose-links'>
                        <p className='choose-text'>JOB ANNEHMEN</p>
                    </Link>
                    <Link to='/Jobinsert' className='choose-links'>
                        <p className='choose-text'>JOB INSERIEREN</p>
                    </Link>
                </div>
                <div className="newest-jobs">
                    <div className='newest-jobs-headline'>
                        <p>Sieh dir die neusten Jobs an:</p>
                    </div>
                    <div className='jobs'>
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