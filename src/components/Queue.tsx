import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../ClientSocket';
import { backToHomePage, startGame, updateOnExit } from '../store/actions/gameStateActions';
import { changePlayerStatus, initializePlayer, toPlayerDefault } from '../store/actions/playerActions';
import { RootState } from '../store/store';

const Queue = () => {

    const { identifier, host, joiner } = useSelector((state: RootState) => state.game);
    const { player } = useSelector((state: RootState) => state.player);
    const dispatch = useDispatch()

    useEffect(() => {
        socket.emit("joinRoom", identifier);

        socket.on("updateHostPage", (game: any) => {
            dispatch(startGame(game));
        })

        socket.on("updateReady", (game: any, username: string) => {
            dispatch(startGame(game));
        })

        socket.on("onExitRoomUpdate", (game: any) => {

            dispatch(updateOnExit(game))
            
            if(game.host.username === player!.username){
                dispatch(initializePlayer(game.host))
            } else{
                dispatch(initializePlayer(game.joiner))
            }
            
        })

        const emitRoomExit = async (e: Event) => {
            e.preventDefault();
            socket.emit('exitRoom', identifier, player!.username)
        }

        window.addEventListener('beforeunload', emitRoomExit)

        return () => {
            window.removeEventListener('beforeunload', emitRoomExit)
        }

    }, [identifier])

    const onReady = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.currentTarget.disabled = true;
        
        if(player!.username === host!.username){
            socket.emit("onReady", identifier, 'host', host)
        } else{
            socket.emit("onReady", identifier, 'joiner', joiner)
        }

        dispatch(changePlayerStatus());

        e.currentTarget.disabled = false;
    }

    const backToHome = (e: React.MouseEvent<HTMLButtonElement>) => {

        socket.emit('exitRoom', identifier, player!.username)

        dispatch(backToHomePage());
        dispatch(toPlayerDefault());
        sessionStorage.removeItem('identifier');
    }

    return(
        <div className="queue">
            <div className="server-link">
                <div className="to-home"><button className="back-home" onClick={backToHome}><i className="fa fa-home"> Back to Home</i></button></div>
                <h2>{identifier}</h2>
                <div className="user">
                    <label htmlFor="username">Username: {player!.username}</label>
                    {
                        (player!.ready) ? (
                            <button id="ready" className="readied" onClick={onReady}>READY</button>
                        ) : (
                            <button id="ready" className="not-readied" onClick={onReady}>READY</button>
                        )
                    }
                    {
                    (player!.ready) ? ( 
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