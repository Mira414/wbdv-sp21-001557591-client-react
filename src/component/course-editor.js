import React from "react";
import {Link} from "react-router-dom"

const CourseEditor = ({props}) => {
    console.log("editor" + props.history)
    return <div>
        <i onClick={()=>props.history.goBack()}
           className="fas fa-arrow-left"></i>
        <h4>editor</h4>
    </div>

}

export default CourseEditor