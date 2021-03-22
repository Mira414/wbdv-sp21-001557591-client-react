import React,{useEffect} from "react"
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTab =({
                      lessons,
                      findCourseById,
                      findLessonsForModule,
                      deleteLesson,
                      updateLesson,
                      createLesson})=>{

    let {layout, courseId, moduleId, lessonId} = useParams()


    useEffect(()=>{
        if(moduleId !== "undefined" && typeof moduleId !== "undefined"){
            console.log("moduleId is not null")
            findLessonsForModule(moduleId)
        }
        else{
            console.log("moduleId is undefined")
            lessons = []
        }
        console.log("find lessons " + lessons.length)
    }, [moduleId])

    return <>
        <ul className="nav nav-tabs">
            {
                // console.log("lessons =" + lessons.length)
                lessons.map(lesson=>
                <li className={`nav-item ${lesson._id === lessonId? "active" : ""}`}>
                    <EditableItem
                        to = {`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                        key={lesson._id}
                        deleteItem={deleteLesson}
                        updateItem={updateLesson}
                        item={lesson} />
                </li>
                )
            }
            <a className="nav-link"
               href="#"
               tabIndex="-1">
                <i onClick={()=>createLesson(moduleId, {title: "New Lesson"})}
                   className="fas fa-plus"></i>
            </a>
        </ul>
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
        deleteLesson :
            (lesson)=> lessonService.deleteLesson(lesson._id).then(
                dispatch(
                    {type:"DELETE_LESSON", lessonToDelete: lesson}
                    )
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