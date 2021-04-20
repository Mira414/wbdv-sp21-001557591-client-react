import React,{useEffect, useState} from "react"
import {useParams} from "react-router-dom";

import quizService from "../../services/quiz-service"
import questionService from "../../services/question-service"
import Question from "./question/question";
import {connect} from "react-redux";

import "../quiz/quiz.css"


const Quiz = ({
                  currentQuiz,
                  questions,
                  attempts,
                  findQuizById,
                  findQuestionForQuiz,
                  findAttemptsForQuiz,
                  createQuizAttempt,
                  updateAttempt
              })=>{

    const {quizId} = useParams()

    let n = 1;

    // const [quiz, setQuiz] = useState({})
    // const [questions, setQuestions] = useState([])

    useEffect(()=>{
        // quizService.findQuizById(quizId).then(quiz=>setQuiz(quiz))
        // questionService.findQuestionForQuiz(quizId).then(questions=>setQuestions(questions))
        findQuizById(quizId)
        findQuestionForQuiz(quizId)
        findAttemptsForQuiz(quizId)
    },[])
    return <div className="container-fluid">
        <h3>{currentQuiz.title} </h3>
        <ul className="list-group">
            {
                questions.map(attempt=>(
                    <li className="list-group-item" key={attempt._id}>
                        <Question attempt={attempt} updateAttempt={updateAttempt}/>
                    </li>))
            }
        </ul>
        <br />
        <i className="btn btn-success" onClick={()=> {
            createQuizAttempt(quizId, questions)
            findAttemptsForQuiz(quizId)
        }}>Submit</i>
        <br />
        <h4 className="wm-table">Attempt History {attempts.length}</h4>
        <table className="table table-bordered wm-table">
            <thead>
                <tr>
                    <th>Attempt</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {
                    attempts.map((attempt)=><tr>
                        <td>Attempt {n++}</td>
                        <td>{attempt.score}</td>
                    </tr>)

            }
            </tbody>
        </table>



    </div>
}

const stpm = (state)=>{
    return {
        currentQuiz : state.quizReducer.currentQuiz,
        questions : state.quizReducer.questions,
        attempts: state.quizReducer.attempts
    }
}

const dtmp = (dispatch)=>{
    return {
        findQuestionForQuiz : (qId)=>{
            questionService.findQuestionForQuiz(qId)
                .then(questions=>dispatch({type: "FIND_QUESTIONS_FOR_QUIZ", questions}))
        },
        findQuizById : (quizId)=>{
            quizService.findQuizById(quizId)
                .then(quiz=>dispatch({type:"FIND_QUIZ_BY_ID", quiz}))
        },
        updateAttempt : (attemptToUpdate) => {
            dispatch({type: "UPDATE_ATTEMPT", attemptToUpdate})
        },
        createQuizAttempt : (quizId, questions) => {
            quizService.createQuizAttempts(quizId, questions)
                .then((quizAttempts) => dispatch({
                type: "CREATE_QUIZ_ATTEMPT", quizAttempts
                }))
        },
        findAttemptsForQuiz : (quizId) => {
            quizService.findAttemptsForQuiz(quizId)
                .then((attempts) => dispatch({type: "FIND_ATTEMPTS_FOR_QUIZ", attempts}))
        }
    }
}

export default connect(stpm, dtmp)(Quiz)