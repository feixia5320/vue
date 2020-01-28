import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Business from '@/views/Business'
import News from '@/views/News'
import Admin from '@/views/Admin'
import Company from '@/views/Company'
// import HelloWorld from '@/components/HelloWorld'

//规避路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/business',
      name: 'business',
      component: Business
    }, {
      path: '/company',
      name: 'company',
      component: Company
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '**',
      redirect: '/'
    }
  ]
})
