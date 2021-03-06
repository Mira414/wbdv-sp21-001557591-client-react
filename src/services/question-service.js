// const QUIZZES_URL="http://localhost:4000/api/quizzes"
const QUIZZES_URL=process.env.REACT_APP_QUIZ_URL

const findQuestionForQuiz = (qId) =>{
    return fetch(`${QUIZZES_URL}/quizzes/${qId}/questions`).then(res=>res.json())
}

const createQuestion = ()=>{}
const updateQuestion = ()=>{}
const deleteQuestion = ()=>{}

export default  {
    findQuestionForQuiz,
    createQuestion,
    updateQuestion,
    deleteQuestion
}