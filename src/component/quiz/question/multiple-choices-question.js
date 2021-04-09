import React, {useState} from 'react'

const MultipleChoicesQuestion = ({question})=>{

    const [answer, setAnswer] = useState("")

    const [gradeOrNot, setGradeOrNot] = useState(false)

    return <div>
        <h4>{question.question} {gradeOrNot}
        {
            gradeOrNot && answer !== 'undefined' && answer !=="" && answer === question.correct &&
            <i className="fas fa-check text-success"></i>
        }
        {
            gradeOrNot && answer !== 'undefined' && answer !=="" && answer !== question.correct &&
            <i className="fas fa-times text-danger"></i>
        }
        </h4>
        <ul className="list-group">
            {
                question.choices.map(choice=>
                    <li className={`list-group-item 
                        ${gradeOrNot && choice === question.correct? "list-group-item-success" : ""}
                        ${gradeOrNot && answer !==question.correct && choice === answer? "list-group-item-danger" : ""} 
                    `} key={choice}>
                        <label>
                            <input
                                type="radio"
                                name={question._id}
                                onClick={()=>setAnswer(choice)}/> {choice}
                        </label>
                            {gradeOrNot && choice === question.correct? <i className="fas fa-check float-right"></i> : <></>}
                            {gradeOrNot && answer !==question.correct && choice === answer? <i className="fas fa-times float-right"></i> : <></>}
                    </li>)
            }
        </ul>
        <br />
        <label>Your answer: {answer}</label>
        <br />
        <i className="btn btn-success" onClick={()=>setGradeOrNot(true)}>Grade</i>


    </div>
}

export default MultipleChoicesQuestion