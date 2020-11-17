import React from 'react';
import ReactDOM from 'react-dom';
import ChessPiece from '../ChessPiece';
import White from '../../../assets/images/pieces/pawn.white.png';
import Black from '../../../assets/images/pieces/pawn.black.png';
import { COLOR, RANK, PAWN, WHITE } from '../../../types/types';

class Pawn extends ChessPiece{

    rank: RANK;
    hasBeenMoved: boolean;

    constructor(color: COLOR, position: string, coord: [number, number]){
        super(color, position, coord);
        this.rank = PAWN;
        this.hasBeenMoved = false;
    }

    renderOnBoard(){
        let square = document.getElementById(this.position)
        if(this.color === WHITE){
            ReactDOM.render(<img className={`${this.rank} chesspiece`} src={White} alt={this.rank}/>, square)
        } else{
            ReactDOM.render(<img className={`${this.rank} chesspiece`} src={Black} alt={this.rank}/>, square) 
        }
    }
}

export default Pawn;