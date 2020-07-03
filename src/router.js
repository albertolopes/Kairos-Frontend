import Router from 'vue-router';
  
import Vue from "vue";

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Forgot from './components/Auth/Forgot';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import User from './components/User';
import About from './components/About';
// import store from "./stores/store";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: "vue-school-active-class",
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        const position = {};
        if (to.hash) {
          position.selector = to.hash;
          if (to.hash === "#experience") {
            position.offset = { y: 140 };
          }
          if (document.querySelector(to.hash)) {
            return position;
          }
  
          return false;
        }
      }
    },
    routes: [
        {
          path: '/',
          component: Todo,
          name: 'todo',
          children: [
            {
              path: '/tasks',
              component: Tasks,
              name: 'tasks'
            },
            {
              path: '/user',
              component: User,
              name: 'user'
            },
            {
              path: '/about',
              component: {about: About},
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