import Vue from 'vue'
import Vuex from 'vuex'
import axios from "/axios.js";
import router from '/src/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 'dev', //dev, prod
    modeURL: {
      dev: 'https://localhost:5001/',
      prod: 'https://dis02.dexon-technology.com:444/'
    },
    urlApi: {
      dev: 'https://localhost:5001/api',
      prod: 'https://dis02.dexon-technology.com:444/api',
    },
    user: '',
    appIcon: '/app-icon.jpeg',
    currentInApp: '',
    currentPageName: '',
    currentPageInnerName: '',
    currentClient: '',
    status: {
      fullscreenAlert: false,
      server: true,
      token: false,
    },
    appsList: {
      managementApps: [
        {
          id: 103,
          name: "Master Data Manager",
          icon: "/img/icon_sidebar/master_data/table.png",
          icon_menu: '/img/icon_menu/master_data/table.png',
          link: "/md/applicable-status",
          isActive: true,
        },
        // {
        //   id: 105,
        //   name: "Asset Manager",
        //   icon: "/img/icon_sidebar/client/client.png",
        //   icon_menu: '/img/icon_menu/client/client.png',
        //   link: "/client-company-manager",
        //   isActive: true,
        // },
        {
          id: 108,
          name: "User Account Manager",
          icon: "/img/icon_sidebar/account/account.png",
          icon_menu: "/img/icon_menu/account/account.png",
          link: "/user-account-manager",
          isActive: true,
        },
      ],
    },
    sidebarGPIList : [
      {
        id: 1,
        name: "Dashboard",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/gpi",
        isActive: true,
      },
      {
        id: 2,
        name: "GPI Record",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/gpi-record",
        isActive: true,
      },
      {
        id: 3,
        name: "Pending Approval",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/gpi-pending-approval",
        isActive: true,
      },
    ],
    sidebarRRList: [
      {
        id: 1,
        name: "Dashboard",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/reliability",
        isActive: true,
      },
      {
        id: 2,
        name: "Failure Report",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/failure-report",
        isActive: true,
      },
      {
        id: 3,
        name: "Pending Approval",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/pending-approval",
        isActive: true,
      },
      {
        id: 4,
        name: "Short Term Tracking",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/stt",
        isActive: true,
      },
      {
        id: 5,
        name: "Long Term Tracking",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/ltt",
        isActive: true,
      },
    ],
    sidebarTemporaryList: [
      {
        id: 1,
        name: "Dashboard",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/temporary-repair",
        isActive: true,
      }, {
        id: 3,
        name: "Temporary Repair Record",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/trr",
        isActive: true,
      },
      {
        id: 2,
        name: "Pending Approval",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/temporary-pending-approval",
        isActive: true,
      },
   
    ],
    sidebarIAMPList: [
      {
        id: 1,
        name: "Dashboard",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/iamp",
        isActive: true,
      }, 
      {
        id: 2,
        name: "Inspection",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/inspection",
        isActive: true,
      },
      {
        id: 3,
        name: "Anomaly",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/anomaly-iamp",
        isActive: true,
      },
      {
        id: 4,
        name: "Highligh Activities",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/highligh-activities",
        isActive: true,
      },
      {
        id: 5,
        name: "Management of Change",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/management-of-change",
        isActive: true,
      },
      {
        id: 2,
        name: "Rectification Campaign",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "rectification-campaign",
        isActive: true,
      },
      {
        id: 3,
        name: "Monthly Report",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/monthly-report",
        isActive: true,
      },
    ],
    sidebarExinspecList: [
      {
        id: 1,
        name: "Dashboard",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/ex-inspection",
        isActive: true,
      },
      {
        id: 1,
        name: "List to Inspection",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/list",
        isActive: true,
      },
    ],
    sidebarMasterDateList: [
      {
        id: 100,
        name: "Applicable Status",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/applicable-status",
        isActive: true,
      },
      {
        id: 100,
        name: "Bottom Type",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/bottom-type",
        isActive: true,
      },
      {
        id: 100,
        name: "Construction Code",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/construction-code",
        isActive: true,
      },
      {
        id: 100,
        name: "Dexon Department",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/dexon-department",
        isActive: true,
      },
      {
        id: 100,
        name: "Dexon Position",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/dexon-position",
        isActive: true,
      },
      {
        id: 100,
        name: "Foundation",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/foundation",
        isActive: true,
      },
      {
        id: 100,
        name: "Inspection Code",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/inspection-code",
        isActive: true,
      },
      {
        id: 100,
        name: "Prefix",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/prefix",
        isActive: true,
      },
      {
        id: 100,
        name: "Product",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/product",
        isActive: true,
      },
      {
        id: 100,
        name: "Roof Shape",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/roof-shade",
        isActive: true,
      },
      {
        id: 100,
        name: "Roof Type",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/roof-type",
        isActive: true,
      },
      {
        id: 100,
        name: "Tank Integrity Status",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/tank-integrity-status",
        isActive: true,
      },
      {
        id: 100,
        name: "Tank Internal Pressure",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/tank-internal-pressure",
        isActive: true,
      },
      {
        id: 100,
        name: "Tank Status",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/tank-status",
        isActive: true,
      },
      {
        id: 100,
        name: "Tank Material",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/tank-material",
        isActive: true,
      },
      {
        id: 100,
        name: "Insulation",
        icon: "/img/icon_sidebar/executive_management/summary.png",
        icon_menu: '/img/icon_menu/executive_management/summary.png',
        link: "/md/insulation",
        isActive: true,
      },
    ],
    sidebarList: {
    },
    inAppMessage: {
      noData: "<div class='no-data-box' style='display: flex;justify-content: center;align-items: center;flex-direction: column;color: #a6a6a6;height: 200px;'><div><i class='las la-folder-open' style='margin-right:10px;font-size:20px;'></i><span>No Data</span></div></div>",
    },
    currentViewClient: null,
  },
  getters: {
  },
  mutations: {
    UPDATE_CURRENT_INAPP: (state, payload) => {
      if (payload) state.currentInApp = payload;
      else console.log('error: no payload');
    },
    UPDATE_CURRENT_CLIENT: (state, payload) => {
      if (payload) state.currentClient = payload;
      else console.log('error: no payload');
    },
    CLEAR_CURRENT_INAPP: (state) => {
      state.currentInApp = '';
    },
    CLEAR_CURRENT_CLIENT: (state) => {
      state.currentClient = '';
    },
    SIGN_IN: (state, payload) => {
      state.user = payload
    },
    SIGN_OUT: (state) => {
      state.user = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
    },
    VALIDATE_TOKEN: (state) => {
      axios({
        method: "get",
        url: "/home/connection-test",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
        .then((res) => {
          if (res.status == 200) {
            state.status.token = true;
            state.status.server = true;
            console.log("==> CONNECTION OK || TOKEN IS VALID <==")
          }

        })
        .catch((error) => {
          
          console.log("VALIDATE ERROR:")
          console.log(error)
          if (error.response.status == 0) {
            console.log('SERVER FAILED')
            //state.status.server = false;
            //state.status.fullscreenAlert = true;
            // alert('Cannot connect to server. Click "OK" to retry.')
            // router.go();
          }
          else if (error.response.status == 401) {
            console.warn('TOKEN FAILED!')
            state.status.token = false;
            state.status.fullscreenAlert = true;
            // alert('Session is expired. Please sign in again.')
            // localStorage.removeItem("user");
            // localStorage.removeItem("token");
            // router.push("/login");
          }
          // else{
          //   state.status.token = false
          //   state.status.fullscreenAlert=true;
          // }
        })
        .finally(() => { });
    },
    FETCH_USER_INFO: (state) => {
      if (JSON.parse(localStorage.getItem("user"))) {
        var id_user = JSON.parse(localStorage.getItem("user")).id_user;
      }
      if (id_user) {
        axios({
          method: "post",
          url: "/user/get-info",
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
          data: { id_user },
        })
          .then((res) => {
            if (res.status == 200) {
              state.user = res.data.user;
              console.log("==> Fetch User Info : Vuex <==");
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
          });
      }
    },
    UPDATE_CURRENT_VIEW_CLIENT: (state, payload) => {
      if (payload) {
        state.currentViewClient = payload;
      }
    },
    UPDATE_CURRENT_PAGENAME: (state, payload) => {
      if (payload) {
        state.currentPageName = payload.subpageName;
        state.currentPageInnerName = payload.subpageInnerName;
      }
    },
    CLEAR_CURRENT_PAGENAME: (state) => {
      state.currentPageName = '';
    }

  },
  actions: {
  },
  modules: {
  }
})
