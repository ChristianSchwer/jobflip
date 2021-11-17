import React, { useState } from 'react';
import './Jobmodal.css';
// import Job from './Job.js';
import Kitten from '../../images/kitten.jpg';
import City from '../../images/city.jpg';
import Garden from '../../images/garden.jpg';
import OpelGT from '../../images/opel-gt.jpg';
import Playground from '../../images/playground.jpg';

function Jobmodal (data) {
    const [current, setCurrent] = useState(0);

    const SliderData = [
        {
            image: Kitten,
        },
        {
            image: City,
        },
        {
            image: Garden,
        },
        {
            image: OpelGT,
        },
        {
            image: Playground,
        }
    ]

    const length = SliderData.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div id="myModal" className="modal" style={{display: data.data.show}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.close()}}>&times;</span>
                <div className="modal-content-layout">
                    <div className="image-content">
                        <section className="slider">
                            <i className="fas fa-arrow-circle-left left-arrow" onClick={prevSlide}></i>
                            <i className="fas fa-arrow-circle-right right-arrow" onClick={nextSlide}></i>
                            {SliderData.map((slide, index) => {
                                return (
                                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                        {index === current && (
                                            <img src={slide.image} alt="job" className='image' />
                                        )}
                                    </div>
                                )
                            })}
                        </section>
                        <div className='image-prev'>
                            {SliderData.map((slide, index) => {
                                return (
                                    <img src={slide.image} alt="job" className={index === current ? 'image-active' : 'image-inactive'} key={index} onClick={() => {setCurrent(index)}}/>
                                )
                            })} 
                        </div>
                    </div>
                    <div>
                        <p>{data.data.title}</p>
                        <p>{data.data.desc}</p>
                        <p>{'Arbeitgeber'}</p>
                        <p>{'Einstell-Datum'}</p>
                        <p>{'Ort'}</p>
                        <p>{'Wann'}</p>
                        <p>{'Wie (Beschreibung'}</p>
                    </div>
                </div>
                <p style={{'textAlign':'left'}}>Weitere Jobs in dieser Kategorie:</p>
            </div>
                {/* <div className="jobs">
                    <Job jobdata={{title: 'Blumen umtopfen', desc: 'Blumen umtopfen da ich nicht dreckig werden will.'}} />
                    <Job jobdata={{title: 'Spielplatz gehen', desc: 'Mit Kindern am Spielpaltz spielen'}} />
                    <Job jobdata={{title: 'Werkstatt reinigen', desc: 'Werkstatt heraus kehren'}} />
                    <Job jobdata={{title: 'Koch unterstützung', desc: 'Einkaufen für Mittagessen'}} />
                    <Job jobdata={{title: 'Schnee schaufeln', desc: '5 m² schaufeln - Einfahrt'}} />
                    <Job jobdata={{title: 'Wohnung reinigen', desc: 'Wohnung saugen'}} />
                    <Job />
                    <Job />
                    <Job />
                    <Job />
                </div> */}
        </div>
    )
}

export default Jobmodal;