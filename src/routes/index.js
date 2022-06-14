import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home';
import About from './About';
import Friend from './Friend';
import Analysis from './Analysis';
import Profile from './Profile';
import Event from './Event'


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
    }
  ]

})