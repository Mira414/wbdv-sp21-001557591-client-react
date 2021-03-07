
const initState = {
    modules : [
        {id: 789, title: "cs123"},
        {id: 234, title: "cs234"},
        {id: 345, title: "cs345"}
        ]
}

const moduleReducer =(preState = initState, action)=>{
    let newState
    switch (action.type){
        case "CREATE_MODULE":
            newState ={
                ...preState,
            modules : [
                ...preState.modules,
                {id : 345, title:"new module"}
                ]
            }
            console.log("newstate module= " + newState.modules.length)
            return newState
        case "DELETE_MODULE":
            // alert("reducer del module:" + action.moduleToDelete.title)
            return ({...preState,
                modules: preState.modules.filter(
                    module => module.id === action.moduleToDelete.id? false : true)})
        case "UPDATE_MODULE":
            return ({...preState,
                    modules: preState.modules.map((module)=>{
                        if (module.id === action.moduleToUpdate.id) return action.moduleToUpdate
                        else return module
                    })
                })
        case "FIND_MODULE":
        default: return preState
    }
}

export default moduleReducer
