import React from 'react';
import { Color } from '../store/actions/chesspieceTypes';

interface ResetModalProps{
    turn: boolean;
    color: Color;
}

const ResetModal: React.FunctionComponent<ResetModalProps> = ({turn, color}) => {

    return(
        <div className='reset'>
            <div className="reset-container">
            {
                (turn) ? (
                    <div className="reset-content">
                        <h1>You Win!</h1>
                        <h1>Resetting the Board...</h1>
                        <h1>You are now Playing as {(color === 'WHITE') ? 'BLACK' : 'WHITE'}</h1>
                        <h1>Game will Start Momentarily...</h1>
                    </div>
                ) : (
                    <div className="reset-content">
                        <h1>You Lose!</h1>
                        <h1>Resetting the Board...</h1>
                        <h1>You are now Playing as {(color === 'WHITE') ? 'BLACK' : 'WHITE'}</h1>
                        <h1>Game will Start Momentarily...</h1>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ResetModal;