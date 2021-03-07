import React from 'react'
import {connect} from "react-redux"

const CounterDisplay = ({myCount})=>{

    return <h4>Count: {myCount}</h4>
}

const stateToPropertyMapper = (state)=>{
    return {
        myCount : state.count
    }
}

export default connect(stateToPropertyMapper)(CounterDisplay)