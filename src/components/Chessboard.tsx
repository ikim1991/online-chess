import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeChessboard, renderPositions } from '../store/actions/chessboardActions';
import { Square } from '../store/actions/chessboardTypes';
import { Chesspiece } from '../store/actions/chesspieceTypes';
import { initializeChesspieces, moveChessPiece } from '../store/actions/chesspieceAction';
import ChessPiece from './ChessPiece';

const Chessboard = () => {

    const dispatch = useDispatch();
    const { chessboard, squares, occupied } = useSelector((state: RootState) => state.chessboard)
    const { initializer, chesspieces } = useSelector((state: RootState) => state.chesspiece)

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
        dispatch(moveChessPiece(data.id, id))
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
                        _id: id,
                        rank: piece.rank,
                        color: piece.color,
                        position: piece.position[j],
                        coord: piece.coords[j],
                        hasBeenMoved: false
                    })
                })
            })
            dispatch(initializeChesspieces(chesspieces))
        }
    }, [squares])

    useEffect(() => {
        if(chesspieces){
            let positions: {[key:string]: string} = {}
            chesspieces.forEach((piece) => {
                positions[piece._id] = piece.position
            })
            dispatch(renderPositions(positions))
        }
    }, [chesspieces])

    return(
        <div id="chessboard">
            {(squares && chesspieces && occupied) && (
                chessboard.rows.map((r, i) => {
                return <div className="row" key={i}>{chessboard.columns.map((col, j) => {
                    let value: number;
                    let position = `${Object.keys(col)[0]}${r}`;
                    value = (8 * i) + (j+1);
                    
                    let ids = Object.keys(occupied)
                    let positions = Object.values(occupied)
                    let index = positions.indexOf(position)
                    if(index !== -1){
                        return (
                            <div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}>
                                <ChessPiece id={ids[index]} position={position} coord={[Object.values(col)[0], r]}/>
                            </div>
                        )} else{
                            return (<div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}></div>)
                        }
                    }        
                )}</div>
            }))}
        </div>
    )
}

export default Chessboard;