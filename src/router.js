import Router from 'vue-router';

import Vue from "vue";

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Forgot from './components/Auth/Forgot';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import User from './components/User';
import About from './components/About';

Vue.use(Router);

const router = new Router({ 
  base: process.env.BASE_URL, 
  routes: [
    {
      path: '/',
      component: Todo,
      name: 'todo',
      children:
        [
          {
            path: '/tasks',
            component: Tasks,
            name: 'tasks',
          },
          {
            path: '/user',
            component: User,
            name: 'user'
          },
          {
            path: '/about',
            component: About,
            name: 'about'
          }
        ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/signup',
      component: Signup,
      name: 'singup'
    },
    {
      path: '/forgot',
      component: Forgot,
      name: 'forgot'
    },
    {
      path: '/github',
      beforeEnter() {location.href = 'https://github.com/albertolopes'}
    },
    {
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/in/alberto-lopes-159189126/'}
    },
    {
      path: '/twitter',
      beforeEnter() {location.href = 'https://twitter.com/albertholopes'}
    },
    {
      path: '/instagram',
      beforeEnter() {location.href = 'https://www.instagram.com/albertholopes'}
    },
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup', '/forgot'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;