import React from "react"
import {connect} from "react-redux"

const CounterMinus =({minus})=>{

    return <button onClick={minus}>Minus</button>
}

const stpm =()=>{}
const dtpm = (dispatch)=>{
    return {
        minus : ()=>{
            dispatch({type: "minus"})
        }
    }
}
export default connect(stpm, dtpm)(CounterMinus)