import React from 'react';
import myImg from '../../images/myself.jpg';
import './AsideCalculation.css';

const AsideCalculation = () => {
    return (
        <div className='everything'>
            <div className="my-info">
            <img src={myImg} alt="" />
            <h4>Ahadul Islam Pinoy</h4>
            </div>
            <div className="my-info-details">
                    <h3>65<small className='small-text'>kg</small></h3>
                    <h3>5'10"</h3>
                    <h3>18<small className='small-text'>yrs</small></h3>
            </div>
            <h3>Add A Break</h3>
            <div className='break-second'>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            </div>
            <div className="exercise-details">
            <h2>Exercise Details</h2>
            <h3>Exercise time <p>0</p></h3>
            <h3>Break time <p>0</p></h3>
            </div>
        </div>
    );
};

export default AsideCalculation;