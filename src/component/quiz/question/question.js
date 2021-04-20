import React from 'react'
import MultipleChoicesQuestion from "./multiple-choices-question";
import TrueFalseQuestion from "./true-false-question";
import questionService from "../../../services/question-service";
import quizService from "../../../services/quiz-service";

const Question = ({
                      attempt,
    updateAttempt
                })=>{
    return <div className="container-fluid">
        {
            attempt.type === 'MULTIPLE_CHOICE' &&
                <MultipleChoicesQuestion question={attempt} updateAttempt={updateAttempt}/>
        }
        {
            attempt.type === 'TRUE_FALSE' &&
                <TrueFalseQuestion question={attempt} updateAttempt={updateAttempt}/>
        }
    </div>
}

// const stpm = (state)=>{
//     return {
//         currentQuiz : state.quizReducer.currentQuiz,
//         questions : state.quizReducer.questions
//     }
// }
//
// const dtmp = (dispatch)=>{
//     return {
//         findQuestionForQuiz : (qId)=>{
//             questionService.findQuestionForQuiz(qId)
//                 .then(questions=>dispatch({type: "FIND_QUESTIONS_FOR_QUIZ", questions}))
//         },
//         findQuizById : (quizId)=>{
//             quizService.findQuizById(quizId)
//                 .then(quiz=>dispatch({type:"FIND_QUIZ_BY_ID", quiz}))
//         }
//     }
// }

export default Question