import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import config from './config';
Vue.use(VueAxios, axios);

const fetch = Vue.axios.create({
  baseURL: config.origin,
  headers: {},
});

fetch.defaults.headers.post.Accept = 'application/json';
fetch.defaults.headers.post['Content-Type'] = 'application/json';
// fetch.defaults.withCredentials = true;


// 拦截器
fetch.interceptors.request.use(
  config => {

    return config;
  },
  error => {

    return Promise.reject(error);
  },
);

fetch.interceptors.response.use(
  response => response,
  error => {

    return Promise.reject(error);
  },
);

export default fetch;
