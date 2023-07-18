import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";
import Cookies from 'js-cookie'
import router from "@/router";

export function request(config){
    const instance = axios.create({
        //baseURL : "http://49.235.82.74:8080",
         baseURL : "http://localhost:8089",
        timeout:5000,
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        //请求头
        // let accessToken = store.getters.currentToken;
        let accessToken = Cookies.get("loginToken")
        if(accessToken){
            // window.location.href="/login"
            // Message("登录已失效请重新登录！");
            config.headers["accessToken"] = accessToken;
        }
         return config;
     }, err => {
         console.log(err);
     });
 
 
     // 响应式拦截
     instance.interceptors.response.use(res => {
         if(401==res.data.code) {
            Message(res.data.msg);
            router.push("/login")
         }
         return res.data;
     }, err => {
        // Message("暂时没有数据了");
        console.log(err);
        Message.error("发生了一点小错误，正在紧急修复中~");
     });    


     return instance(config);

}