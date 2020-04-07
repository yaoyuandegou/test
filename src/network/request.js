import axios from 'axios';
export function request(config) {
    const instance = axios.create({
        //baseURL:"http://152.136.185.210:8000/api/h8",
        //baseURL:"http://123.207.32.32:8000/api/h8",
        baseURL:"http://106.54.54.237:8000/api/h8",
        timeout: 5000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    });
    //请求拦截
    instance.interceptors.request.use(
        config=>{ return config;},
        err=>{ console.log(err);}
    );
    //响应拦截
    instance.interceptors.response.use(
        res => { return res.data;},
        err=>{}
    )

    return instance(config);


};