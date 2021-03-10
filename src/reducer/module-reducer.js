
const initState = {
    modules : [],
    course : {}
}

const moduleReducer =(preState = initState, action)=>{
    let newState
    switch (action.type){
        case "FIND_COURSE_BY_ID":
            return {...preState,
            course : action.course}
        case "FIND_MODULES_FOR_COURSE":
            return {...preState,
                modules: action.modules}
        case "CREATE_MODULE":
            newState ={
                ...preState,
            modules : [...preState.modules,action.module]
            }
            // console.log("newstate module= " + newState.modules.length)
            return newState
        case "DELETE_MODULE":
            // alert("reducer del module:" + action.moduleToDelete.title)
            return ({...preState,
                modules: preState.modules.filter(
                    module => module._id === action.moduleIdToDelete? false : true)})
        case "UPDATE_MODULE":
            return ({...preState,
                    modules: preState.modules.map((module)=>{
                        if (module._id === action.moduleToUpdate._id) return action.moduleToUpdate
                        else return module
                    })
                })
        case "FIND_MODULE":
        default: return preState
    }
}

export default moduleReducer
