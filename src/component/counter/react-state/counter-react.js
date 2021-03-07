import React from "react"
import CounterAdd from "./counter-add";
import {Route} from "react-router-dom";
import CounterMinus from "./counter-minus";
import CounterDisplay from "./counter-display";

export default class CounterReact extends React.Component {

    state ={
        count : 123
    }

    addCount=()=>{
        this.setState(preState=>({...preState,
            count: preState.count+1}))
    }

    MinusCount=()=>{
        this.setState(
            preState =>({...preState,
                count: preState.count - 1}))
    }

    render() {
        return <Route path="/counter/react">
            <div>
                <CounterDisplay count={this.state.count}/>
                <CounterAdd addCount={this.addCount}/>
                <CounterMinus minus={this.MinusCount}/>
            </div>
        </Route>
    }

}