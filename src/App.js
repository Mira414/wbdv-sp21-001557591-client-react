import './App.css';
import React from "react";
import CourseManager from "./component/course-manager";
import CourseEditor from "./component/course-editor/course-editor";
import Home from "./component/home"
import {BrowserRouter, Route} from "react-router-dom";
import CounterReact from "./component/counter/react-state/counter-react";
import CounterRedux from "./component/counter/redux-state/counter-redux";
import QuizList from "./component/quiz/quiz-list";
import Quiz from "./component/quiz/quiz";

const App = () =>{
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/courses/:layout" exact={true} component={CourseManager}></Route>
            <Route path={["/courses/:layout/edit",
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/:moduleId",
                        "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
                        "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
                        "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId"
            ]}
                   exact={true}
                   component={CourseEditor}></Route>
            <Route path="/courses/:courseId/quizzes" exact={true} component={QuizList}></Route>
            <Route path="/courses/:courseId/quizzes/:quizId" exact={true} component={Quiz}></Route>
            <Route path="/counter/react" component={CounterReact}></Route>
            <Route path="/counter/redux" component={CounterRedux}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
