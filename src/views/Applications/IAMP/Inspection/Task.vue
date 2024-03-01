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
          <DxColumn data-field="work_order_number" caption="Work Order Number" :min-width="90" alignment="center" />
          <DxColumn data-field="platform" caption="Platform" :min-width="90" alignment="center" />
          <DxColumn data-field="asset" caption="Asset" :min-width="120" alignment="center" />
          <DxColumn data-field="tag_no" caption="Tag No." :min-width="140" alignment="center" />
          <DxColumn data-field="inspection_type" caption="Inspection Type" :min-width="90" alignment="center" />
          <DxColumn data-field="due_inspection_date" caption="Due Inspection Date" :min-width="80" alignment="center" />
          <DxColumn data-field="plan_inspection_date" caption="Plan Inspection Date" :min-width="80" alignment="center" />
          <DxColumn data-field="status" caption="Status" :min-width="80" alignment="center" />
          <DxColumn name="actions" data-field="status" :width="90" alignment="center" cell-template="action-cell-template" />

          <template #action-cell-template="{ data }">
            <div class="action-wrapper">
              <div @click="() => { $emit('currentView', 2, 1); }">
                <penSvg class="penSvg" />
              </div>
              <div>
                <trashSvg v-if="data.value != 'Completed'" class="trashSvg" />
              </div>
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
import penSvg from "@/components/svg/pen-svg.vue"
import trashSvg from "@/components/svg/trash-svg.vue"

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
    // DxFormItem,
    penSvg,
    trashSvg
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
          work_order_number: 'IT-00001',
          platform: 'MDPP',
          asset: 'Piping',
          tag_no: '0.5-CR-B2-4306',
          inspection_type: 'NDE',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Mar 2024',
          status: 'Completed'
        },
        {
          id: 2,
          id_item: 2,
          work_order_number: 'IT-00002',
          platform: 'MDPP',
          asset: 'Piping',
          tag_no: '0.5-CR-B2-4306',
          inspection_type: 'VT',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Feb 2024',
          status: 'Completed'
        },
        {
          id: 3,
          id_item: 3,
          work_order_number: 'IT-00003',
          platform: 'MDPP',
          asset: 'Piping',
          tag_no: '0.5-OW-BS1-7892',
          inspection_type: 'NDE',
          due_inspection_date: '2024',
          plan_inspection_date: '10 Feb 2024',
          status: 'Pending'
        },
        {
          id: 4,
          id_item: 4,
          work_order_number: 'IT-00004',
          platform: 'MDPP',
          asset: 'Piping',
          tag_no: '0.5-OW-BS1-7892',
          inspection_type: 'VT',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Mar 2024',
          status: 'Pending'
        },
        {
          id: 5,
          id_item: 5,
          work_order_number: 'IT-00005',
          platform: 'MDPP',
          asset: 'Pressure Vessel',
          tag_no: 'V-0111',
          inspection_type: 'External',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Mar 2024',
          status: 'Completed'
        },
        {
          id: 6,
          id_item: 6,
          work_order_number: 'IT-00006',
          platform: 'MDPP',
          asset: 'Structure',
          tag_no: '0.5-OW-C4N-7959',
          inspection_type: 'VT',
          due_inspection_date: '2024',
          plan_inspection_date: '14 Feb 2024',
          status: 'Pending'
        },
        {
          id: 7,
          id_item: 7,
          work_order_number: 'IT-00007',
          platform: 'MDPP',
          asset: 'Flowline',
          tag_no: '0.5-OU-A2-5058',
          inspection_type: 'NDE',
          due_inspection_date: '2024',
          plan_inspection_date: '10 Apr 2024',
          status: 'Pending'
        },
        {
          id: 8,
          id_item: 8,
          work_order_number: 'IT-00008',
          platform: 'MDPP',
          asset: 'Flowline',
          tag_no: '0.5-OU-A2-5058',
          inspection_type: 'VT',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Apr 2024',
          status: 'Pending'
        },
        {
          id: 9,
          id_item: 9,
          work_order_number: 'IT-00009',
          platform: 'MDPP',
          asset: 'Pressure Vessel',
          tag_no: 'V-0112',
          inspection_type: 'Internal',
          due_inspection_date: '2024',
          plan_inspection_date: '01 Apr 2024',
          status: 'Pending'
        },
        {
          id: 10,
          id_item: 10,
          work_order_number: 'IT-00010',
          platform: 'MDPP',
          asset: 'Piping',
          tag_no: '0.5-AI-B2-5092',
          inspection_type: 'NDE',
          due_inspection_date: '2024',
          plan_inspection_date: '15 May 2024',
          status: 'Pending'
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
.action-wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.penSvg {
  width: 25px; 
  padding: 5px; 
  background-color: orange; 
  fill: white;
  transition: 0.2s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
}
.trashSvg {
  width: 25px; 
  padding: 5px; 
  background-color: red; 
  fill: white;
  transition: 0.2s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
}
</style>