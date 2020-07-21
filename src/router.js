import Router from 'vue-router';

import Vue from "vue";

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Forgot from './components/Auth/Forgot';
import Todo from './components/Todo';
import Init from './components/Init'
import Tasks from './components/Tasks';
import User from './components/User';
import About from './components/About';

Vue.use(Router);

const router = new Router({ 
  mode: 'history',
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
            path: '/init',
            component: Init,
            name: 'init'
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
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup', '/forgot'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;