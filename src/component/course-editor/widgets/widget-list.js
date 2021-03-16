import React, {useEffect} from "react"
import {connect} from "react-redux"
import {useParams} from "react-router-dom";

import widgetServices from "../../../services/widget-services"
import WidgetHeader from "./widget-header";
import WidgetParagraph from "./widget-paragraph";

const WidgetList =({
                       widgets,
                       findAllWidgets,
                       findWidgetsForTopic,
                       createWidget,
                       updateWidget,
                       deleteWidget})=>{

    const {topicId} = useParams()

    console.log("topic id "+ topicId)

    useEffect(()=>{
        // findAllWidgets()
        findWidgetsForTopic(topicId)
        // console.log("widgets length " + widgets.length)
        // findWidgetsForTopic(topicId)
    }, [topicId])

    return <div>
            <h4>widget list {widgets.length}</h4>
        <ul className="">
            <li>
                <i
                    className="fa fa-plus float-right"
                    onClick={()=>createWidget(topicId, {type:"Header", text: "dummy text"})}></i>
            </li>
            {
                widgets.map(
                    widget => {
                        console.log("widget type " + widget.type)
                        switch (widget.type){
                            case "Header" : return <li><WidgetHeader wt={widget} /></li>
                            case "Paragraph" :  return <li><WidgetParagraph wt={widget} /></li>
                            default: return <></>
                        }
                    }
                    // widget => <li>{widget.text}</li>
                )
            }
        </ul>
    </div>
}

const smpt = (state)=>{
     return {
         widgets : state.widgetReducer.widgets
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
        createWidget : (topicId, widget) =>
            widgetServices.createWidget(topicId, widget)
                .then(newWidget => dispatch({type: "CREATE_WIDGET", widget : newWidget}))
    }
}

export default connect(smpt, dmpt)(WidgetList)