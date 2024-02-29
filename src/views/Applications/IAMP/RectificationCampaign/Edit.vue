<template>
  <div class="page-container">
    <div class="action-bar">
      <div class="switch">
        <div>
          <v-ons-switch
            style="padding: 0 !important; border: 0;"
            input-id="switch1"
            v-model="btn_state"
          />
        </div>
          
          <span>EDIT MODE</span>
        </div>
        
      <!-- <div class="switch">
        <DxSwitch :value="false"/>
        <span>EDIT MODE</span>
      </div> -->
      <button @click="$emit('currentView', 0)" class="delete"><trashSvg style="width: 15px; fill: white;" />  DELETE</button>
    </div>
    <div class="page-section">
      <div class="table-wrapper">
        <div span-4 class="input-wrapper">
          <span>Rectification Issue</span>
          <div class="input">
            <DxTextBox
              value="Piping replacement Under bridge MDPP.."
            />
          </div>
        </div>

        <div span-2 class="input-wrapper">
          <span>PIC</span>
          <div class="input">
            <DxTextBox
              value="-"
            />
          </div>
        </div>

        <div span-2 class="input-wrapper">
          <span>Contactor</span>
          <div class="input">
            <DxTextBox
              value="Tantawan"
            />
          </div>
        </div>

        <div span-2 class="input-wrapper">
          <span>Target Completion</span>
          <div class="input">
            <DxDateBox
              type="date"
            />
          </div>
        </div>

        <div span-2 class="input-wrapper">
          <span>Execution</span>
          <div class="input">
            <DxSelectBox
              value=""
            />
          </div>
        </div>

        <div span-4 class="input-wrapper">
          <span>Comments</span>
          <div class="input">
            <DxTextBox
              value=""
            />
          </div>
        </div>

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
// import penSvg from "@/components/svg/pen-svg.vue"
import trashSvg from "@/components/svg/trash-svg.vue"

//DataGrid
import "devextreme/dist/css/dx.light.css";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
import DxSelectBox from 'devextreme-vue/select-box';
import DxTextBox from 'devextreme-vue/text-box';
import DxDateBox from 'devextreme-vue/date-box';
// import DxTextArea from 'devextreme-vue/text-area';
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
    // DxButton,
    // DxAddRowButton,
    // DxLookup,
    // DxRequiredRule,
    // DxFormItem,
    DxSelectBox,
    DxTextBox,
    DxDateBox,
    // DxTextArea,
    // penSvg,
    trashSvg
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "FR NUMBER: ",
      subpageInnerName: null,
    });
    this.testList1 = [
        {
          id: 1,
          id_item: 1,
          file_name: '0.5-AI-B2-5092-ITP',
          file_type: 'ITP',
          file_extension: 'PDF',
          note: '-'
        },
        {
          id: 1,
          id_item: 1,
          file_name: '0.5-AI-B2-5092-INSP',
          file_type: 'Inspection Report',
          file_extension: 'PDF',
          note: '-'
        },
      ];
  },
  data() {
    return {
      testList1: [],
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
  height: calc(100% - 270px);
  grid-row: span 2;
  margin-top: 60px;
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

.action-bar {
    position: fixed;
    z-index: 50;
    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px 20px;
    width: calc(100% - 240px);
    justify-content: flex-end;
    
    // .switch {
    //   width: 200px;
    //   padding: 10px 0;
    //   // border: solid 1px gray;
    //   display: flex;
    //   justify-content: center;
    //   // align-items: center;
    //   gap: 20px;
    // }
    .switch {
      cursor: pointer;
      display: flex;
      // justify-content: space-evenly;
      gap: 20px;
      transition: 200ms;
      align-items: center;
      padding: 20px;
      background-color: #fff;
      border: 1.5px solid #ddd;
      border-radius: 0.3rem;
      width: auto;
      font-weight: 500;
      font-size: 16px;
      
      // height: 36.41px;

      span {

      }
    }
    #switch1 {
      
    }
    
    button {
      width: 150px;
      padding: 10px 0;
      color: white;
      background-color: white;
      border: 0;
      border-radius: 5px;
      font-weight: 500;
      font-size: 16px;
      transition: 1s;
      cursor: pointer;
    }
    .submit {
      background-color: $dexon-primary-green;
    }
    .draft {
      background-color: $dexon-primary-gray;
    }
    .delete {
      background-color: $dexon-primary-red;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px
    }
  }

.table-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  *[span-2] {
    grid-column: span 2;
  }
  *[span-3] {
    grid-column: span 3;
  }
  *[span-4] {
    grid-column: span 4;
  }
  *[span-5] {
    grid-column: span 5;
  }
  *[fill] {
    grid-column: span 6;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    span {
      font-size: 16px;
    }
  }
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