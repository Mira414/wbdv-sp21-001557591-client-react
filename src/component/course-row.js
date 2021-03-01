import React,{useState} from "react";
import {Link} from "react-router-dom"
import {updateCourse} from "../services/course-service";

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
        <tr>
            <td>
                {!editing && <Link to="/course/editor"> {course.title}</Link>}
                {editing &&
                <input
                    value={newTitle}
                    onChange={event => setNewTitle(event.target.value) }
                    className="form-control"></input>}
            </td>
            <td>{course.owner}</td>
            <td>{course.modified}</td>
            <td>
                {editing && <i onClick={() => setTitle()} className="fas fa-check"></i>}
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                <i onClick={()=>deleteCourse(course)} className="fas fa-trash"></i>
            </td>
        </tr>
    )
}

export default CourseRow