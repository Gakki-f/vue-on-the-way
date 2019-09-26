import axios from 'axios'
export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/v1',
        timeout:15000
    })
    //2.1请求拦截的作用
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    //2.1响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    //3发送网络请求
    return instance(config)

}