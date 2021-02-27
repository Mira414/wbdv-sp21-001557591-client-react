import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({deleteCourse, course})=>{
    return <div className="col-4"><div className="card">
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Some quick example text to build on the card title </p>
            <Link to="/course/editor" className="btn btn-primary"> {course.title}</Link>
            <i onClick={deleteCourse} className="float-right fas fa-trash"></i>
        </div>
    </div></div>
}

export default CourseCard