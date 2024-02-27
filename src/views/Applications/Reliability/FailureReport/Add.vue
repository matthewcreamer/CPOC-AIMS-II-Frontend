<template>
  <div class="page-container">
    <div class="page-section">
      <div class="table-wrapper">
        <h3 style="grid-column: span 2">New Failure Report</h3>

        <div class="input-wrapper">
          <span>Platform</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Select Platform"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Asset Type</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Asset Type"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Tag Number</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Select Tag Number"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Unit</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Enter Unit"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Equipment Type</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Equipment Type"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Drawing Number</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Drawing Number"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Failure Impact</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Select Failure Impact"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Disc.</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Select Disc."
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Failure Date</span>
          <div class="select">
            <DxDateBox
              type="date"
              placeholder="Select Date"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Location</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Location"
            />
          </div>
        </div>

        <div class="input-wrapper" fill>
          <span>Details</span>
          <div class="input">
            <DxTextArea
              :height="60"
              :max-length="200"
              :auto-resize-enabled="true"
              placeholder="Enter Details"
            />
          </div>
        </div>

        <div class="input-wrapper" fill>
          <span>Findings</span>
          <div class="input">
            <DxTextArea
              :height="60"
              :max-length="200"
              :auto-resize-enabled="true"
              placeholder="Enter Findings"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Mitigation</span>
          <div class="select">
            <DxSelectBox
              :items="testList"
              placeholder="Select Mitigation"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Production Loss</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Production Loss"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Environment</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Environment"
            />
          </div>
        </div>

        <div class="input-wrapper">
          <span>Health and Safety</span>
          <div class="input">
            <DxTextBox
              placeholder="Enter Health and Safety"
            />
          </div>
        </div>

        <button class="create" @click="$emit('currentView', 0)">Create</button>
        <button @click="$emit('currentView', 0)">Cancel</button>

        <br>
      </div>
    </div>
  </div>
</template> 

<script>
//API
import axios from "/axios.js";
import moment from "moment";

//Components
//import VueTabsChrome from "vue-tabs-chrome";

//DataGrid
import "devextreme/dist/css/dx.light.css";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
import DxSelectBox from 'devextreme-vue/select-box';
import DxTextBox from 'devextreme-vue/text-box';
import DxDateBox from 'devextreme-vue/date-box';
import DxTextArea from 'devextreme-vue/text-area';
// import DxAddRowButton from "devextreme-vue/button";
// import { DxItem } from "devextreme-vue/form";
import {
  // DxDataGrid,
  // DxSearchPanel,
  // DxPaging,
  // DxPager,
  // DxScrolling,
  // DxColumn,
  // DxExport,
  // DxToolbar,
  // DxHeaderFilter,
  // DxSelection,
  // DxEditing,
  // DxFilterRow,
  // DxLookup,
  // DxRequiredRule,
  // DxFormItem,
  // DxForm
} from "devextreme-vue/data-grid";

//Structures

export default {
  name: "inspection-record",
  components: {
    // DxDataGrid,
    // DxSearchPanel,
    // DxPaging,
    // DxPager,
    // DxScrolling,
    // DxColumn,
    // DxExport,
    // DxToolbar,
    // DxHeaderFilter,
    // DxSelection,
    // DxForm,
    // DxItem,
    // DxEditing,
    // DxFilterRow,
    // DxAddRowButton,
    // DxLookup,
    // DxRequiredRule,
    // DxFormItem,
    DxSelectBox,
    DxTextBox,
    DxDateBox,
    DxTextArea
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "FAILURE REPORT",
      subpageInnerName: null,
    });
  },
  data() {
    return {
      testList: [],
      inspRecordList: {},
      campaigeList: {},
      dataGridAttributes: {
        class: "data-grid-style"
      },
      inspDateInputOptions: { placeholder: "Select date" },
      projectNoInputOptions: { placeholder: "Enter project no" },
      reportNoInputOptions: { placeholder: "Enter report no" },
      remarkInputOptions: { placeholder: "Enter remark" }
    };
  },
  computed: {},
  methods: {
    EXPORT_DATA(e) {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet("Projects");
      exportDataGrid({
        worksheet: worksheet,
        component: e.component
      }).then(function() {
        workbook.xlsx.writeBuffer().then(function(buffer) {
          saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            "inspection_record.xlsx"
          );
        });
      });
      e.cancel = true;
    },
    FETCH_INSP_RECORD() {
      this.isLoading = true;
      var id_tag = this.$route.params.id_tag;
      axios({
        method: "get",
        url:
          "/PipingInspectionRecord/get-piping-ir-by-id-line?id_line=" + id_tag,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        }
      })
        .then(res => {
          console.log("insp record:");
          console.log(res);
          if (res.status == 200 && res.data) {
            console.log("success");
            this.inspRecordList = res.data;
            console.log(this.inspRecordList);
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    CREATE_RECORD(e) {
      e.data.id_line = this.$route.params.id_tag;
      e.data.id = 0;
      e.data.is_active = true;
      e.data.inspection_date = moment(e.data.inspection_date).format("L");
      console.log(e.data);
      axios({
        method: "post",
        url: "/PipingInspectionRecord",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
        data: e.data
      })
        .then(res => {
          if (res.status == 201) {
            console.log("create success");
            this.FETCH_INSP_RECORD();
          }
        })
        .catch(error => {
          this.$ons.notification.alert(
            error.code + " " + error.response.status + " " + error.message
          );
        })
        .finally(() => {});
    },
    UPDATE_RECORD(e) {
      e.data.inspection_date = moment(e.data.inspection_date).format("L");
      console.log(e.data);
      axios({
        method: "put",
        url: "/PipingInspectionRecord/" + e.key,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        },
        data: e.data
      })
        .then(res => {
          if (res.status == 204) {
            console.log("update success");
            this.FETCH_INSP_RECORD();
          }
        })
        .catch(error => {
          this.$ons.notification.alert(
            error.code + " " + error.response.status + " " + error.message
          );
        })
        .finally(() => {});
    },
    DELETE_RECORD(e) {
      axios({
        method: "delete",
        url: "/PipingInspectionRecord/" + e.key,
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
        }
      })
        .then(res => {
          if (res.status == 204) {
            console.log("delete success");
            this.FETCH_INSP_RECORD();
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

.page-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 51px calc(100vh - 95px);
  transition: all 0.3s;
  // overflow-y: hidden;
}

.page-section {
  padding: 20px;
  overflow-y: auto;
  height: calc(100% - 210px);
  grid-row: span 2;
}

// .page-section:last-child {
//   padding-bottom: 20px;
// }

.tab-wrapper {
  height: 48px;
}
.vue-tabs-chrome {
  padding-top: 10px;
  background-color: #d9d9d9;
  font-size: 14px;
}
.info-tab-display {
  display: flex;
}

.table-wrapper {
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
  margin-bottom: 50px !important;
  *[fill] {
    grid-column: span 2;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    span {
      font-size: 16px;
    }
  }
  button {
    padding: 20px 0;
    background-color: white;
    border: solid 1px gray;
    border-radius: 10px;
    font-weight: 800;
    font-size: 16px;
    transition: 1s;
    cursor: pointer;
  }
  .create {
    color: white;
    background-color: $web-theme-color-secondary;
  }
}
</style>