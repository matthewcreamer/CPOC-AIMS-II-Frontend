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
  {
    path: "/md",
    name: "MasterData",
    component: () =>
      import("../views/Applications/MasterData/router-template.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.state.user.role == 'manager' || store.state.user.role == 'admin') next()
    //   else next('/')
    // },
    children: [

      {
        path: "applicable-status",
        alias: "Applicable Status",
        component: () =>
          import("../views/Applications/MasterData/ApplicableStatus.vue"),
      },
      {
        path: "bottom-type",
        alias: "Bottom Type",
        component: () =>
          import("../views/Applications/MasterData/BottomType.vue"),
      },
      {
        path: "construction-code",
        alias: "Construction Code",
        component: () =>
          import("../views/Applications/MasterData/ConstructionCode.vue"),
      },
      {
        path: "dexon-department",
        alias: "Dexon Department",
        component: () =>
          import("../views/Applications/MasterData/DexonDepartment.vue"),
      },
      {
        path: "dexon-position",
        alias: "Dexon Position",
        component: () =>
          import("../views/Applications/MasterData/DexonPosition.vue"),
      },
      {
        path: "foundation",
        alias: "Foundation",
        component: () =>
          import("../views/Applications/MasterData/Foundation.vue"),
      },
      {
        path: "inspection-code",
        alias: "Inspection Code",
        component: () =>
          import("../views/Applications/MasterData/InspectionCode.vue"),
      },

      {
        path: "insulation",
        alias: "Insulation",
        component: () =>
          import("../views/Applications/MasterData/Insulation.vue"),
      },
      {
        path: "prefix",
        alias: "Prefix",
        component: () =>
          import("../views/Applications/MasterData/Prefix.vue"),
      },
      {
        path: "product",
        alias: "Product",
        component: () =>
          import("../views/Applications/MasterData/Product.vue"),
      },

      {
        path: "roof-shade",
        alias: "Roof Shade",
        component: () =>
          import("../views/Applications/MasterData/RoofShade.vue"),
      },
      {
        path: "roof-type",
        alias: "Roof Type",
        component: () =>
          import("../views/Applications/MasterData/RoofType.vue"),
      },
      {
        path: "tank-integrity-status",
        alias: "Tank Integrity Status",
        component: () =>
          import("../views/Applications/MasterData/TankIntegrityStatus.vue"),
      },
      {
        path: "tank-internal-pressure",
        alias: "TankInternalPressure",
        component: () =>
          import("../views/Applications/MasterData/TankInternalPressure.vue"),
      },
      {
        path: "tank-material",
        alias: "Tank Material",
        component: () =>
          import("../views/Applications/MasterData/TankMaterial.vue"),
      },
      {
        path: "tank-status",
        alias: "Tank Status",
        component: () =>
          import("../views/Applications/MasterData/TankStatus.vue"),
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
