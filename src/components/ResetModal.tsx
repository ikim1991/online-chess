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
                    <div>
                        <h1>You Win!</h1>
                        <h2>Resetting the Board...</h2>
                        <h2>You are now Playing as {(color === 'WHITE') ? 'BLACK' : 'WHITE'}</h2>
                        <h2>Game will Start Momentarily...</h2>
                    </div>
                ) : (
                    <div>
                        <h1>You Lose!</h1>
                        <h2>Resetting the Board...</h2>
                        <h2>You are now Playing as {(color === 'WHITE') ? 'BLACK' : 'WHITE'}</h2>
                        <h2>Game will Start Momentarily...</h2>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ResetModal;