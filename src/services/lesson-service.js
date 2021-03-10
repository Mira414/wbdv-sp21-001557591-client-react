const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/001557591/modules"

const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001557591/lessons"

export const findLessonsForModule = (moduleId)=>{
    return fetch(`${MODULE_URL}/${moduleId}/lessons`)
        .then(response=>response.json())
}

export const createLessonForModule = (moduleId, lesson)=>{
    return fetch(`${MODULE_URL}/${moduleId}/lessons`,
        {method: 'POST',
        body:JSON.stringify(lesson),
        headers: {"content-type":"application/json"}}
        ).then(newLesson=>newLesson.json())
}

export const updateLesson =(lessonId, lesson)=>{
    return fetch(`${LESSON_URL}/${lessonId}`,
        {
            method: 'PUT',
            body:JSON.stringify(lesson),
            headers: {"content-type":"application/json"}
        }).then(response=>response.json())
}

export const deleteLesson = (lessonId)=>{
    return fetch(`${LESSON_URL}/${lessonId}`,
        {method: 'DELETE'}).then(response=>response.json())
}

export default {
    findLessonsForModule,
    createLessonForModule,
    updateLesson,
    deleteLesson
}
