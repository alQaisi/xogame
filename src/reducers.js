import {actionsType} from './constants';

const initialState={
    numberOfSquare:[0,1,2,3,4,5,6,7,8],
    digitOfSquare:[undefined,undefined,undefined
        ,undefined,undefined,undefined
        ,undefined,undefined,undefined],
    activePlayer:"X",
    playerX:[],
    playerO:[],
    Winner:undefined,
    winnerClass:"winner tc"
};
let gameState={
    numberOfSquare:[0,1,2,3,4,5,6,7,8],
    digitOfSquare:[undefined,undefined,undefined
        ,undefined,undefined,undefined
        ,undefined,undefined,undefined],
    activePlayer:"X",
    playerX:[],
    playerO:[],
    Winner:undefined,
    winnerClass:"winner tc"
}
const checkWinner=()=>{
    const switchFunc=(item,array,player)=>{
      switch(true){
        case item===2:
          if(array.includes(1) && array.includes(0))
              Object.assign(gameState,{Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===5:
          if(array.includes(3) && array.includes(4))
              Object.assign(gameState,{Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===6:
          if((array.includes(3) && array.includes(0)) || (array.includes(4) && array.includes(2)))
              Object.assign(gameState,{Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===7:
          if(array.includes(4) && array.includes(1))
              Object.assign(gameState,{Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===8:
          if((array.includes(4) && array.includes(0)) || (array.includes(6) && array.includes(7)) ||(array.includes(5) && array.includes(2)))
              Object.assign(gameState,{Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        default:;
      }
    }
    if(gameState.activePlayer==="O"){
      let {playerO}=gameState;
      if(gameState.playerO.length>=3){
        playerO=playerO.sort();
        for(let i=0;i<playerO.length-2;i++){
          let itemO=playerO[playerO.length-(i+1)];
        switchFunc(itemO,playerO,"O");
        }
        
      }
    }else if(gameState.activePlayer==="X"){
      let {playerX}=gameState;
      playerX=playerX.sort();
      for(let i=0;i<playerX.length-2;i++){
        let itemX=playerX[playerX.length-(i+1)];
      switchFunc(itemX,playerX,"X");
      }
    }
  }
const ON_CLICK=sqNumber=>{ 
    if (gameState.digitOfSquare[sqNumber]===undefined && initialState.Winner===undefined){
        if(gameState.activePlayer==="X"){
            gameState.playerX.push(sqNumber);
            gameState.digitOfSquare[sqNumber]="X";
            if(gameState.playerX.length>=2)
                checkWinner();
            gameState.activePlayer="O";
        }else{
            gameState.playerO.push(sqNumber);
            gameState.digitOfSquare[sqNumber]="O";
            if(gameState.playerO.length>=2)
                checkWinner();
                gameState.activePlayer='X';
        }
    }
    Object.assign(gameState,checkWinner());
}
const rootReducer=(state=initialState,action={})=>{
    switch(action.type){
        case actionsType.ON_CLICK:
            ON_CLICK(action.payload);
            return Object.assign({},gameState);
        case actionsType.ON_RESTART:
            //gameState=state
            Object.assign(gameState,action.payload);
            return initialState;
        default:
            return state;
    }
};
export default rootReducer;
