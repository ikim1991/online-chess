import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeChessboard, renderPositions, renderCheckmate, disconnect } from '../store/actions/chessboardActions';
import { Square } from '../store/actions/chessboardTypes';
import { Chesspiece } from '../store/actions/chesspieceTypes';
import { initializeChesspieces } from '../store/actions/chesspieceAction';
import ChessPiece from './ChessPiece';
import { legalMove, mapPosition } from './src/chessLogic';
import OutOfPlay from './OutOfPlay';
import { initializePlayer, nextTurn } from '../store/actions/playerActions';
import { socket } from '../ClientSocket';
import ResetModal from './ResetModal';
import { backToQueue, startGame } from '../store/actions/gameStateActions';
import DisconnectModal from './DisconnectModal';
import { Player } from '../store/actions/playerTypes';

const Chessboard = () => {

    const dispatch = useDispatch();
    const { chessboard, squares, occupied, checkmate, disconnected } = useSelector((state: RootState) => state.chessboard)
    const { initializer, chesspieces } = useSelector((state: RootState) => state.chesspiece)
    const { player } = useSelector((state: RootState) => state.player);
    const rows = [1, 2, 3, 4, 5, 6, 7, 8]

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const drop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()

        type DataJson = {
            id: string;
            position: string;
            coord: [number, number];
        }

        const id = e.currentTarget.id
        const data: DataJson = JSON.parse(e.dataTransfer.getData("data"))

        let sq = squares!.filter((square, i) => square.position === id)[0]
        let p = chesspieces!.filter((piece, i) => piece.id === data.id)[0]
        let occ = Object.entries(occupied!)

        if(legalMove(p,sq, occ)){
            let movedPiece = chesspieces!.find(piece => piece.id === data.id)!;
            dispatch(nextTurn(false));

            if(e.currentTarget.hasChildNodes()){
                let captured = chesspieces!.find(piece => piece.position === sq.position)!;
                socket.emit('capturePiece', sessionStorage.identifier, movedPiece.id, id, captured.id, captured.coord)

            } else{
                socket.emit('movePiece', sessionStorage.identifier, movedPiece.id, id, mapPosition(id))
            }
        }
    }

    useEffect(() => {

        if(!squares){
            let square: Square[] = []
            chessboard.rows.map((r, i) => {
                chessboard.columns.map((col, j) => {
                    let value: number;
                    square.push({
                        position: `${Object.keys(col)[0]}${r}`,
                        column: col,
                        row: r,
                        value: value = (8 * i) + (j + 1),
                        coord: [Object.values(col)[0], r]
                    })
                })
            })
            dispatch(initializeChessboard(square))
        }

        if(squares){
            let chesspieces: Chesspiece[] = []
            initializer.forEach((piece, i) => {
                piece._ids.forEach((id, j) => {
                    chesspieces.push({
                        id: id,
                        rank: piece.rank,
                        color: piece.color,
                        position: piece.position[j],
                        coord: piece.coords[j],
                        hasBeenMoved: false,
                        inPlay: true
                    })
                })
            })
            dispatch(initializeChesspieces(chesspieces))
        }
    }, [squares])

    useEffect(() => {
        socket.on('renderBoard', async (newPositions: any, newChesspieces: any, players: any) => {

            dispatch(renderPositions(newPositions))
            dispatch(initializeChesspieces(newChesspieces))
            
            if(players[0].username === player!.username){
                dispatch(nextTurn(players[0].turn))
            } else{
                dispatch(nextTurn(players[1].turn))
            }
        })

        let timer: NodeJS.Timeout;

        socket.on('endGame', async (winner: Player) => {
            
            if(winner.username === player!.username){
                dispatch(nextTurn(true))
            }

            dispatch(renderCheckmate(true))
            
            timer = setTimeout(() => {
                socket.emit("playAgain", sessionStorage.identifier)
            }, 4000)
        })

        socket.on('backToQueue', async (game: any) => {
            dispatch(disconnect(true))

            setTimeout(() => {
                dispatch(backToQueue(game))
            }, 4000)
        })

        socket.on('clearTimer', async (game: any) => {
            clearTimeout(timer)
            dispatch(renderCheckmate(false))
        })

        socket.on('changeUp', (chesspieces: Chesspiece[], players: any) => {

            if(player!.username === players[0].username){
                dispatch(initializePlayer(players[0]))
                dispatch(nextTurn(players[0].turn))
            } else{
                dispatch(initializePlayer(players[1]))
                dispatch(nextTurn(players[1].turn))
            }

            dispatch(initializeChesspieces(chesspieces))
            dispatch(renderCheckmate(false))
        })

        const emitExitGame = async (e: Event) => {
            e.preventDefault();
            socket.emit('exitGame', sessionStorage.identifier, player!.username)
        }

        window.addEventListener('beforeunload', emitExitGame)

        return () => {
            window.removeEventListener('beforeunload', emitExitGame)
        }

    }, [])

    return(
        <div className="board">
            {disconnected && <DisconnectModal/>}
            {(checkmate) && (<ResetModal turn={player!.turn!} color={player!.color!}/>)}
            {(player!.turn) ? ( 
                <div className="header">{`It's Your Turn (${player!.color} to Move...)`}</div>
            ) : (
                <div className="header">{`Waiting on Your Opponent (${((player!.color === 'WHITE') ? ('BLACK') : ('WHITE'))} to Move...)`}</div>
            )}
            <OutOfPlay player="WHITE"/>
            <div id="chessboard">
                {(squares && chesspieces && occupied) && (
                    (player!.color === 'WHITE') ? (
                        chessboard.rows.map((r, i) => {
                            return <div className="row" key={i}>{chessboard.columns.map((col, j) => {
                                let value: number;
                                let position = `${Object.keys(col)[0]}${r}`;
                                value = (8 * i) + (j+1);
                                
                                let ids = Object.keys(occupied)
                                let positions = Object.values(occupied)
                                let index = positions.indexOf(position)
                                if(index !== -1){
                                    if(chesspieces.find(piece => piece.position === position)?.inPlay){
                                        return (
                                            <div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}>
                                                <ChessPiece id={ids[index]} position={position} coord={[Object.values(col)[0], r]} player={player!}/>
                                            </div>
                                        )
                                    } else{
                                        return (<div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}></div>)
                                    }
                                    } else{
                                        return (<div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}></div>)
                                    }
                                }        
                            )}</div>
                        })
                    ) : (
                        rows.map((r, i) => {
                            return <div className="row" key={i}>{chessboard.columns.map((col, j) => {
                                let value: number;
                                let position = `${Object.keys(col)[0]}${r}`;
                                value = (8 * i) + (j+1);
                                
                                let ids = Object.keys(occupied)
                                let positions = Object.values(occupied)
                                let index = positions.indexOf(position)
                                if(index !== -1){
                                    if(chesspieces.find(piece => piece.position === position)?.inPlay){
                                        return (
                                            <div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}>
                                                <ChessPiece id={ids[index]} position={position} coord={[Object.values(col)[0], r]} player={player!}/>
                                            </div>
                                        )
                                    } else{
                                        return (<div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}></div>)
                                    }
                                    } else{
                                        return (<div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}></div>)
                                    }
                                }        
                            )}</div>
                        })
                    )
                    )}
            </div>
            <OutOfPlay player="BLACK"/>
        </div>
    )
}

export default Chessboard;