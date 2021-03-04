import React from "react";
import "./course-editor.css"

const CourseEditor = ({props}) => {
    return <div>
        <nav className="navbar navbar-expand-lg wm-Nav-Bar">
            <i onClick={()=>props.history.goBack()}
               className="fas fa-arrow-left text-white"></i>
            <div className="container-fluid">
                <div className="col-md-1">
                    <i className="fa fa-times fa-2x wm-light-font-weight"></i>
                </div>
                <div className="col-md-2 wm-h5">
                    CS5610 Web Dev
                </div>
                <ul className="col-md-9 nav">
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" aria-current="page" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" href="#" tabIndex="-1">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wm-nav-link" href="#" tabIndex="-1">
                            <i className="fas fa-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="row">
            <div className="col-3 wm-module">
                <ul className="list-group">
                    <a className="list-group-item wm-group-item">
                        Module 1 - jQuery
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        Module 2 - React
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item active">
                        Module 3 - Redux
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        Module 4 - Native
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        Module 5 - Angular
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        Module 6 - Node
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        Module 7 - Mongo
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-module wm-plus" href="#">
                        <i className="fas fa-plus fa-2x float-right text-white"></i>
                    </a>
                </ul>
            </div>
            <div className="col-9">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link active" aria-current="page" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                content was intentionally blank
            </div>
        </div>
    </div>

}

export default CourseEditor