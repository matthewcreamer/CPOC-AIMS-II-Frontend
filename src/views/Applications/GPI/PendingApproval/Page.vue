<template>
  <div class="page-container">
    <div class="button-container">
        <button class="export-btn" v-on:click="SAP">
            SAP Validate
        </button>
    </div>
    <div class="page-section">
      <div class="table-wrapper">
        <DxDataGrid
          id="data-grid-list"
          key-expr="id"
          :data-source="testList"
          :selected-row-keys="selected_line_id"
          :selection="{ mode: 'single' }"
            :hover-state-enabled="true"
            :allow-column-reordering="true"
            :show-borders="true"
            :show-row-lines="true"
            :row-alternation-enabled="false"
            :word-wrap-enabled="true"
            @selection-changed="ON_SELECT"
            @cell-prepared="onCellPrepared"
        >
          <DxEditing
            :allow-updating="false"
            :allow-deleting="false"
            :use-icons="true"
            mode="form"
          />
          <DxFilterRow :visible="true" />
          <DxHeaderFilter :visible="false" />
          <DxSelection mode="multiple" />
          
          <DxForm label-location="top">
            <DxItem :col-count="3" :col-span="2" item-type="group">
              <DxItem data-field="item_no" :col-span="1" />
              <DxItem data-field="gpi_no" :col-span="1" />
              <DxItem data-field="platform_type" :col-span="1" />
              <DxItem data-field="id_asset_type" :col-span="1" />
              <DxItem data-field="tag_no" :col-span="1" />
              <DxItem data-field="gpi_date" :col-span="1" />
              <DxItem data-field="exp_date" :col-span="1" />
              <DxItem data-field="main_work_ctr" :col-span="1" />
              <DxItem data-field="severity" :col-span="1" />
              <DxItem data-field="comment" :col-span="1" />
            </DxItem>
          </DxForm>
          <DxSelection mode="single" />


        <DxColumn data-field="item_no" caption="Check" alignment="center" :width="60" :editor-options="GPINoInputOptions">
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="gpi_no" caption="GPI No." alignment="center" :width="100"
          :editor-options="GPINoInputOptions">
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="platform_type" caption="Platform" alignment="center" :width="100"
          :editor-options="platformNoInputOptions">
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="id_asset_type" caption="Asset Type" alignment="center">
          <DxLookup :data-source="statusList" display-expr="code" value-expr="id" />
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="tag_no" caption="Tag No." alignment="center" :editor-options="tagNoInputOptions">
          <DxRequiredRule />
          <!-- <DxLookup :data-source="statusList" display-expr="integrity_status" value-expr="id" /> -->
        </DxColumn>

        <DxColumn data-field="gpi_date" caption="GPI Date" data-type="date" format="dd MMM yyyy" alignment="center"
          :width="150" :editor-options="GPIDateInputOptions">
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="exp_date" caption="Expected Finish Date" data-type="date" format="dd MMM yyyy"
          alignment="center" :width="150" :editor-options="ExpDateInputOptions">
          <DxRequiredRule />
        </DxColumn>

        <DxColumn data-field="main_work_ctr" caption="Main WorkCtr" alignment="center"
          :editor-options="MainWorkCtrInputOptions" />

        <DxColumn data-field="severity" caption="Severity" alignment="center" :editor-options="SeverityInputOptions" />

        <DxColumn data-field="comment" caption="Comments" alignment="center" :editor-options="conmmentInputOptions">
        </DxColumn>

        <DxColumn data-field="action" caption="Action" alignment="center" :editor-options="actionInputOptions">
        </DxColumn>

          <!-- <DxToolbar>
            <DxItem location="after" template="addRowTemplate" />
          </DxToolbar>
          

          <template #addRowTemplate>
            <DxAddRowButton icon="plus" text="Add New" />
          </template> -->

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
  DxItem,
  DxLookup,
  DxRequiredRule,
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
    // DxToolbar,
    DxHeaderFilter,
    DxSelection,
    DxForm,
    DxItem,
    DxEditing,
    DxFilterRow,
    // DxAddRowButton,
    DxLookup,
    DxRequiredRule,
    // DxFormItem
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "PENDING APPROVAL",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.testList = [
        {
          id: 1,
          gpi_no: "GPI-23008",
          platform_type: "MDPP",
          id_asset_type: 1,
          tag_no: "",
          gpi_date: "03 Oct 2023",
          exp_date: "05 Oct 2023",
          main_work_ctr: "Cons",
          severity: "P3",
          comment: "Need to replace",
          action: "",
        },
        {
          id: 2,
          gpi_no: "GPI-23007",
          platform_type: "MDPP",
          id_asset_type: 2,
          tag_no: "1-DG-BS1-3996",
          gpi_date: "17 Sep 2023",
          exp_date: "02 Oct 2023",
          main_work_ctr: "Insp",
          severity: "P4",
          comment: "",
          action: "",
        },
        {
          id: 3,
          gpi_no: "GPII-23006",
          platform_type: "MDPP",
          id_asset_type: 3,
          tag_no: "V-0111",
          gpi_date: "09 Sep 2023",
          exp_date: "17 Sep 2023",
          main_work_ctr: "Insp",
          severity: "P3",
          comment: "",
          action: "",
        },
        {
          id: 4,
          gpi_no: "GPI-23007",
          platform_type: "MDPP",
          id_asset_type: 2,
          tag_no: "1-DG-BS1-3996",
          gpi_date: "17 Sep 2023",
          exp_date: "02 Oct 2023",
          main_work_ctr: "Insp",
          severity: "P4",
          comment: "",
          action: "",
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
      statusList: [
        { id: 1, code: "Fench" },
        { id: 2, code: "Piping" },
        { id: 3, code: "Pressure Vessel" },
        { id: 4, code: "Bridge" },
        { id: 5, code: "Lifting Cane" }
      ],
      dataGridAttributes: {
        class: "data-grid-style"
      },
      ExpDateInputOptions: { placeholder: "Select date" },
      GPIDateInputOptions: { placeholder: "Select date" },
      GPINoInputOptions: { placeholder: "Enter GPI No." },
      MainWorkCtrInputOptions: { placeholder: "Enter main workCtr" },
      SeverityInputOptions: { placeholder: "Enter severity" },
      platformNoInputOptions: { placeholder: "Enter platform" },
      conmmentInputOptions: { placeholder: "Enter remark" },
      tagNoInputOptions: { placeholder: "Enter tag No." },
      actionInputOptions: { placeholder: "Enter action"},
      selected_line: [],

    };
  },
  computed: {
    selected_line_id() {
      return this.selected_line.map((e) => e.id_line)
    },
  },
  methods: {
    onCellPrepared(e) {
      if(e.rowType === "data" && e.column.caption === "Status") {
          console.log(e);
          e.cellElement.style.backgroundColor = this.GET_INTERVAL_COLOR(e.displayValue);
          e.cellElement.style.color = "#fff";
          e.cellElement.style.textTransform = "uppercase";
      }
    },
    ON_SELECT({selectedRowsData}) {
      this.selected_line = selectedRowsData
    },
    SAP(){
      console.log("SAP YO")
    },
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

.button-container {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    button {
        cursor: pointer;
        display: inline-flex;
        justify-content: space-between;
        border: 1px solid lightgray;
        background-color: transparent;
        border-radius: 4px;
        padding: 10px 8px;
        gap: 1rem;
        font-size: 14px;
        width: 163px;
        &:hover {
            background-color: lightgray;
        }
    }
}
</style>