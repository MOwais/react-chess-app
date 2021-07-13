import React from 'react';
import './tile.css';


const Tile = ({ number, image, text }) => {
    if(number % 2 === 0){
        return (
            <div key={Math.random()} className='tile black-tile'>{text}<img src={image}/></div>
        );
    }
    return (
        <div key={Math.random()} className='tile white-tile'>{text}<img src={image}/></div>
    );
}

export default Tile;