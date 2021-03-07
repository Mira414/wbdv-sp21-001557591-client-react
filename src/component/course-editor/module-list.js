import React from "react";
import {connect} from "react-redux"
import EditableItem from "./editable-item";

const ModuleList = (
    {myModules=[],
        createModule=()=>alert("defa"),
        deleteModule,
        updateModule})=>{
    return <div>
        <ul className="list-group">
            {myModules.map((module)=>
                <li>
                    <EditableItem
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
                        onClick={createModule}
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
        createModule : ()=>
            dispatch({type: "CREATE_MODULE"}),
        deleteModule : (item)=>
            dispatch({type: "DELETE_MODULE", moduleToDelete: item}),
        updateModule : (item)=>
            dispatch({type: "UPDATE_MODULE", moduleToUpdate: item})

    }
}

export default connect(stpm, dtmp)(ModuleList)