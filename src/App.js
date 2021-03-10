import './App.css';
import React from "react";
import CourseManager from "./component/course-manager";
import CourseEditor from "./component/course-editor/course-editor";
import Home from "./component/home"
import {BrowserRouter, Route} from "react-router-dom";
import CounterReact from "./component/counter/react-state/counter-react";
import CounterRedux from "./component/counter/redux-state/counter-redux";

const App = () =>{
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/courses/:layout" exact={true} component={CourseManager}></Route>
            <Route path={["/courses/:layout/edit",
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/:moduleId",
                        "/courses/:layout/edit/:courseId/:moduleId/:lessonId",]}
                   exact={true}
                   component={CourseEditor}></Route>
            <Route path="/counter/react" component={CounterReact}></Route>
            <Route path="/counter/redux" component={CounterRedux}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
