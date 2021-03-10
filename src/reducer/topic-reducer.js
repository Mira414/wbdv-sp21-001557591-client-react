
const initState = {
    topics:[]
}

const TopicReducer=(
    preState = initState
    , action
)=>{

    switch (action.type){
        case "FIND_TOPICS_FOR_LESSON":
            return {
            ...preState,
                topics: action.topics
        }
        case "CREATE_TOPIC":
            return {
                ...preState,
                topics : [...preState.topics, action.newTopic]
            }
        case "UPDATE_TOPIC":
            return {
                ...preState,
                topics : preState.topics.map(
                    topic=> topic._id===action.topicToUpdate._id? action.topicToUpdate: topic)
            }
        case "DELETE_TOPIC":
            return {
                ...preState,
                topics : preState.topics.filter(topic => topic._id === action.topicToDelete._id? false : true)
            }
        default: return preState
    }

}

export default TopicReducer