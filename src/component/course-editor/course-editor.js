import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import "./course-editor.css";

import moduleReducer from "../../reducer/module-reducer";
import lessonReducer from "../../reducer/lesson-reducer";
import topicReducer from "../../reducer/topic-reducer";

import ModuleList from "./module-list";
import LessonTab from "./lesson-tab";
import TopicPill from "./topic-pill";


const reducers = combineReducers({
    moduleReducer : moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer : topicReducer
})

const store = createStore(reducers)


const CourseEditor = () => {

    // const {courseId, layout} = useParams()

    return <Provider store={store}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <ModuleList />
                </div>
                <div className="col">
                    <div className="container-fluid">
                        <div><br /></div>
                        <LessonTab />
                        <div className="">
                            <TopicPill />
                            content was intentionally blank
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Provider>

}

export default CourseEditor