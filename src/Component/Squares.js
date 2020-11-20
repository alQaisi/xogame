import React from 'react';
import "./Square.css";
import "./Square";
import Square from './Square';

const Squares=({numberOfSquare,onSqClick,digitOfSquare,Winner})=>{
    
    return(
        <div className="squaresContainer">
            {numberOfSquare.map(item=><Square key={item} onSqClick={onSqClick} number={item} digitOfSquare={digitOfSquare} Winner={Winner}/>)}
        </div>
    );
}
export default Squares;