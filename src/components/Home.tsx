import React from 'react';
import One from '../assets/images/pieces/king.white.png';
import Two from '../assets/images/pieces/king.black.png';
import { generateLink } from './src/generateLink';
import { useDispatch } from 'react-redux';
import { generateServerCode, initializeGameState, initializeUsername } from '../store/actions/gameStateActions';

const Home = () => {

    const dispatch = useDispatch();

    const createRoom = (e: React.MouseEvent) => {
        const serverCode = generateLink();

        let username = prompt('Enter your username...');

        while(username === ''){
            if(username === null){
                break;
            }
            alert('Please enter a username...')
            username = prompt('Enter your username...')
        }

        if(username){
            dispatch(initializeUsername(username));
            dispatch(generateServerCode(serverCode));
            sessionStorage.setItem('serverCode', serverCode);
            dispatch(initializeGameState('QUEUE'))
        }
    }

    const joinRoom = (e: React.MouseEvent) => {
        let username = prompt('Enter your username...');

        while(username === ''){
            if(username === null){
                break;
            }
            alert('Please enter a username...')
            username = prompt('Enter your username...')
        }

        if(username){
            dispatch(initializeUsername(username));
            dispatch(initializeGameState('JOIN'));
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
                <button onClick={joinRoom}>Join a Room</button>
            </div>
        </div>
    )
}

export default Home;