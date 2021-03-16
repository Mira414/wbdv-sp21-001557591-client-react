const TOPIC_URL="http://localhost:8080/api/topics"

const WIDGET_URL = "http://localhost:8080/api/widgets"

const findAllWidgets =()=>{
    return fetch(`${WIDGET_URL}`)
        .then(response=>response.json())
}

const findWidgetsForTopic = (topicId)=>{
    return fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response=>response.json())
}

const createWidget = (topicId, widget)=>{
    console.log("servise topic id "+ topicId)
    return fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method : 'POST',
        body : JSON.stringify(widget),
        headers : {
            'content-type' : "application/json"
        }
    }).then(response=>response.json())
}

const updateWidget = (widgetId, widget)=>{
    return fetch(`${WIDGET_URL}/${widgetId}`, {
        method : 'PUT',
        body : JSON.stringify(widget),
        headers : {
            'content-type' : "application/json"
        }
    }).then(response=>response.json())
}

const deleteWidget = (widgetId) =>{
    return fetch(`${WIDGET_URL}/${widgetId}`, {
        method : 'DELETE'
    }).then(response => response.json())
}

export default {
    findAllWidgets,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget
}