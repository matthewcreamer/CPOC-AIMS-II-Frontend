<template>
  <div>
    <DxDataGrid
      id="data-grid-default"
      key-expr="id_tank_course"
      :data-source="courseList"
      :hover-state-enabled="true"
      :allow-column-reordering="true"
      :show-borders="true"
      :show-row-lines="true"
      :row-alternation-enabled="false"
      :word-wrap-enabled="true"
      :column-min-width="70"
      :column-auto-width="true"
      @row-inserted="CREATE_COURSE"
      @row-updated="UPDATE_COURSE"
      @row-removed="DELETE_COURSE"
    >
      <DxColumnFixing :enabled="false"/>
      <DxEditing
        :allow-updating="true"
        :allow-deleting="true"
        :allow-adding="true"
        :use-icons="true"
        mode="row"
      />
      <DxColumn 
        data-field="file_name" 
        caption="File Name" 
        sort-order="asc" 
        alignment="center" 
        :editor-options="{ placeholder: 'No.' }" 
      />
      <DxColumn
        data-field="file_type"
        caption="File Type"
        format="#,##0.00"
        header-cell-template="headerFType"
        data-type="text"
        alignment="center"
        :editor-options="{ placeholder: 'tnom' }"
      />
      <DxColumn
        data-field="file_extention"
        caption="File Extension"
        alignment="center"
        header-cell-template="headerFEx"
        data-type="number"
        :editor-options="{ placeholder: 'Height' }"
      />
      <DxColumn
        data-field="note"
        caption="Note"
        alignment="center"
        header-cell-template="headerNote"
        :allow-editing="false"
      />
     
      <template #headerFType>
        <div>
          File Type
        </div>
      </template>
      <template #headerFEx>
        <div>
          File Extension
        </div>
      </template>
      <template #headerNote>
        <div>
          Note
        </div>
      </template>
    
     
      


      <DxScrolling mode="standard" />
      <DxSearchPanel :visible="true" />
      <DxPaging :page-size="10" :page-index="0" />
      <DxPager
        :show-page-size-selector="true"
        :allowed-page-sizes="[5, 10, 20]"
        :show-navigation-buttons="true"
        :show-info="true"
        info-text="Page {0} of {1} ({2} items)"
      />
      <DxExport :enabled="true" :fileName="'tank course'" />
    </DxDataGrid>
  </div>
</template> 

<script>
//API
import axios from "/axios.js";
//import moment from "moment";

//Components

//DataGrid
import "devextreme/dist/css/dx.light.css";
import {
  DxDataGrid,
  DxSearchPanel,
  DxPaging,
  DxPager,
  DxScrolling,
  DxColumn,
  DxExport,
  //DxToolbar,
  //DxItem,
  DxEditing,
  // DxLookup,
  DxColumnFixing,
} from "devextreme-vue/data-grid";

export default {
  name: "file-table",
  components: {
    DxDataGrid,
    DxSearchPanel,
    DxPaging,
    DxPager,
    DxScrolling,
    DxColumn,
    DxExport,
    //DxToolbar,
    //DxItem,
    DxEditing,
    // DxLookup,
    DxColumnFixing
  },
  created() {
    if (this.$store.state.status.server == true) {
      this.FETCH_MAT();
      this.FETCH_TANK_COURSE();
    }
  },
  data() {
    return {
      courseList: {},
      matList: {},
    };
  },
  computed: {},
  methods: {
    FETCH_TANK_COURSE() {
      this.isLoading = true;
      var id_tag = this.$route.params.id_tag;
      axios({
        method: "get",
        url: "TankCourse/tank-course-by-tank-id?id_tag=" + id_tag,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
      })
        .then(res => {
          if (res.status == 200 && res.data) {
            this.courseList = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    FETCH_MAT() {
      axios({
        method: "get",
        url: "master-data/get-md-tank-material-list",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        }
      })
        .then(res => {
          // console.log("material:");
          // console.log(res);
          if (res.status == 200 && res.data) {
            this.matList = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    CREATE_COURSE(e) {
      e.data.id_tag = parseInt(this.$route.params.id_tag);
      e.data.id = 0;
      console.log(e.data);
      axios({
        method: "post",
        url: "TankCourse",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
        data: e.data
      })
        .then(res => {
          if (res.status == 201) {
            console.log("create success");
            this.FETCH_TANK_COURSE();
          }else {
            console.log("status : ", res.status)
          }
        })
        .catch(error => {
          this.$ons.notification.alert(
            error.code + " " + error.response.status + " " + error.message
          );
        })
        .finally(() => {});
    },
    UPDATE_COURSE(e) {
      e.data.id = e.key;
      axios({
        method: "put",
        url: "TankCourse/" + e.key,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
        data: e.data
      })
        .then(res => {
          if (res.status == 200) {
            console.log("update success");
            this.FETCH_TANK_COURSE();
          }
        })
        .catch(error => {
          this.$ons.notification.alert(
            error.code + " " + error.response.status + " " + error.message
          );
        })
        .finally(() => {});
    },
    DELETE_COURSE(e) {
      axios({
        method: "delete",
        url: "TankCourse/" + e.key,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
        data: e.data
      })
        .then(res => {
          if (res.status == 200) {
            console.log("delete success");
            this.FETCH_TANK_COURSE();
          }
        })
        .catch(error => {
          this.$ons.notification.alert(
            error.code + " " + error.response.status + " " + error.message
          );
        })
        .finally(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.toolbar-button {
  background-color: $web-theme-color-background;
  padding: 0;
  padding-right: 15px;
  height: 34px;
  border: 0px;
  border: 1px solid $web-font-color-black;

  i {
    font-size: 20px;
    color: $web-font-color-black;
  }
  span {
    font-size: 14px;
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
</style>