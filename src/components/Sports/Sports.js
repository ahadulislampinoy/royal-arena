import React from 'react';
import './Sports.css';

const Sports = ({sport,getExerciseTime}) => {
    const{img,name,time}=sport
    return (
      <div className='sport'>
      <img src={img} alt="" />
      <div className='sport-info'>
          <h3 className='sport-name'>{name}</h3>
          <p className='sport-time'>Time required: {time}hr</p>
          <div className='btn-container'>
          <button className='btn-add' onClick={()=>getExerciseTime(time)}>Add to list</button>
          </div>
      </div>
      </div>
    );
};

export default Sports;