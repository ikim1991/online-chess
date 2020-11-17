import React, { useEffect } from 'react';
import './assets/styles/App.scss';
import Chessboard from './components/chess/Chessboard';

const chessboard = new Chessboard()

const App = () => {

    useEffect(() => {
        chessboard.setupChessboard()
    }, [])

    return(
        <div id="main" className='App'>
            {chessboard.createChessboard()}
        </div>
    )
};

export default App;