import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { joinGame, backToHomePage } from '../store/actions/gameStateActions';
import { toPlayerDefault } from '../store/actions/playerActions';

const Join = () => {

    const { gameList } = useSelector((state: RootState) => state.game)
    const { player } = useSelector((state: RootState) => state.player)
    const dispatch = useDispatch();

    const joinRoom = (e: React.MouseEvent<HTMLDivElement>) => {
        const identifier = (e.currentTarget!.firstChild! as HTMLParagraphElement).innerText;
        dispatch(joinGame(identifier, player!.username));
    }

    const onInputJoin = (e:React.KeyboardEvent<HTMLInputElement>) => {
        const identifier = e.currentTarget!.value
        if(e.key === 'Enter'){
            dispatch(joinGame(identifier, player!.username))
        }
    }

    const backToHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(backToHomePage());
        dispatch(toPlayerDefault());
        sessionStorage.removeItem('identifier');
    }

    return(
        <div className="join">
            <div className="server-link">
                <div className="to-home"><button className="back-home" onClick={backToHome}><i className="fa fa-home"> Back to Home</i></button></div>
                <h2>Join a Game</h2>
                {gameList && (
                    <div className="find-game">
                        <p>Find a Game</p>
                        <input type="text" placeholder="Enter the Identifier Code..." onKeyDown={onInputJoin}/>
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