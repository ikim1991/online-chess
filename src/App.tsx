import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Chessboard from './components/Chessboard';
import Queue from './components/Queue';
import Home from './components/Home';
import Ready from './components/Ready';
import Join from './components/Join';
import './assets/styles/App.scss';

const App = () => {

    const { gameState, identifier } = useSelector((state: RootState) => state.game);

    return(
        <div id="main" className='App'>
            {(gameState === 'HOME') && (
                <Home/>
            )}
            {(gameState === 'JOIN') && (
                <Join/>
            )}
            {(gameState === 'QUEUE' && identifier) && (
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