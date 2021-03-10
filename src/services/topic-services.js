const LESSON_URL="https://wbdv-generic-server.herokuapp.com/api/001557591/lessons"

const TOPIC_URL="https://wbdv-generic-server.herokuapp.com/api/001557591/topics"

const findTopicsForLesson =(lessonId)=>{
    return fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(acturalTopics=>acturalTopics.json())
}

const createTopic = (lessonId, topic)=>{
    return fetch(`${LESSON_URL}/${lessonId}/topics`,{
        method:'POST',
        body:JSON.stringify(topic),
        headers: {
            'content-type' : "application/json"
        }
    }).then(newTopic=>newTopic.json())
}

const updateTopic = (topicId, topic)=>{
    return fetch(`${TOPIC_URL}/${topicId}`,{
        method: 'PUT',
        body : JSON.stringify(topic),
        headers : {
            'content-type' : "application/json"
        }
    }).then(modifiedTopic=>modifiedTopic.json())
}

const deleteTopic = (topicId)=>{
    return fetch(`${TOPIC_URL}/${topicId}`, {
        method : 'DELETE'
    }).then(status=>status.json())
}

export default {
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic
}