import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeGameState, generateServerCode, initializeUsername } from '../store/actions/gameStateActions';

const Join = () => {

    const { username, gameList } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch();

    const joinRoom = (e: React.MouseEvent<HTMLDivElement>) => {
        const serverCode = (e.currentTarget!.firstChild! as HTMLParagraphElement).innerText;
        
        sessionStorage.setItem('serverCode', serverCode);
        dispatch(generateServerCode(serverCode));
        dispatch(initializeGameState('QUEUE'))
    }

    const onInputJoin = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter' && gameList){
            if(gameList.includes(e.currentTarget.value)){
                const serverCode = e.currentTarget.value;
                sessionStorage.setItem('serverCode', serverCode);
                dispatch(generateServerCode(serverCode));
                dispatch(initializeGameState('QUEUE'))
            } else{
                alert(`The Room you are Looking for Does Not Exist (${e.currentTarget.value})`)
            }
        }
    }

    const backToHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(initializeGameState('HOME'))
        dispatch(initializeUsername(''))
    }

    return(
        <div className="join">
            <div className="server-link">
                <div className="to-home"><button className="back-home" onClick={backToHome}><i className="fa fa-home"> Back to Home</i></button></div>
                <h2>Join a Room</h2>
                {gameList && (
                    <div className="find-game">
                        <p>Find a Room</p>
                        <input type="text" placeholder="Enter the Server Code..." onKeyDown={onInputJoin}/>
                    </div>
                )}
                <div className="games">
                    {gameList && (
                        gameList.map((game, i) => {
                            return(<div className="game" key={i} onClick={joinRoom}><p>{game}</p></div>)
                        })
                    )}
                    {!gameList && (
                        <div>
                            <h2>There are No Rooms Currently Available...</h2>
                            <p>Be the First to Create One...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Join;