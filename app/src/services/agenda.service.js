import axios from 'axios'
const baseURL = 'http://localhost:3001'

const getAllPersons = () => {
    try {
        const request = axios.get(`${baseURL}/persons`)
        return request.then((response) => response.data)
    } catch (error) {
        console.error('Error fetching persons:', error)
        throw error
    }
}

const deletePerson = (id) => {
    try {
        const request = axios.delete(`${baseURL}/persons/${id}`)
        return request.then((response) => response.data)
    } catch (error) {
        console.error('Error deleting person:', error)
        throw error
    }
}

export default {
  getAllPersons, deletePerson
}
