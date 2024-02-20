<template>
  <div class="pm-page" :class="[sidebarHiding == true ? 'pm-page-none-sidbar' : 'pm-page']">
    <!-- <toolbar
      :pageSubName="this.$store.state.currentPageName"
      :pageSubInnerName="this.$store.state.currentPageInnerName"
      @refreshInfo="refreshPage()"
      :isBackPath="false"
      :isBack_specificPath="'/piping'"
      :isNewBtn="false"
      newBtnLabel="New Line"
      @newBtnFn="TOGGLE_POPUP()"
      style="grid-column: span 3"
      :infoPiping="infoPiping"
      :isMoreBtn="false"
      :isSearchBox="false"
      :isRefresh="true"
      :isSearchDropdown="false"
      :options="pipingList"
    /> -->
    <toolbar
        pageSubName="Ex-Inspection"
        :isBack="true"
        style="grid-column: span 3"
      />
    <sidebar @resizeGridLayout="RESIZE_GRID_LAYOUT()"></sidebar>
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

export default {
  name: "router-template-detail",
  components: {
    toolbar,
    sidebar
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_INAPP", {
      name: "E-NDE REPORT",
      //icon: "/img/icon_menu/equipment/piping.png"
    });
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "E-NDE REPORT",
      subpageInnerName: null
    });
    if (this.$store.state.status.server == true) {
      console.log('online');
    }
  },
  data() {
    return {
      sidebarHiding: false,
      isAdd: false
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
  grid-template-columns: 200px calc(100vw - 200px);
  grid-template-rows: 51px calc(100vh - 95px);
  transition: all 0.3s;
  .pm-page-container {
    background-color: #fff;
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