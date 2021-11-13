import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <img src={Logo} className='app-logo' alt='logo'/>
                        </Link>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to='/Alljobs' className='nav-links' onClick={closeMobileMenu}>
                            Job Suchen
                        </Link>
                        <Link to='/Jobinsert' className='nav-links' onClick={closeMobileMenu}>
                            Job erstellen
                        </Link>
                        {/* <Link className='nav-links instagram'
                        to={'//www.instagram.com/schwer_christian/'}
                        target='_blank'
                        aria-label='Instagram'
                        onClick={closeMobileMenu}
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='nav-links github'
                        to={'//github.com/ChristianSchwer'}
                        target='_blank'
                        aria-label='Github'
                        onClick={closeMobileMenu}
                        >
                            <i className='fab fa-github'></i>
                        </Link> */}
                        <Link className='nav-links Account'
                            to={'/Account'}
                            onClick={closeMobileMenu}
                            >Sign in
                                <i className="far fa-user-circle"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar