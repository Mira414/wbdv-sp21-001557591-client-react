import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "./course-table.css";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="container wm-container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td className="d-none d-md-table-cell">Owned by</td>
                            <td className="d-none d-lg-table-cell">Last Modified</td>
                            <td className="d-none d-lg-table-cell">Quizzes</td>
                            <td>
                                <i className="fas fa-folder"></i>
                                <i className="fas fa-sort-alpha-up"></i>
                                <Link to="/courses/grid">
                                    <i className="fas fa-th"></i>
                                </Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course)=>
                            <CourseRow
                                deleteCourse = {this.props.deleteCourse}
                                updateCourse = {this.props.updateCourse}
                                key = {course._id}
                                course = {course}
                                // layout = "table"
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
