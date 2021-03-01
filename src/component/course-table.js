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
                        // ()=>{console.log(this.props)
                        this.props.courses.map((course)=>
                            <CourseRow
                                deleteCourse = {this.props.deleteCourse}
                                updateCourse = {this.props.updateCourse}
                                // key = {ind}
                                course = {course}
                            />)
                        // }
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
