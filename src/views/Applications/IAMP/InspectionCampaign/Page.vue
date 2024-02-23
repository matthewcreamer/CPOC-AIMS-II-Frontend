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
            :allow-adding="true"
            :use-icons="true"
            mode="popup"
          />
          <DxFilterRow :visible="false" />
          <DxHeaderFilter :visible="false" />
          <DxSelection mode="single" />
          <DxColumn data-field="id_item" caption="Item" :width="70" alignment="center" />
          <DxColumn data-field="moc_number" caption="MOC No." :width="90" alignment="center" />
          <DxColumn data-field="title" caption="Title" :width="100" alignment="center" />
          <DxColumn data-field="nature_of_change" caption="Nature Of Change" :width="90" alignment="center" />
          <DxColumn data-field="worksite" caption="Worksite" :width="80" alignment="center" />
          <DxColumn data-field="residual_risk_level" caption="Residual Risk Level" :width="90" alignment="center" />
          <DxColumn data-field="start_date" caption="Start Date" :min-width="300" alignment="center" />
          <DxColumn data-field="expiry_date" caption="Expiry Date" :width="90" alignment="center" />
          <DxColumn data-field="status" caption="Status" :width="80" alignment="center" />
          <DxColumn data-field="action" caption="Action" :width="80" alignment="center" />
          <DxColumn data-field="remark" caption="Remark" :width="80" alignment="center" />
          <DxColumn data-field="initiator" caption="Initiator" :width="80" alignment="center" />
          <DxColumn caption="MOC" :min-width="150" alignment="center" cell-template="moc-cell-template" />
          <DxColumn caption="RA" :min-width="150" alignment="center" cell-template="ra-cell-template" />

          <template #moc-cell-template="{  }">
            <div style="display: flex; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
          </template>

          <template #ra-cell-template="{  }">
            <div style="display: flex; gap: 10px;">
              FileName <button>DOWNLOAD</button>
            </div>
          </template>

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
      subpageName: "INSPECTION CAMPAIGN",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.testList = [
        {
          id: 1,
          id_item: 1,
          fr_no: 'FR-00001',
          tag_no: 'PCV-03302',
          platform: 'MDPP',
          unit: '-',
          equipment_type: 'Choke Valve',
          detail: 'Phase 3 Choke valve damage issue (MDF01/05, AMA04/12, MTA10)',
          disc: 'INST',
          rca_status: 'Done',
          rca_action_status: 'Done'
        },
        {
          id: 2,
          id_item: 2,
          fr_no: 'FR-00002',
          tag_no: 'LSB-PP-200',
          platform: 'MDPP',
          unit: 'V-0331',
          equipment_type: 'Instrument and Utility',
          detail: 'Gas Leak from ¾” drain valve upstream of PCV-03302​',
          disc: 'MECH',
          rca_status: 'Done',
          rca_action_status: 'Done'
        },
        {
          id: 3,
          id_item: 3,
          fr_no: 'FR-00003',
          tag_no: 'UPS-PP-230',
          platform: 'MDPP',
          unit: 'Low Voltage',
          equipment_type: 'Switch Board',
          detail: 'ESD-2 activated due to lost power supply and TG-2 and TG-3 tripped and lost power supply.​',
          disc: 'ELEC',
          rca_status: 'Ongoing',
          rca_action_status: 'Done'
        },
        {
          id: 4,
          id_item: 4,
          fr_no: 'FR-00004',
          tag_no: 'PCV-03302',
          platform: 'MDPP',
          unit: 'BC1',
          equipment_type: 'UPS',
          detail: 'Variable Inlet Guide Vane (VIGV) Position Controller Shutdown​',
          disc: 'INST',
          rca_status: 'Done',
          rca_action_status: 'Done'
        }
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
</style>