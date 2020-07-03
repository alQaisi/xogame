import React from 'react';
import "./Square.css";
import "./Square";
import Square from './Square';

const Squares=({numberOfSquare,onSqClick,digitOfSquare})=>{
    
    return(
        <div className="squaresContainer">
            {numberOfSquare.map(item=><Square key={item} onSqClick={onSqClick} number={item} digitOfSquare={digitOfSquare}/>)}
        </div>
    );
}
export default Squares;