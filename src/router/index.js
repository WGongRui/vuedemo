import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo from '@/components/Demo'
import SortDemo from '@/components/SortDemo'
import AjaxFrom from '@/components/AjaxForm'
import MySwiper from '@/components/MySwiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/form',
      name: 'AjaxFrom',
      component: AjaxFrom
    },
    {
      path: '/sort',
      name: 'SortDemo',
      component: SortDemo
    },
    {
      path: '/swiper',
      name: 'MySwiper',
      component: MySwiper
    }
  ]
})

