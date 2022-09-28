import React, { useEffect, useState } from 'react';
import AsideCalculation from '../AsideCalculation/AsideCalculation';
import Header from '../Header/Header';
import Sports from '../Sports/Sports';
import './Home.css';

const Home = () => {
    const [sports, setSports]=useState([])
    useEffect(()=>{
          fetch(`sports.json`)
            .then((response) => response.json())
            .then((data) => setSports(data))
    },[])
    return (
        <div className='home'>
            <div className='first-half'>
                <Header></Header>
                <div className='sports'>
                    {sports.map(sport=><Sports sport={sport} key={sport.id}></Sports>)}
                </div>
            </div>
            <div className="second-half">
            <AsideCalculation></AsideCalculation>
            </div>
        </div>
    );
};

export default Home;