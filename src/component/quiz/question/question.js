import React from 'react'
import MultipleChoicesQuestion from "./multiple-choices-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({question})=>{
    return <div className="container-fluid">
        {
            question.type === 'MULTIPLE_CHOICE' &&
                <MultipleChoicesQuestion question={question}/>
        }
        {
            question.type === 'TRUE_FALSE' &&
                <TrueFalseQuestion question={question}/>
        }
    </div>
}

export default Question