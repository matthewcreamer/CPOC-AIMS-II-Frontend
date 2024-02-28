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
          <DxColumn data-field="inspection_program" caption="Inspection Program" :min-width="90" alignment="center" />
          <DxColumn data-field="start_date" caption="Start date" :width="100" alignment="center" />
          <DxColumn data-field="end_date" caption="End Date" :width="90" alignment="center" />
          <DxColumn data-field="pic" caption="PIC" :width="80" alignment="center" />
          <DxColumn data-field="comments" caption="Comments" :min-width="90" alignment="center" />
          <DxColumn data-field="status" caption="Status" :width="90" alignment="center" cellTemplate="block-cell-template" />
          <DxColumn caption="Attachments" :width="200" alignment="center" cell-template="attachment-cell-template" />
          <DxColumn :width="40" alignment="center" cell-template="list-cell-template" />

          <template #attachment-cell-template="{  }">
            <div class="column-template">
              <span>FileName.ext</span>
              <magnifyingGlassSvg />
            </div>
          </template>

          <template #list-cell-template="{  }">
            <listSvg class="listSvg" />
          </template>

          <template #block-cell-template="{ data }">
            <div class="block" :style="{backgroundColor: GET_STATUS_CELL_COLOR(data)}"></div>
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
import magnifyingGlassSvg from "@/components/svg/magnifying-glass-svg.vue"
import listSvg from "@/components/svg/list-svg.vue"

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
    magnifyingGlassSvg,
    listSvg,
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
          inspection_program: 'Block Valve Inspection (Feb 2022)',
          start_date: '02 Jan, 2022',
          end_date: '17 Jan, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
        },
        {
          id: 2,
          id_item: 2,
          inspection_program: 'Process Piping Inspection (Jan 2022)',
          start_date: '17 Jan, 2022',
          end_date: '19 Jan, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
        },
        {
          id: 3,
          id_item: 3,
          inspection_program: 'Equipment Inspection (Feb 2022)',
          start_date: '23 Feb, 2022',
          end_date: '23 Mar, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
        },
        {
          id: 4,
          id_item: 4,
          inspection_program: 'Flowline Inspection (Feb 2022)',
          start_date: '23 Feb, 2022',
          end_date: '23 Mar, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
        },
        {
          id: 5,
          id_item: 5,
          inspection_program: 'Intelligent Pigging (IP)',
          start_date: '17 Mar, 2022',
          end_date: '7 Apr, 2022',
          pic: 'Syahriman',
          comments: '',
          status: 2
        },
        {
          id: 6,
          id_item: 6,
          inspection_program: 'Lifting Recertification Campaign',
          start_date: '25 Mar, 2022',
          end_date: '23 Apr, 2022',
          pic: 'Syahriman',
          comments: '',
          status: 2
        },
        {
          id: 7,
          id_item: 7,
          inspection_program: 'Inspection For Low Nom Activities',
          start_date: '23 Mar, 2022',
          end_date: '7 Apr, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
        },
        {
          id: 8,
          id_item: 8,
          inspection_program: 'Riser Inspection (Apr 2022)',
          start_date: '27 Apr, 2022',
          end_date: '25 May, 2022',
          pic: 'Chanat',
          comments: '',
          status: 2
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
    },
    GET_STATUS_CELL_COLOR(value) {
      if(value.rowType === "data" && value.column.dataField === "status") {
        switch (value.data.status) {
          case 1: return '#6ffc03';
          case 2: return '#47a102';
        
          default: return '#000'
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.block {
  display: flex;
  margin: 0 auto;
  width: 22px;
  height: 22px;
}
.column-template {
  display: flex; 
  align-items: center;
  gap: 10px; 
  justify-content: space-between;
  svg {
    width: 25px;
    transition: 0.2s;
  }
  svg:last-child {
    width: 25px; 
    padding: 5px; 
    background-color: blue; 
    fill: white;
    border-radius: 5px;
  }
  svg:hover {
    transform: scale(1.1);
  }
}
.listSvg {
  width: 25px; 
  padding: 5px; 
  background-color: orange; 
  fill: white;
  transition: 0.2s;
  border-radius: 5px;
}
.listSvg:hover {
  transform: scale(1.1);
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