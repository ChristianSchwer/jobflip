import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <p>
                        Jobflip comming soon...
                    </p>
                    <div className='social-icons'>
                        <Link className='social-icon-link instagram'
                            to={'//www.instagram.com/schwer_christian/'}
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link github'
                            to={'//github.com/ChristianSchwer'}
                            target='_blank'
                            aria-label='Github'
                        >
                            <i className='fab fa-github'></i>
                        </Link>
                    </div>
                </header>
            </div>
            
        );
    }

}

export default Home;