import Vue from 'vue'
import Router from 'vue-router'

import Start from '~/pages/start'
import About from '~/pages/about'
import NewsList from '~/pages/news/list'
import NewsPost from '~/pages/news/post'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'start',
        component: Start
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/news',
        name: 'newsList',
        component: NewsList
      },
      {
        path: '/news/:id',
        name: 'newsPost',
        component: NewsPost
      }
    ]
  })
}