import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Link to="/course/grid">
                    <i className="fas fa-th float-right"></i>
                </Link>
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course,ind)=>
                            <CourseRow
                                deleteCourse = {this.props.deleteCourse}
                                key = {ind}
                                course = {course}
                                />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
