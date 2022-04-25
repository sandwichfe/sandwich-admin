import axios from "axios";

export function request(config){
    const instance = axios.create({
        baseURL : "http://sandwich160.store:8080",
        timeout:5000,
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
         return config;
     }, err => {
         console.log(err);
     });
 
 
     // 响应式拦截
     instance.interceptors.response.use(res => {
         return res.data;
     }, err => {
         if(res.data.code!=200&&res.data.msg){
            this.$message(res.data.msg);
            this.$message.error('res.data.msg');
         }
         console.log(err);
     });    


     return instance(config);

}