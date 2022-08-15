import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home'
import About from '../components/About'
import Friend from '../components/Friend'
import Analysis from '../components/Analysis'
import Profile from '../components/Profile'
import Event from '../components/Event'
import NotFound from '../components/NotFound'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

import Header from '../components/navbar/Header'
import Sidebar from '../components/navbar/Sidebar'
import Footer from '../components/navbar/Footer'

export default createRouter({

  // Hash History => URL에 hash기호를 사용하여 주소를 나타내는 방법
  // History => 서버에서 URL 설정이 필요함 (createHistry() 알아보기)
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      redirect:'/'
    },
    {
      name:'Login',
      path:'/',
      component: Login
    },
    {
      name:'Home',
      path:'/home',
      components: {
        default: Home,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      name:'About',
      path:'/about',
      components: {
        default: About,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      path:'/friend',
      name:'Friend',
      components: {
        default: Friend,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      name:'Analysis',
      path:'/analysis',
      components: {
        default: Analysis,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      name:'Profile',
      path:'/profile',
      components: {
        default: Profile,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      name:'SignUp',
      path:'/signup',
      components: {
        default: SignUp
      }
    },
    {
      name:'Event',
      path:'/event',
      components: {
        default: Event,
        header: Header,
        sidebar: Sidebar,
        footer: Footer
      }
    },
    {
      name:'NotFound',
      path:'/:notFound(.*)',
      components: {
        default: NotFound,
        footer: Footer
      }
    }
  ]
});