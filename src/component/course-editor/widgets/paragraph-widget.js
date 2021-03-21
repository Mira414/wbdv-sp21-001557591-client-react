import React, {useState} from "react"
import {connect} from "react-redux"


const ParagraphWidget = ({wt, setSelectedWidget, edit})=>{

    const [content, setContent] = useState(wt.text)

    return <div>
        { edit &&
            <textarea
                className="form-control"
                value={content}
                onChange={event => {
                    setContent(event.target.value)
                    setSelectedWidget({...wt,
                    text: event.target.value})
                    // console.log("para text change " + wt.text)
                }}/>
        }
        {!edit &&
            <p> {wt.text}</p>
        }
    </div>
}

const smpt =(state)=>{
    return {
    // wt : state.widgetReducer.editingWidget
    }
}

const dmpt = (dispatch)=>{
    return {
        setSelectedWidget : newWidget=>dispatch({type: "SET_SELECTED_WIDGET", widget: newWidget})
    }
}


export default connect(smpt, dmpt)(ParagraphWidget)