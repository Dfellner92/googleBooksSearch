import axios from "axios";

const KEY = 'AIzaSyAp86dGU0u3ZM7zFmBX9t5FBmky6mrQIg0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    params: {
        maxResults: 5,
        key: KEY
    }
})