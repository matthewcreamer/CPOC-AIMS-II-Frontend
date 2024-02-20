<template>
  <div class="page-container">
    <div class="page-section">
      <DxDataGrid
        id="data-grid-insp-record"
        :ref="gridRefName"
        :data-source="inspRecordList"
        :hover-state-enabled="true"
        :allow-column-reordering="true"
        :show-borders="true"
        :show-row-lines="true"
        :row-alternation-enabled="false"
        :column-hiding-enabled="false"
        @exporting="EXPORT_DATA"
        :word-wrap-enabled="true"
        @row-inserted="CREATE_RECORD"
        @row-updated="UPDATE_RECORD"
        @row-removed="DELETE_RECORD"
        @cell-prepared="onCellPrepared"
        :column-min-width="100"
        :column-auto-width="true"
      >
        <DxFilterRow :visible="false" />
        <DxHeaderFilter :visible="true" />
        <DxEditing
          :allow-updating="true"
          :allow-deleting="true"
          :allow-adding="true"
          :use-icons="true"
          mode="form"
        >
          <DxForm label-location="top">
            <DxItem :col-count="2" :col-span="2" item-type="group">
              <DxItem data-field="inspection_date" :col-span="1" />
              <DxItem data-field="project_no" :col-span="1" />
              <DxItem data-field="report_no" :col-span="1" />
              <DxItem data-field="remark" :col-span="1" />
            </DxItem>
          </DxForm>
        </DxEditing>
        <DxColumn
          data-field="inspection_date"
          caption="Inspection Date"
          data-type="date"
          format="dd MMM yyyy"
          sort-order="desc"
          :width="140"
          :editor-options="inspDateInputOptions"
        >
          <DxRequiredRule />
        </DxColumn>
        <DxColumn
          data-field="project_no"
          caption="Project No."
          :width="140"
          :editor-options="projectNoInputOptions"
        >
        </DxColumn>
        <DxColumn
          data-field="report_no"
          caption="Report No."
          :width="140"
          :editor-options="reportNoInputOptions"
        />
        <DxColumn
            data-field="id_final_thk_status"
            caption="Thickness Status"
            alignment="center"
            width="110"
          >
          <DxLookup :data-source="statusList" display-expr="integrity_status" value-expr="id" />
        </DxColumn>
        <DxColumn
            data-field="id_final_visual_status"
            caption="Visual Status"
            alignment="center"
            width="110"
          >
          <DxLookup :data-source="statusList" display-expr="integrity_status" value-expr="id" />
        </DxColumn>
        <DxColumn data-field="remark" caption="Remark" :editor-options="remarkInputOptions"></DxColumn>
        <DxColumn type="buttons">
          <DxButton hint="Export" icon="fas fa-file-alt"      />
          <DxButton name="edit" hint="Edit" icon="edit" />
          <DxButton name="delete" hint="Delete" icon="trash" />
        </DxColumn>
        <!-- Configuration goes here -->
        <DxToolbar>
          <DxItem
              location="after"
              template="addButton"
          />
        </DxToolbar>
        <template #addButton>
          <DXButton
          icon="las la-plus"
          @click="ADD_ROW"
          hint="Add"
          />
        </template>
        <!-- <DxFilterRow :visible="true" /> -->
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
        <DxExport :enabled="true" />
      </DxDataGrid>

      <img src="/img/banner.png">
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
import { DxItem } from "devextreme-vue/form";
import DXButton from "devextreme-vue/button";

import {
  DxDataGrid,
  DxSearchPanel,
  DxPaging,
  DxPager,
  DxScrolling,
  DxColumn,
  DxExport,
  DxToolbar,
  DxEditing,
  DxLookup,
  DxRequiredRule,
  DxFilterRow,
  DxHeaderFilter,
  DxButton,
  // DxFormItem,
  DxForm
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
    DxToolbar,
    DxForm,
    DxItem,
    DxEditing,
    DxLookup,
    DxRequiredRule,
    DxFilterRow,
    DxHeaderFilter,
    DxButton,
    DXButton,
    // DxFormItem,
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "GPI RECORD",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.FETCH_INSP_RECORD();
    }
    console.log("hehehe")
  },
  data() {
    return {
      inspRecordList: {},
      campaigeList: {},
      dataGridAttributes: {
        class: "data-grid-style"
      },
      statusList: [],
      gridRefName: "grid-insp-record",
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
      //var id_tag = this.$route.params.id_tag;
      // axios({
      //   method: "get",
      //   url:
      //     "/PipingInspectionRecord/get-piping-ir-by-id-line?id_line=" + id_tag,
      //   headers: {
      //     Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      //   }
      // })
      //   .then(res => {
      //     console.log("insp record:");
      //     console.log(res);
      //     if (res.status == 200 && res.data) {
      //       console.log("success");
      //       this.inspRecordList = res.data;
      //       console.log(this.inspRecordList);
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      //   .finally(() => {
      //     this.isLoading = false;
      //   });
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
    onCellPrepared(e) {
      console.log(e);
      if(e.rowType === "data" && e.column.dataField === "id_final_visual_status") {
        e.cellElement.style.backgroundColor = this.GET_STATUS_COLOR(e.data.id_final_visual_status);
        e.cellElement.style.color = "#fff";
        e.cellElement.style.textTransform = "uppercase";
      }
      if(e.rowType === "data" && e.column.dataField === "id_final_thk_status") {
        e.cellElement.style.backgroundColor = this.GET_STATUS_COLOR(e.data.id_final_thk_status);
        e.cellElement.style.color = "#fff";
        e.cellElement.style.textTransform = "uppercase";
      }
    },
    GET_STATUS_COLOR(id) {
      if(id) {
          var data = this.statusList.filter(function(s) {
            return s.id == id;
          });
          return data[0].color_code;
      } else {
        return "#fff";
      }
    },
    ADD_ROW() {
      var grid = this.$refs[this.gridRefName].instance;
      grid.addRow();
      grid.deselectAll();
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.page-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
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