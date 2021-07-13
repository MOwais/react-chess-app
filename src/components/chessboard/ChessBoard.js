import React from 'react';
import './ChessBoard.css';
import Tile from '../tile/Tile';


const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const pawnImg = 'assets/images/pawn_${type}.png';

const pieces = [];


for (let p=0; p<2; p++){
    const type = p == '0' ? 'b':'w';
    const y = p == '0' ? 7:0;
    pieces.push({image:`assets/images/rook_${type}.png`, x:0, y});
    pieces.push({image:`assets/images/rook_${type}.png`, x:7, y});
    pieces.push({image:`assets/images/knight_${type}.png`, x:1, y});
    pieces.push({image:`assets/images/knight_${type}.png`, x:6, y});
    pieces.push({image:`assets/images/bishop_${type}.png`, x:2, y});
    pieces.push({image:`assets/images/bishop_${type}.png`, x:5, y});
    pieces.push({image:`assets/images/queen_${type}.png`, x:4, y});
    pieces.push({image:`assets/images/king_${type}.png`, x:3, y});
}

for (let i=0; i<8; i++){
    pieces.push({image:'assets/images/pawn_b.png', x:i, y:6});
}

for (let i=0; i<8; i++){
    pieces.push({image:'assets/images/pawn_w.png', x:i, y:1});
}

function ChessBoard(props) {
    let board = [];

    for(let j = verticalAxis.length-1; j >= 0; j--){
        for(let i = 0;i<horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = undefined;
            pieces.forEach((piece) => {
                if(piece.x === i && piece.y === j){
                    image = piece.image;
                }
            });
            
            console.log('image', image);
            board.push(<Tile image={image} text={horizontalAxis[i]+verticalAxis[j]} key={Math.random()} number={number} />)
        }
    }
   
    return (
        <div id='chessboard'>
            {board}
        </div>
    );
}


export default ChessBoard;

