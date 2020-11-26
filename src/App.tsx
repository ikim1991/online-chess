import React, { Fragment, useEffect } from 'react';
import './assets/styles/App.scss';
import OutOfPlay from './components/OutOfPlay';
import Chessboard from './components/Chessboard';
import Queue from './components/Queue';
import Start from './components/Start';

const App = () => {

    return(
        <div id="main" className='App'>
            <OutOfPlay player="WHITE"/>
            <Chessboard/>
            <OutOfPlay player="BLACK"/>
        </div>
    )
};

export default App;