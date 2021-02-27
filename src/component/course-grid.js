import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, courses}) =>{
    return (
            <div className="container">
                <Link to="/course/table">
                    <i className="fas fa-list"></i>
                </Link>
                <div className="row">
                        {courses.map(course =>
                            <CourseCard
                                deleteCourse={deleteCourse}
                                course={course} />)}
                    </div>
            </div>)
}

export default CourseGrid