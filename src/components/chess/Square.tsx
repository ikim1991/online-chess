import React from 'react';

class Square{

    name: string;
    column: {[key: string]: number};
    row: number;
    value: number;
    coord: number[];

    constructor(row: number, column: {[key: string]: number}, value: number){
        this.name = `${Object.keys(column)[0]}${row}`;
        this.row = row;
        this.column = column;
        this.coord = [Object.values(column)[0], row]
        this.value = value
    }

    createSquare(){
        return(
            <div id={`${this.name}`} className="square" key={this.value}></div>
        )
    }
}

export default Square;