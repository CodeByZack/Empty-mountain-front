import axios from 'axios'
// 创建axios实例 application/x-www-data-urlencoded  application/json
const service = axios.create({
    baseURL: 'http://65.49.209.21/api',
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' }
})


//请求拦截器
service.interceptors.request.use(
    function (config) {
        //检查token
        if (localStorage.token) {
            config.headers.Authorization = localStorage.token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
);

//响应拦截器
service.interceptors.response.use(
    function (response) {
        // 请求正常则返回,这里返回了所有的请求头和请求体信息
        return Promise.resolve(response)
    },
    function (error) {
        console.log(error)
        return Promise.reject(error)
    }
);

export default {
    install: function(Vue, Option) {
      Object.defineProperty(Vue.prototype, "$http", { value: service });
    }
};