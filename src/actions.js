import {actionsType} from './constants.js';

export const ONClick=(player)=>{
    return{
        type:actionsType.ON_CLICK,
        payload:player
    }
}
export const ONRESTART=()=>({
    type:actionsType.ON_RESTART,
    payload:{
        digitOfSquare:[undefined,undefined,undefined
            ,undefined,undefined,undefined
            ,undefined,undefined,undefined],
        activePlayer:"X",
        playerX:[],
        playerO:[],
        Winner:undefined,
        winnerClass:"winner tc"
    }
})