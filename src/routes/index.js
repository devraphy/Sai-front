import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home'
import About from '../components/About'
import Friend from '../components/Friend'
import Analysis from '../components/Analysis'
import Profile from '../components/Profile'
import Event from '../components/Event'
import Visit from '../components/Visit'
import NotFound from '../components/NotFound'

export default createRouter({

  // Hash History => URL에 hash기호를 사용하여 주소를 나타내는 방법
  // History => 서버에서 URL 설정이 필요함 (createHistry() 알아보기)
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/friend',
      component: Friend
    },
    {
      path:'/analysis',
      component: Analysis
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/event',
      component: Event
    },
    {
      path:'/visit',
      component: Visit
    },
    {
      path:'/:notFound(.*)',
      component: NotFound
    }
  ]
});