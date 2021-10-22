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
                    <div className="job get">
                        <button className="job-button">
                            <Link to='/Alljobs' className='nav-links'>
                                JOB ANNEHMEN
                            </Link>
                        </button>
                    </div>
                    <div className="job set">
                        <button className="job-button">
                            <Link to='/Jobinsert' className='nav-links'>
                                JOB INSERIEREN
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="jobs">
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                </div>
            </div>            
        );
    }

}

export default Home;