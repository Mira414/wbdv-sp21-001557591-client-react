import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux"

import quizService from "../../services/quiz-service"

const QuizList = ({
                      quizzes,
                      findAllQuizzes,
                      findQuizById
                  })=>{

    // const [quizzes, setQuizzes] = useState([])

    const {courseId} = useParams()

    useEffect(()=>{
        // quizService.findAllQuizzes().then(quizzes=>setQuizzes(quizzes))
        findAllQuizzes()
    }, [])

    return <div className="container-fluid">
        <h3>Quiz List {quizzes.length}</h3>
        <ul className="list-group">
            {
                quizzes.map(quiz=>{
                    return <li
                                className="list-group-item"
                                key={quiz._id}>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}</Link>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} className="float-right">
                            <i className="btn btn-primary">Start</i>
                        </Link>

                    </li>
                })
            }
        </ul>
    </div>
}


const stpm = (state)=>{
    return {
        quizzes : state.quizReducer.quizzes
    }
}

const dtmp = (dispatch)=>{
    return {
        findAllQuizzes : ()=>{
            quizService.findAllQuizzes()
                .then(quizzes=>dispatch({type: "FIND_ALL_QUIZZES", quizzes}))
        },
        findQuizById : (quizId)=>{
            quizService.findQuizById(quizId)
                .then(quiz=>dispatch({type:"FIND_QUIZ_BY_ID", quiz}))
        }
    }
}

export default connect(stpm, dtmp)(QuizList)
// export default QuizList