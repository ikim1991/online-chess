import React from 'react';
import './assets/styles/App.scss';
import Image from './assets/images/image.jpg';

const App = () => {
    return(
        <div className='App'>
            <h1>Welcome to the Page!</h1>
            <p>Create Your React App!</p>
            <img className="image" src={Image} alt='spacecowboy'></img>
        </div>
    )
};

export default App;