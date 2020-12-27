import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { initializeChessboard, renderPositions } from '../store/actions/chessboardActions';
import { Square } from '../store/actions/chessboardTypes';
import { Chesspiece } from '../store/actions/chesspieceTypes';
import { initializeChesspieces, moveChessPiece, updateChessPiece } from '../store/actions/chesspieceAction';
import ChessPiece from './ChessPiece';
import { legalMove } from './src/chessLogic';
import OutOfPlay from './OutOfPlay';

const Chessboard = () => {

    const dispatch = useDispatch();
    const { chessboard, squares, occupied } = useSelector((state: RootState) => state.chessboard)
    const { initializer, chesspieces } = useSelector((state: RootState) => state.chesspiece)
    const { player } = useSelector((state: RootState) => state.player);

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
        let p = chesspieces!.filter((piece, i) => piece._id === data.id)[0]
        let occ = Object.entries(occupied!)

        if(legalMove(p,sq, occ)){
            let movedPiece = chesspieces!.find(piece => piece._id === data.id)!;
            
            console.log(movedPiece)

            if(!movedPiece.hasBeenMoved){  
                dispatch(updateChessPiece(Object.assign({}, movedPiece, {...movedPiece, hasBeenMoved: true})))
            }
            if(e.currentTarget.hasChildNodes()){
                let captured = chesspieces!.find(piece => piece.position === sq.position)!;
                dispatch(updateChessPiece(Object.assign({}, captured, {...captured, inPlay: false, position: "a0"})))
            }

            dispatch(moveChessPiece(data.id, id))
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
                        _id: id,
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
        if(chesspieces){
            let positions: {[key:string]: string} = {}
            chesspieces.forEach((piece) => {
                positions[piece._id] = piece.position
            })
            dispatch(renderPositions(positions))
        }
    }, [chesspieces])

    return(
        <Fragment>
            <OutOfPlay player="WHITE"/>
            {console.log(player)}
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
                            if(chesspieces.find(piece => piece.position === position)?.inPlay){
                                return (
                                    <div id={position} className="square" key={value} onDragOver={allowDrop} onDrop={drop}>
                                        <ChessPiece id={ids[index]} position={position} coord={[Object.values(col)[0], r]}/>
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
                }))}
            </div>
            <OutOfPlay player="BLACK"/>
        </Fragment>
        
    )
}

export default Chessboard;