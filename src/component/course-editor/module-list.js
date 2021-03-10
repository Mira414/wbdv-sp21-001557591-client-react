import React, {useEffect} from "react";
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import {Link, useParams} from "react-router-dom";
import ModuleService from "../../services/module-service"
import courseService from "../../services/course-service";

const ModuleList = (
    {myModules,
        course,
        findCourseById,
        createModule=()=>alert("defa"),
        deleteModule,
        updateModule,
        findModulesForCourse
    })=>{

    const {layout, courseId, moduleId} = useParams()

    useEffect(()=> {
        findModulesForCourse(courseId)
        findCourseById(courseId)
    },[])

    return <div>
        <div className="row">
            <Link
                to={`/courses/${layout}`}
                className="col-2">
            <i className="fas fa-times fa-2x"></i>
        </Link>
        <h4>{course.title}</h4>
        </div>
        <ul className="list-group">
            {myModules.map((module)=>
                <li className={`list-group-item ${module._id === moduleId? "active" : ""}`}>
                    <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                        item={module}
                        key={module._id}
                        deleteItem={deleteModule}
                        updateItem={updateModule}/>
                </li>
            )}
            <li className="list-group-item">
                <a className="nav-link"
                   href="#"
                   tabIndex="-1">
                    <i
                        onClick={()=>createModule(courseId,{title:"new Module"})}
                        className="fas fa-plus float-right"></i>
                </a>
            </li>
        </ul>
    </div>
}

const stpm = (state)=>{
    return {
        myModules : state.moduleReducer.modules,
        course : state.moduleReducer.course
    }
}

const dtmp = (dispatch)=>{
    return {
        findCourseById : courseId =>
            courseService.findCourseById(courseId)
                .then(course=>dispatch({type: "FIND_COURSE_BY_ID", course})),
        deleteModule : (module)=>
            ModuleService.deleteModule(module._id).then(
                dispatch({type: "DELETE_MODULE", moduleIdToDelete: module._id}),
            ),
        updateModule : (module)=>
            ModuleService.updateModule(module._id, module).then(status=>{
                dispatch({type: "UPDATE_MODULE", moduleToUpdate: module})
            }),
        findModulesForCourse : (courseId)=>{
            ModuleService.findModulesForCourse(courseId)
                .then(acturalModules=> {
                    dispatch({type: "FIND_MODULES_FOR_COURSE", modules: acturalModules})
                    // alert("dtmp " + acturalModules.length)
                })
        },
        createModule : (courseId, module) =>
            ModuleService.createModuleForCourse(courseId, module)
                .then(newModule=>dispatch({type: "CREATE_MODULE", module: newModule}))
    }
}

export default connect(stpm, dtmp)(ModuleList)