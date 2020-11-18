import React, { useEffect } from 'react';
import './assets/styles/App.scss';
import OutOfPlay from './components/OutOfPlay';
import Chessboard from './components/Chessboard';

const App = () => {

    return(
        <div id="main" className='App'>
            <OutOfPlay player={'white'} />
            <Chessboard />
            <OutOfPlay player={'black'} />
        </div>
    )
};

export default App;