import React,{Component} from 'react';
import './App.css';
import "../Component/Square";
import Squares from '../Component/Squares';
import {connect} from 'react-redux';
import {ONClick,ONRESTART} from '../actions';
const mapStateToProps=state=>({
    numberOfSquare:state.numberOfSquare,
    digitOfSquare:state.digitOfSquare,
    activePlayer:state.activePlayer,
    playerX:state.playerX,
    playerO:state.playerO,
    Winner:state.Winner,
    winnerClass:state.winnerClass
});
const mapDispatchToProps=dispatch=>({
    ON_Click:(player)=>dispatch(ONClick(player)),
    ON_RESTART:()=>dispatch(ONRESTART())
})
class App extends Component{
  render(){
    const {digitOfSquare,numberOfSquare,winnerClass,Winner}=this.props;
    const {ON_Click,ON_RESTART}=this.props;
    return(
    <div className="contanier">
      <div>
    <h1 className={winnerClass}>Winner is : {Winner}</h1>
      <Squares numberOfSquare={numberOfSquare} digitOfSquare={digitOfSquare} onSqClick={ON_Click}/>
      <div className="button">
      <button className="f4 link dim ph3 pv2 mb2 db white bg-blue" style={{border:'5px',borderRadius:'25px',marginTop:'25px',fontSize:'30px'}} onClick={ON_RESTART} >restart</button>
      </div>
      </div> 
    </div>);
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);
