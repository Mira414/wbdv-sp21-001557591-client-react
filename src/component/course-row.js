import React from "react";
import {Link} from "react-router-dom"

const CourseRow = ({deleteCourse,course})=>{
    return (
        <tr>
            <td>
                <Link to="/course/editor"> {course.title}</Link>
            </td>
            <td>{course.owner}</td>
            <td>{course.modified}</td>
            <td>
                <i className="fas fa-check"></i>
                <i onClick={()=>deleteCourse(course)} className="fas fa-trash"></i>
            </td>
        </tr>
    )
}

export default CourseRow