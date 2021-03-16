const initState={
    widgets: []
}

const widgetReducer = (preState = initState, action)=>{
    switch (action.type){
        case "FIND_ALL_WIDGETS": {
            return {
                ...preState,
                widgets: action.widgets
            }
        }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...preState,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...preState,
                widgets: [...preState.widgets, action.widget]
            }
        case "UPDATE_WIDGET":
            return {
                ...preState,
                widgets:
                    preState.widgets.map(widget => widget.id === action.widget.id? action.widget : widget)
            }
        case "DELETE_WIDGET":
            return {
                ...preState,
                widgets: preState.widgets.filter(widget => widget.id === action.widget.id? false : true)
            }
        default:  return preState
    }
}

export default widgetReducer