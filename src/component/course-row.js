import React from "react";

const CourseRow = ({deleteCourse,course})=>{
    return (
        <tr>
            <td>{course.title}</td>
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