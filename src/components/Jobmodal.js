import React from 'react';
import './Jobmodal.css';
// import Job from './Job.js';

function Jobmodal (data) {
    return (
        <div id="myModal" className="modal" style={{display: data.data.show}}>
            <div className="modal-content">
                <span className="close" onClick={e => {data.data.close()}}>&times;</span>
                <div className="modal-content-layout">
                    <div>
                        <img src={data.data.img} alt="job"></img>
                    </div>
                    <div>
                        <p>{data.data.title}</p>
                        <p>{data.data.desc}</p>
                        <p>{'Arbeitgeber'}</p>
                        <p>{'Einstell-Datum'}</p>
                        <p>{'Ort'}</p>
                        <p>{'Wann'}</p>
                        <p>{'Wie (Beschreibung'}</p>
                        <p>Weitere Jobs in dieser Kategorie:</p>
                    </div>
                </div>
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