<template>
  <div class="page-container">
    <div class="page-section">
      <div class="table-wrapper">
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
          @row-click="() => { $emit('currentView', 3); }"
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
          <DxColumn data-field="id_item" caption="Item" :min-width="70" alignment="center" />
          <DxColumn data-field="platform" caption="Platform" :min-width="90" alignment="center" />
          <DxColumn data-field="tag_no" caption="Tag No." :min-width="200" alignment="center" />
          <DxColumn data-field="risk_ranking" caption="Risk Ranking" :min-width="80" alignment="center" />
          <DxColumn data-field="integrity_status" caption="Integrity Status" :min-width="90" alignment="center" />
          <DxColumn data-field="inspection_type" caption="Inspection Type" :min-width="90" alignment="center" />
          <DxColumn data-field="last_inspection_date" caption="Last Inspection Date" :min-width="90" alignment="center" />
          <DxColumn data-field="due_inspection_date" caption="Due Inspection Date" :min-width="80" alignment="center" />
          <DxColumn data-field="inspection_work_order" caption="Inspection Work Order" :min-width="80" alignment="center" />
          <DxColumn :width="90" alignment="center" cell-template="action-cell-template" />

          <template #action-cell-template="{  }">
            <div class="action-wrapper">
              <span @click="$emit('currentView', 1)" class="create-task">CREATE TASK</span>
            </div>
          </template>
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
// import DXButton from "devextreme-vue/button";
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
  // DxButton,
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
    // DxButton,
    // DXButton,
    // DxLookup,
    // DxRequiredRule,
    // DxFormItem
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "INSPECTION RECORD",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.testList = [
        {
          id: 1,
          id_item: 1,
          platform: 'MDPP',
          tag_no: '0.5-AI-B2-5092',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'NDE',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 2,
          id_item: 2,
          platform: 'MDPP',
          tag_no: '0.5-AI-B2-5092',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'VT',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 3,
          id_item: 3,
          platform: 'MDPP',
          tag_no: '0.5-OW-BS1-7892',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'NDE',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 4,
          id_item: 4,
          platform: 'MDPP',
          tag_no: '0.5-OW-BS1-7892',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'VT',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 5,
          id_item: 5,
          platform: 'MDPP',
          tag_no: '0.5-OW-C4N-7959',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'NDE',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 6,
          id_item: 6,
          platform: 'MDPP',
          tag_no: '0.5-OW-C4N-7959',
          risk_ranking: 'LOW',
          integrity_status: 'P6',
          inspection_type: 'VT',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 7,
          id_item: 7,
          platform: 'MDPP',
          tag_no: '0.5-OU-A2-5058',
          risk_ranking: 'LOW',
          integrity_status: 'P5',
          inspection_type: 'NDE',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 8,
          id_item: 8,
          platform: 'MDPP',
          tag_no: '0.5-OU-A2-5058',
          risk_ranking: 'LOW',
          integrity_status: 'P5',
          inspection_type: 'VT',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 9,
          id_item: 9,
          platform: 'MDPP',
          tag_no: '0.5-CR-B2-4306',
          risk_ranking: 'LOW',
          integrity_status: 'P4',
          inspection_type: 'NDE',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
        },
        {
          id: 10,
          id_item: 10,
          platform: 'MDPP',
          tag_no: '0.5-CR-B2-4306',
          risk_ranking: 'LOW',
          integrity_status: 'P4',
          inspection_type: 'VT',
          last_inspection_date: '2020',
          due_inspection_date: '2024',
          inspection_work_order: '-'
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
.create-task {
  color: $dexon-primary-green;
  font-size: 11px;
  font-weight: 800;
}
</style>