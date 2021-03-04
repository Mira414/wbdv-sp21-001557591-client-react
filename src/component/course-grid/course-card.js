import React,{useState} from 'react'
import {Link} from "react-router-dom";


const CourseCard = ({deleteCourse, updateCourse, course})=>{

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] =useState(course.title)

    let imgDir = "default.png"
    const csCourseList = ["css","html","jquery","js","mysql","nodejs","react"]
    if(csCourseList.includes(course.title))
        imgDir= course.title + ".png"

    const setTitle= ()=>{
        let newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
        setEditing(false)
    }

    return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card wm-card">
                <div className="card-body">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${imgDir}`}
                        width="60%"
                        height="60%"
                        onClick={()=>setEditing(true)}></img>
                    {editing &&
                        <div className="wm-operation">
                            <i onClick={() => setTitle()}
                               className="fas fa-check text-success"></i>
                            <i onClick={() => deleteCourse(course)}
                               className="float-right fas fa-times text-danger"></i>
                        </div>}

                    {!editing &&
                        <h5 className="card-title">{course.title}</h5>}
                    {editing &&
                        <input
                            value={newTitle}
                            type="text"
                            className="form-control"
                            onChange={event => setNewTitle(event.target.value)}></input>}
                    <p className="card-text">Some Description </p>
                    <Link
                        to="/courses/editor"
                        className="btn btn-primary"> {course.title}</Link>
                    {!editing && <i onClick={() => setEditing(true)}
                                    className="fas fa-edit text-primary wm-edit"></i>}
                </div>
            </div>
        </div>
}

export default CourseCard