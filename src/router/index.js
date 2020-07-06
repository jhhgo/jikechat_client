import Vue from 'vue'
import VueRouter from 'vue-router'

import AddFriend from '../pages/AddFriend/AddFriend'
import Chat from '../pages/Chat/Chat'
import List from '../pages/List/List'
import Register from '../pages/Register/Register'
import Request from '../pages/Request/Request'
import Search from '../pages/Search/Search'
import UserDetail from '../pages/UserDetail/UserDetail'
import UserInfo from '../pages/UserInfo/UserInfo'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/addfriend',
            component: AddFriend
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/list',
            component: List
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/request',
            component: Request
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/userdetail',
            component: UserDetail
        },
        {
            path: '/userInfo',
            component: UserInfo
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})