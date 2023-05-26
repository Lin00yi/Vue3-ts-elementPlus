import { NProgress } from 'nprogress';

import { createRouter, createWebHashHistory } from 'vue-router'
import nProgress from '../hooks/userNprogress'
const NProgress=nProgress()
const layout = () => import('../layout/MainContainer.vue')
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../components/HelloWorld.vue'),
        meta: {
          title: '首页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AppLogin.vue'),
    meta: {
      title: '登录'
    }
  },
]
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
router.beforeEach((to, from, next) => {
  // 开启进度条动画
  NProgress.start();
  // if()
  next()
});

router.afterEach(() => {
  // 关闭进度条动画
  NProgress.done();
});
export default router