import React, {useState} from 'react'

const TrueFalseQuestion = ({question,
                               updateAttempt})=>{

    // const [answer, setAnswer] = useState("")
    //
    // const [gradeOrNot, setGradeOrNot] = useState(false)

    return <div>
        <h4>{question.question}</h4>
        <ul className="list-group">
            <li className="list-group-item">
                <label>
                    <input
                        type="radio"
                        name={question._id}
                        onClick={()=>updateAttempt({...question, answer: "true"})}/> TRUE
                </label>
            </li>
            <li className="list-group-item">
                <label>
                    <input
                        type="radio"
                        name={question._id}
                        onClick={()=>updateAttempt({...question, answer: "false"})}/> FALSE
                </label>
            </li>
        </ul>
        <br />
    </div>
}

export default TrueFalseQuestion