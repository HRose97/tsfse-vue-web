import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
/*设置部分*/
const systemInfo = () => import("@/page/settings/system");
/*布局*/
//用户管理
const userManager = () => import("@/page/user/userManager");

const baseView = () => import("@/layout/base-view");
const rightView = () => import("@/layout/right-content");
const index = () => import("@/page/dashboard/index");
export const routes = [

    
    {
        path: '',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: "/index",
                name: '首页',
                icon: 'el-icon-s-home',
                hidden: false,
                component: index
            },
            {
                path: '/user',
                name: '用户管理',
                hidden: false,
                icon: 'el-icon-user-solid',
                component: rightView,
                children: [
                    {
                        path: 'users',
                        hidden: false,
                        name: '用户管理',
                        icon: 'el-icon-user',
                        component: userManager,
                    }
                ]
            },
            {
                path: '/settings',
                name: '设置',
                hidden: false,
                icon: 'el-icon-setting',
                component: rightView,
                children: [
                    {
                        path: 'users',
                        hidden: false,
                        name: '系统信息',
                        icon: 'el-icon-cpu',
                        component: systemInfo,
                    }
                ]
            }
        ]
    },
];


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

export default router;
