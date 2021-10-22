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
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={Logo} className='app-logo' alt='logo'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Alljobs' className='nav-links' onClick={closeMobileMenu}>
                                Job Suchen
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Jobinsert' className='nav-links' onClick={closeMobileMenu}>
                                Job erstellen
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links instagram'
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
                            </Link>
                            <Link className='nav-links Account'
                            to={'/Account'}
                            onClick={closeMobileMenu}
                            >Account
                                {/* <i className='fab fa-acc'></i> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar