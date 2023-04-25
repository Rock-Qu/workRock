import axios from "axios";
import {config} from "./config";

const services = axios.create(config);

services.interceptors.request.use(
    
    (request) =>{

    const token = localStorage.getItem("token");
    if (token) {
        request.headers.Authorization = token;
    }
    return request;
}, error => {
    return Promise.reject(error);

});


services.interceptors.response.use(    
    (response) =>{

    return response;
}, error => {
    let {response} = error;
    if (response) {
        switch (response.status) {
            case 200 :
                break;
            case 404 :
                alert("not found");
                break;
            case 500 :
                break;
            default:
                break;
        }
    } else {
        return Promise.reject(error);
    }
}
);

export default services;