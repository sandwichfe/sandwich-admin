import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";
import router from "@/router";

export function request(config){
    const instance = axios.create({
        baseURL : "http://sandwich160.store:8080",
        // baseURL : "http://localhost:8080",
        timeout:5000,
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        //请求头
        // debugger
        let accessToken = store.getters.currentToken;
        if(!accessToken){
            window.location.href="/login"
        }
        config.headers["accessToken"] = accessToken;
         return config;
     }, err => {
         console.log(err);
     });
 
 
     // 响应式拦截
     instance.interceptors.response.use(res => {
        console.log(res);
         if(401==res.data.code) {
            Message(res.data.msg);
            // window.location.href = "/"
         }
         return res.data;
     }, err => {
        // Message("暂时没有数据了");
        Message.error("发生了一点小错误，正在紧急修复中~");
     });    


     return instance(config);

}