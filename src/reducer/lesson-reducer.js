const initState = {
    lessons:
        [{title: "lesson 1", id: "1-1"},
            {title: "lesson 2", id: "1-2"},
            {title: "lesson 3", id: "1-3"}
    ]
}

const lessonReducer =(preState=initState, action)=>{
    switch (action.type){
        case "DELETE_LESSON":
            // alert("reducer del lesson " + action.lessonToDelete.id)
            return {...preState,
                lessons: preState.lessons.filter(
                    (lesson)=>lesson.id === action.lessonToDelete.id? false : true)
            }
        case "CREATE_LESSON":
            const newLesson = {title : "new lesson", id : 1234567}
            return {...preState,
                lessons:[...preState.lessons,newLesson]}
        case "UPDATE_LESSON":
            // alert("reducer update lesson " + action.lessonToUpdate.id)
            return {...preState,
                lessons: preState.lessons.map(
                    (lesson)=>{
                        if (lesson.id === action.lessonToUpdate.id) return action.lessonToUpdate
                        else return lesson
                    })
            }
        case "FIND_LESSON":
        default: return preState
    }
    return preState
}

export default lessonReducer