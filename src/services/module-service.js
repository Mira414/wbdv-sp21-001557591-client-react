const COURSE_URL = "https://wbdv-generic-server.herokuapp.com/api/001557591/courses"

const MODULE_URL = "https://wbdv-generic-server.herokuapp.com/api/001557591/modules"

export const findModulesForCourse = (courseId)=>{
    return fetch(`${COURSE_URL}/${courseId}/modules`)
        .then(response=>response.json())
}

export const createModuleForCourse = (courseId, module)=>{
    return fetch(`${COURSE_URL}/${courseId}/modules`,
        {method: 'POST',
        body:JSON.stringify(module),
        headers: {"content-type":"application/json"}}
        ).then(newModule=>newModule.json())
}

export const updateModule =(moduleId, module)=>{
    return fetch(`${MODULE_URL}/${moduleId}`,
        {
            method: 'PUT',
            body:JSON.stringify(module),
            headers: {"content-type":"application/json"}
        }).then(response=>response.json())
}

export const deleteModule = (moduleId)=>{
    return fetch(`${MODULE_URL}/${moduleId}`,
        {method: 'DELETE'}).then(response=>response.json())
}

const api={
    findModulesForCourse,
    createModuleForCourse,
    updateModule,
    deleteModule
}

export default api