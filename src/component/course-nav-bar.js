import React,{useState} from "react"
import {Link} from "react-router-dom";

const CourseNavBar = ({addCourse})=>{
    const [newCourseTitle, setNewCourseTitle] = useState("")

    const setCourse = ()=>{
        if(newCourseTitle.length<1)
            alert("please input the title of new course")
        else {
            let newCourse ={
                title: newCourseTitle,
                owner: "me",
                modified: "1/1/2021"
            }
                addCourse(newCourse)
                console.log("else")
                document.getElementById("courseTitle").value=""
        }
        console.log("newCourseTitle:" + newCourseTitle)
    }

    return <div>

        <nav className="wm-sticky-Nav-Bar">
            <div className="row">
                <div className="col-1 wm-margin">
                    <Link to="/">
                        <i className="text-white fas fa-home"></i>
                    </Link>
                </div>
                <label className="text-white d-none d-lg-table-cell wm-course-manage-size">Course Manager</label>
                <div className="col">
                    <input id="courseTitle"
                           onChange={event => setNewCourseTitle(event.target.value) }
                           className="form-control" type="text"/>
                </div>
                <div className="col-1">
                    <span className="fa-stack" onClick={()=> setCourse()}>
                        <i className="fas fa-circle fa-stack-2x wm-red"></i>
                        <i className="fas fa-plus fa-stack-1x text-white"></i>
                    </span>
                </div>
            </div>
        </nav>
         <span className="fa-stack fa-2x wm-floating-child" onClick={()=> setCourse()}>
            <i className="fas fa-circle fa-stack-2x wm-red"></i>
            <i className="fas fa-plus fa-stack-1x text-white"></i>
         </span>
    </div>

}

export default CourseNavBar