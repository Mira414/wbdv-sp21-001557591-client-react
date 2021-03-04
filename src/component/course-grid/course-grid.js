import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "./course-grid.css"

const CourseGrid = ({deleteCourse, updateCourse, courses}) =>{
    return (
            <div className="container wm-container">
                <div className="row">
                    <label className="col-4 d-none d-md-table-cell">Recent Documents</label>
                    <div className="col-4 d-none d-md-table-cell">
                        <label>Owned by me</label>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="float-right">
                            <i className="fas fa-folder"></i>
                            <i className="fas fa-sort-alpha-up"></i>
                            <Link to="/courses/table">
                                <i className="fas fa-list"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {courses.map(course =>
                        <CourseCard
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            key = {course._id}
                            course={course} />)}
                </div>
            </div>)
}

export default CourseGrid