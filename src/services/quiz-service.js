
// const QUIZZES_URL=`${process.env.REACT_APP_QUIZ_URL}/quizzes`
const QUIZZES_URL=process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = ()=>{
    return fetch(`${QUIZZES_URL}/quizzes`).then(response=>response.json())
}

const findQuizById = (qId)=>{
    return fetch(`${QUIZZES_URL}/quizzes/${qId}`).then(res=>res.json())
}

// quizzes/:quizId/attempts
const createQuizAttempts = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`, {
        method : 'POST',
        body : JSON.stringify(questions),
        headers : {
            'content-type' : "application/json"
        }
    }).then(res => res.json())
}

const findAttemptsForQuiz = (quizId) => {
    console.log("findAttemptsForQuiz")
    return fetch(`${QUIZZES_URL}/quizzes/${quizId}/attempts`)
        .then(res => res.json())
}

const createQuiz = ()=>{}
const updateQuiz = ()=>{}
const deleteQuiz = ()=>{}

export default  {
    findAllQuizzes,
    findQuizById,
    createQuizAttempts,
    findAttemptsForQuiz,
    createQuiz,
    updateQuiz,
    deleteQuiz
}