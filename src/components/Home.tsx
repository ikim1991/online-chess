import React from 'react';
import One from '../assets/images/pieces/king.white.png';
import Two from '../assets/images/pieces/king.black.png';
import { generateIdentifier } from './src/generateIdentifier';
import { useDispatch } from 'react-redux';
import { createGame, toJoinPage } from '../store/actions/gameStateActions';
import { initializePlayer } from '../store/actions/playerActions';

const Home = () => {

    const dispatch = useDispatch();

    const createRoom = (e: React.MouseEvent) => {
        const identifier = generateIdentifier();

        let username = prompt('Enter your username...');

        while(username === ''){
            if(username === null){
                break;
            }
            alert('Please enter a username...')
            username = prompt('Enter your username...')
        }

        if(username){
            dispatch(initializePlayer({username, ready: false}))
            dispatch(createGame(identifier, username));
        }
    }

    const joinPage = (e: React.MouseEvent) => {
        let username = prompt('Enter your username...');

        while(username === ''){
            if(username === null){
                break;
            }
            alert('Please enter a username...')
            username = prompt('Enter your username...')
        }

        if(username){
            dispatch(initializePlayer({username, ready: false}))
            dispatch(toJoinPage(username))
        }
    }

    return(
        <div className="start">
            <img src={One}/>
            <img src={Two}/>
            <h1>Online Chess</h1>
            <div>
                <button onClick={createRoom}>Create a Room</button>
            </div>
            <div>
                <button onClick={joinPage}>Join a Room</button>
            </div>
        </div>
    )
}

export default Home;