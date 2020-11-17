import React from 'react';
import { COLOR, RANK, KING, QUEEN, BISHOP, KNIGHT, ROOK, PAWN, WHITE, BLACK, PIECE } from '../../types/types';
import Bishop from './pieces/Bishop';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';
import Square from './Square';

class Chessboard{

    columns: {[key:string]: number}[];
    rows: number[];
    initialPieces: ({
        color: COLOR,
        rank: RANK,
        position: string[],
        coords: [number, number][]
    })[]

    constructor(){
        this.columns = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}, {'f': 6}, {'g': 7}, {'h': 8}]
        this.rows = [8, 7, 6, 5, 4, 3, 2, 1]
        this.initialPieces = [
            {color: WHITE, rank: KING, position: ['e1'], coords: [[5,1]]},
            {color: BLACK,rank: KING, position:['e8'], coords: [[5,8]]},
            {color:WHITE, rank: QUEEN,position:['d1'], coords: [[4,1]]},
            {color: BLACK, rank: QUEEN, position:['d8'], coords: [[4,8]]},
            {color: WHITE, rank: BISHOP, position:['c1','f1'], coords: [[3,1],[6,1]]},
            {color: BLACK, rank: BISHOP, position:['c8','f8'], coords: [[6,8],[3,8]]},
            {color:WHITE, rank: KNIGHT, position:['b1','g1'], coords:[[2,1],[6,1]]},
            {color: BLACK,rank: KNIGHT,position:['b8','g8'], coords:[[2,8],[7,8]]},
            {color:WHITE,rank: ROOK,position:['a1','h1'], coords:[[1,1],[8,1]]},
            {color: BLACK,rank: ROOK,position:['a8','h8'], coords:[[1,8],[8,8]]},
            {
                color:WHITE,
                rank: PAWN,
                position:['a2','b2','c2','d2','e2','f2','g2','h2'],
                coords:[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2]]},
            {
                color: BLACK,
                rank: PAWN,
                position:['a7','b7','c7','d7','e7','f7','g7','h7'],
                coords:[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]]
            }
        ]
    }

    createChessboard(){
        return(
            <div id="chessboard">
                {this.rows.map((row, i) => {
                    return <div className="row" key={i}>{this.columns.map((column, j) => {
                        let value: number;
                        value = (8 * i) + (j+1) 
                        return (new Square(row, column, value)).createSquare()
                    })}</div>
                })}
            </div>
        )
    }

    setupChessboard(){
        const chesspieces: (PIECE | null)[] = []
        this.initialPieces.map((piece, i) => {
            piece.position.map((pos, j) => {
                chesspieces.push(this.createChessPiece(piece.color, piece.rank, piece.position[j], piece.coords[j]))
            })
        })

        return chesspieces.map((piece, i) => piece!.renderOnBoard())
    }

    createChessPiece(color: COLOR, rank: RANK, position: string, coord: [number, number]){
        switch(rank){
            case KING:
                return new King(color, position, coord);
            case QUEEN:
                return new Queen(color, position, coord);
            case BISHOP:
                return new Bishop(color, position, coord);
            case KNIGHT:
                return new Knight(color, position, coord);
            case ROOK:
                return new Rook(color, position, coord);
            case PAWN:
                return new Pawn(color, position, coord);
            default:
                return null;
        }
    }
}

export default Chessboard;