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
    path: "/",
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
    path: "/nde",
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
  //Inspection & anomaly monthly performance
  {
    path: "/iamp",
    name: "Inspection & Anomaly Monthly Performance",
    component: () => import("../views/Applications/IAMP/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "Dashboard",
        component: () => import("../views/Applications/IAMP/Dashboard/Page.vue"),
      },
      {
        path: "/inspection",
        alias: "Inspection & Anomaly Monthly Performance Inspection",
        component: () => import("../views/Applications/IAMP/Inspection/Page.vue"),
      },
      {
        path: "/anomaly-iamp",
        alias: "Inspection & Anomaly Monthly Performance Anomaly",
        component: () => import("../views/Applications/IAMP/Anomaly/Page.vue"),
      }, 
      {
        path: "/hightlight-activities",
        alias: "Hightlight Activities",
        component: () => import("../views/Applications/IAMP/HightlightActivities/Page.vue"),
      },
      {
        path: "/moc",
        alias: "Management Of Change",
        component: () => import("../views/Applications/IAMP/MOC/Page.vue"),
      },
      {
        path: "/inspection-campaign",
        alias: "Inspection Campaign",
        component: () => import("../views/Applications/IAMP/InspectionCampaign/Page.vue"),
      },
      {
        path: "/rectification-campaign",
        alias: "Rectification Campaign",
        component: () => import("../views/Applications/IAMP/RectificationCampaign/Page.vue"),
      },
      {
        path: "/inspection-campaign",
        alias: "Inspection Campaign",
        component: () => import("../views/Applications/IAMP/InspectionCampaign/Page.vue"),
      },
      {
        path: "/monthly-report",
        alias: "Monthly Report",
        component: () => import("../views/Applications/IAMP/MonthlyReport/Page.vue"),
      },
    ]
  },
  //GPI
  {
    path: "/gpi",
    name: "General Platform Inspection",
    component: () => import("../views/Applications/GPI/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "Dashboard",
        component: () => import("../views/Applications/GPI/Dashboard/Page.vue"),
      },
      {
        path: "/gpi-record",
        alias: "GPI Record",
        component: () => import("../views/Applications/GPI/GPIRecord/Page.vue"),
      },
      {
        path: "/gpi-pending-approval",
        alias: "Pending Approval",
        component: () => import("../views/Applications/GPI/PendingApproval/Page.vue"),
      },
    ]
  },
  //Ex-inspection
  {
    path: "/ex-inspection",
    name: "Ex-Inspection",
    component: () => import("../views/Applications/ExInspection/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "Ex-Inspection Dashboard",
        component: () => import("../views/Applications/ExInspection/Dashboard/Page.vue"),
      },
      {
        path: "/list",
        alias: "List of Ex-Inspection",
        component: () => import("../views/Applications/ExInspection/List/Page.vue"),
      },
    ]
  },
  //Temporary repair
  {
    path: "/temporary-repair",
    name: "Temporary Repair",
    component: () => import("../views/Applications/TemporaryRepair/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "Temporary Repair Dashboard",
        component: () => import("../views/Applications/TemporaryRepair/Dashboard/Page.vue"),
      },
      {
        path: "/trr",
        alias: "Temporary Repair Record",
        component: () => import("../views/Applications/TemporaryRepair/TRR/Page.vue"),
      },
      {
        path: "/temporary-pending-approval",
        alias: "Temporary Repair Pending Approval",
        component: () => import("../views/Applications/TemporaryRepair/PendingApproval/Page.vue"),
      },
    ]
  },
  //Reliability
  {
    path: "/reliability",
    name: "Reliability",
    component: () => import("../views/Applications/Reliability/router-template.vue"),
    children: [
      {
        path: "/",
        alias: "Reliability Dashboard",
        component: () => import("../views/Applications/Reliability/Dashboard/Page.vue"),
      },
      {
        path: "/failure-report",
        alias: "Failure Report",
        component: () => import("../views/Applications/Reliability/FailureReport/Page.vue"),
      },
      {
        path: "/pending-approval",
        alias: "Pending Approval",
        component: () => import("../views/Applications/Reliability/PendingApproval/Page.vue"),
      },
      {
        path: "/stt",
        alias: "Short Term Tracking",
        component: () => import("../views/Applications/Reliability/STT/Page.vue"),
      },
      {
        path: "/ltt",
        alias: "Long Term Tracking",
        component: () => import("../views/Applications/Reliability/LTT/Page.vue"),
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
