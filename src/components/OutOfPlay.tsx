import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import getChesspiece from '../assets/images/pieces/getChesspiece';

type OutOfPlayProps = {
    player: string
}

const OutOfPlay = ({player}: OutOfPlayProps) => {

    const { chesspieces } = useSelector((state: RootState) => state.chesspiece)

    return(
        <div className={`outofplay-${player}`}>
            {(chesspieces) && (chesspieces.filter(piece => !piece.inPlay).map((piece, i) => {
                if((piece.color === player)){
                    return <img id={piece.id} className='piece' src={getChesspiece(piece.id)} alt='chesspiece' key={i}/>
                }
            }))}
        </div>
    )
}

export default OutOfPlay;