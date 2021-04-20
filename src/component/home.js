import React from 'react'
import {Link} from "react-router-dom";


export default () => {


    return <div className="container-fluid">
        <h1>Home</h1>
        <div className="list-group">
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
                <Link to="/courses/123/quizzes" className="list-group-item">
                    Quizzes
                </Link>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
            <Link to="/counter/react" className="list-group-item">
                Counter React
            </Link>
            <Link to="/counter/redux" className="list-group-item">
                Counter Redux
            </Link>
        </div>
    </div>
}