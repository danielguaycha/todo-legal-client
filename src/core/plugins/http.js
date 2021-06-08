import Vue from "vue";
import axios from "axios";
import {authService} from "@/modules/auth/services/auth.service";
import config from "@/core/config"; // using auth service for auth

// adding default headers
axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.common['Accept'] = 'application/json';

// creating interceptor for auth request
axios.interceptors.request.use(function(config) {
    const token = authService.getToken(); // using auth service for authenticated request
    if (token !== null) config.headers.Authorization = `${token}`; // add header
    return config;
}, function(error) {
    return Promise.reject(error);
});

// create interceptor for catch and process errors
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    let err = "Error desconocido";
    if (error.response && error.response.data) {
        err = Object.values(error.response.data).join("|");
    }
    return Promise.reject(err);
});

// create global prototype plugin http
Vue.prototype.$http = axios;
export default axios;
