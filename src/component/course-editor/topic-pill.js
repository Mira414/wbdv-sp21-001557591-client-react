import React, {useEffect} from "react"
import EditableItem from "./editable-item";
import TopicServices from "../../services/topic-services"
import {useParams} from "react-router-dom";
import {connect} from "react-redux"

const TopicPill =({topics,
                  findTopicsForLesson,
                  createTopic,
                  updateTopic,
                  deleteTopic})=>{

    let {layout, courseId, moduleId, lessonId, topicId} = useParams()

    useEffect(()=>{
        if(lessonId !== "undefined" && typeof lessonId !== "undefined"
            && moduleId !== "undefined" && typeof moduleId !== "undefined"){
            findTopicsForLesson(lessonId)}
        else{
            lessonId = ""
        }
        // }
    }, [lessonId, moduleId])

    return <div>
        <ul className="nav nav-pills">
            {
                topics.map(topic=>
                    <li className={`nav-item ${topicId === topic._id? "active" : ""}`}>
                        <EditableItem
                            key = {topic._id}
                            to = {`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            // to = {`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/topic1`}
                            item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}/>
                    </li>)
            }
            <li className="nav-item">
                <a
                    className="nav-link"
                    onClick={()=>createTopic(lessonId, {title: "New Topic"})}
                    href="#">
                    <i className="fa fa-plus"></i>
                </a>
            </li>
        </ul>
    </div>
}

const stmp = (state)=>({topics : state.topicReducer.topics})

const dtmp = (dispatch)=>{
    return {
        findTopicsForLesson : (lessonId)=>
            TopicServices.findTopicsForLesson(lessonId)
            .then(topics=>dispatch({type: "FIND_TOPICS_FOR_LESSON", topics})),
        createTopic : (lessonId, topic)=>{
            TopicServices.createTopic(lessonId, topic)
                .then(newTopic => dispatch({type: "CREATE_TOPIC", newTopic}))
        },
        updateTopic : (topic) =>
            TopicServices.updateTopic(topic._id, topic)
                .then(updatedTopic => dispatch({type: "UPDATE_TOPIC", topicToUpdate : topic})),
        deleteTopic : (topic) =>
            TopicServices.deleteTopic(topic._id)
                .then(topicToDelete => dispatch({type: "DELETE_TOPIC", topicToDelete: topic}))

    }
}

export default connect(stmp, dtmp)(TopicPill)