import Vue from 'vue'
import Router from 'vue-router'

import Start from '~/pages/start'
import Latest from '~/pages/latest'
import About from '~/pages/about'
import News from '~/pages/news'
import Post from '~/pages/post'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'start',
        component: Start,
        meta: {
          scope: 'space'
        }
      },
      {
        path: '/news',
        name: 'latest',
        component: Latest,
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/news/:scope',
        name: 'newsListScope',
        component: News,
      },
      {
        path: '/post/:id',
        name: 'newsPost',
        component: Post
      }
    ]
  })
}