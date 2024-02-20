<template>
  <div class="app-sidebar" :class="[sidebarHiding == true ? 'app-sidebar-hide' : 'app-sidebar']">
    <div class="item-container">
      <!-- SECTION INFO -->
      <div class="section-label">
        <label>NDE</label>
      </div>
      <router-link :to="'/'">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" />
          <span>Dashboard</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/report/'">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" />
          <span>Report</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/pending-appv/'">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" />
          <span>Pending Approval</span>
        </v-ons-toolbar-button>
      </router-link>

      <!-- SECTION INFO -->
      <div class="section-label">
        <label>Management</label>
      </div>

      <router-link :to="'/account/'">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" />
          <span>Account</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/report-appv/'">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" />
          <span>Report Approval</span>
        </v-ons-toolbar-button>
      </router-link>
    </div>
    <div class="item-container fixed-panel">
      <v-ons-toolbar-button class="item bottom-btn" v-on:click="SHOW_HIDE_SIDEBAR()">
        <i class="las la-caret-square-left" v-if="sidebarHiding == false"></i>
        <i class="las la-caret-square-right" v-if="sidebarHiding == true"></i>
        <span>Hide Sidebar</span>
      </v-ons-toolbar-button>
    </div>
  </div>
</template>

<script>
//API
// import axios from "/axios.js";

export default {
  name: "app-sidebar",
  created() {},
  props: {},
  data() {
    return {
      id_tag: this.$route.params.id_tag,
      asset_name: this.$route.params.asset_name,
      sidebarHiding: false
    };
  },
  computed: {},
  methods: {
    SHOW_HIDE_SIDEBAR() {
      if (this.sidebarHiding == false) this.sidebarHiding = true;
      else this.sidebarHiding = false;
      this.$emit("resizeGridLayout");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
.app-sidebar {
  width: 200px;
  height: 100%;
  background-color: $web-theme-color-secondary;
  border: 1px solid #e6e6e6;
  border-width: 0 1px 0 0;
  position: relative;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .item-container {
    width: 100%;
    padding-top: 20px;
    transition: all 0.3s;

    .section-label {
      margin-left: 20px;
      margin-top: 20px;
      transition: all 0.3s;
      label {
        font-size: 12px;
        font-weight: 400;
        color: #ffffff92;
        font-style: normal;
        transition: all 0.3s;
      }
      hr {
        width: -webkit-fill-available;
        margin-right: 10px;
        display: none;
        transition: all 0.3s;
      }
    }

    .section-label:first-child {
      margin-top: 0px;
    }

    .item {
      width: 180px;
      padding: 0;
      height: 34px;
      justify-content: flex-start;
      border-radius: 6px;
      margin: 10px auto;
      border: 0px;
      position: relative;
      transition: all 0.3s;
      i {
        margin-left: 15px;
        color: $web-font-color-white;
      }
      span {
        color: $web-font-color-white;
        font-weight: 500;
        font-size: 12px;
        transition: all 0.3s;
      }
      img {
        width: 18px;
        max-height: 18px;
        object-fit: contain;
        margin-left: 10px;
        margin-right: 10px;
      }
      i.right-arrow {
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }

    .item:hover,
    .router-link-active > .item,
    .router-link-exact-active > .item {
      background: $dexon-primary-green;
    }

    .bottom-btn {
      justify-content: center;
      i {
        margin: 0 10px;
        margin-left: 0;
      }
    }
  }

  .fixed-panel {
    background-color: $web-theme-color-secondary;
  }
}
@media screen and (max-width: 1024px) {
  .app-sidebar {
    width: fit-content;
    transition: all 0.3s;
    .item-container {
      width: 54px;
      padding-top: 10px;
      .section-label {
        margin: 0;
        label {
          display: none;
        }
        hr {
          margin: 0 10px;
          display: block;
          transition: all 0.3s;
        }
      }
      .item {
        width: fit-content;
        justify-content: center;
        span,
        i {
          display: none;
        }
      }
      .bottom-btn {
        display: none;
        width: 38px;
        i {
          display: inherit !important;
          margin: 0;
        }
      }
    }
  }
}
.popup-button-caller {
  width: 100%;
  background-color: unset;
  border: none;
  padding: 0;
  margin: 0;
  margin-bottom: -10px;
  margin-top: -10px;
}

.popover-button {
  padding: 6px 5px 6px 18px;
  border: 1px solid #e6e6e6;
  border-width: 0 0 1px 0;

  i {
    font-size: 14px;
  }
}
.popover-button:hover {
  background-color: #f3f3f3;
}

.popover-button:last-child {
  border: 0;
}

.app-sidebar-hide {
  width: fit-content;
  transition: all 0.3s;
  .item-container {
    width: 54px;
    padding-top: 10px;
    .section-label {
      margin: 0;
      label {
        display: none;
      }
      hr {
        margin: 0 10px;
        display: block;
        transition: all 0.3s;
      }
    }
    .item {
      width: fit-content;
      justify-content: center;
      span,
      i {
        display: none;
      }
    }
    .bottom-btn {
      width: 38px;
      i {
        display: inherit !important;
        margin: 0;
      }
    }
  }
}
</style>