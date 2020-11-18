import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeChessboard } from '../store/actions/chessboardActions';
import { Square } from '../store/actions/chessboardTypes';


const Chessboard = () => {

    const dispatch = useDispatch();
    const chessboardState = useSelector((state: RootState) => state.chessboard)

    useEffect(() => {
        let squares: Square[] = []
        chessboardState.chessboard.rows.map((r, i) => {
            chessboardState.chessboard.columns.map((col, j) => {
                let value: number;
                let square: Square = {
                    position: `${Object.keys(col)[0]}${r}`,
                    column: col,
                    row: r,
                    value: value = (8 * i) + (j + 1),
                    coord: [Object.values(col)[0], r]
                }
                squares.push(square)
            })
        })
        dispatch(initializeChessboard(squares))
    }, [])

    return(
        <div id="chessboard">
            {chessboardState.squares && (chessboardState.chessboard.rows.map((r, i) => {
                return <div className="row" key={i}>{chessboardState.chessboard.columns.map((col, j) => {
                    let value: number;
                    value = (8 * i) + (j+1) 
                    return <div id={`${Object.keys(col)[0]}${r}`} className="square" key={value}></div>
                })}</div>
            }))}
        </div>
    )
}

export default Chessboard;