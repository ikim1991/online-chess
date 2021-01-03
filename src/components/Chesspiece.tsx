import React from 'react';
import getChesspiece from '../assets/images/pieces/getChesspiece';
import { Player } from '../store/actions/playerTypes';

type ChessPieceProps = {
    id: string;
    coord: [number, number];
    position: string;
    player: Player
}

const ChessPiece = ({id, position, coord, player}: ChessPieceProps) => {

    const drag = (e:React.DragEvent<HTMLImageElement>) => {
        const data = {id, position, coord}
        e.dataTransfer.setData("data", JSON.stringify(data))
    }

    if(player.turn && (id[0].toUpperCase() === player.color![0])){
        return(
            <img id={id} className='piece' src={getChesspiece(id)} alt='chesspiece' onDragStart={drag}/>
        )
    } else{
        return(
            <img id={id} className='piece' src={getChesspiece(id)} alt='chesspiece' draggable={false}/>
        )
    }
    
}

export default ChessPiece;