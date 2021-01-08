import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../ClientSocket';
import { changeGameState } from '../store/actions/gameStateActions';
import { defaultResults, rockPaperScissors, showResults } from '../store/actions/RockPaperScissorsActions';
import { assignColor, nextTurn } from '../store/actions/playerActions';
import { Hand } from '../store/actions/RockPaperScissorsTypes';
import { RootState } from '../store/store';
import RPSModal from './RPSModal';

const Ready = () => {

    const { identifier } = useSelector((state: RootState) => state.game)
    const { player } = useSelector((state: RootState) => state.player);
    const { hand, results, pending } = useSelector((state: RootState) => state.rockPaperScissors)
    const rpsState =  useSelector((state: RootState) => state.rockPaperScissors)
    const dispatch = useDispatch()

    useEffect(() => {

        socket.on('results', (game: any, resolved: boolean) => {

            if(resolved){
                if(player!.username === game.host.username){
                    dispatch(showResults(game.host.result))
                    dispatch(assignColor(game.host.color))
                    if(game.host.result === 'WIN'){
                        dispatch(nextTurn(true))
                    } else{
                        dispatch(nextTurn(false))
                    }
                } else{
                    dispatch(showResults(game.joiner.result))
                    dispatch(assignColor(game.joiner.color))
                    if(game.joiner.result === 'WIN'){
                        dispatch(nextTurn(true))
                    } else{
                        dispatch(nextTurn(false))
                    }
                }
                
                setTimeout(() => {
                    dispatch(defaultResults())
                    dispatch(changeGameState(game.gameState))
                }, 4000)
                
            } else{
                dispatch(showResults('DRAW'))

                setTimeout(() => {
                    dispatch(defaultResults())
                }, 4000)
            }
        })

    }, [identifier])

    const makeSelection = (e: React.MouseEvent<HTMLElement>) => {
        let selection: Hand;
        if(e.currentTarget.className.includes('rock')){
            selection = 'ROCK'
        } else if(e.currentTarget.className.includes('paper')){
            selection = 'PAPER'
        } else{
            selection = 'SCISSORS'
        }

        dispatch(rockPaperScissors(selection))
        socket.emit('rock-paper-scissors', identifier, player!.username, selection)

    }

    return(
        <div className="ready">
            {console.log(rpsState, "RENDER")}
            {(hand) && (<RPSModal hand={hand} results={results}/>)}
            <h2>Rock! Paper! Scissors!</h2>
            <i className="fa fa-hand-rock-o" onClick={makeSelection}></i>
            <i className="fa fa-hand-paper-o" onClick={makeSelection}></i>
            <i className="fa fa-hand-scissors-o" onClick={makeSelection}></i>
        </div>
    )
}

export default Ready;