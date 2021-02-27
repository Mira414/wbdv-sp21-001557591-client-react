import React from "react";
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

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
                <div className="row">
                    <h3 className="col-6">Course Manager</h3>
                    <button onClick={this.addCourses} className="col-2">Add</button>
                </div>
                <Route path="/course/table">
                    <CourseTable
                        deleteCourse = {this.deleteCourse}
                        courses= {this.state.courses}/>
                </Route>
                <Route path="/course/grid">
                    <CourseGrid
                        deleteCourse = {this.deleteCourse}
                        courses = {this.state.courses}/>
                </Route>
                <Route path="/course/editor"
                       render={(props)=> {
                           console.log(props)
                           return <CourseEditor props={props}/>}}>

                </Route>
            </div>
        )
    }
}


