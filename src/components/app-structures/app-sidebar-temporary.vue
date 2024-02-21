<template>
  <div class="app-sidebar" :class="[sidebarHiding == true ? 'app-sidebar-hide' : 'app-sidebar']">
    <div class="item-container">
      <div class="section-label">
        <label>Information</label>
      </div>
      <!-- <router-link v-for="item in sidebarMenu" :key="item.id" :to="item.link">
        <v-ons-toolbar-button class="item">
          <img src="/img/icon_sidebar/tank/info.png" /> -->
          <!-- <i :class="item.icon"></i> -->
          <!-- <img :src="item.icon" /> -->
          <!-- <span>{{ item.name }}</span>
        </v-ons-toolbar-button> -->
      <!-- </router-link> -->
      <router-link :to="'/temporary-repair'">
        <v-ons-toolbar-button class="item">
          <svg  width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2796 12.5485C13.9723 11.7439 14.4792 10.7903 14.7571 9.75549C15.068 8.59786 15.0799 7.38465 14.7977 6.22822L9.57676 8.31661L13.2796 12.5485ZM14.0549 4.3713L8.89453 6.43544V0.87793C9.99687 1.03457 11.0519 1.44887 11.9715 2.09303C12.8286 2.69343 13.5383 3.47265 14.0549 4.3713Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89501 0.081543C5.94523 0.202804 5.02257 0.496211 4.17324 0.95019C3.02823 1.56221 2.05183 2.44717 1.33052 3.52668C0.609218 4.60619 0.165275 5.84692 0.0380178 7.13899C-0.0892392 8.43105 0.104117 9.73455 0.600961 10.934C1.0978 12.1335 1.8828 13.192 2.88641 14.0156C3.89002 14.8392 5.08127 15.4027 6.35463 15.656C7.628 15.9092 8.94418 15.8446 10.1866 15.4677C10.9395 15.2393 11.6512 14.9006 12.2994 14.4648L7.17954 8.61349C6.99611 8.40386 6.89501 8.13477 6.89501 7.85621V0.081543Z" fill="white"/>
          </svg>

          <span>Dashboard</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/trr'">
        <v-ons-toolbar-button class="item">
          <svg  width="22" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.6001 5.2002V8.4002M7.6001 8.4002V11.6002M7.6001 8.4002H16.4001M7.6001 8.4002H3.6001M7.6001 11.6002V14.8002M7.6001 11.6002H16.4001M7.6001 11.6002H3.6001M3.6001 5.2002H16.4001V14.8002H3.6001V5.2002Z" stroke="white" stroke-width="1.2"/>
          </svg>

          <span>Temporary Repair Record</span>
        </v-ons-toolbar-button>
      </router-link>
 
      <router-link :to="'/temporary-pending-approval'">
        <v-ons-toolbar-button class="item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.70784 13.6001C5.85982 15.2903 7.80036 16.4001 10.0001 16.4001C13.5347 16.4001 16.4001 13.5347 16.4001 10.0001C16.4001 6.46547 13.5347 3.6001 10.0001 3.6001C6.46547 3.6001 3.6001 6.46547 3.6001 10.0001V10.8001M10.0001 6.4001V10.0001L12.4001 12.4001" stroke="white" stroke-width="2"/>
            <path d="M5.6001 8.7998L3.6001 10.7998L1.6001 8.7998" stroke="white" stroke-width="1.2"/>
            </svg>


          <span>Pending Approval</span>
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
export default {
  name: "app-sidebar",
  mounted() {},
  data() {
    return {
      id_tag: this.$route.params.id_tag,
      asset_name: this.$route.params.asset_name,
      sidebarHiding: false
    };
  },
  computed: {},
  methods : {
    SHOW_HIDE_SIDEBAR() {
      if (this.sidebarHiding == false) this.sidebarHiding = true;
      else this.sidebarHiding = false;
      this.$emit("resizeGridLayout");
    }
  },
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
    height: 18%;
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
      width: 190px;
      padding: 0;
      height: 34px;
      justify-content: flex-start;
      border-radius: 6px;
      margin: 14px auto;
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
      svg {
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
  .line {
    padding: 6px;
    width: 180px;
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
        display: none;
      }
    }
    .line {
      display: none;
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