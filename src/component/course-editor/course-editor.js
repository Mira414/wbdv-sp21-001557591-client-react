import React from "react";
import "./course-editor.css"
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducer/module-reducer";
import {Provider} from "react-redux";
import {useParams} from "react-router-dom"
import ModuleList from "./module-list";
import LessonTab from "./lesson-tab";
import lessonReducer from "../../reducer/lesson-reducer";

const reducers = combineReducers({
    moduleReducer : moduleReducer,
    lessonReducer: lessonReducer
})

const store = createStore(reducers)

const CourseEditor = ({props}) => {

    const {courseId} = useParams()

    return <Provider store={store}>
        <div>
            <nav className="navbar navbar-expand-lg wm-Nav-Bar">
                <i onClick={()=>props.history.goBack()}
                   className="fas fa-arrow-left text-white"></i>
                <div className="container-fluid">
                    <div className="col-md-1">
                        <i className="fa fa-times fa-2x wm-light-font-weight"></i>
                    </div>
                    <div className="col-md-2 wm-h5">
                        CS5610 Web Dev {console.log({courseId})}
                    </div>
                    <LessonTab />
                </div>
            </nav>
        <div className="row">
            <div className="col-3 wm-module">
                <ModuleList />
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
    </Provider>

}

export default CourseEditor