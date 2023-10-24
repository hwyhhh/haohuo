// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router';
// import Login from '@/views/Login/index.vue'
// import Layout from '@/views/Layout/index.vue'
// import Home from '@/views/Home/index.vue'
// import Category from '@/views/Category/index.vue'
// import SubCategory from '@/views/SubCategory/index.vue'
// import Detail from '@/views/Detail/index.vue'
// import CartList from '@/views/CartList/index.vue'
// import Checkout from '@/views/Checkout/index.vue'
// import Pay from '@/views/Pay/index.vue'
// import PayBack from '@/views/Pay/PayBack.vue'
// import Member from '@/views/Member/index.vue'
// import UserInfo from '@/views/Member/components/UserInfo.vue'
// import UserOrder from '@/views/Member/components/UserOrder.vue'


// const router = createRouter({

//     history: createWebHistory(import.meta.env.BASE_URL),
//     // path和component对应关系的位置
//     routes: [
//         {
//             path: '/',
//             component: Layout,
//             children: [
//                 {
//                     path: '',
//                     component: Home
//                 },
//                 {
//                     path: 'category/:id',
//                     component: Category
//                 },
//                 {
//                     path: 'category/sub/:id',
//                     component: SubCategory
//                 },
//                 {
//                     path: 'detail/:id',
//                     component: Detail
//                 },
//                 {
//                     path: 'cartlist',
//                     component: CartList
//                 },
//                 {
//                     path: 'checkout',
//                     component: Checkout
//                 },
//                 {
//                     path: 'pay',
//                     component: Pay
//                 },
//                 {
//                     path: 'paycallback',
//                     component: PayBack
//                 },
//                 {
//                     path: 'member',
//                     component: Member,
//                     children: [
//                         {
//                             path: '',
//                             component: UserInfo
//                         },
//                         {
//                             path: 'order',
//                             component: UserOrder
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             path: '/login',
//             component: Login
//         }
//     ],
//     // 路由滚动行为定制
//     scrollBehavior() {
//         return {
//             top: 0
//         }
//     }
// })

const routes = [
    { path: '/',  component: ()=>import('@/views/Layout/index.vue'), children: [
        { path: '', name: 'Home',  component: () => import('@/views/Home/index.vue')},
        { path: 'category/:id',name: 'category', component: () => import('@/views/Category/index.vue')},
        { path: 'category/sub/:id', name: 'subCategory', component: () => import('@/views/SubCategory/index.vue')},
        { path: 'detail/:id',name: 'detail', component: () => import('@/views/Detail/index.vue')},
        { path: 'cartlist',name: 'cartliet', component: () => import('@/views/CartList/index.vue')},
        { path: 'checkout',name: 'checkout', component: () => import('@/views/Checkout')},
        { path: 'pay',name: 'pay', component: () => import('@/views/Pay/index.vue')},
        { path: 'paycallback',name: 'paycallback', component: () => import('@/views/Pay/PayBack.vue')},
        { path: 'member',name: 'member', component: () => import('@/views/Member/index.vue'), children: [
            { path: '', name: 'userinfo', component: () => import('@/views/Member/components/UserInfo.vue')},
            { path: 'order', name: 'order', component: () => import('@/views/Member/components/UserOrder.vue')}

        ]},

    
    
    ]},
    { path: '/login', component: () => import('@/views/Login/index.vue')}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router
