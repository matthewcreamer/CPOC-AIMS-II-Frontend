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
      <router-link :to="'/iamp'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2796 12.5485C13.9723 11.7439 14.4792 10.7903 14.7571 9.75549C15.068 8.59786 15.0799 7.38465 14.7977 6.22822L9.57676 8.31661L13.2796 12.5485ZM14.0549 4.3713L8.89453 6.43544V0.87793C9.99687 1.03457 11.0519 1.44887 11.9715 2.09303C12.8286 2.69343 13.5383 3.47265 14.0549 4.3713Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89501 0.081543C5.94523 0.202804 5.02257 0.496211 4.17324 0.95019C3.02823 1.56221 2.05183 2.44717 1.33052 3.52668C0.609218 4.60619 0.165275 5.84692 0.0380178 7.13899C-0.0892392 8.43105 0.104117 9.73455 0.600961 10.934C1.0978 12.1335 1.8828 13.192 2.88641 14.0156C3.89002 14.8392 5.08127 15.4027 6.35463 15.656C7.628 15.9092 8.94418 15.8446 10.1866 15.4677C10.9395 15.2393 11.6512 14.9006 12.2994 14.4648L7.17954 8.61349C6.99611 8.40386 6.89501 8.13477 6.89501 7.85621V0.081543Z" fill="white"/>
          </svg>

          <span>Dashboard</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/inspection'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="22" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.6001 5.2002V8.4002M7.6001 8.4002V11.6002M7.6001 8.4002H16.4001M7.6001 8.4002H3.6001M7.6001 11.6002V14.8002M7.6001 11.6002H16.4001M7.6001 11.6002H3.6001M3.6001 5.2002H16.4001V14.8002H3.6001V5.2002Z" stroke="white" stroke-width="1.2"/>
          </svg>

          <span>Inspection Record</span>
        </v-ons-toolbar-button>
      </router-link>
      <div class="line">
        <!-- <label>Inspection</label> -->
        <hr />
      </div>
      <router-link :to="'/anomaly-iamp'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.14939 7.83131C8.57654 5.92179 10.0064 4 12 4C13.9936 4 15.4235 5.92179 14.8506 7.8313L14.5 9L13.2873 13.0422C13.2171 13.2762 13.182 13.3932 13.128 13.4895C12.989 13.7371 12.7513 13.9139 12.4743 13.9759C12.3664 14 12.2443 14 12 14C11.7557 14 11.6336 14 11.5257 13.9759C11.2487 13.9139 11.011 13.7371 10.872 13.4895C10.818 13.3932 10.7829 13.2762 10.7127 13.0422L9.14939 7.83131Z" fill="white" stroke="white" stroke-width="2"/>
          <path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" fill="white"/>
          </svg>

          <span>Anomaly</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/hightlight-activities'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.94519 2.53383C6.58726 0.933142 6.9083 0.132799 7.42987 0.0218749C7.56702 -0.00729164 7.70876 -0.00729164 7.84591 0.0218749C8.36749 0.132799 8.68853 0.933142 9.3306 2.53383C9.69573 3.44411 9.8783 3.89925 10.2199 4.20882C10.3157 4.29565 10.4197 4.37298 10.5305 4.43973C10.9253 4.6777 11.4182 4.72185 12.404 4.81013C14.0728 4.95958 14.9072 5.03431 15.162 5.51005C15.2147 5.60858 15.2506 5.71526 15.2681 5.82566C15.3526 6.35868 14.7392 6.91674 13.5124 8.03286L13.1717 8.3428C12.5982 8.86461 12.3114 9.12551 12.1455 9.45112C12.046 9.64644 11.9793 9.85678 11.948 10.0737C11.8959 10.4354 11.9799 10.8139 12.1479 11.5709L12.2079 11.8414C12.5091 13.1989 12.6597 13.8777 12.4717 14.2113C12.3028 14.511 11.9918 14.7029 11.6482 14.7193C11.2656 14.7375 10.7267 14.2983 9.64868 13.4199C8.93847 12.8412 8.58336 12.5519 8.18915 12.4388C7.8289 12.3355 7.44688 12.3355 7.08663 12.4388C6.69242 12.5519 6.33732 12.8412 5.62711 13.4199C4.54913 14.2983 4.01015 14.7375 3.62762 14.7193C3.28402 14.7029 2.97298 14.511 2.80411 14.2113C2.61612 13.8777 2.76672 13.1989 3.06791 11.8414L3.12792 11.5709C3.29587 10.8139 3.37985 10.4354 3.32774 10.0737C3.29648 9.85678 3.22976 9.64644 3.13026 9.45112C2.96439 9.12551 2.67762 8.86461 2.10407 8.3428L1.7634 8.03286C0.536609 6.91674 -0.0767858 6.35868 0.00768765 5.82566C0.0251829 5.71526 0.061062 5.60858 0.113833 5.51005C0.368633 5.03431 1.20301 4.95958 2.87177 4.81013C3.85756 4.72185 4.35045 4.6777 4.74529 4.43973C4.85604 4.37298 4.96005 4.29565 5.05587 4.20882C5.39748 3.89925 5.58005 3.44411 5.94519 2.53383Z" fill="white"/>
          </svg>

          <span>Highlight Activities</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/moc'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.94519 2.53383C6.58726 0.933142 6.9083 0.132799 7.42987 0.0218749C7.56702 -0.00729164 7.70876 -0.00729164 7.84591 0.0218749C8.36749 0.132799 8.68853 0.933142 9.3306 2.53383C9.69573 3.44411 9.8783 3.89925 10.2199 4.20882C10.3157 4.29565 10.4197 4.37298 10.5305 4.43973C10.9253 4.6777 11.4182 4.72185 12.404 4.81013C14.0728 4.95958 14.9072 5.03431 15.162 5.51005C15.2147 5.60858 15.2506 5.71526 15.2681 5.82566C15.3526 6.35868 14.7392 6.91674 13.5124 8.03286L13.1717 8.3428C12.5982 8.86461 12.3114 9.12551 12.1455 9.45112C12.046 9.64644 11.9793 9.85678 11.948 10.0737C11.8959 10.4354 11.9799 10.8139 12.1479 11.5709L12.2079 11.8414C12.5091 13.1989 12.6597 13.8777 12.4717 14.2113C12.3028 14.511 11.9918 14.7029 11.6482 14.7193C11.2656 14.7375 10.7267 14.2983 9.64868 13.4199C8.93847 12.8412 8.58336 12.5519 8.18915 12.4388C7.8289 12.3355 7.44688 12.3355 7.08663 12.4388C6.69242 12.5519 6.33732 12.8412 5.62711 13.4199C4.54913 14.2983 4.01015 14.7375 3.62762 14.7193C3.28402 14.7029 2.97298 14.511 2.80411 14.2113C2.61612 13.8777 2.76672 13.1989 3.06791 11.8414L3.12792 11.5709C3.29587 10.8139 3.37985 10.4354 3.32774 10.0737C3.29648 9.85678 3.22976 9.64644 3.13026 9.45112C2.96439 9.12551 2.67762 8.86461 2.10407 8.3428L1.7634 8.03286C0.536609 6.91674 -0.0767858 6.35868 0.00768765 5.82566C0.0251829 5.71526 0.061062 5.60858 0.113833 5.51005C0.368633 5.03431 1.20301 4.95958 2.87177 4.81013C3.85756 4.72185 4.35045 4.6777 4.74529 4.43973C4.85604 4.37298 4.96005 4.29565 5.05587 4.20882C5.39748 3.89925 5.58005 3.44411 5.94519 2.53383Z" fill="white"/>
          </svg>
          <span>Management Of Change</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/inspection-campaign'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.94519 2.53383C6.58726 0.933142 6.9083 0.132799 7.42987 0.0218749C7.56702 -0.00729164 7.70876 -0.00729164 7.84591 0.0218749C8.36749 0.132799 8.68853 0.933142 9.3306 2.53383C9.69573 3.44411 9.8783 3.89925 10.2199 4.20882C10.3157 4.29565 10.4197 4.37298 10.5305 4.43973C10.9253 4.6777 11.4182 4.72185 12.404 4.81013C14.0728 4.95958 14.9072 5.03431 15.162 5.51005C15.2147 5.60858 15.2506 5.71526 15.2681 5.82566C15.3526 6.35868 14.7392 6.91674 13.5124 8.03286L13.1717 8.3428C12.5982 8.86461 12.3114 9.12551 12.1455 9.45112C12.046 9.64644 11.9793 9.85678 11.948 10.0737C11.8959 10.4354 11.9799 10.8139 12.1479 11.5709L12.2079 11.8414C12.5091 13.1989 12.6597 13.8777 12.4717 14.2113C12.3028 14.511 11.9918 14.7029 11.6482 14.7193C11.2656 14.7375 10.7267 14.2983 9.64868 13.4199C8.93847 12.8412 8.58336 12.5519 8.18915 12.4388C7.8289 12.3355 7.44688 12.3355 7.08663 12.4388C6.69242 12.5519 6.33732 12.8412 5.62711 13.4199C4.54913 14.2983 4.01015 14.7375 3.62762 14.7193C3.28402 14.7029 2.97298 14.511 2.80411 14.2113C2.61612 13.8777 2.76672 13.1989 3.06791 11.8414L3.12792 11.5709C3.29587 10.8139 3.37985 10.4354 3.32774 10.0737C3.29648 9.85678 3.22976 9.64644 3.13026 9.45112C2.96439 9.12551 2.67762 8.86461 2.10407 8.3428L1.7634 8.03286C0.536609 6.91674 -0.0767858 6.35868 0.00768765 5.82566C0.0251829 5.71526 0.061062 5.60858 0.113833 5.51005C0.368633 5.03431 1.20301 4.95958 2.87177 4.81013C3.85756 4.72185 4.35045 4.6777 4.74529 4.43973C4.85604 4.37298 4.96005 4.29565 5.05587 4.20882C5.39748 3.89925 5.58005 3.44411 5.94519 2.53383Z" fill="white"/>
          </svg>
          <span>Inspection Campaign</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/rectification-campaign'">
        <v-ons-toolbar-button class="item">
          <svg class="icons" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.94519 2.53383C6.58726 0.933142 6.9083 0.132799 7.42987 0.0218749C7.56702 -0.00729164 7.70876 -0.00729164 7.84591 0.0218749C8.36749 0.132799 8.68853 0.933142 9.3306 2.53383C9.69573 3.44411 9.8783 3.89925 10.2199 4.20882C10.3157 4.29565 10.4197 4.37298 10.5305 4.43973C10.9253 4.6777 11.4182 4.72185 12.404 4.81013C14.0728 4.95958 14.9072 5.03431 15.162 5.51005C15.2147 5.60858 15.2506 5.71526 15.2681 5.82566C15.3526 6.35868 14.7392 6.91674 13.5124 8.03286L13.1717 8.3428C12.5982 8.86461 12.3114 9.12551 12.1455 9.45112C12.046 9.64644 11.9793 9.85678 11.948 10.0737C11.8959 10.4354 11.9799 10.8139 12.1479 11.5709L12.2079 11.8414C12.5091 13.1989 12.6597 13.8777 12.4717 14.2113C12.3028 14.511 11.9918 14.7029 11.6482 14.7193C11.2656 14.7375 10.7267 14.2983 9.64868 13.4199C8.93847 12.8412 8.58336 12.5519 8.18915 12.4388C7.8289 12.3355 7.44688 12.3355 7.08663 12.4388C6.69242 12.5519 6.33732 12.8412 5.62711 13.4199C4.54913 14.2983 4.01015 14.7375 3.62762 14.7193C3.28402 14.7029 2.97298 14.511 2.80411 14.2113C2.61612 13.8777 2.76672 13.1989 3.06791 11.8414L3.12792 11.5709C3.29587 10.8139 3.37985 10.4354 3.32774 10.0737C3.29648 9.85678 3.22976 9.64644 3.13026 9.45112C2.96439 9.12551 2.67762 8.86461 2.10407 8.3428L1.7634 8.03286C0.536609 6.91674 -0.0767858 6.35868 0.00768765 5.82566C0.0251829 5.71526 0.061062 5.60858 0.113833 5.51005C0.368633 5.03431 1.20301 4.95958 2.87177 4.81013C3.85756 4.72185 4.35045 4.6777 4.74529 4.43973C4.85604 4.37298 4.96005 4.29565 5.05587 4.20882C5.39748 3.89925 5.58005 3.44411 5.94519 2.53383Z" fill="white"/>
          </svg>
          <span>Rectification Campaign</span>
        </v-ons-toolbar-button>
      </router-link>
      <router-link :to="'/monthly-report'">
        <v-ons-toolbar-button class="item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.22659 8.9652C8.77346 8.9652 9.26259 8.5417 9.26259 7.9327C9.26259 7.2047 8.80146 6.85645 8.24759 6.85645C7.73484 6.85645 7.22559 7.19507 7.22559 7.91519C7.22559 8.63007 7.70071 8.9652 8.22659 8.9652Z" fill="white"/>
          <path d="M3.0625 0C3.17853 0 3.28981 0.0460936 3.37186 0.128141C3.45391 0.210188 3.5 0.321468 3.5 0.4375V0.875H10.5V0.4375C10.5 0.321468 10.5461 0.210188 10.6281 0.128141C10.7102 0.0460936 10.8215 0 10.9375 0C11.0535 0 11.1648 0.0460936 11.2469 0.128141C11.3289 0.210188 11.375 0.321468 11.375 0.4375V0.875H12.25C12.7141 0.875 13.1592 1.05937 13.4874 1.38756C13.8156 1.71575 14 2.16087 14 2.625V12.25C14 12.7141 13.8156 13.1592 13.4874 13.4874C13.1592 13.8156 12.7141 14 12.25 14H1.75C1.28587 14 0.840752 13.8156 0.512563 13.4874C0.184374 13.1592 0 12.7141 0 12.25V2.625C0 2.16087 0.184374 1.71575 0.512563 1.38756C0.840752 1.05937 1.28587 0.875 1.75 0.875H2.625V0.4375C2.625 0.321468 2.67109 0.210188 2.75314 0.128141C2.83519 0.0460936 2.94647 0 3.0625 0V0ZM11.7723 2.625H2.22688C1.96438 2.625 1.75 2.821 1.75 3.0625V3.9375C1.75 4.179 1.9635 4.375 2.22688 4.375H11.7731C12.0356 4.375 12.25 4.179 12.25 3.9375V3.0625C12.25 2.821 12.0365 2.625 11.7723 2.625ZM8.169 11.1912C9.26975 11.1912 9.919 10.2576 9.919 8.67825C9.919 6.986 9.23563 6.34375 8.21012 6.34375C7.39988 6.34375 6.63775 6.93175 6.63775 7.92663C6.63775 8.94162 7.35875 9.47538 8.10425 9.47538C8.757 9.47538 9.1805 9.14637 9.31437 8.78412H9.338C9.3345 9.93563 8.93462 10.6776 8.19613 10.6776C7.61512 10.6776 7.31413 10.2839 7.27738 9.96012H6.67887C6.72 10.5201 7.19863 11.1904 8.169 11.1904V11.1912ZM5.64025 6.43563H5.08638C4.68941 6.64677 4.30574 6.882 3.9375 7.14V7.74812C4.26562 7.52325 4.78538 7.20563 5.03825 7.06825H5.04875V11.102H5.63938V6.43475L5.64025 6.43563Z" fill="white"/>
          </svg>
          <span>Monthly report</span>
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
      width: 180px;
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