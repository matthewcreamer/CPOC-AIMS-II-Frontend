// import { h } from 'vue'
// import store from '@/store'
import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "404",
    component: () => import("../views/404View.vue"),
  },
  {
    path: "/login",
    name: "Log In",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/AccountView.vue"),
  },

  //NDE
  {
    path: "/",
    name: "NDE",
    component: () => import("../views/Applications/NDE/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "NDE Dashboard",
        component: () => import("../views/Applications/NDE/NdeDashboard.vue"),
      },
    ]
  },

  // USER ACCOUNT MANAGEMENT
  {
    path: "/user-account-manager",
    name: "User Account Manager",
    component: () =>
      import("../views/Applications/UserAccountManager/UserList.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.state.user.role == 'manager' || store.state.user.role == 'admin') next()
    //   else next('/')
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  //const publicPages = ["/login", "/register"];
  //const authRequired = !publicPages.includes(to.path);
  //const loggedIn = localStorage.getItem("user");

  // if (authRequired && !loggedIn) {
  //   return next("/login");
  // }
  next();
});
