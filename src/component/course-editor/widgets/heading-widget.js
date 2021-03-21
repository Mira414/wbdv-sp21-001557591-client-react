import React, {useState} from "react"
import {connect} from "react-redux"

const HeadingWidget = ({wt, setSelectedWidget, edit})=>{
    // console.log("head edit " + edit)

    const [cachedItem, setCachedItem] = useState(wt)

    // console.log("header size " + cachedItem.size + " text " + cachedItem.text + " type of size " + typeof cachedItem.size)

    return <div>
        {
            edit &&
            <>
                <div className="row">
                    <label
                        for="heading-level"
                        className="col-2">Heading level:
                    </label>
                    <select
                        id="heading-level"
                        className="form-control wm-select"
                        value={cachedItem.size}
                        onChange={event => {
                            setCachedItem({...cachedItem, size: event.target.value})
                            setSelectedWidget({...wt, size: event.target.value})
                        }}>
                        <option value={1}>Header 1</option>
                        <option value={2}>Header 2</option>
                        <option value={3}>Header 3</option>
                        <option value={4}>Header 4</option>
                        <option value={5}>Header 5</option>
                        <option value={6}>Header 6</option>
                    </select>
                </div>
                <div>
                    <input
                        className="form-control"
                        value = {cachedItem.text}
                        onChange={event => {
                            setCachedItem({...cachedItem, text: event.target.value})
                            setSelectedWidget({...wt, text: event.target.value})
                            // console.log("heading text change " + wt.text)
                        }}>
                    </input>
                </div>
            </>
        }
        {!edit && parseInt(cachedItem.size) === 1 && <h1> {wt.text}</h1>}
        {!edit && parseInt(cachedItem.size)===2 && <h2> {wt.text}</h2>}
        {!edit && parseInt(cachedItem.size)===3 && <h3> {wt.text}</h3>}
        {!edit && parseInt(cachedItem.size)===4 && <h4> {wt.text}</h4>}
        {!edit && parseInt(cachedItem.size)===5 && <h5> {wt.text}</h5>}
        {!edit && parseInt(cachedItem.size)===6 && <h6> {wt.text}</h6>}
        </div>
}

const smpt = ()=>{return {}}

const dmpt = (dispatch)=>{
    return {
        setSelectedWidget: widget => dispatch({type: "SET_SELECTED_WIDGET", widgetId: widget.id, widget})
    }
}

export default connect(smpt, dmpt)(HeadingWidget)