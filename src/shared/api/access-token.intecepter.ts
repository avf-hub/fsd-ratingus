import {http} from "./client.ts";

http.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return request;
}, error => {
    return Promise.reject(error);
});