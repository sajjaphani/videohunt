import axios from 'axios'

export default function setAuthToken(token) {
    if (token) {
        axios.defaults.headers['Authorization'] = 'JWT ' + token
    } else {
        delete axios.defaults.headers['Authorization']
    }
}