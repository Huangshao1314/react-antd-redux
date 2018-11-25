// 结合react-router-config配置路由
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
* path（string）: 路由匹配路径。（没有path属性的Route 总是会 匹配）；
* exact（bool）：为true时，则要求路径与location.pathname必须完全匹配；
* strict（bool）：true的时候，有结尾斜线的路径只能匹配有斜线的location.pathname
* getIndexRoute(location, cb) 异步路由
* getChildRoutes(location, cb) 异步子路由
**/

// 根据路由权限可配置侧菜单及信息

import asyncComponent from '../components/asyncComponent';

const routes  = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '智慧云店'
    },
    exact: true,
    component: asyncComponent(() => import('../views/home')),
    requiresAuth: false,
  },{
    path: '/login',
    component: asyncComponent(() => import('../views/login')),
    requiresAuth: false,
  },{
    path: '/test',
    component: asyncComponent(() => import('../views/test')),
    requiresAuth: false,
  }
]

export default routes;
