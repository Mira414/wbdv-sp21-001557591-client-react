import React from "react"
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";

const LessonTab =({
                      lessons,
                      deleteLesson,
                      updateLesson,
                      createLesson})=>{

    const {courseId, moduleId} = useParams()

    return <ul className="col-md-9 nav">
            {
                lessons.map(lesson=>
                <li className="nav-item">
                    {/*<a className="nav-link wm-nav-link" aria-current="page" href="#">*/}
                        <EditableItem
                            to = {`/courses/editor/${courseId}/${moduleId}/${lesson.id}`}
                            key={lesson.id}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson} />
                    {/*</a>*/}
                </li>
                )
            }
            <li className="nav-item">
                <h4>lesson {courseId} {moduleId}</h4>
                <a className="nav-link wm-nav-link" href="#" tabIndex="-1">
                    <i onClick={createLesson} className="fas fa-plus"></i>
                </a>
            </li>
        </ul>
}

const stpm = (state)=>(
    {lessons:state.lessonReducer.lessons}
)

const dtmp = (dispatch)=>{
    return {
        createLesson : (lesson)=>dispatch(
            {type:"CREATE_LESSON"}
            ),
        deleteLesson : (lesson)=>dispatch(
            {type:"DELETE_LESSON", lessonToDelete: lesson}
            ),
        updateLesson : (lesson)=>dispatch(
            {type:"UPDATE_LESSON", lessonToUpdate: lesson}
            )
    }
}

export default connect(stpm, dtmp)(LessonTab)