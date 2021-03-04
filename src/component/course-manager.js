import React from "react";
import {Route,Link} from "react-router-dom"
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import CourseService from "../services/course-service"
import CourseNavBar from "./course-nav-bar";

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


    addCourse= (newCourse)=>{
        CourseService.createCourse(newCourse).then(
            status=>
                this.setState((preState)=>{
                    console.log("manager add course")
                    let nextState = {...preState}
                    nextState.courses.push(newCourse)
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

    deleteAllCourse= ()=> {
        console.log("manager-del all course::before=" + this.state.courses.length)
        let newCourses = this.state.courses.slice(1,780)
        for(let i=0;i<newCourses.length;i++){
            let id = newCourses[i]._id
            CourseService.deleteCourse(id).then()
        }
        console.log("manager-del all course::after=" + this.state.courses.length)
    }

    render() {
        return (
            <div>
                <Route path="/courses/table">
                    <CourseNavBar addCourse={this.addCourse}/>
                    <CourseTable
                        deleteCourse = {this.deleteCourse}
                        updateCourse = {this.updateCourse}
                        addCourse = {this.addCourse}
                        courses= {this.state.courses}/>
                </Route>
                <Route path="/courses/grid" >
                    <CourseNavBar addCourse={this.addCourse}/>
                    <CourseGrid
                        deleteCourse = {this.deleteCourse}
                        updateCourse = {this.updateCourse}
                        addCourse = {this.addCourse}
                        courses = {this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props)=> {
                           return <CourseEditor props={props}/>}}>
                </Route>
            </div>
        )
    }
}


