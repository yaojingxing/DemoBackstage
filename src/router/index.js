import VueRouter from 'vue-router';
import Vue from 'vue';

const User=()=>import("../views/User");
const Home=()=>import("../views/Home.vue");
const Config=()=>import("../views/Config");
const Role=()=>import("../views/Role");


//1.安装插件
Vue.use(VueRouter);
//2.创建vuerouter对象
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/config',
        component:Config
    },
    {
        path:'/role',
        component:Role
    }
];
const router=new VueRouter(
    {
        routes,
        mode:'history'
    }



);

//将VueRouter对象传入到实例中
export default router;