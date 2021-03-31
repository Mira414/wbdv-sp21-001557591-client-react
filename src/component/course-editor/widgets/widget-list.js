import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import {useParams} from "react-router-dom";

import "./widget.css"

import widgetServices from "../../../services/widget-services"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

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
                    onClick={()=> {
                        if(topicId !== "undefined" && typeof topicId !== "undefined"){
                            createWidget(topicId, {type: "Heading", text: "header text", size: 1})
                        }else{
                            alert("please choose a topic first")
                            console.log("couldn't create widget, coz topic id is undefined")
                        }
                    }}></i>
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
                                        <option value="Image">Image</option>
                                        <option value="List">List</option>
                                        <option value="Video">Video</option>
                                        <option value="Link">Link</option>
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
                            {
                                selectedWidget.id !== widget.id && widget.type === "List" &&
                                // console.log("widget text not selected" + widget.text)
                                <ListWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={widget}/>
                            }
                            {
                                selectedWidget.id === widget.id && selectedWidget.type === "List" &&
                                // console.log("widget text selected" + widget.text)
                                <ListWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={selectedWidget}/>
                            }
                            {
                                // console.log("widget type " + widget.type)
                                selectedWidget.id !== widget.id && widget.type === "Image" &&
                                <ImageWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={widget}/>
                            }
                            {
                                // console.log("widget type " + widget.type)
                                selectedWidget.id === widget.id && selectedWidget.type === "Image" &&
                                <ImageWidget
                                    key={widget.id}
                                    edit={selectedWidget.id === widget.id}
                                    wt={selectedWidget}/>
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