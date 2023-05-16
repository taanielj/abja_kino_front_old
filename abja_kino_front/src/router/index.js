import {createRouter, createWebHistory} from 'vue-router'
import ScheduleView from "@/views/ScheduleView.vue";
import MovieView from "@/views/MovieView.vue";

const routes = [
  {
    path: '/movie/:id',
    name: 'MovieRoute',
    component: MovieView,
    props: true
  },
  {
    path: '/',
    name: 'ScheduleRoute',
    component: ScheduleView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
