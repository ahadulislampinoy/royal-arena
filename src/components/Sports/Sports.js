import React from 'react';
import './Sports.css';

const Sports = (props) => {
    const{img,name,time}=props.sport
    return (
      <div className='sport'>
      <img src={img} alt="" />
      <div className='sport-info'>
          <h3 className='sport-name'>{name}</h3>
          <p className='sport-time'>Time required: {time}hr</p>
          <div className='btn-container'>
          <button className='btn-add'>Add to list</button>
          </div>
      </div>
      </div>
    );
};

export default Sports;