import React from 'react';
import { Hand, Results } from '../store/actions/RockPaperScissorsTypes';

interface RPSModalProps{
    hand: Hand,
    results: Results
}

const RPSModal: React.FunctionComponent<RPSModalProps> = ({hand, results}) => {
    console.log(hand, results)
    return(
        (results === 'PENDING') ? (
            <div className="modal">
                <div className="container">
                    <div className="content">
                        <h2>You Selected {hand}!!</h2>
                        <i className={`fa fa-hand-${hand.toLowerCase()}-o`}></i>
                        <h2>Waiting on Opposition...</h2>
                    </div>
                </div>
            </div>
        ) : (results === 'DRAW') ? (
            <div className="modal">
                <div className="container">
                    <div className="content">
                        <h2>{results}!!</h2>
                        <h2>Try Again...</h2>
                    </div>
                </div>
            </div>
        ) : (
            <div className="modal">
                <div className="container">
                    <div className="content">
                        <h2>You {results}!!</h2>
                        <h2>Starting Momentarily...</h2>
                    </div>
                </div>
            </div>
        )
    )
}

export default RPSModal;