import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from "@/components/Test1";
import Prop from "@/components/Prop";
import Slot from "@/components/Slot";
import nav from "@/components/nav";
import e_layout from "@/components/e_layout";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/prop',
      name: 'Prop',
      component: Prop
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/layout',
      name: 'e_layout',
      component: e_layout
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    }
    
  ]
})
