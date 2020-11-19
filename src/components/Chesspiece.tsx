import React from 'react';
import getChesspiece from '../assets/images/pieces/getChesspiece';

type ChessPieceProps = {
    id: string;
    coord: [number, number];
    position: string;
}

const ChessPiece = ({id, position, coord}: ChessPieceProps) => {

    const drag = (e:React.DragEvent<HTMLImageElement>) => {
        const data = {id, position, coord}
        e.dataTransfer.setData("data", JSON.stringify(data))
    }
    
    return(
        <img id={id} className='piece' src={getChesspiece(id)} alt='chesspiece' onDragStart={drag}/>
    )
}

export default ChessPiece;