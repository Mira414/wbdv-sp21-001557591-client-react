import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import "./course-editor.css";

import moduleReducer from "../../reducer/module-reducer";
import lessonReducer from "../../reducer/lesson-reducer";
import topicReducer from "../../reducer/topic-reducer";
import widgetReducer from "../../reducer/widget-reducer";

import ModuleList from "./module-list";
import LessonTab from "./lesson-tab";
import TopicPill from "./topic-pill";
import WidgetList from "./widgets/widget-list";


const reducers = combineReducers({
    moduleReducer : moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer : topicReducer,
    widgetReducer
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
                        <div>
                            <TopicPill />
                            <WidgetList />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Provider>

}

export default CourseEditor