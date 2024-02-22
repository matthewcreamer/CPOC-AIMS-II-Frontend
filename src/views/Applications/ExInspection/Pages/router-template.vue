<template>
  <div class="pm-page" :class="[sidebarHiding == true ? 'pm-page-none-sidbar' : 'pm-page']">
    <toolbar
        pageSubName="Ex-Inspection"
        :isBackPath="true"
        :isBack_specificPath="'/'"
        style="grid-column: span 3"
      />
    <sidebar :routes="routes" @resizeGridLayout="RESIZE_GRID_LAYOUT()" style="grid-column: span 1; grid-row: span 2;"></sidebar>
    <banner :calname="calname" style="grid-column: span 2"></banner>
    <div class="pm-page-container">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
// import axios from "/axios.js";
// Structures
import toolbar from "@/components/app-structures/app-navbar-toolbar.vue";
import sidebar from "@/components/app-structures/app-sidebar-ex-inspection.vue";
import banner from "@/components/app-structures/app-banner.vue";

export default {
  name: "router-template-detail",
  components: {
    toolbar,
    sidebar,
    banner,
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_INAPP", {
      name: "Ex-Inspection",
      //icon: "/img/icon_menu/equipment/piping.png"
    });
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "DASHBOARD",
      subpageInnerName: null
    });
    if (this.$store.state.status.server == true) {
      console.log('online');
    }
    this.calname = this.$store.state
  },
  data() {
    return {
      sidebarHiding: false,
      isAdd: false,
      calname: {},
      routes: [
        {
          url: '/',
          icon: '<svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.70784 13.6001C5.85982 15.2903 7.80036 16.4001 10.0001 16.4001C13.5347 16.4001 16.4001 13.5347 16.4001 10.0001C16.4001 6.46547 13.5347 3.6001 10.0001 3.6001C6.46547 3.6001 3.6001 6.46547 3.6001 10.0001V10.8001M10.0001 6.4001V10.0001L12.4001 12.4001" stroke="white" stroke-width="2"/><path d="M5.6001 8.7998L3.6001 10.7998L1.6001 8.7998" stroke="white" stroke-width="1.2"/></svg>',
          name: 'Information'
        },
        {
          url: '/',
          icon: '<svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.70784 13.6001C5.85982 15.2903 7.80036 16.4001 10.0001 16.4001C13.5347 16.4001 16.4001 13.5347 16.4001 10.0001C16.4001 6.46547 13.5347 3.6001 10.0001 3.6001C6.46547 3.6001 3.6001 6.46547 3.6001 10.0001V10.8001M10.0001 6.4001V10.0001L12.4001 12.4001" stroke="white" stroke-width="2"/><path d="M5.6001 8.7998L3.6001 10.7998L1.6001 8.7998" stroke="white" stroke-width="1.2"/></svg>',
          name: 'Inspection Record'
        },
        {
          url: '/',
          icon: '<svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.70784 13.6001C5.85982 15.2903 7.80036 16.4001 10.0001 16.4001C13.5347 16.4001 16.4001 13.5347 16.4001 10.0001C16.4001 6.46547 13.5347 3.6001 10.0001 3.6001C6.46547 3.6001 3.6001 6.46547 3.6001 10.0001V10.8001M10.0001 6.4001V10.0001L12.4001 12.4001" stroke="white" stroke-width="2"/><path d="M5.6001 8.7998L3.6001 10.7998L1.6001 8.7998" stroke="white" stroke-width="1.2"/></svg>',
          name: 'Checklist'
        },
        {
          url: '/',
          icon: '<svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.70784 13.6001C5.85982 15.2903 7.80036 16.4001 10.0001 16.4001C13.5347 16.4001 16.4001 13.5347 16.4001 10.0001C16.4001 6.46547 13.5347 3.6001 10.0001 3.6001C6.46547 3.6001 3.6001 6.46547 3.6001 10.0001V10.8001M10.0001 6.4001V10.0001L12.4001 12.4001" stroke="white" stroke-width="2"/><path d="M5.6001 8.7998L3.6001 10.7998L1.6001 8.7998" stroke="white" stroke-width="1.2"/></svg>',
          name: 'Picture Log'
        },
      ]
    };
  },
  computed: {},
  methods: {
    RESIZE_GRID_LAYOUT() {
      this.sidebarHiding = !this.sidebarHiding;
    },
    TOGGLE_POPUPADD() {
      this.isAdd = !this.isAdd;
    },
    refreshPage() {
      this.$router.go();
    }
  }
};
</script>

<style lang="scss" scoped>
.pm-page {
  display: grid;
  grid-template-columns: 200px;
  grid-template-rows: 51px;
  // grid-template-columns: 200px calc(100vw - 200px);
  // grid-template-rows: 51px calc(100vh - 95px);
  overflow: hidden;
  transition: all 0.3s;
  .pm-page-container {
    background-color: #fff;
    grid-column: span 2;
    height: calc(100vh - 95px);
    margin: 0 !important;
  }
}

@media screen and (max-width: 1024px) {
  .pm-page {
    grid-template-columns: 54px calc(100vw - 54px);
    .pm-page-container {
      background-color: #fff;
    }
  }
}

.pm-page-none-sidbar {
  grid-template-columns: 54px calc(100vw - 54px);
  .pm-page-container {
    background-color: #fff;
  }
}
</style>