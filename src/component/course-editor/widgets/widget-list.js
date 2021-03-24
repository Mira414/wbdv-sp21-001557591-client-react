import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {useParams} from "react-router-dom";

import "./widget.css"

import widgetServices from "../../../services/widget-services"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList =({
                       widgets,
                       selectedWidget,
                       setSelectedWidget,
                       findAllWidgets,
                       findWidgetsForTopic,
                       createWidget,
                       updateWidget,
                       deleteWidget})=>{

    const {moduleId, lessonId, topicId} = useParams()

    // console.log("topic id "+ topicId)

    useEffect(()=>{
        // findAllWidgets()
        if(topicId !== "undefined" && typeof topicId !== "undefined"){
            findWidgetsForTopic(topicId)
        }else{
            findWidgetsForTopic(null)
        }
    }, [moduleId, lessonId, topicId])

    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState({})

    return <div className="wm-widget">
            <div className="row">
                <h6 className="col-11">widget list</h6>
                <i
                    className="fa fa-plus fa-2x float-right"
                    onClick={()=>createWidget(topicId, {type:"Heading", text: "header text", size: 1})}></i>
            </div>
        <ul className="wm-ul">
            {
                widgets.map(
                    widget =>
                        <li className="wm-li">
                            {
                                selectedWidget.id === widget.id &&
                                <div className="row">
                                    <label for="widget-type" className="col-2">Widget type: </label>
                                    <select
                                        id="widget-type"
                                        className="form-control wm-select"
                                        value={cachedWidget.type}
                                        onChange={event => {
                                            setCachedWidget({...widget, type: event.target.value})
                                            setSelectedWidget({...selectedWidget, type: event.target.value})
                                        }}>
                                        <option value="Heading">Heading</option>
                                        <option value="Paragraph">Paragraph</option>
                                        <option value="Video">Video</option>
                                        <option value="Image">Image</option>
                                        <option value="Link">Link</option>
                                        <option value="List">List</option>
                                        <option value="HTML">HTML</option>
                                    </select>

                                    <div className="col">
                                        <i onClick={()=> {
                                            updateWidget(selectedWidget.id, selectedWidget)
                                            setSelectedWidget({})
                                        }} className="fas fa-check float-right"/>
                                        <i onClick={()=> {
                                            setSelectedWidget(widget)
                                            setCachedWidget(widget)
                                            deleteWidget(widget.id)
                                        }} className="fas fa-trash float-right"/>
                                        </div>
                                </div>
                            }
                            {
                                selectedWidget.id !== widget.id &&
                                <i onClick={()=> {
                                    setSelectedWidget(widget)
                                    setCachedWidget(widget)
                                }} className="fas fa-cog float-right"/>
                            }
                            {
                            // console.log("widget type " + widget.type)
                                selectedWidget.id !== widget.id && widget.type === "Heading" &&
                                <HeadingWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={widget}/>
                            }
                            {
                            // console.log("widget type " + widget.type)
                                selectedWidget.id === widget.id && selectedWidget.type === "Heading" &&
                                <HeadingWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={selectedWidget}/>
                            }
                            {
                                selectedWidget.id !== widget.id && widget.type === "Paragraph" &&
                            <ParagraphWidget
                                key={widget.id}
                                wt = {widget}
                                edit={selectedWidget.id === widget.id}
                                />
                            }
                            {
                                selectedWidget.id === widget.id && selectedWidget.type === "Paragraph" &&
                            <ParagraphWidget
                                key={widget.id}
                                wt = {selectedWidget}
                                edit={selectedWidget.id === widget.id}
                                />
                            }
                        </li>
                )
            }
        </ul>
    </div>
}

const smpt = (state)=> {
    // console.log("list selectedwidget " + state.widgetReducer.editingWidget.text)
    return {
        widgets : state.widgetReducer.widgets,
        selectedWidget:state.widgetReducer.editingWidget
    }
}

const dmpt = dispatch=>{
    return {
        findAllWidgets: ()=>widgetServices.findAllWidgets()
            .then(acturalWidgets => dispatch({type: "FIND_ALL_WIDGETS", widgets: acturalWidgets})),
        findWidgetsForTopic: (topicId) =>
            widgetServices.findWidgetsForTopic(topicId)
                .then(actualWidgets =>
                    dispatch({type: "FIND_WIDGETS_FOR_TOPIC", widgets : actualWidgets})
                ),
        setSelectedWidget: (widget)=> dispatch({type: "SET_SELECTED_WIDGET", widget : widget}),
        createWidget : (topicId, widget) =>
            widgetServices.createWidget(topicId, widget)
                .then(newWidget => dispatch({type: "CREATE_WIDGET", widget : newWidget})),
        deleteWidget : (widgetId) =>
            widgetServices.deleteWidget(widgetId)
                .then(status => dispatch({type: "DELETE_WIDGET", widgetId})),
        updateWidget: (widgetId, widget) =>
            widgetServices.updateWidget(widgetId, widget)
                .then(status => dispatch({type: "UPDATE_WIDGET", widgetId, widget}))
    }
}

export default connect(smpt, dmpt)(WidgetList)