<template>
  <div class="page-container">
    <div class="page-section">
      <div class="table-wrapper">
        <div class="filter-wrapper">
          <div class="filter">
            <span>Year</span>
            <DxSelectBox
              name="ttt"
              :items="['2023']"
              :value="'2023'"
              :input-attr="{ 'aria-label': 'Report Date' }"
            />
          </div>
          <div class="filter">
            <span>Month</span>
            <DxSelectBox
                :items="['October']"
                :value="'October'"
                :input-attr="{ 'aria-label': 'Report Date' }"
              />
          </div>
        </div>
        <DxDataGrid
          id="data-grid-list"
          key-expr="id"
          :data-source="testList"
          :selection="{ mode: 'single' }"
          :hover-state-enabled="true"
          :allow-column-reordering="true"
          :show-borders="true"
          :show-row-lines="true"
          :row-alternation-enabled="false"
          :word-wrap-enabled="true"
          :column-auto-width="true"
        >
          <DxEditing
            :allow-updating="false"
            :allow-deleting="false"
            :allow-adding="false"
            :use-icons="true"
            mode="popup"
          />
          <DxFilterRow :visible="false" />
          <DxHeaderFilter :visible="false" />
          <DxSelection mode="multiple" />
          <DxColumn data-field="report_date" caption="Report Date" :width="130" alignment="center" />
          <DxColumn data-field="platform" caption="Platform" :width="130" alignment="center" />
          <DxColumn data-field="asset_type" caption="Asset Type" :width="130" alignment="center" />
          <DxColumn data-field="tag_no" caption="Tag No." :width="130" alignment="center" />
          <DxColumn data-field="activities" caption="Activities" :min-width="300" alignment="left" />
          <DxColumn data-field="detail" caption="Detail" :min-width="300" alignment="left" />

          <!-- Configuration goes here -->
          <!-- <DxFilterRow :visible="true" /> -->
          <DxScrolling mode="standard" />
          <DxSearchPanel :visible="true" />
          <DxPaging :page-size="10" :page-index="0" />
          <DxPager
            :show-page-size-selector="true"
            :allowed-page-sizes="[10, 20, 30]"
            :show-navigation-buttons="true"
            :show-info="false"
            info-text="Page {0} of {1} ({2} items)"
          />
          <DxExport :enabled="false" />
        </DxDataGrid>

        <div class="filter-report">
          <h5>FILTER REPORT</h5>
          <div class="field">
            <DxCheckBox
              :value="true"
              :element-attr="checkedLabel"
            />
            <span>Inspection</span>
          </div>
          <div class="field">
            <DxCheckBox
              :value="true"
              :element-attr="checkedLabel"
            />
            <span>Anomaly</span>
          </div>
          <div class="field">
            <DxCheckBox
              :value="true"
              :element-attr="checkedLabel"
            />
            <span>Highlight Activities</span>
          </div>
        </div>
        <button class="filter-report-download">
          <downloadSvg class="svg" />
          DOWNLOAD
        </button>
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
import downloadSvg from "@/components/svg/download-svg.vue"

//DataGrid
import "devextreme/dist/css/dx.light.css";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
// import DxAddRowButton from "devextreme-vue/button";
// import { DxItem } from "devextreme-vue/form";
import DxSelectBox from 'devextreme-vue/select-box';
import { DxCheckBox } from 'devextreme-vue/check-box';
import {
  DxDataGrid,
  DxSearchPanel,
  DxPaging,
  DxPager,
  DxScrolling,
  DxColumn,
  DxExport,
  // DxToolbar,
  DxHeaderFilter,
  DxSelection,
  DxEditing,
  DxFilterRow,
  // DxLookup,
  // DxRequiredRule,
  // DxFormItem,
  // DxForm
} from "devextreme-vue/data-grid";

//Structures

export default {
  name: "inspection-record",
  components: {
    DxDataGrid,
    DxSearchPanel,
    DxPaging,
    DxPager,
    DxScrolling,
    DxColumn,
    DxExport,
    // DxToolbar,
    DxHeaderFilter,
    DxSelection,
    // DxForm,
    // DxItem,
    DxEditing,
    DxFilterRow,
    DxSelectBox,
    DxCheckBox,
    // DxAddRowButton,
    // DxLookup,
    // DxRequiredRule,
    // DxFormItem
    downloadSvg,
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "MONTHLY REPORT",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.testList = [
        {
          id: 1,
          report_date: '13 Oct 2023',
          platform: 'MDPP',
          asset_type: 'Flowline',
          tag_no: 'V-0111',
          activities: 'Filter Coalescing Crack Detection',
          detail: 'Complete crack monitoring for ...'
        },
        {
          id: 2,
          report_date: '10 Oct 2023',
          platform: 'MDPP',
          asset_type: 'Flare',
          tag_no: '-',
          activities: 'Drone inspection on Flare platform',
          detail: 'As inspection team got request ...'
        },
      ];
      // this.FETCH_INSP_RECORD();
    }
  },
  data() {
    return {
      testList: null,
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
.filter-report {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  margin-top: 50px;
  -webkit-box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);

  h5 {
    margin: 0;
  }
  .field {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;

    span {
      font-size: 14px;
    }
  }
}
.filter-report-download {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  background-color: white;
  padding: 10px;
  width: 220px;
  border-radius: 10px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);
  box-shadow: 0px 10px 28px -7px rgba(0,0,0,0.3);
  font-size: 20px;
  font-weight: 800;
  transition: 0.2s;
  cursor: pointer;

  .svg {
    width: 20px;
  }
}
.filter-report-download:hover {
  transform:translateY(-2px);
}
.filter-wrapper {
  display: flex;
  flex-direction: row;
  gap: 30px;
  
  span {
    font-size: 18px;
    font-weight: 600;
  }
}
.page-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 51px calc(100vh - 95px);
  transition: all 0.3s;
  overflow-y: hidden;
}
#report-sheet {
  max-width: 100%;
  width: 100%;
  font-family: $web-default-font;
  box-shadow: none;
  padding: 0 !important;
  margin-top: 0;
  margin-bottom: 0;
  .report-container {
    .header {
      .title {
        grid-column: span 4;
      }
    }
    .sheet-body {
      grid-template-columns: 50% 50%;
      .form-item {
        display: grid;
        grid-template-columns: 220px calc(100% - 220px);
        grid-template-rows: 35px;
        .form-item-label {
          label {
            // text-transform: capitalize;
          }
        }
        .form-item-value {
          grid-column: span 1;
          label {
            margin: 0 auto;
            font-weight: 600;
          }
        }
      }
      .form-item-picture-log .img-box {
        height: 244px;
      }
    }
  }
}

.page-section {
  padding: 20px;
  overflow-y: auto;
  grid-row: span 2;
}

.page-section:last-child {
  padding-bottom: 20px;
}

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
</style>