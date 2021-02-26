import React from 'react'

const CourseCard = ({deleteCourse, course})=>{
    return <div className="col-4"><div className="card">
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Some quick example text to build on the card title </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <i onClick={deleteCourse} className="float-right fas fa-trash"></i>
        </div>
    </div></div>
}

export default CourseCard