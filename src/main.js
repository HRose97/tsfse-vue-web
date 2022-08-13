import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*饿了么的UI*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import leftMenu from './layout/left-menu';
import topHeader from './layout/top-header';


Vue.config.productionTip = false;
Vue.component('leftMenu', leftMenu);
Vue.component('topHeader', topHeader);
Vue.use(ElementUI);

//以下注释要全部打开或者注释
//import {checkToken, CODE_SUCCESS} from "./api/api";
//不做权限校验
// router.beforeEach((to, from, next) => {
//         //否则检查用户角色
//         checkToken().then(result => {
//             console.log(result);
//             if (result.code === CODE_SUCCESS) {
//                 window.localStorage.setItem('avatar', result.data.avatar);
//                 window.localStorage.setItem('userName', result.data.userName);
//                 //后面再处理其他的权限吧
//                 if (result.data.roles.indexOf('SUPER_ADMIN') !== -1) {
//                     next();
//                 } else {
//                     //跳转到登录页面  或者是跳转到首页
//                     //TODO
//                     toLoginPage();
//                 }
//             } else {
//                 toLoginPage();
//             }
        
//         });
//         next();
// });

// function toLoginPage(){
//     //跳转到登录界面
//     window.localStorage.href = 'http://localhost:8080/#/login?redirect=' + window.localStorage.href;
// }



new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
