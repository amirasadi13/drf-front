import noneTHttp from './noneAuthService';
import tHttp from './httpService';
import config from './config.json';

export const musicsList = () => {
    return noneTHttp.get(`${config.apiUrl}musics`);
};
export const addMusic = (music) => {
    return tHttp.post(`${config.apiUrl}music/0`, music);
};
