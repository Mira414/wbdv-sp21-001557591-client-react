import React, {useState} from 'react'

const TrueFalseQuestion = ({question})=>{

    const [answer, setAnswer] = useState("")

    const [gradeOrNot, setGradeOrNot] = useState(false)

    return <div>
        <h4>{question.question}
            {
                gradeOrNot && answer === question.correct &&
                <i className="fas fa-check text-success"></i>
            }
            {
                gradeOrNot && answer !== question.correct &&
                <i className="fas fa-times text-danger"></i>
            }
        </h4>
        <ul className="list-group">
            <li className={`list-group-item 
                        ${gradeOrNot && question.correct === "true"? "list-group-item-success" : ""} 
                        ${gradeOrNot && answer === "true" && question.correct === "false"? "list-group-item-danger" : ""} `}>
                <label>
                    <input
                        type="radio"
                        name={question._id}
                        onClick={()=> {
                            setAnswer("true")
                        }}/> TRUE
                </label>
                {
                    gradeOrNot &&
                    question.correct === "true" ? <i className="fas fa-check float-right"></i> : <></>
                }
                {
                    gradeOrNot &&
                    answer === "true" &&
                    question.correct === "false"? <i className="fas fa-times float-right"></i> : <></>
                }
            </li>
            <li className={`list-group-item 
                        ${gradeOrNot && answer === "false" && question.correct === "true"? "list-group-item-danger" : ""} 
                        ${gradeOrNot &&  question.correct === "false"? "list-group-item-success" : ""}`}>
                <label>
                    <input
                        type="radio"
                        name={question._id}
                        onClick={()=>setAnswer("false")}/> FALSE
                </label>
                {
                    gradeOrNot &&
                    question.correct === "false" ? <i className="fas fa-check float-right"></i> : <></>
                }
                {
                    gradeOrNot &&
                    answer === "false" &&
                    question.correct === "true"? <i className="fas fa-times float-right"></i> : <></>
                }
            </li>
        </ul>
        <br />
        <label>Your answer: {answer}</label>
        <br />
        <i className="btn btn-success" onClick={()=>setGradeOrNot(true)}>Grade</i>
    </div>
}

export default TrueFalseQuestion