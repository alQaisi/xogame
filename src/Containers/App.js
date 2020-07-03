import React,{Component} from 'react';
import './App.css';
import "../Component/Square";
import Squares from '../Component/Squares';
class App extends Component{
  constructor(){
    super();
    this.state={
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
  }
  ReStart=()=>{
    this.setState({playerO:[]
      ,playerX:[]
      ,activePlayer:"X"
      ,digitOfSquare:[undefined,undefined,undefined
        ,undefined,undefined,undefined
        ,undefined,undefined,undefined],
      Winner:undefined,
      winnerClass:"winner tc"
  })
  }
  checkWinner(){
    const switchFunc=(item,array,player)=>{
      switch(true){
        case item===2:
          if(array.includes(1) && array.includes(0))
              this.setState({Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===5:
          if(array.includes(3) && array.includes(4))
              this.setState({Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===6:
          if((array.includes(3) && array.includes(0)) || (array.includes(4) && array.includes(2)))
              this.setState({Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===7:
          if(array.includes(4) && array.includes(1))
              this.setState({Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        case item===8:
          if((array.includes(4) && array.includes(0)) || (array.includes(6) && array.includes(7)) ||(array.includes(5) && array.includes(2)))
              this.setState({Winner:player,winnerClass:"winner tc winnerClass"});
          break;
        default:;
      }
    }
    const {activePlayer}=this.state;
    if(activePlayer==="O"){
      let {playerO}=this.state;
      if(playerO.length>=3){
        playerO=playerO.sort();
        for(let i=0;i<playerO.length-2;i++){
          let itemO=playerO[playerO.length-(i+1)];
        switchFunc(itemO,playerO,"O");
        }
        
      }
    }else{
      let {playerX}=this.state;
      playerX=playerX.sort();
      for(let i=0;i<playerX.length-2;i++){
        let itemX=playerX[playerX.length-(i+1)];
      switchFunc(itemX,playerX,"X");
      }
    }
  }
  onSqClick=(sqNumber)=>{
    const {digitOfSquare,activePlayer,playerX,playerO}=this.state;
    if(digitOfSquare[sqNumber]===undefined && this.state.Winner===undefined){
      if (activePlayer==="X"){
        this.setState({activePlayer:"O"});
        playerX.push(sqNumber);
        this.setState({playerX:playerX});
        digitOfSquare[sqNumber]="X";
        if(playerX.length>=2)
            this.checkWinner();
      }else{
        this.setState({activePlayer:"X"});
        playerO.push(sqNumber);
        this.setState({playerO:playerO});
        digitOfSquare[sqNumber]="O";
        if(playerO.length>=2)
            this.checkWinner();
      }
      this.setState({digitOfSquare:digitOfSquare});
    }
      
  }
  render(){
    return(
      
    <div className="contanier">
      <div>
    <h1 className={this.state.winnerClass}>Winner is : {this.state.Winner}</h1>
      <Squares numberOfSquare={this.state.numberOfSquare} digitOfSquare={this.state.digitOfSquare} onSqClick={this.onSqClick}/>
      <div className="button">
      <button className="f4 link dim ph3 pv2 mb2 db white bg-blue" style={{border:'5px',borderRadius:'25px',marginTop:'25px',fontSize:'30px'}} onClick={this.ReStart} >restart</button>
      </div>
      
      </div> 
    </div>);
  }
}
export default App;
