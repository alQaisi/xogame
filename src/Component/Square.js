import React from 'react';
import "./Square.css";
const Square=(props)=>{
    
    return(
        <div className="square tc pa4" onClick={props.onSqClick.bind(this,props.number)}>
                <h1>{props.digitOfSquare[props.number]}</h1>
        </div>
    );
}
export default Square;