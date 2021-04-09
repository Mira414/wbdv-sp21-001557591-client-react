import React from 'react'
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import moduleReducer from "../reducer/module-reducer";
import lessonReducer from "../reducer/lesson-reducer";
import topicReducer from "../reducer/topic-reducer";
import widgetReducer from "../reducer/widget-reducer";
import quizReducer from "../reducer/quiz-reducer";


export default () => {

    const reducers = combineReducers({
        moduleReducer : moduleReducer,
        lessonReducer: lessonReducer,
        topicReducer : topicReducer,
        widgetReducer,
        quizReducer
    })

    const store = createStore(reducers)

    return <div className="container-fluid">
        <h1>Home</h1>
        <div className="list-group">
            <Provider store={store}>
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
            </Provider>
            <Link to="/counter/react" className="list-group-item">
                Counter React
            </Link>
            <Link to="/counter/redux" className="list-group-item">
                Counter Redux
            </Link>
        </div>
    </div>
}