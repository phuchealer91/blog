import axios from 'axios';
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
    // baseURL: "https://api.covid19api.com"
});