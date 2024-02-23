<template>
  <div class="page-container">
    <div class="page-section">
      <div class="table-wrapper">
        <h4 style="margin: 5px 0;">High Risk Equipment Inspection & High Risk Anomaly Status</h4>
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
          <DxSelection mode="single" />
          <DxColumn data-field="module" caption="Module" :width="150" alignment="left" />
          <DxColumn data-field="inspection_status" cellTemplate="circle-cell-template" caption="Inspection Status" :width="150" alignment="center" />
          <DxColumn data-field="anomaly_repair_status" cellTemplate="circleTemplate" caption="Anomaly Repair" :width="150" alignment="center" />
          <DxColumn data-field="note" caption="Note" :min-width="300" alignment="left" />


          <template #circle-cell-template="{ data }">
            <div class="circle" :style="{backgroundColor: GET_STATUS_CELL_COLOR(data)}"></div>
          </template>
          
          <DxScrolling mode="standard" />
          <DxSearchPanel :visible="false" />
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
        <div class="circle-wrapper">
          <div class="circle-row" v-for="status in statusList" :key="status.id">
            <div class="circle" :style="{backgroundColor: GET_STATUS_COLOR(status.id)}" />
            <span>{{ status.status }}</span>
          </div>
        </div>
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
// import DxAddRowButton from "devextreme-vue/button";
// import { DxItem } from "devextreme-vue/form";
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
    // DxAddRowButton,
    // DxLookup,
    // DxRequiredRule,
    // DxFormItem
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "ANOMALY",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      // 1 complete / 2 due / 3 overdue
      this.testList = [
        {
          id: 1,
          module: 'Piping',
          inspection_status: 1,
          anomaly_repair_status: 2,
          note: 'Pending 1 CM WO, target to complete by Q4/23'
        },
        {
          id: 2,
          module: 'Pressure Vessel',
          inspection_status: 1,
          anomaly_repair_status: 1,
          note: 'Completed pressure vessel inspection & repair due 2022'
        },
        {
          id: 3,
          module: 'Flowline',
          inspection_status: 1,
          anomaly_repair_status: 1,
          note: 'Completed flowline inspection & repair due 2022'
        },
        {
          id: 4,
          module: 'Pipeline',
          inspection_status: 1,
          anomaly_repair_status: 1,
          note: 'Underwater inspection was postponed to Q1/24. Under assessment for deferral process.'
        },
        {
          id: 5,
          module: 'Topside Riser',
          inspection_status: 2,
          anomaly_repair_status: 1,
          note: 'Planning for anomaly rectification for riser due 2022.'
        },
        {
          id: 6,
          module: 'Subsea Riser',
          inspection_status: 1,
          anomaly_repair_status: 1,
          note: 'Underwater inspection was postponed to Q1/24. Under assessment for deferral process.'
        },
        {
          id: 7,
          module: 'Structure',
          inspection_status: 1,
          anomaly_repair_status: 1,
          note: 'Completed structure inspection & repair due 2022.'
        },
      ];
      this.statusList = [
        {
          id: 1,
          status: 'Complete',
        },
        {
          id: 2,
          status: 'Due',
        },
        {
          id: 3,
          status: 'Overdue',
        }
      ];
      // this.FETCH_INSP_RECORD();
    }
  },
  data() {
    return {
      testList: null,
      statusList: null,
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
    },
    GET_STATUS(value) {
      return this.statusList.map(status => status.id === value);
    },
    GET_STATUS_CELL_COLOR(value) {
      if(value.rowType === "data" && value.column.dataField === "inspection_status") {
        switch (value.data.inspection_status) {
          case 1: return '#1D9531';
          case 2: return '#FFD600';
          case 3: return '#F34A4A';
        
          default: return '#000'
        }
      }
      else if (value.rowType === "data" && value.column.dataField === "anomaly_repair_status") {
        switch (value.data.anomaly_repair_status) {
          case 1: return '#1D9531';
          case 2: return '#FFD600';
          case 3: return '#F34A4A';
        
          default: return '#000'
        }
      }
    },
    GET_STATUS_COLOR(value) {
      switch (value) {
        case 1: return '#1D9531';
        case 2: return '#FFD600';
        case 3: return '#F34A4A';
      
        default: return '#000'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.circle-wrapper {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  .circle-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    .circle {
      display: block !important;
      margin: 0;
    }
    span {
      font-size: 12px;
    }
  }
}
.circle {
  display: flex;
  margin: 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
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