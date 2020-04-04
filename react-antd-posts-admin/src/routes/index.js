/**
 * constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
 * asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。
 */

import Login from '../pages/Login'
import PageNotFound from '../pages/404'

import Dashboard from '../pages/admin/dashboard/Index'
import List from '../pages/admin/posts/List'
import Edit from '../pages/admin/posts/Edit'
export const constantRoutes = [
     {
         path:'/login',
         component:'Login'                                                                                                                                                                                                                              ··1·                                                                                                                            突然【
     },
     {
         path:'/404',
         component:'PageNotFound'
     }
 ]

export const asyncRoutes = [
    {
        path:'/admin/dashboard',
        component:'Dashboard'                                                                                                                                                                                                                              ··1·                                                                                                                            突然【
    },
    {
        path:'/admin/posts',
        component:'List'
    }
]