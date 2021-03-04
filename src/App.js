import './App.css';
import React from "react";
import CourseManager from "./component/course-manager";
import Home from "./component/home"
import {BrowserRouter, Route} from "react-router-dom";

const App = () =>{
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact="true" component={Home}></Route>
            <Route path="/courses" component={CourseManager}></Route>
            {/*<CourseManager />*/}
        </div>
    </BrowserRouter>
  );
}

export default App;
