import React,{useEffect} from "react"
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTab =({
                      lessons,
                      findLessonsForModule,
                      deleteLesson,
                      updateLesson,
                      createLesson})=>{

    const {layout, courseId, moduleId, lessonId} = useParams()

    useEffect(()=>{
        findLessonsForModule(moduleId)
        // console.log("find lessons " + lessons.length)
    }, [moduleId])

    return <>
        <ul className="col-md-5 nav">
            {
                lessons.map(lesson=>
                <li className={`nav-item ${lesson._id === lessonId? "active" : ""}`}>
                    {/*<a className="nav-link wm-nav-link" aria-current="page" href="#">*/}
                        <EditableItem
                            to = {`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                            key={lesson._id}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson} />
                    {/*</a>*/}
                </li>
                )
            }
        </ul>
        <div className="">
            <label>lesson {courseId} {moduleId}</label>
            <a className="nav-link wm-nav-link"
               href="#"
               tabIndex="-1">
                <i onClick={()=>createLesson(moduleId, {title: "new lesson"})}
                   className="fas fa-plus"></i>
            </a>
        </div>
    </>
}

const stpm = (state)=>(
    {lessons:state.lessonReducer.lessons}
)

const dtmp = (dispatch)=>{
    return {
        createLesson : (moduleId, lesson)=>
            lessonService.createLessonForModule(moduleId, lesson).then(
                newLesson => dispatch(
                {type:"CREATE_LESSON",
                lesson: newLesson}
                )
            ),
        deleteLesson : (lesson)=>dispatch(
            {type:"DELETE_LESSON", lessonToDelete: lesson}
            ),
        updateLesson : (lesson)=>
            lessonService.updateLesson(lesson._id, lesson).then(
                status=> {
                    dispatch({type: "UPDATE_LESSON", lessonToUpdate: lesson})
                    // console.log("lesson dtmp update lesson " + lesson._id)
                }
            ),
        findLessonsForModule : (moduleId)=>{
            lessonService.findLessonsForModule(moduleId).then(
                modules=>dispatch({type:"FIND_LESSONS_FOR_MODULE", modules})
            )
        }
        // findLessonsForModule : module =>alert("findLessonsForModule" + module)
    }
}

export default connect(stpm, dtmp)(LessonTab)