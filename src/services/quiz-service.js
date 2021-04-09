
// const QUIZZES_URL=`${process.env.REACT_APP_QUIZ_URL}/quizzes`
const QUIZZES_URL=process.env.REACT_APP_QUIZ_URL

const findAllQuizzes = ()=>{
    return fetch(`${QUIZZES_URL}/quizzes`).then(response=>response.json())
}

const findQuizById = (qId)=>{
    return fetch(`${QUIZZES_URL}/quizzes/${qId}`).then(res=>res.json())
}

const createQuiz = ()=>{}
const updateQuiz = ()=>{}
const deleteQuiz = ()=>{}

export default  {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
}