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
                <div className="jobs">
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                    {/* <Job />
                    <Job />
                    <Job />
                    <Job /> */}
                </div>
            </div>            
        );
    }

}

export default Home;