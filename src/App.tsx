import React from 'react';
import './assets/styles/App.scss';
import Chessboard from './components/chess/Chessboard';

const App = () => {

    const chessboard = new Chessboard()

    return(
        <div className='App'>
            {chessboard.createChessboard()}
        </div>
    )
};

export default App;