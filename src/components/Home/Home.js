import React, { useEffect, useState } from 'react';
import AsideCalculation from '../AsideCalculation/AsideCalculation';
import Header from '../Header/Header';
import Sports from '../Sports/Sports';
import './Home.css';

const Home = () => {
    const [sports, setSports]=useState([])
    const [exerciseTime,setExerciseTime]=useState(0)

    // fetching data
    useEffect(()=>{
          fetch(`sports.json`)
            .then((response) => response.json())
            .then((data) => setSports(data))
    },[])
    // get data from localStorage and set into breakTime
    // useEffect(()=>{
    //     const getBreakTimeFromLS=localStorage.getItem('break-time')
    //     const parsebreakTime=JSON.parse(getBreakTimeFromLS)
    //     setBreakTime(parsebreakTime)
    // },[exerciseTime])

    // event handler for exercise and break time
    const getExerciseTime=(time)=>{
        // set exercise time to it's state
        const newexerciseTime=exerciseTime+time
        setExerciseTime(newexerciseTime)
        // set break time into localStorage
        // localStorage.setItem('break-time',JSON.stringify(time))
    }

    return (
        <div className='home'>
            <div className='first-half'>
                <Header></Header>
                <div className='sports'>
                    {sports.map(sport=><Sports sport={sport} getExerciseTime={getExerciseTime}  key={sport.id}></Sports>)}
                </div>
            </div>
            <div className="second-half">
            <AsideCalculation exerciseTime={exerciseTime}></AsideCalculation>
            </div>
        </div>
    );
};

export default Home;