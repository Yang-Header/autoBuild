import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

export default ({store}) => {
    // 请求拦截
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        if (store.state.user && store.state.user.token) {
            config.headers['Authorization'] = `Token ${store.state.user.token}`
        }
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
}