import React,{useState} from "react";
import {connect} from "react-redux";

const ListWidget=({edit, setSelectedWidget, wt})=>{

    const [editedText, setEditedText] = useState(wt.text);
    const [editedChecked, setEditedChecked] = useState(wt.ordered);

    return <div>
        {
            edit &&
                <div>
                    <input id="list-order" type="checkbox" checked={editedChecked} onChange={event => {
                        setEditedChecked(event.target.checked)
                        setSelectedWidget({
                            ...wt,
                            ordered: event.target.checked
                        })
                    }
                    }/><label for="list-order">ordered</label>
                    <br/>
                    <textarea
                        value={editedText}
                        onChange={event => {
                            setEditedText(event.target.value)
                            setSelectedWidget({...wt,text: editedText})
                        }
                        }
                        rows="8"
                        placeholder="Enter one list item per line"
                        className="form-control">
                    </textarea>
                </div>
        }
        {
            !edit && editedChecked &&
                <ol>
                    {wt.text.split("\n").map(
                        item => {
                            return <li>{item}</li>
                        }
                    )
                    }
                </ol>
        }
        {
            !edit && !editedChecked &&
                <ul>
                    {wt.text.split("\n").map(
                        item => {
                            return <li>{item}</li>
                        }
                    )
                    }
                </ul>
        }
    </div>

}

const smpt =(state)=>{
    return {}
}

const dmpt =(dispatch)=>{
    return {
        setSelectedWidget: widget => dispatch({
            type: "SET_SELECTED_WIDGET",
            widget
        })
    }
}

export default connect(smpt, dmpt)(ListWidget)