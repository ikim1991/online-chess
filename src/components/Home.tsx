import React from 'react';
import One from '../assets/images/pieces/king.white.png';
import Two from '../assets/images/pieces/king.black.png';

const Home = () => {
    return(
        <div className="start">
            <img src={One}/>
            <img src={Two}/>
            <h1>Online Chess</h1>
            <button>Play Chess!</button>
        </div>
    )
}

export default Home;