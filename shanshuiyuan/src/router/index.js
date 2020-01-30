import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Business from '@/views/Business'
import News from '@/views/News'
import Admin from '@/views/Admin'
import Company from '@/views/Company'

import Anquanpinggu from "@/components/Anquanpinggu";
import Huanbaogongcheng from "@/components/Huanbaogongcheng";
import Huanbaoguanjia from "@/components/Huanbaoguanjia";
import Huanping from "@/components/Huanping";
import Jungongyanshou from "@/components/Jungongyanshou";
import Keyan from "@/components/Keyan";
import Shuitubaochisheshi from "@/components/Shuitubaochisheshi";
import Yingjiyuan from "@/components/Yingjiyuan";
import Paiwuxuke from "@/components/Paiwuxuke";
import Shuitubaochi from "@/components/Shuitubaochi";


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
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/business',
      name: 'business',
      component: Business,
      children: [
        {
          path: 'anquanpinggu',
          component: Anquanpinggu
        }, {
          path: 'huanbaogongcheng',
          component: Huanbaogongcheng
        }, {
          path: 'huanbaoguanjia',
          component: Huanbaoguanjia
        }, {
          path: 'huanping',
          component: Huanping
        }, {
          path: 'jungongyanshou',
          component: Jungongyanshou
        }, {
          path: 'keyan',
          component: Keyan
        }, {
          path: 'shuitubaochisheshi',
          component: Shuitubaochisheshi
        }, {
          path: 'yingjiyuan',
          component: Yingjiyuan
        }, {
          path: 'paiwuxuke',
          component: Paiwuxuke
        }, {
          path: 'shuitubaochi',
          component: Shuitubaochi
        },
      ]
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
      path: '*',
      redirect: '/'
    }
  ]
})
