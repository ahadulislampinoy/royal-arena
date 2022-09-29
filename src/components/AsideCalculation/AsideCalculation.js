import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myImg from '../../images/myself.jpg';
import './AsideCalculation.css';

const AsideCalculation = (props) => {
    const {exerciseTime}=props
    const [breakTime,setBreakTime]=useState(0)
    
    // npm toast 
    const notify = () => toast('🏃‍♂️ Congratulation activity completed!', {
    position: "top-center",autoClose: 5000,});
    
    // get data from localStorage and set into breakTime
    useEffect(()=>{
        const getBreakTimeFromLS=localStorage.getItem('break-time')
         const parsebreakTime=JSON.parse(getBreakTimeFromLS)
        setBreakTime(parsebreakTime)
    },[])

    // set break time into ui and localStorage
    const addTimeIntoLS=(time)=>{
        setBreakTime(time)
        localStorage.setItem('break-time',time)}
        
    return (
        <div>
            <div className="my-info">
            <img src={myImg} alt="" />
            <h4>Ahadul Islam Pinoy</h4>
            </div>
            <div className="my-info-details">
                    <h3>67<small className='small-text'>kg</small></h3>
                    <h3>5'10"</h3>
                    <h3>18<small className='small-text'>yrs</small></h3>
            </div>
            <h3>Add A Break</h3>
            <div className='break-button-conatiner'>
            <button onClick={()=>addTimeIntoLS(5)}>5m</button>
            <button onClick={()=>addTimeIntoLS(15)}>15m</button>
            <button onClick={()=>addTimeIntoLS(30)}>30m</button>
            <button onClick={()=>addTimeIntoLS(45)}>45m</button>
            </div>
            <div className="exercise-details">
            <h2>Exercise Details</h2>
            <h3>Exercise time <p>{exerciseTime} <small className='small-text'>hours</small></p></h3>
            {/* if break time is available then show it, if not show default 0 */}
            <h3>Break time <p>{breakTime?breakTime:0} <small className='small-text'>minutes</small></p></h3>
            </div>
            <button className="btn-completed" onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default AsideCalculation;