import http from './noneAuthService';
import config from './config.json';

export const login = user => {
    return http.post(`${config.apiUrl}rest-auth/login/`, user);
};
export const register = user => {
    return http.post(`${config.apiUrl}rest-auth/registration`, user);
};
