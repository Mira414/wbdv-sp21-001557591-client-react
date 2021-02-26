import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";

export default class CourseManager extends React.Component {
    state = {
        courses : [
            {title:"12", owner: "asaa", modified: "1-1-21"},
            {title:"23", owner: "bbb", modified: "2-1-21"},
            {title:"45", owner: "ccc", modified: "3-1-21"},
            {title:"67", owner: "ddd", modified: "4-1-21"}
        ]
    }

    addCourses= ()=>{
        alert("add")
        let newCourse = {
            title: "new course",
            owner: "me",
            modified: "1-37-01"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (delcourse)=>{
        console.log(delcourse)
        const newCourses = this.state.courses.filter(course =>course !== delcourse)
        this.setState({courses : newCourses})
    }

    render() {
        return (
            <div className="App">
                manager
                <button onClick={this.addCourses}></button>
                <CourseTable deleteCourse = {this.deleteCourse} courses= {this.state.courses}/>
                <CourseGrid deleteCourse = {this.deleteCourse} courses = {this.state.courses}/>
            </div>
        )
    }
}


