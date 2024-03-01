<template>
  <div class="page-container">

    <div class="page-section info-tab-display" >
      <div class="report-sheet report-sheet-info" style="grid-row: span 2">
        <div class="report-container">
          <div class="sheet-body" style="grid-template-columns: 50% 50%">
            <div class="section-label" style="grid-column: span 2">
              <label>Tank information</label>
            </div>
            <div class="form-item" v-for="item in generalInfo" :key="item.desc">
              <div class="form-item-label">
                <label>{{ item.desc }}</label>
              </div>
              <div class="form-item-value">
                <label>{{ item.value }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="report-sheet">
        <div class="report-container">
          <div class="sheet-body">
            <div>
              <div class="section-label">
                <label>overview picture</label>
              </div>

              <div class="form-item-picture-log">
                <div class="img-box">
                  
                  <div class="btn-panel">
                    
                    <v-ons-toolbar-button
                      class="pic-toolbar-btn"
                      v-on:click="PREVIEW_PIC(infoEx.overview_img_path)"
                      v-if="infoEx.overview_img_path"
                    >
                      <i class="las la-eye"></i>
                    </v-ons-toolbar-button>
                    <v-ons-toolbar-button
                      class="pic-toolbar-btn"
                      v-on:click="DELETE_PIC(infoEx.overview_img_path, 1)"
                      v-if="infoEx.overview_img_path"
                    >
                      <i class="las la-trash"></i>
                    </v-ons-toolbar-button>
                    <v-ons-toolbar-button>
                      <label
                        class="pic-toolbar-btn"
                        for="pic-upload-btn"
                        v-if="!infoEx.overview_img_path"
                      >
                        <i class="las la-plus"></i>
                      </label>
                    </v-ons-toolbar-button>
                  </div>

                  <img
                    :src="baseURL + infoEx.overview_img_path"
                    v-if="infoEx.overview_img_path"
                  />
                  <input
                    type="file"
                    id="pic-upload-btn"
                    style="display: none"
                    ref="pic_upload_ov"
                    @change="UPLOAD_PIC(1)"
                  />

                    <i class="las la-image" v-if="!infoEx.overview_img_path"></i>
                    <label v-if="!infoEx.overview_img_path">No Image</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="report-sheet">
        <div class="report-container">
          <div class="sheet-body">
            <div>
              <div class="section-label">
                <label>name plate picture</label>
              </div>

              <div class="form-item-picture-log">
                <div class="img-box">
                  <div class="btn-panel">
                    <v-ons-toolbar-button
                      class="pic-toolbar-btn"
                      v-on:click="PREVIEW_PIC(infoEx.name_plate_img_path)"
                      v-if="infoEx.name_plate_img_path"
                    >
                      <i class="las la-eye"></i>
                    </v-ons-toolbar-button>
                    <v-ons-toolbar-button
                      class="pic-toolbar-btn"
                      v-on:click="DELETE_PIC(infoEx.name_plate_img_path, 2)"
                      v-if="infoEx.name_plate_img_path"
                    >
                      <i class="las la-trash"></i>
                    </v-ons-toolbar-button>
                    <v-ons-toolbar-button v-if="!infoEx.name_plate_img_path">
                      <label
                        class="pic-toolbar-btn"
                        for="pic-upload-btn-2"
                        v-if="!infoEx.name_plate_img_path"
                      >
                        <i class="las la-plus"></i>
                      </label>
                    </v-ons-toolbar-button>
                  </div>
                  <img
                    :src="baseURL + infoEx.name_plate_img_path"
                    v-if="infoEx.name_plate_img_path"
                  />
                  <input
                    type="file"
                    id="pic-upload-btn-2"
                    style="display: none"
                    ref="pic_upload_np"
                    @change="UPLOAD_PIC(2)"
                  />
                  <i class="las la-image" v-if="!infoEx.name_plate_img_path"></i>
                  <label v-if="!infoEx.name_plate_img_path">No Image</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      <fileTab style="grid-column: span 2"></fileTab>
  </div>
</template> 

<script>
//API
import axios from "/axios.js";
import moment from "moment";

//Components
//import VueTabsChrome from "vue-tabs-chrome";
import fileTab from "./file-table.vue"

//DataGrid
import "devextreme/dist/css/dx.light.css";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
// import { DxItem } from "devextreme-vue/form";
import {
//   DxDataGrid,
//   DxSearchPanel,
//   DxPaging,
//   DxPager,
//   DxScrolling,
//   DxColumn,
//   DxExport,
//   DxToolbar,
//   DxEditing,
//   DxLookup,
//   DxRequiredRule,
//   DxFormItem,
//   DxForm
} from "devextreme-vue/data-grid";

//Structures

export default {
  name: "inspection-record",
  components: {
    fileTab,
    // DxDataGrid,
    // DxSearchPanel,
    // DxPaging,
    // DxPager,
    // DxScrolling,
    // DxColumn,
    // DxExport,
    // DxToolbar,
    // DxForm,
    // DxItem,
    // DxEditing,
    // DxLookup,
    // DxRequiredRule
    // DxFormItem,
  },
  created() {
    this.$store.commit("UPDATE_CURRENT_PAGENAME", {
      subpageName: "Information",
      subpageInnerName: null,
    });
    if (this.$store.state.status.server == true) {
      this.FETCH_INSP_RECORD();
    }
  },
  data() {
    return {
      inspRecordList: {},
      campaigeList: {},
      file_pic_upload: "",
      previewImg: "",
      dataGridAttributes: {
        class: "data-grid-style"
      },
      inspDateInputOptions: { placeholder: "Select date" },
      projectNoInputOptions: { placeholder: "Enter project no" },
      reportNoInputOptions: { placeholder: "Enter report no" },
      remarkInputOptions: { placeholder: "Enter remark" },
      infoEx: {},

    };
  },
  computed: {
    generalInfo() {
      var info = [
        {
          desc: "Tag No.",
          value: this.infoEx.tank_no
        },
        {
          desc: "Equipment Description",
          value: this.infoEx.construction_code
        },
        {
          desc: "Location",
          value: this.infoEx.site_name
        },
        {
          desc: "Specific Location",
          value: this.infoEx.inspection_code
        },
        {
          desc: "Tank Status",
          value: this.infoEx.tank_status ?? "-"
        },
        {
          desc: "Zone",
          value: this.infoEx.tank_capacity_litre ? this.NUMBER_WITH_COMMA(this.infoEx.tank_capacity_litre.toFixed(2)) : "-"
        },
        {
          desc: "Gas Group",
          value: this.infoEx.tank_height_m ? this.NUMBER_WITH_COMMA(this.infoEx.tank_height_m.toFixed(2)) : "-"
        },
        {
          desc: "Temp Class",
          value: this.infoEx.joint_efficiency
        },
        {
          desc: "Discipline",
          value: this.infoEx.max_liquid_level_m ? this.NUMBER_WITH_COMMA(this.infoEx.max_liquid_level_m.toFixed(2)) : "-"
        },
        {
          desc: "S/N I",
          value: this.infoEx.bottom_nominal_thk_mm ? this.NUMBER_WITH_COMMA(this.infoEx.bottom_nominal_thk_mm.toFixed(2)) : "-"
        },
        {
          desc: "S/N II",
          value: this.infoEx.diameter_m ? this.NUMBER_WITH_COMMA(this.infoEx.diameter_m.toFixed(2)) : "-"
        },
        {
          desc: "Main Equipment",
          value: this.infoEx.annular_nominal_thk_mm ? this.NUMBER_WITH_COMMA(this.infoEx.annular_nominal_thk_mm.toFixed(2)) : "-"
        },
        {
          desc: "Associated Equipment",
          value: this.infoEx.no_of_shell_course
        },
        {
          desc: "Remarks",
          value: this.infoEx.roof_nominal_thk_mm ? this.NUMBER_WITH_COMMA(this.infoEx.roof_nominal_thk_mm.toFixed(2)) : "-"
        },
        // {
        //   desc: "Tank Internal Pressure ",
        //   value: this.infoEx.tank_internal_pressure
        // },
        // {
        //   desc: "Design Pressure Shell",
        //   value: this.infoEx.design_pressure_shell ?? "-"
        // },
        // {
        //   desc: "Roof Type",
        //   value: this.infoEx.roof_type ? this.infoEx.roof_type : "-"
        // },
        // {
        //   desc: "Operating Pressure Shell",
        //   value: this.infoEx.ope_pressure_shell ?? "-"
        // },
        // {
        //   desc: "Roof Shape",
        //   value: this.infoEx.roof_shape ?? "-"
        // },
        // {
        //   desc: "Design Pressure Coil",
        //   value: this.infoEx.design_pressure_coil ?? "-"
        // },
        // {
        //   desc: "Bottom Type",
        //   value: this.infoEx.bottom_type ? this.infoEx.bottom_type : "-"
        // },
        // {
        //   desc: "Operating Pressure Coil",
        //   value: this.infoEx.ope_pressure_coil ?? "-"
        // },
        // {
        //   desc: "Foundation Type",
        //   value: this.infoEx.foundation ?? "-"
        // },
        // {
        //   desc: "Installation Date ",
        //   value: moment(this.infoEx.installation_date).format("DD MMM yyyy")
        // },
        // {
        //   desc: "Insulation ",
        //   value: this.infoEx.insulation_desc
        // },
        // {
        //   desc: "First In-service Date ",
        //   value: moment(this.infoEx.inservice_date).format("DD MMM yyyy")
        // },
        // {
        //   desc: "Insulation Thickness (mm)",
        //   value: this.infoEx.insulation_thk_mm ? this.NUMBER_WITH_COMMA(this.infoEx.insulation_thk_mm.toFixed(2)) : "-"
        // },
        // {
        //   desc: "In-service Age of Tank (years)",
        //   value: this.infoEx.inservice_age_of_tank_yrs ? this.NUMBER_WITH_COMMA(this.infoEx.inservice_age_of_tank_yrs.toFixed(0)) : "-"
        // },
        
        // {
        //   desc: "Product",
        //   value: this.infoEx.service_desc
        // },
        // {
        //   desc: "Previous Inspection Date",
        //   value: this.infoEx.last_inspection_date
        //     ? moment(this.infoEx.last_inspection_date).format("DD MMM yyyy")
        //     : null
        // },
        // {
        //   desc: "Specific Gravity",
        //   value: this.infoEx.sg_of_product ? this.NUMBER_WITH_COMMA(this.infoEx.sg_of_product.toFixed(2)) : ""
        // }
        
      ];
      return info;
    },
  },
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
    UPLOAD_PIC(pic_type) {
      const id_tag = this.$route.params.id_tag;
      if (pic_type == 1) {
        this.file_pic_upload = this.$refs.pic_upload_ov.files[0];
      } else {
        this.file_pic_upload = this.$refs.pic_upload_np.files[0];
      }
      if (
        (this.file_pic_upload && this.file_pic_upload.type == "image/jpeg") ||
        this.file_pic_upload.type == "image/png"
      ) {
        if (this.file_pic_upload.size < 20000000) {
          axios({
            method: "post",
            url: "/TankInfo/upload-pic",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token"))
            },
            data: {
              id: id_tag,
              file: this.file_pic_upload,
              type: pic_type
            }
          })
            .then(res => {
              if (res.status == 200) {
                this.FETCH_INFO();
                console.log("==> TANK INFO IMG UPLOAD: DONE");
              }
            })
            .catch(error => {
              this.$ons.notification.alert(
                error.code + " " + error.response.status + " " + error.message
              );
            })
            .finally(() => {});
        } else {
          this.$ons.notification.alert("File size too large. (20 MB max)");
          const file = document.getElementById("pic-upload-btn");
          file.val = "";
        }
      } else {
        this.$ons.notification.alert(
          "Incorrect filetype. <br/> Only JPEG/PNG file can be uploaded."
        );
        const file = document.getElementById("pic-upload-btn");
        file.val = "";
      }
    },
    DELETE_PIC(file_path, pic_type) {
      this.$ons.notification.confirm("Confirm delete?").then(res => {
        if (res == 1) {
          console.log("==> PRD INFO IMG DELETE: START");
          const id_tag = this.$route.params.id_tag;
          console.log("==> ID TAG (PRD): " + id_tag);
          axios({
            method: "delete",
            url: "/TankInfo/delete-pic/",
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token"))
            },
            data: {
              id: id_tag,
              file_path: file_path,
              type: pic_type
            }
          })
            .then(res => {
              console.log(res);

              if (res.status == 200) {
                this.FETCH_INFO();
              }
            })
            .catch(error => {
              this.$ons.notification.alert(
                error.code + " " + error.response.status + " " + error.message
              );
            })
            .finally(() => {
              this.FETCH_INFO();
            });
        }
      });
    },
    PREVIEW_PIC(img) {
      if (img) {
        this.previewImg = img;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

.page-container {
  width: 99%;
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
      .form-item-picture-log {
        height: 244px;

        .img-box {
          height: 244px;
        }
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

// .report-sheet-info {
//   grid-column: span 2;
// }
.info-tab-display {
  display: grid;
  grid-gap: 20px;
  grid-template-columns:60% 40%;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
}
.report-sheet {
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
        grid-column: span 2;
      }
    }
    .sheet-body {
      grid-template-columns: 100%;
      overflow: hidden;
      .form-item {
        display: grid;
        grid-template-columns: 230px calc(100% - 230px);
        grid-template-rows: 35px;
        .form-item-label {
          label {
            line-height: 14px;
          }
        }
        .form-item-value {
          grid-column: span 1;
          label {
            margin: 0 auto;
            font-weight: 600;
            line-height: 14px;
          }
        }
      }
    }
  }
}



.pic-toolbar-btn {
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 44px;
  margin: 0 !important;
  padding: 0 !important;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  margin-top: 10px !important;
}
</style>