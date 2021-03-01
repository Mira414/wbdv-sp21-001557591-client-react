import React from "react";
import {Link} from "react-router-dom"

const CourseEditor = ({props}) => {
    return <div>
        <i onClick={()=>props.history.goBack()}
           className="fas fa-arrow-left"></i>
        <h4>editor</h4>
    </div>

}

export default CourseEditor