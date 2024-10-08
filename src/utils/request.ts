import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    timeout: 30000

});

service.interceptors.request.use(
    config => {
        config.headers['withCredentials'] = true;
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {

            return response.data;
        } else {
            
        }
    },
    error => {
        console.log(error);
        
    }
);

export default service;
