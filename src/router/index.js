import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
/*设置部分*/
const systemInfo = () => import("@/page/settings/system");


//用户管理
const userManager = () => import("@/page/user/userManager");
const addAndUpdateUser = () => import("@/page/user/addAndUpdateUser");


//订单中心
const ordersManager = () => import("@/page/orders/ordersManager");
//赛事中心
const eventsManager = () => import("@/page/events/eventsManager");
//球队中心
const footballManager = () => import("@/page/teams/footballManager");
const basketballManager = () => import("@/page/teams/basketballManager");
//公共部分
const chinaCityManager = () => import("@/page/common/chinaCityManager");
const globalCityManager = () => import("@/page/common/globalCityManager");



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
                    },
                    {
                        path: 'addAndUpdateUser',
                        hidden: true,
                        name: '用户新增',
                        icon: 'el-icon-user',
                        component: addAndUpdateUser,
                    }
                ]
            },
            {
                path: '/teams',
                name: '球队中心',
                hidden: false,
                icon: 'el-icon-s-grid',
                component: rightView,
                children: [
                    {
                        path: 'basketballManager',
                        hidden: false,
                        name: '篮球',
                        icon: 'el-icon-basketball',
                        component: basketballManager,
                    },
                    {
                        path: 'footballManager',
                        hidden: false,
                        name: '足球',
                        icon: 'el-icon-football',
                        component: footballManager,
                    },
                ]
            },
            {
                path: '/events',
                name: '赛事中心',
                hidden: false,
                icon: 'el-icon-video-camera-solid',
                component: rightView,
                children: [
                    {
                        path: 'events',
                        hidden: false,
                        name: '足球赛事',
                        icon: 'el-icon-basketball',
                        component: eventsManager,
                    }
                ]
            },
            {
                path: '/orders',
                name: '订单中心',
                hidden: false,
                icon: 'el-icon-s-claim',
                component: rightView,
                children: [
                    {
                        path: 'orders',
                        hidden: false,
                        name: '订单中心',
                        icon: 'el-icon-trophy-1',
                        component: ordersManager,
                    }
                ]
            },
            {
                path: '/common',
                name: '数据字典',
                hidden: false,
                icon: 'el-icon-s-order',
                component: rightView,
                children: [
                    {
                        path: 'common',
                        hidden: false,
                        name: '中国城市',
                        icon: 'el-icon-star-off',
                        component: chinaCityManager,
                    },
                    {
                        path: 'common',
                        hidden: false,
                        name: '全球城市',
                        icon: 'el-icon-help',
                        component: globalCityManager,
                    },                    
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
