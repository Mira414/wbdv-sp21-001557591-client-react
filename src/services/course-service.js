const courses_URL = "https://wbdv-generic-server.herokuapp.com/api/001557591/courses"

export const findAllCourses = ()=>
    fetch(courses_URL)
        .then(
            response => response.json()
        )

export const createCourse = (course)=>
    fetch(courses_URL,{
        method:'POST',
        body: JSON.stringify(course),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())

export const findCourseById = (id)=>{}

export const updateCourse = (id, updCourse)=>
    fetch(`${courses_URL}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(updCourse),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())

export const deleteCourse = (id)=>
    fetch(`${courses_URL}/${id}`,{method: 'DELETE'})
        .then(response => response.json())

const api = {
        findAllCourses,
            createCourse,
            findCourseById,
            updateCourse,
            deleteCourse
}

export default api


