import React from "react";
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
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
        )
    }
}
