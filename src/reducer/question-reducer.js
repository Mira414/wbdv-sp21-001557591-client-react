
const initState = {
    // quizzes : [],
    currentQuiz : {},
    questions: []
}

const questionReducer = (preState=initState, action)=>{
    switch (action.type){
        case 'FIND_ALL_QUIZZES':
            return {...preState, quizzes: action.quizzes}
        case 'FIND_QUIZ_BY_ID':
            return {...preState, quiz: action.quiz}
        case 'FIND_QUESTIONS_FOR_QUIZ':
            return {...preState, questions: action.questions}
        default: return preState
    }
}

export default questionReducer