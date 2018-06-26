/**
 * Created by admin on 2018/6/19.
 */
 import Vue from 'vue';
 import Vuex from 'vuex';
 import login from './modules/login';
 import todo from './modules/to/index';

 Vue.use(Vuex);

 export default new Vuex.Store({
    modules:{
        login:login,
        todo:todo
    }
 })
