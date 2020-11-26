import React, { Fragment, useEffect } from 'react';
import './assets/styles/App.scss';
import OutOfPlay from './components/OutOfPlay';
import Chessboard from './components/Chessboard';
import Queue from './components/Queue';
import Start from './components/Start';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {

    const dispatch = useDispatch();
    const { player } = useSelector((state: RootState) => state.player);
    const { gameState } = useSelector((state: RootState) => state.game);

    return(
        <div id="main" className='App'>
            <OutOfPlay player="WHITE"/>
            <Chessboard/>
            <OutOfPlay player="BLACK"/>
        </div>
    )
};

export default App;