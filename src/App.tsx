import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import Chessboard from './components/Chessboard';
import Queue from './components/Queue';
import Home from './components/Home';
import Ready from './components/Ready';
import './assets/styles/App.scss';



const App = () => {

    const dispatch = useDispatch();
    const { player } = useSelector((state: RootState) => state.player);
    const { gameState } = useSelector((state: RootState) => state.game);

    return(
        <div id="main" className='App'>
            {(gameState === 'HOME') && (
                <Home/>
            )}
            {(gameState === 'QUEUE') && (
                <Queue/>
            )}
            {(gameState === 'READY') && (
                <Ready/>
            )}
            {(gameState === 'PLAY') && (
                <Chessboard/>
            )}
        </div>
    )
};

export default App;