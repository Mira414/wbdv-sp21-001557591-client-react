import logo from './logo.svg';
import './App.css';
import React from "react";
import CourseManager from "./component/course-manager";
import CourseEditor from "./component/course-editor";
import {BrowserRouter, Route} from "react-router-dom";

const App = () =>{
  return (
    <BrowserRouter>
        <div className="container-fluid">
            <CourseManager />
        </div>
    </BrowserRouter>
  );
}

export default App;
