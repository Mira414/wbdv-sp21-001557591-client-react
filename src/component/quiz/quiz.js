import React,{useEffect, useState} from "react"
import {useParams} from "react-router-dom";

import quizService from "../../services/quiz-service"
import questionService from "../../services/question-service"
import Question from "./question/question";


const Quiz = ()=>{

    const {quizId} = useParams()

    const [quiz, setQuiz] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        quizService.findQuizById(quizId).then(quiz=>setQuiz(quiz))
        questionService.findQuestionForQuiz(quizId).then(questions=>setQuestions(questions))
    },[])
    return <div className="container-fluid">
        <h3>{quiz.title} </h3>
        <ul className="list-group">
            {
                questions.map(question=>(
                    <li className="list-group-item" key={question._id}>
                        <Question question={question}/>
                    </li>))
            }
        </ul>

    </div>
}

export default Quiz