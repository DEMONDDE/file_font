import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";

//创建axios
const http = axios.create({
    //这里baseurl就是刚开始配置的开发环境和线上环境地址，webpack会自动读取无需手动再改
    baseURL: "/", //baseurl
    timeout: 20000 //请求超时
});

//request拦截
//请求拦截主要作用是验证请求是否合法，会带有用户token，这里模拟一个token，可以根据实际情况修改
http.interceptors.request.use(
    config => {
        let token = store.getters.token;
        // if (store.state.user.token) {
            config.headers["token"] = token;
        // }
        return config;
    },
    err => {
        console.log(err);
        Promise.reject(err);
    }
);

//post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


//respone拦截
//响应拦截主要是对返回做统一处理
http.interceptors.response.use(
    response => {
        let res = response.data;
        if (res.retCode == "99") {
            Message({
                message: "服务器错误",
                type: "error",
                duration: 5 * 1000
            });
            return false;
        }
         else {
            //这里吧错误响应不再返回到页面，直接统一处理掉，只有正确的返回才会被接收并做下一步处理
            return response;
        }
    },
    err => {
        //这里处理服务端错误
        console.log("err" + err); // for debug
        Message({
            message: err.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(err);
    }
);

export default http;