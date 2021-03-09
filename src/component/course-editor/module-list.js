import React, {useEffect} from "react";
import {connect} from "react-redux"
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import ModuleService from "../../services/module-service"

const ModuleList = (
    {myModules,
        createModule=()=>alert("defa"),
        deleteModule,
        updateModule,
        findModulesForCourse
    })=>{

    const {courseId} = useParams()

    useEffect(()=> {
        findModulesForCourse(courseId)
        console.log("effect modules=" +myModules.length)
    },[])

    return <div>
        <ul className="list-group">
            {myModules.map((module)=>
                <li>
                    <EditableItem
                        to={`/courses/editor/${courseId}/${module._id}`}
                        item={module}
                        key={module.id}
                        deleteItem={deleteModule}
                        updateItem={updateModule}/>
                </li>
            )}
            <li>
                <a className="nav-link wm-nav-link"
                   href="#"
                   tabIndex="-1">
                    <i
                        onClick={()=>createModule(courseId,{title:"new Module"})}
                        className="fas fa-plus text-white float-right"></i>
                </a>
            </li>
        </ul>
    </div>
}

const stpm = (state)=>{
    return {
        myModules : state.moduleReducer.modules
    }
}

const dtmp = (dispatch)=>{
    return {
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