import Vue from 'vue'
import Router from 'vue-router'

import Start from '~/pages/start'
import Latest from '~/pages/latest'
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
      },
      {
        path: '/news',
        name: 'latest',
        component: Latest,
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