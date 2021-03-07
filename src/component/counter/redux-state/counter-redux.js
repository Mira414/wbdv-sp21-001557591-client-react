import React from "react";
import {Route} from "react-router-dom";
import CounterDisplay from "../redux-state/counter-display";
import CounterAdd from "../redux-state/counter-add";
import CounterMinus from "../redux-state/counter-minus";
import {createStore} from "redux";
import {Provider} from "react-redux"

const CounterRedux = ()=>{

    const initState = {
        count : 123
    }

    const reducer = (preState = initState, action)=>{
         switch (action.type) {
            case "add": return {count : preState.count + 1}
            case "minus": return {count: preState.count - 1}
            default: return preState;
        }
    }

    const store = createStore(reducer)

    return <Provider store={store}>
        <Route path="/counter/redux">
            <div>
                <CounterDisplay/>
                <CounterAdd />
                <CounterMinus />
            </div>
        </Route>
    </Provider>
}

export default CounterRedux