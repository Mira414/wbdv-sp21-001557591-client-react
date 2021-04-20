import React, {useState} from 'react'

const MultipleChoicesQuestion = ({question, updateAttempt})=>{

    // const [answer, setAnswer] = useState("")

    // const [gradeOrNot, setGradeOrNot] = useState(false)

    return <div>
        <h4>{question.question}</h4>
        <ul className="list-group">
            {
                question.choices.map(choice=>
                    <li className="list-group-item" key={choice}>
                        <label>
                            <input
                                type="radio"
                                name={question._id}
                                onClick={()=>updateAttempt({...question, answer: choice})}/> {choice}
                        </label>
                    </li>)
            }
        </ul>
        <br />
        {/*<label>Your answer: {answer}</label>*/}
        <br />
        {/*<i className="btn btn-success" onClick={()=>setGradeOrNot(true)}>Grade</i>*/}


    </div>
}

export default MultipleChoicesQuestion