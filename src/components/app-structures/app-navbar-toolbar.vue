<template>
  <div id="app-toolbar">
    <div class="left-col">
      <v-ons-toolbar-button v-if="isBack" v-on:click="$router.go(-1)">
        <i class="las la-angle-left"></i>
        <span>Back</span>
      </v-ons-toolbar-button>
      <v-ons-toolbar-button v-if="isBackPath" v-on:click="GO_BACK_TO()">
        <i class="las la-angle-left"></i>
        <span>Back</span>
      </v-ons-toolbar-button>
      <!-- <span
        v-if="infoPiping"
        style="
          position: absolute;
          top: 6px;
          left: 124px;
          font-size: 12px;
          color: red;"
      >id: {{ infoPiping.id_line }}</span> -->
      <h1>{{ pageName }}</h1>
      <h2>{{ pageSubName }}</h2>
      <div class="sub-page-box" v-if="pageSubInnerName">
        <div class="btn-group-separater-client">
          <i class="las la-angle-right"></i>
        </div>
        <h2>{{ pageSubInnerName }}</h2>
      </div>
      <!-- <div class="toolbar-info mobile-none" v-if="infoPiping">
        <div class="info-item">
          <label class="desc">Line No:</label>
          <label class="value">{{ infoPiping.line_no }}</label>
        </div>

        <div class="info-item">
          <label class="desc">Site Name:</label>
          <label class="value">{{ infoPiping.site_name }}</label>
        </div>
      </div> -->
    </div>
    <div class="right-col">
      <div class="search-box" v-if="isSearchBoxList == true">
        <i class="las la-search search"></i>
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="search tag no."
          v-on:keyup.enter="$emit('isSearch')"
        />
        <i class="las la-times clear" v-if="searchKeyword != ''" v-on:click="CLEAR_SEARCH()"></i>
      </div>
      <div class="search-box" id="v-search" v-if="isSearchDropdown == true">
        <i class="las la-search search"></i>
        <v-select
          class="custom-select"
          v-model="selectedOption"
          :options="formattedOptions"
          placeholder="search line no."
          @input="onSelectOption"
        />
        <i class="las la-times clear" v-if="searchKeyword != ''" v-on:click="CLEAR_SEARCH()"></i>
      </div>
      <div class="search-box" v-if="isSearchBox == true">
        <i class="las la-search search"></i>
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="search tag no."
          v-on:keyup.enter="GET_SEARCH()"
        />
        <i class="las la-times clear" v-if="searchKeyword != ''" v-on:click="CLEAR_SEARCH()"></i>
      </div>
      <v-ons-toolbar-button v-if="isSave" class="highlight-btn" v-on:click="$emit('isSaveBtn')">
        <i class="las la-save"></i>
        <span>Save</span>
      </v-ons-toolbar-button>
      <v-ons-toolbar-button v-if="isEdit" v-on:click="$emit('isEditBtn')">
        <i class="las la-edit"></i>
        <span>Edit</span>
      </v-ons-toolbar-button>
      <v-ons-toolbar-button v-if="isDelete" v-on:click="$emit('isDeleteBtn')">
        <i class="las la-trash"></i>
        <span>Delete</span>
      </v-ons-toolbar-button>

      <div class="btn-group-separater" v-if="isPrint || isDownload"></div>

      <v-ons-toolbar-button v-if="isRefresh" v-on:click="$emit('refreshInfo')">
        <i class="las la-sync"></i>
        <span>Refresh</span>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button v-if="isPrint">
        <i class="las la-print"></i>
        <span>Print</span>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button v-if="isDownload" v-on:click="$emit('isDownloadBtn')">
        <i class="las la-download"></i>
        <span>Download</span>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button v-if="isNewBtn" v-on:click="$emit('newBtnFn')">
        <i class="las la-plus"></i>
        <span>{{ newBtnLabel }}</span>
      </v-ons-toolbar-button>

      <v-ons-toolbar-button
        v-if="isMoreBtn"
        v-on:click="SHOW_POPOVER($event, 'down', true)"
        style="padding-right: 0px"
      >
        <i class="las la-cog"></i>
        <!-- <span>more</span> -->
      </v-ons-toolbar-button>
      <v-ons-popover
        cancelable
        :visible.sync="popoverVisible"
        :target="popoverTarget"
        :direction="popoverDirection"
        :cover-target="coverTarget"
      >
        <!-- <v-ons-toolbar-button class="popover-button" v-on:click="NEW_piping_INFO()">
          <span>Add New</span>
          <i class="las la-plus"></i>
        </v-ons-toolbar-button>-->
        <v-ons-toolbar-button class="popover-button" v-on:click="EDIT_PIPING_INFO()">
          <span>Edit Info</span>
          <i class="las la-edit"></i>
        </v-ons-toolbar-button>

        <v-ons-toolbar-button class="popover-button" v-on:click="DELETE_PIPING_INFO()">
          <span style="color: red">Delete</span>
          <i class="las la-trash" style="color: red"></i>
        </v-ons-toolbar-button>
      </v-ons-popover>
    </div>
    <popupAdd v-if="isAdd == true" @closePopup="TOGGLE_POPUPADD()" />
    <popupEdit :editInfo="infoPiping" v-if="isEditPopup == true" @closePopup="TOGGLE_POPUP()" />
  </div>
</template>

<script>
import moment from "moment";
import axios from "/axios.js";
import vSelect from "vue-select";

export default {
  name: "app-toolbar",
  components: {
    // popupEdit,
    // popupAdd,
    vSelect
  },
  props: {
    pageName: String,
    pageSubName: String,
    pageSubInnerName: String,
    isBack: Boolean,
    isBack_specificPath: String,
    isBackPath: Boolean,
    isEdit: Boolean,
    isSave: Boolean,
    isDelete: Boolean,
    isPrint: Boolean,
    isDownload: Boolean,
    isNewBtn: Boolean,
    isRefresh: Boolean,
    isMoreBtn: Boolean,
    infoPiping: Object,
    newBtnLabel: String,
    isSearchBox: Boolean,
    isSearchBoxList: Boolean,
    isSearchDropdown: Boolean,
    options: Array
  },
  data() {
    return {
      searchKeyword: "",
      isEditPopup: false,
      isAdd: false,
      selectedOption: null,

      //POPUP
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: "up",
      coverTarget: false
    };
  },
  methods: {
    GO_BACK_TO() {
      this.$router.push(this.isBack_specificPath);
    },
    CLEAR_SEARCH() {
      this.searchKeyword = "";
    },
    SHOW_POPOVER(event, direction, coverTarget = true) {
      this.popoverVisible = true;
      this.popoverTarget = event;
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
    },
    TOGGLE_POPUP() {
      this.isEditPopup = !this.isEditPopup;
    },
    TOGGLE_POPUPADD() {
      this.isAdd = !this.isAdd;
    },
    NEW_PIPING_INFO() {
      this.popoverVisible = false;
      this.isAdd = true;
    },
    EDIT_PIPING_INFO() {
      this.popoverVisible = false;
      this.isEditPopup = true;
    },
    DELETE_PIPING_INFO() {
      this.popoverVisible = false;
      const id_tag = this.$route.params.id_tag;
      //const user = JSON.parse(localStorage.getItem("user"));
      console.log(this.infoPiping);
      this.$ons.notification.confirm("Confirm delete?").then(res => {
        if (res == 1) {
          axios({
            method: "delete",
            url: "/PipingInfo/delete-piping-info?id=" + id_tag,
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token"))
            },
            data: this.infoPiping
          })
            .then(res => {
              if (res.status == 204) {
                this.$ons.notification.alert("Delete successful");
                this.$router.push("/piping/");
              }
            })
            .catch(error => {
              this.$ons.notification.alert(
                error.code + " " + error.response.status + " " + error.message
              );
            })
            .finally(() => {});
        }
      });
    },
    onSelectOption(value) {
      //console.log(value);
      const path = encodeURI("/piping/tag/" + value.value + "/info");
      this.$router.push(path);
    }
  },
  computed: {
    piping_inservice_date() {
      if (this.infoPiping.inservice_date) {
        return moment(this.infoPiping.inservice_date).format("LL");
      } else return "N/A";
    },
    formattedOptions() {
      return this.options.map(option => ({
        label: option.line_no,
        value: option.id
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

#app-toolbar {
  width: 100%;
  height: 50px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-width: 0 0 1px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-col,
  .right-col {
    display: flex;

    align-items: center;
  }
  .left-col {
    padding-left: 20px;
    justify-content: flex-start;
    width: fit-content;
    position: relative;
    h1,
    h2 {
      font-style: normal;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: -0.08px;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      user-select: text;
    }
    h1 {
      font-size: 2.75em;
      color: $web-font-color-blue;
    }
    h2 {
      font-size: 2em;
      color: $web-font-color-black;
      width: auto;
    }
    .toolbar-button {
      margin-left: 0;
      margin-right: 20px;
    }
    @media screen and (max-width: 1024px) {
      h1 {
        font-size: 2.5em;
      }
      h2 {
        font-size: 2em;
      }
    }
  }
  .right-col {
    padding-right: 20px;
    justify-content: flex-end;
    .toolbar-button {
      margin-right: 10px;
      i {
        font-size: 20px;
      }
    }
    .toolbar-button:last-child {
      margin-right: 0;
    }
    .btn-group-separater {
      height: 28px;
      width: 1px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-width: 0 1px 0 0;
      margin-right: 10px;
    }
  }
}

.toolbar-button {
  background-color: $web-theme-color-background;
  padding: 0;
  padding-right: 15px;
  height: 34px;
  border: 0px;

  i {
    font-size: 20px;
    color: $dexon-primary-blue;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    color: $web-font-color-black;
  }
}
.toolbar-button:hover,
.toolbar-button:active {
  background-color: $dexon-primary-blue;

  i {
    color: $web-font-color-white;
  }
  span {
    color: $web-font-color-white;
  }
}

.highlight-btn {
  background-color: $dexon-primary-blue !important;
  width: 150px;
  span,
  i {
    color: #fff;
  }
}
.highlight-btn:hover {
  opacity: 0.8;
}

.highlight-btn:active {
  opacity: 1;
}

.toolbar-info {
  padding-left: 40px;
  display: flex;
  .info-item {
    display: block;
    width: fit-content;
    padding-right: 40px;

    .desc,
    .value {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
      cursor: text;
    }
    .desc {
      color: $web-font-color-grey;
      font-size: 10px;
    }
    .value {
      color: $web-font-color-black;
      font-weight: 600;
      font-size: 12px;
    }
  }
}

.search-box {
  width: 250px;
  height: 34px;
  position: relative;
  margin-right: 10px;
  i {
    font-size: 14px;
    color: #5b5b5b;
  }
  input {
    width: 100%;
    height: 32px;
    padding: 0;
    margin: 0;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    cursor: text;
    font-size: 14px;
    text-indent: 30px;
    color: $web-font-color-black;
    font-weight: 500;
  }
  .search {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    cursor: text;
  }
  .clear {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 10px;
  }
}

.search-box:last-child {
  margin-right: 0px;
}

.popover-button {
  padding: 6px 5px 6px 18px;
  border: 1px solid #e6e6e6;
  border-width: 0 0 1px 0;
  background-color: #fff;

  i {
    font-size: 20px;
    width: 20px;
    text-align: center;
    color: $dexon-primary-blue;
  }
  span {
    font-size: 14px;
    color: $dexon-primary-blue;
    font-weight: 400;
  }
}
.popover-button:hover {
  background-color: #140a4b12;

  i,
  span {
    color: $dexon-primary-blue;
  }
}

.popover-button:last-child {
  border: 0;
}

.sub-page-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .btn-group-separater-client {
    margin: 0 4px;
    i {
      font-size: 22px;
      color: rgba(0, 0, 0, 0.1);
    }
  }
}
@media (max-width: 992px) {
  #v-search {
    display: none;
  }
}
.custom-select {
  font-size: 14px;
  color: grey;
}
</style>