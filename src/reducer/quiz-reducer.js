
const initState = {
    quizzes : [],
    currentQuiz : {},
    questions: [],
    attempts : []
}

const quizReducer = (preState=initState, action)=>{
    switch (action.type){
        case 'FIND_ALL_QUIZZES':
            return {...preState, quizzes: action.quizzes}
        case 'FIND_QUIZ_BY_ID':
            return {...preState, currentQuiz: action.quiz}
        case 'FIND_QUESTIONS_FOR_QUIZ':
            return {...preState, questions: action.questions}
        case 'UPDATE_ATTEMPT':{
            // console.log("UPDATE_ATTEMPT")
            return {...preState, questions: preState.questions.map((attempt) => {
                    if(attempt._id === action.attemptToUpdate._id) {
                        // console.log("attemptToUpdate ===" + action.attemptToUpdate.answer)
                        return action.attemptToUpdate
                    }
                    else {
                        // console.log("no update ===" + attempt)
                        return attempt
                    }
                })}}
        case 'FIND_ATTEMPTS_FOR_QUIZ':
            return {...preState, attempts: action.attempts}
        default: return preState
    }
}

export default quizReducer