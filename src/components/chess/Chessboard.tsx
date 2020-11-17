import React from 'react';
import Square from './Square';

class Chessboard{

    columns: {[key:string]: number}[];
    rows: number[];

    constructor(){
        this.columns = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}, {'f': 6}, {'g': 7}, {'h': 8}]
        this.rows = [8, 7, 6, 5, 4, 3, 2, 1]
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
}

export default Chessboard;