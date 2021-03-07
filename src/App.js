import './App.css';
import React from "react";
import CourseManager from "./component/course-manager";
import Home from "./component/home"
import {BrowserRouter, Route} from "react-router-dom";
import CounterReact from "./component/counter/react-state/counter-react";
import CounterRedux from "./component/counter/redux-state/counter-redux";

const App = () =>{
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact="true" component={Home}></Route>
            <Route path="/courses" component={CourseManager}></Route>
            <Route path="/counter/react" component={CounterReact}></Route>
            <Route path="/counter/redux" component={CounterRedux}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
