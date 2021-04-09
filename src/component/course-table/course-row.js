import React,{useState} from "react";
import {Link} from "react-router-dom"

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import quizReducer from "../../reducer/quiz-reducer";

import QuizList from "../quiz/quiz-list";

const CourseRow = ({updateCourse, deleteCourse, course})=>{
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const setTitle= ()=>{
        let newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
        setEditing(false)
    }

    // const reducers = combineReducers({
    //     quizReducer
    // })
    //
    // const store = createStore(reducers)

    return (

            <tr className="">
                <td className="">
                    {!editing &&
                    <Link
                        to={`/courses/table/edit/${course._id}`}> {course.title}</Link>}
                    {editing &&
                    <input
                        value={newTitle}
                        onChange={event => setNewTitle(event.target.value) }
                        className="form-control"></input>}
                </td>
                <td className="d-none d-md-table-cell">{course.owner}</td>
                <td className="d-none d-lg-table-cell">{course.modified}</td>
                {/*<Provider store={store}>*/}
                    <td><Link to={`/courses/${course._id}/quizzes`}>Quizzes</Link></td>
                {/*</Provider>*/}
                <td className="">
                    {editing &&
                        <div>
                            <i onClick={() => setTitle()}
                               className="fas fa-check text-success"></i>
                            <i onClick={()=>deleteCourse(course)}
                               className="fas fa-times text-danger"></i>
                        </div>}
                    {!editing && <i onClick={() => setEditing(true)}
                                    className="fas fa-edit text-primary"></i>}
                </td>
            </tr>

    )
}

export default CourseRow