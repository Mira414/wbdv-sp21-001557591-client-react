import React from "react";
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import CourseService from "../services/course-service"

export default class CourseManager extends React.Component {
    state = {
        courses : []
    }

    componentDidMount= () =>
        CourseService.findAllCourses().then(
            acturalCourses => this.setState(
                {courses: acturalCourses}
            )
        )

    addCourses= ()=>{
        let newCourse = {
            title: "new course",
            owner: "me",
            modified: "1-37-01"
        }
        CourseService.createCourse(newCourse).then(
            status=>
                this.setState((preState)=>{
                    let nextState = {}
                    preState.courses.push(newCourse)
                    nextState = {...preState}
                    return nextState
                })
            )
    }

    deleteCourse = (delcourse)=>{
        console.log(delcourse)
        CourseService.deleteCourse(delcourse._id)
            .then(status=>{
                // const newCourses = this.state.courses.filter(course =>course !== delcourse)
                // this.setState({courses : newCourses})
                this.setState((preState)=>{
                    let nextState = {}
                    nextState.courses = preState.courses.filter(course =>course !== delcourse)
                    return nextState
                    // let nextState = {
                    //     ...preState,
                    //     courses : preState.courses.filter(course =>course !== delcourse)
                    // }
                })
            })
    }

    updateCourse = (updCourse)=> {
        console.log(updCourse)
        CourseService.updateCourse(updCourse._id, updCourse).then(
            () => {
                this.setState((preState) => {
                    let newState = {...preState}
                    newState.courses = preState.courses.map(
                        course => course._id === updCourse._id ? updCourse: course)
                    return newState
                })
            }
        )
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
                        updateCourse = {this.updateCourse}
                        courses= {this.state.courses}/>
                </Route>
                <Route path="/course/grid">
                    <CourseGrid
                        deleteCourse = {this.deleteCourse}
                        updateCourse = {this.updateCourse}
                        courses = {this.state.courses}/>
                </Route>
                <Route path="/course/editor"
                       render={(props)=> {
                           return <CourseEditor props={props}/>}}>

                </Route>
            </div>
        )
    }
}


