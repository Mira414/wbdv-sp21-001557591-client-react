import React from "react"
import {connect} from "react-redux"

const CounterAdd = ({addCount})=>{
    return <button onClick={addCount}>Add</button>
}

const stateToPropertyMapper= ()=>{}

const dispatchToPropertyMapper = (dispatch)=>{
    return {
        addCount : () => {
            dispatch({type: "add"})
        }
    }
}

export default connect(stateToPropertyMapper,
    dispatchToPropertyMapper)(CounterAdd)