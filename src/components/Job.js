import { React, useState } from 'react';
import Logo from '../images/Logo.png';
import Jobmodal from './Jobmodal';

function Job (jobdata) {
    const [show, setShow] = useState('none');

    const showModal = () => {
        setShow('block');
    }
    
    const onClose = (e) => {
        setShow('none');
    }

    return (
        <div>
            <div className="jobs-item" onClick={e => {showModal();}}>
                <img src={Logo} alt="job"></img>
                <p className="item-title">{jobdata.jobdata.title}</p>
                <p className="item-description">{jobdata.jobdata.desc}</p>
                <p className="item-price">10€</p>
            </div>
            <Jobmodal data={{close: onClose, show: show, img: Logo, title: jobdata.jobdata.title, desc: jobdata.jobdata.desc}} />
        </div>
    )
}

export default Job;