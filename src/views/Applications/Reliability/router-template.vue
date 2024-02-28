<template>
  <div class="pm-page" :class="[sidebarHiding == true ? 'pm-page-none-sidbar' : 'pm-page']">
    <toolbar
        pageSubName="Reliability Report"
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
import sidebar from "@/components/app-structures/app-sidebar.vue";
import banner from "@/components/app-structures/app-banner.vue"

import pieChartSvg from "@/components/svg/pie-chart-svg.vue"
import windowLayoutSvg from "@/components/svg/window-layout-svg.vue"
import rewindTimeSvg from "@/components/svg/rewind-time-svg.vue"

export default {
  name: "router-template-detail",
  components: {
    toolbar,
    sidebar,
    banner,
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_INAPP", {
      name: "CPOC IMS",
      //icon: "/img/icon_menu/equipment/piping.png"
    });
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "CPOC IMS",
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
      isAdd: false ,
      calname:{},
      routes: [
        {
          name: 'Information'
        },
        {
          url: '/reliability',
          icon: {
            svg: pieChartSvg,
            size: 18
          },
          name: 'Dashboard'
        },
        {
          url: '/reliability/failure-report',
          icon: {
            svg: windowLayoutSvg,
            size: 18
          },
          name: 'Failure Report'
        },
        {
          url: '/reliability/pending-approval',
          icon: {
            svg: rewindTimeSvg,
            size: 18
          },
          name: 'Pending Approval'
        },
        {
          url: '/reliability/stt',
          icon: {
            svg: windowLayoutSvg,
            size: 18
          },
          name: 'Short Term Tracking'
        },
        {
          url: '/reliability/ltt',
          icon: {
            svg: windowLayoutSvg,
            size: 18
          },
          name: 'Long Term Tracking'
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