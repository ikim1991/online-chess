import { Dispatch } from 'react';
import { CHANGE_GAME_STATE, CREATE_GAME, GameState, GameStateDispatch, GET_ERROR, GET_PENDING, JOIN_GAME, SHOW_GAMELIST, START_GAME, TO_DEFAULT } from './gameStateTypes';

export const createGame = (identifier: string, username: string) => async (dispatch: Dispatch<GameStateDispatch>) => {
    dispatch({ type: GET_PENDING });
    const response: any = await fetch('http://localhost:3001/create', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ identifier, username })
    })
    const data = await response.json();

    if(!data.error){
        dispatch({type: CREATE_GAME, payload: {
            identifier: data.identifier,
            host: data.host,
            gameState: data.gameState
        }})
        sessionStorage.setItem('identifier', data.identifier);
    } else{
        dispatch({type: GET_ERROR, payload: data.error})
    }
}

export const toJoinPage = (username: string) => async (dispatch: Dispatch<GameStateDispatch>) => {
    dispatch({type: GET_PENDING})

    const response: any = await fetch('http://localhost:3001/join', {
        method: 'get',
        headers: { 'Content-Type': 'application/json'}
    })
    const data = await response.json();
    
    if(!data.error){
        dispatch({type: SHOW_GAMELIST, payload: data})
        
    } else{
        dispatch({type: GET_ERROR, payload: data.error})
    }
}

export const joinGame = (identifier: string, username: string) => async (dispatch: Dispatch<GameStateDispatch>) => {
    dispatch({type: GET_PENDING });
    const response: any = await fetch('http://localhost:3001/join', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ identifier, username })
    })
    const data = await response.json();

    if(!data.error){
        dispatch({type: JOIN_GAME, payload: {
            identifier: data.identifier,
            host: data.host,
            joiner: data.joiner,
            gameState: data.gameState
        }})
        sessionStorage.setItem('identifier', data.identifier);
    } else{
        dispatch({type: GET_ERROR, payload: data.error})
    }
}

export const backToHomePage = () => ({type: TO_DEFAULT})

export const startGame = (game: any) => ({type: START_GAME, payload: game})

export const changeGameState = (gameState: GameState) => ({type: CHANGE_GAME_STATE, payload: gameState})