import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeChessboard, initializePositions } from '../store/actions/chessboardActions';
import { Square } from '../store/actions/chessboardTypes';
import { Chesspiece } from '../store/actions/chesspieceTypes';
import { initializeChesspieces } from '../store/actions/chesspieceAction';
import getChesspiece from '../assets/images/pieces/getChesspiece';


const Chessboard = () => {

    const dispatch = useDispatch();
    const { chessboard, squares, occupied } = useSelector((state: RootState) => state.chessboard)
    const { initializer, chesspieces } = useSelector((state: RootState) => state.chesspiece)

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
                positions[piece.position] = piece._id
            })
            dispatch(initializePositions(positions))
        }
    }, [chesspieces])

    return(
        <div id="chessboard">
            {(squares && chesspieces && occupied) && (
                chessboard.rows.map((r, i) => {
                return <div className="row" key={i}>{chessboard.columns.map((col, j) => {
                    let value: number;
                    value = (8 * i) + (j+1)
                    if(Object.keys(occupied).includes(`${Object.keys(col)[0]}${r}`)){
                        return (
                            <div id={`${Object.keys(col)[0]}${r}`} className="square" key={value}>
                                <img id={occupied[`${Object.keys(col)[0]}${r}`]} className="piece" src={getChesspiece(occupied[`${Object.keys(col)[0]}${r}`])} alt="chesspiece"/>
                            </div>
                        )}
                    return (<div id={`${Object.keys(col)[0]}${r}`} className="square" key={value}></div>)
                })}</div>
            }))}
        </div>
    )
}

export default Chessboard;