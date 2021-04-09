
const initState = {
    quizzes : []
}

const quizReducer = (preState=initState, action)=>{
    switch (action.type){
        case 'FIND_ALL_QUIZZES':
            return {...preState, quizzes: action.quizzes}
        case 'FIND_QUIZ_BY_ID':
            return {...preState, quiz: action.quiz}
        default: return preState
    }
}

export default quizReducer