import React from 'react';
import axios from "axios";


axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
const token = localStorage.getItem('token');
if (token) axios.defaults.headers.common["Authorization"] = `Token ${token}`;

axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        console.log(error);
        // toast.error("Server Responded An Error Try Again", {
        //     position: "top-right",
        //     closeOnClick: true,
        // });
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
