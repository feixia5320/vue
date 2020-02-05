import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Business from '@/views/Business'
import News from '@/views/News'
import Admin from '@/views/Admin'
import Company from '@/views/Company'
import Notice from '@/views/Notice'
import Joinus from '@/views/Joinus'

import Anquanpinggu from "@/components/business/Anquanpinggu";
import Huanbaogongcheng from "@/components/business/Huanbaogongcheng";
import Huanbaoguanjia from "@/components/business/Huanbaoguanjia";
import Huanping from "@/components/business/Huanping";
import Jungongyanshou from "@/components/business/Jungongyanshou";
import Keyan from "@/components/business/Keyan";
import Shuitubaochisheshi from "@/components/business/Shuitubaochisheshi";
import Yingjiyuan from "@/components/business/Yingjiyuan";
import Paiwuxuke from "@/components/business/Paiwuxuke";
import Shuitubaochi from "@/components/business/Shuitubaochi";

import Newslist from "@/components/admin/Newslist";
import Uploadnews from "@/components/admin/Uploadnews";
import Visit from "@/components/admin/Visit";
import Activelist from "@/components/admin/Activelist";
import Uploadactive from "@/components/admin/Uploadactive";
import Activedetail from "@/components/admin/Activedetail";

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
    }, {
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
      path: '/notice',
      name: 'notice',
      component: Notice
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: "",
          component: Newslist
        }, {
          path: "newslist",
          component: Newslist
        }, {
          path: "activelist",
          component: Activelist
        }, {
          path: "uploadnews",
          component: Uploadnews
        }, {
          path: "visit",
          component: Visit
        }, {
          path: "active",
          component: Uploadactive
        },
      ]
    }, {
      path: '/joinus',
      name: 'Joinus',
      component: Joinus
    }, {
      path: '/activedetail/:id',
      name: 'activedetail',
      component: Activedetail
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
