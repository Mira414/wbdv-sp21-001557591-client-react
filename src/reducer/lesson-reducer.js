const initState = {
    lessons:
        []
}

const lessonReducer =(preState=initState, action)=>{
    switch (action.type){
        case "DELETE_LESSON":
            // alert("reducer del lesson " + action.lessonToDelete._id)
            return {...preState,
                lessons: preState.lessons.filter(
                    (lesson)=>lesson._id === action.lessonToDelete._id? false : true)
            }
        case "CREATE_LESSON":
            return {...preState,
                lessons:[...preState.lessons,action.lesson]}
        case "UPDATE_LESSON":
            // console.log("reducer update lesson " + action.lessonToUpdate._id)
            return {...preState,
                lessons: preState.lessons.map(
                    (lesson)=>{
                        if (lesson._id === action.lessonToUpdate._id) return action.lessonToUpdate
                        else return lesson
                    })
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {...preState,
                lessons: action.modules
            }
        default: return preState
    }
    return preState
}

export default lessonReducer