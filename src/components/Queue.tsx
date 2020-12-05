import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayerStatus, initializeGameState, initializeUsername } from '../store/actions/gameStateActions';
import { RootState } from '../store/store';

const Queue = () => {

    const { serverCode, username, ready } = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch()

    const onReady = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.disabled = true;

        if(ready){
            dispatch(changePlayerStatus(false))
        } else{
            dispatch(changePlayerStatus(true))
        }

        e.currentTarget.disabled = false;
    }

    const backToHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(initializeGameState('HOME'))
        dispatch(initializeUsername(''))
        dispatch(changePlayerStatus(false))
    }

    return(
        <div className="queue">
            <div className="server-link">
                <div className="to-home"><button className="back-home" onClick={backToHome}><i className="fa fa-home"> Back to Home</i></button></div>
                <h2>{serverCode}</h2>
                <div className="user">
                    <label htmlFor="username">Username: {username}</label>
                    {
                        (ready) ? (
                            <button id="ready" className="readied" onClick={onReady}>READY</button>
                        ) : (
                            <button id="ready" className="not-readied" onClick={onReady}>READY</button>
                        )
                    }
                    {
                    (ready) ? ( 
                        <h3 id="status">Ready! Waiting for Opponent...</h3>
                    ) : ( 
                        <h3 id="status">Press Button when Ready...</h3>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Queue;