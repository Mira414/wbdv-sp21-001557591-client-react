import React,{useState} from "react";
import {Link} from "react-router-dom"

const CourseRow = ({updateCourse, deleteCourse, course})=>{
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)

    const setTitle= ()=>{
        let newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
        setEditing(false)
    }

    return (
        <tr className="">
            <td className="">
                {!editing &&
                <Link
                    to={`/courses/editor/${course._id}`}> {course.title}</Link>}
                {editing &&
                <input
                    value={newTitle}
                    onChange={event => setNewTitle(event.target.value) }
                    className="form-control"></input>}
            </td>
            <td className="d-none d-md-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.modified}</td>
            <td className="">
                {editing &&
                    <div>
                        <i onClick={() => setTitle()}
                           className="fas fa-check text-success"></i>
                        <i onClick={()=>deleteCourse(course)}
                           className="fas fa-times text-danger"></i>
                    </div>}
                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit text-primary"></i>}
            </td>
        </tr>
    )
}

export default CourseRow