import axios from 'axios';

const axiosCount = axios.create({
    baseURL: 'https://burger-temp.firebaseio.com/',
});

export default axiosCount;
