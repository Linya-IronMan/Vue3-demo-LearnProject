// 并不是所有的请求方法都在这里面写
// 每个页面所需的请求，单独放在一个对应的文件中
// 此处存放通用的网络请求方法

import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000,
    });

    // 请求拦截，有些请求是需要验证过后才可以通过的
    instance.interceptors.request.use(
        config => {
            // 如果有接口需要认证才能访问，在这里统一设置
            // 直接放行
            // 使用 JWT 认证，需要认证 Api，需要添加请求头
            return config;
        },
        err => {
            // 不做错误处理
        }
    );

    // 响应拦截
    instance.interceptors.response.use(
        res => {
            // return res.data ? res.data : res;
            return res.data || res;
        },
        err => {
            // 如果有需要授权才可以访问的接口，统一跳转到登录 login 去授权
            // 服务器返回的响应，状态码如果有错误，此处进行处理
            // 显示错误信息
        }
    );

    return instance(config);
}
