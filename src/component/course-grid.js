import React from "react";
import CourseCard from "./course-card";

const CourseGrid = ({deleteCourse, courses}) =>{
    return (
            <div className="container">
                <div className="row">
                        {courses.map(course =>
                            <CourseCard deleteCourse={deleteCourse} course={course} />)}
                    </div>
            </div>)
}

export default CourseGrid