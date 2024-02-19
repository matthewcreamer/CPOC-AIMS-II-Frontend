"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[9575],{30594:(t,e,a)=>{a.d(e,{Z:()=>l});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-content-loading"},[a("div",{staticClass:"box"},[a("hash-loader",{staticClass:"custom-class",attrs:{color:"#1e1450",loading:!0,size:40,sizeUnit:"px"}})],1)])},n=[];const o={name:"AppLoading",props:{text:String,icon:String,color:String}},s=o;var r=a(1001),d=(0,r.Z)(s,i,n,!1,null,"cf1f01c2",null);const l=d.exports},69575:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticClass:"tab-wrapper"},[a("vue-tabs-chrome",{attrs:{tabs:t.tabs},model:{value:t.tabCurrent,callback:function(e){t.tabCurrent=e},expression:"tabCurrent"}})],1),"A1"==t.tabCurrent?a("div",{staticClass:"page-section"},[t._m(0),a("div",{staticClass:"table-wrapper"},[a("DxDataGrid",{attrs:{id:"view-grid","key-expr":"id_tp","data-source":t.dataList.last_insp_thk,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0}},[a("DxFilterRow",{attrs:{visible:!0}}),a("DxHeaderFilter",{attrs:{visible:!0}}),a("DxColumn",{attrs:{"data-field":"piping_no",caption:"Piping No.","sort-order":"asc"}}),a("DxColumn",{attrs:{"data-field":"cml_name",caption:"CML name","sort-order":"asc"}}),a("DxColumn",{attrs:{"data-field":"tp_name",caption:"TP name","sort-order":"asc"}}),a("DxColumn",{attrs:{"data-field":"inservice_date",caption:"In-service date","data-type":"date",format:"dd MMM yyyy",width:120}}),a("DxColumn",{attrs:{"data-field":"t_nom",caption:"tnom (mm)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"t_req",caption:"treq (mm)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"first_insp_date",caption:"First date","data-type":"date",format:"dd MMM yyyy",width:120}}),a("DxColumn",{attrs:{"data-field":"first_t_actual",caption:"First thickness (mm)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"previous_insp_date",caption:"Previous date","data-type":"date",format:"dd MMM yyyy",width:120}}),a("DxColumn",{attrs:{"data-field":"previous_t_actual",caption:"Previous thickness (mm)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"inspection_date",caption:"Last date","data-type":"date",format:"dd MMM yyyy",width:120}}),a("DxColumn",{attrs:{"data-field":"t_actual",caption:"Last thickness (mm)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"crs",caption:"ST_CR (mm/yr)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"crl",caption:"LT_CR (mm/yr)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"scr",caption:"SCR (mm/yr)",format:"#,##0.00"}}),a("DxColumn",{attrs:{"data-field":"rl",caption:"RL (yrs)",format:"#,##0.00"}}),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1)]):t._e(),"A2"==t.tabCurrent?a("div",{staticClass:"page-section overflow-x",attrs:{id:"x-page"}},[a("div",{staticClass:"table-wrapper"},[t._m(1),a("DxDataGrid",{attrs:{id:"piping-grid","key-expr":"id","data-source":t.dataList.piping,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":t.CREATE_PIPING,"row-updated":t.UPDATE_PIPING,"row-removed":t.DELETE_PIPING,"selection-changed":t.VIEW_CML,"row-click":t.PIPING_FLAGER}},[a("DxFilterRow",{attrs:{visible:!0}}),a("DxHeaderFilter",{attrs:{visible:!0}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,"use-icons":!0,mode:"row"}}),a("DxColumn",{attrs:{"data-field":"piping_no",caption:"Piping no","sort-order":"asc",width:85}}),a("DxColumn",{attrs:{"data-field":"piping_name",caption:"Piping name",width:120}}),a("DxColumn",{attrs:{type:"buttons"}},[a("DxButton",{attrs:{name:"edit",hint:"Edit",icon:"edit"}}),a("DxButton",{attrs:{name:"delete",hint:"Delete",icon:"trash"}})],1),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!1}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1),a("div",{staticClass:"table-wrapper"},[a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 82px)"}},[t._m(2),a("div",{staticClass:"right"},[a("div",{staticClass:"dx-table-style"},[a("div",{staticClass:"table-toolbar-set"},[a("div",{staticClass:"download-btn"},[a("v-ons-toolbar-button",{attrs:{id:"toolbarBTN"},on:{click:function(e){return t.FETCH_FILE_CML()}}},[a("label",[t._v("Download")])])],1),a("v-ons-toolbar-button",[a("label",{attrs:{for:"cml-upload-btn"}},[a("i",{staticClass:"las la-file-import"}),t._v("Import Excel ")])])],1)])])]),a("input",{ref:"cml_upload_file",staticStyle:{display:"none"},attrs:{type:"file",id:"cml-upload-btn"},on:{change:function(e){return t.UPLOAD_CML()}}}),a("DxDataGrid",{attrs:{id:"cml-grid","key-expr":"id_cml","data-source":t.dataList.cml,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":t.CREATE_CML,"row-updated":t.UPDATE_CML,"row-removed":t.DELETE_CML,"selection-changed":t.VIEW_TP,"row-click":t.CML_FLAGER}},[a("DxFilterRow",{attrs:{visible:!0}}),a("DxHeaderFilter",{attrs:{visible:!0}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":t.SELECTION_PIPING,"use-icons":!0,mode:"row"}}),a("DxColumn",{attrs:{"data-field":"cml_no",caption:"CML no","sort-order":"asc",width:80}}),a("DxColumn",{attrs:{"data-field":"cml_name",caption:"CML name",width:80}}),a("DxColumn",{attrs:{"data-field":"part",caption:"Part",width:100}}),a("DxColumn",{attrs:{"data-field":"nps",caption:"NPS",width:70}}),a("DxColumn",{attrs:{"data-field":"t_nom",caption:"tnom (mm)",format:"#,##0.00",width:70}}),a("DxColumn",{attrs:{"data-field":"t_req",caption:"treq (mm)",format:"#,##0.00","allow-editing":!1,width:70}}),a("DxColumn",{attrs:{"data-field":"P",caption:"P (psi)",format:"#,##0.00",width:70}}),a("DxColumn",{attrs:{"data-field":"S",caption:"S (psi)",format:"#,##0.00",width:80}}),a("DxColumn",{attrs:{"data-field":"E",caption:"E",width:60}}),a("DxColumn",{attrs:{"data-field":"material_type",caption:"Material type",width:90}},[a("DxLookup",{attrs:{"data-source":t.matList,"display-expr":"code","value-expr":"code"}})],1),a("DxColumn",{attrs:{"data-field":"inservice_date",caption:"In-service date","data-type":"date",format:"dd MMM yyyy",width:100}}),a("DxColumn",{attrs:{type:"buttons"}},[a("DxButton",{attrs:{name:"edit",hint:"Edit",icon:"edit"}}),a("DxButton",{attrs:{name:"delete",hint:"Delete",icon:"trash"}})],1),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!1}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1),a("div",{staticClass:"table-wrapper"},[a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 82px)"}},[t._m(3),a("div",{staticClass:"right"},[a("div",{staticClass:"dx-table-style"},[a("div",{staticClass:"table-toolbar-set"},[a("div",{staticClass:"download-btn"},[a("v-ons-toolbar-button",{attrs:{id:"toolbarBTN"},on:{click:function(e){return t.FETCH_FILE_PIPING()}}},[a("label",{attrs:{for:"tp-download-tp-btn"}},[t._v("Download")])])],1),a("v-ons-toolbar-button",[a("label",{attrs:{for:"tp-upload-btn"}},[a("i",{staticClass:"las la-file-import"}),t._v("Import Excel ")])])],1)])])]),a("input",{ref:"tp_upload_file",staticStyle:{display:"none"},attrs:{type:"file",id:"tp-upload-btn"},on:{change:function(e){return t.UPLOAD_TP()}}}),a("DxDataGrid",{attrs:{id:"tp-grid","key-expr":"id","data-source":t.dataList.tp,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":t.CREATE_TP,"row-updated":t.UPDATE_TP,"row-removed":t.DELETE_TP,"selection-changed":t.VIEW_UTM,"row-click":t.TP_FLAGER}},[a("DxFilterRow",{attrs:{visible:!0}}),a("DxHeaderFilter",{attrs:{visible:!0}}),a("DxSelection",{attrs:{mode:"single"}}),a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":t.SELECTION_CML,"use-icons":!0,mode:"row"}}),a("DxColumn",{attrs:{"data-field":"tp_name",caption:"TP No.","sort-order":"asc",width:100}}),a("DxColumn",{attrs:{"data-field":"tp_desc",caption:"TP Desc.",width:150}}),a("DxColumn",{attrs:{type:"buttons"}},[a("DxButton",{attrs:{name:"edit",hint:"Edit",icon:"edit"}}),a("DxButton",{attrs:{name:"delete",hint:"Delete",icon:"trash"}})],1),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!1}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1),a("div",{staticClass:"table-wrapper"},[t._m(4),a("DxDataGrid",{attrs:{id:"thk-grid","key-expr":"id","data-source":t.dataList.thk,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":t.CREATE_THK,"row-updated":t.UPDATE_THK,"row-removed":t.DELETE_THK}},[a("DxFilterRow",{attrs:{visible:!0}}),a("DxHeaderFilter",{attrs:{visible:!0}}),a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":t.SELECTION,"use-icons":!0,mode:"row"}}),a("DxColumn",{attrs:{"data-field":"id_inspection_record",caption:"Inspection date","sort-order":"desc",width:150}},[a("DxLookup",{attrs:{"data-source":t.inspRecordList,"display-expr":t.SET_FORMAT_DATE,"value-expr":"id_inspection_record"}})],1),a("DxColumn",{attrs:{"data-field":"t_actual",caption:"tactual (mm)",width:150}}),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!1}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1)]):t._e(),"A3"==t.tabCurrent?a("div",{staticClass:"page-container"},[a("div",{staticClass:"page-container-A3",class:[0==t.pagePanelHiding?"page-container-A3":"page-container-hide"]},[a("InspectionRecordPanel",{on:{showHidePanel:t.SHOW_HIDE_PANEL,viewItem:t.VIEW_ITEM}}),this.id_inspection_record?a("div",{staticClass:"list-page"},[a("v-ons-list",[a("v-ons-list-header",[t._v(" Inspection Details of "),a("b",[t._v(t._s(t.DATE_FORMAT(t.current_view.inspection_date)))])])],1),a("div",{staticClass:"table-wrapper"},[a("DxDataGrid",{attrs:{id:"data-grid-style","key-expr":"id","data-source":t.additionalRemarkList,"element-attr":t.dataGridAttributes,"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1},on:{"row-inserted":t.CREATE_ADDITIONAL_REMARK,"row-updated":t.UPDATE_ADDITIONAL_REMARK,"row-removed":t.DELETE_ADDITIONAL_REMARK,"editing-start":t.EDITING_START_ADDITIONAL_REMARK,"init-new-row":t.INIT_NEW_ROW_ADDITIONAL_REMARK,saved:t.SAVE},scopedSlots:t._u([{key:"attch_img",fn:function(e){var i=e.data;return[a("div",{staticStyle:{position:"relative"}},[a("a",{attrs:{href:t.baseURL+i.value,download:"dwg",target:"_blank"}},[a("img",{attrs:{src:t.baseURL+i.value,width:"300",height:"200"}}),a("br")])])]}},{key:"attch_img-editor",fn:function(e){var i=e.data;return[a("div",[""!=t.imgHolder&&0==t.isInitEdit?a("img",{attrs:{src:t.baseURL+i.value,width:"300",height:"200"}}):t._e(),""!=t.imgHolder&&1==t.isInitEdit?a("img",{attrs:{src:t.imgHolder,width:"300",height:"200"}}):t._e(),""==t.imgHolder?a("img",{attrs:{src:"http://tmt-solution.com/public/image-empty.png",width:"300",height:"200"}}):t._e(),a("DxFileUploader",{attrs:{"select-button-text":"Select photo","label-text":"",accept:"image/*","upload-mode":"useForm"},on:{"value-changed":t.ON_ATTACHMENT_CHANGE}})],1)]}}],null,!1,1434287500)},[a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,"use-icons":!0,mode:"form"}},[a("DxForm",{attrs:{"label-location":"top"}},[a("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}},[a("DxItem",{attrs:{"data-field":"file_path","col-span":2}}),a("DxItem",{attrs:{"data-field":"remark_desc","col-span":2}})],1)],1)],1),a("DxColumn",{attrs:{"data-field":"file_path",caption:"Attachment","cell-template":"attch_img","edit-cell-template":"attch_img-editor",width:400}}),a("DxColumn",{attrs:{"data-field":"remark_desc",caption:"Description","editor-options":t.fileNameInputOptions}}),a("DxSearchPanel",{attrs:{visible:!1}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!1}})],1)],1)],1):t._e(),""==this.id_inspection_record?a("SelectInspRecord"):t._e()],1)]):t._e(),1==t.isLoading?a("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 41px)"}},[a("div",{staticClass:"left"},[a("label",[t._v("Thickness Calculation Result")])]),a("div",{staticClass:"right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 82px)"}},[a("div",{staticClass:"left"},[a("label",[t._v("Piping")])]),a("div",{staticClass:"right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",[t._v("CML")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",[t._v("TP")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 82px)"}},[a("div",{staticClass:"left"},[a("label",[t._v("Thickness")])]),a("div",{staticClass:"right"})])}],o=a(4367),s=(a(41539),a(21249),a(91058),a(78783),a(33948),a(60285),a(41637),a(39477)),r=a(17133),d=a.n(r),l=a(30594),c=a(25930),p=a.n(c),u=a(3488),h=a(34556),_=a(78417),g=a(60082),m=a(48626);const f={name:"ViewThicknessShell",components:{DxForm:m.DxForm,DxItem:g.DxItem,DxFileUploader:_.DxFileUploader,SelectInspRecord:h.Z,InspectionRecordPanel:u.Z,contentLoading:l.Z,DxDataGrid:m.DxDataGrid,DxSearchPanel:m.DxSearchPanel,DxPaging:m.DxPaging,DxPager:m.DxPager,DxScrolling:m.DxScrolling,DxColumn:m.DxColumn,DxExport:m.DxExport,DxEditing:m.DxEditing,DxLookup:m.DxLookup,DxButton:m.DxButton,DxHeaderFilter:m.DxHeaderFilter,DxFilterRow:m.DxFilterRow,DxSelection:m.DxSelection,VueTabsChrome:p()},created:function(){this.$store.commit("UPDATE_CURRENT_INAPP",{name:"Tank Management",icon:"/img/icon_menu/tank/tank.png"}),this.$store.commit("UPDATE_CURRENT_PAGENAME",{subpageName:"Thickness Messurement",subpageInnerName:"Piping"}),1==this.$store.state.status.server&&(this.FETCH_INSP_RECORD(),this.FETCH_PIPING(),this.FETCH_LAST_INSP_THK())},data:function(){return{pagePanelHiding:!1,current_view:"",id_inspection_record:"",additionalRemarkList:[],imgHolder:"",file:[],isInitEdit:0,dataIMGTemp:"",fileNameInputOptions:{placeholder:"Enter description ..."},piping_flag:!1,cml_flag:!1,tp_flag:!1,dataList:{piping:[],cml:[],tp:[],thk:[],last_insp_thk:[]},dataGridAttributes:{class:"data-grid-style"},isLoading:!1,current_view_item:{id_piping:null,id_cml:null,id_tp:null,id_utm:null},inspRecordList:{},matList:[{code:"CS"},{code:"SS"},{code:"Duplex"},{code:"Unknown"}],tabCurrent:"A2",tabs:[{label:"Calculation Result",key:"A1",closable:!1},{label:"Messurement Result",key:"A2",closable:!1},{label:"Additional Attachment",key:"A3",closable:!1}]}},computed:{SELECTION:function(){return!!this.tp_flag},SELECTION_CML:function(){return!!this.cml_flag},SELECTION_PIPING:function(){return!!this.piping_flag},baseURL:function(){var t=this.$store.state.mode;return"dev"==t?this.$store.state.modeURL.dev:"prod"==t?this.$store.state.modeURL.prod:console.log("develpment mode set up incorrect.")}},methods:{FETCH_PIPING:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,s.Z)({method:"get",url:"TankPipingThickness/tank-piping-info-by-tag-id?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.dataList.piping=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_CML:function(){var t=this;this.isLoading=!0;var e=this.current_view_item.id_piping;(0,s.Z)({method:"get",url:"TankPipingThickness/tank-piping-thk-cml-view-by-info-id?id_piping="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.dataList.cml=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_TP:function(){var t=this,e=this.current_view_item.id_cml;(0,s.Z)({method:"get",url:"TankPipingThickness/tank-piping-thk-tp-by-cml-id?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.dataList.tp=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_UTM:function(){var t=this,e=this.current_view_item.id_tp;(0,s.Z)({method:"get",url:"TankPipingThickness/tank-piping-thk-data-by-tp-id?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.dataList.thk=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_INSP_RECORD:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,s.Z)({method:"get",url:"TankInspectionRecord/get-tank-ir-by-id-tag?id_tag="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.inspRecordList=e.data,t.inspRecordList=t.inspRecordList.map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{id_inspection_record:t.id,id:null})})))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_LAST_INSP_THK:function(){var t=this,e=this.current_view_item.id_piping;(0,s.Z)({method:"get",url:"TankPipingThickness/tank-piping-thk-last-data-view-by-info-id?id_piping="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(t.dataList.last_insp_thk=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},VIEW_CML:function(t){this.current_view_item.id_piping=t.selectedRowKeys[0],this.FETCH_CML(),this.dataList.tp=[],this.dataList.thk=[],this.tp_flag=!1,this.cml_flag=!1},VIEW_TP:function(t){this.current_view_item.id_cml=t.selectedRowKeys[0],this.FETCH_TP(),this.dataList.thk=[],this.tp_flag=!1},VIEW_UTM:function(t){this.current_view_item.id_tp=t.selectedRowKeys[0],this.FETCH_UTM()},CREATE_PIPING:function(t){var e=this;this.isLoading=!0;var a=this.$route.params.id_tag;t.data.id_tag=a,t.data.id=0,(0,s.Z)({method:"post",url:"TankPipingThickness/add-tank-piping-info",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){201==t.status&&t.data&&e.FETCH_PIPING()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_PIPING:function(t){var e=this;(0,s.Z)({method:"put",url:"TankPipingThickness/edit-tank-piping-info?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&(console.log(t.data),e.FETCH_PIPING())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},DELETE_PIPING:function(t){var e=this;this.isLoading=!0,(0,s.Z)({method:"delete",url:"TankPipingThickness/delete-tank-piping-info?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(t){204==t.status&&(e.FETCH_PIPING(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},CREATE_CML:function(t){var e=this;this.isLoading=!0;var a=this.$route.params.id_tag;t.data.id_tag=a,t.data.id=0,t.data.id_piping=this.current_view_item.id_piping,t.data.actual_od=this.SET_OCTUAL_OD(t.data.nps),t.data.inservice_date=d()(t.data.inservice_date).format("L"),(0,s.Z)({method:"post",url:"TankPipingThickness/add-tank-piping-thk-cml",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){201==t.status&&t.data&&e.FETCH_CML()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_CML:function(t){var e=this;t.data.actual_od=this.SET_OCTUAL_OD(t.data.nps),t.data.inservice_date=d()(t.data.inservice_date).format("L"),t.data.id=t.data.id_cml,this.isLoading=!0,(0,s.Z)({method:"put",url:"TankPipingThickness/edit-tank-piping-thk-cml?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&e.FETCH_CML()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},DELETE_CML:function(t){var e=this;this.isLoading=!0,(0,s.Z)({method:"delete",url:"TankPipingThickness/delete-tank-piping-thk-cml?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(t){204==t.status&&(e.FETCH_CML(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},CREATE_TP:function(t){var e=this;t.data.id_cml=this.current_view_item.id_cml,t.data.id=0,this.isLoading=!0,(0,s.Z)({method:"post",url:"TankPipingThickness/add-tank-piping-thk-tp",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){201==t.status&&t.data&&e.FETCH_TP()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_TP:function(t){var e=this;t.data.id=t.key,this.isLoading=!0,(0,s.Z)({method:"put",url:"TankPipingThickness/edit-tank-piping-thk-tp?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&e.FETCH_TP()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},DELETE_TP:function(t){var e=this;(0,s.Z)({method:"delete",url:"TankPipingThickness/delete-tank-piping-thk-tp?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(t){204==t.status&&(e.FETCH_TP(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},CREATE_THK:function(t){var e=this;t.data.id=0,t.data.id_tp=this.current_view_item.id_tp,this.isLoading=!0,(0,s.Z)({method:"post",url:"TankPipingThickness/add-tank-piping-thk-data",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){201==t.status&&t.data&&(e.FETCH_UTM(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_THK:function(t){var e=this;this.isLoading=!0,(0,s.Z)({method:"put",url:"TankPipingThickness/edit-tank-piping-thk-data?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&(e.FETCH_UTM(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},DELETE_THK:function(t){var e=this;console.log(t),this.isLoading=!0,(0,s.Z)({method:"delete",url:"TankPipingThickness/delete-tank-piping-thk-data?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(t){204==t.status&&(e.FETCH_UTM(),e.FETCH_LAST_INSP_THK())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},SET_FORMAT_DATE:function(t){return d()(t.inspection_date).format("DD MMM yyyy")},SET_OCTUAL_OD:function(t){return.125==t?10.3:.25==t?13.7:.357==t?17.1:.5==t?21.3:.75==t?26.7:1==t?33.4:1.25==t?42.2:1.5==t?48.3:2==t?60.3:2.5==t?73:3==t?88.9:3.5==t?101.6:4==t?114.3:5==t?141.3:6==t?168.3:8==t?219.1:10==t?273:12==t?323.8:14==t?355.6:16==t?406.4:18==t?457:20==t?508:22==t?559:24==t?610:30==t?762:34==t?864:36==t?914:38==t?965:40==t?1016:42==t?1097:void 0},UPLOAD_CML:function(){var t=this;this.isLoading=!0;var e=this.$refs.cml_upload_file.files[0],a=parseInt(this.$route.params.id_tag);"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==e.type&&this.$route.params.id_tag?(0,s.Z)({method:"post",url:"/piping-thickness/upload-piping-thk-cml?id_tag="+a,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{file:e}}).then((function(e){console.log(e),204==e.status&&t.FETCH_LAST_INSP_THK()}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1,t.$ons.notification.alert("Upload Completed!")})):this.$ons.notification.alert("Incorrect filetype. <br/> Only XLS/XLSX file can be uploaded.")},UPLOAD_TP:function(){var t=this;this.isLoading=!0;var e=this.$refs.tp_upload_file.files[0],a=parseInt(this.$route.params.id_tag);"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==e.type&&this.$route.params.id_tag?(0,s.Z)({method:"post",url:"/piping-thickness/upload-piping-thk-tp?id_tag="+a,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{file:e}}).then((function(e){console.log(e),204==e.status&&t.FETCH_LAST_INSP_THK()}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1,t.$ons.notification.alert("Upload Completed!")})):this.$ons.notification.alert("Incorrect filetype. <br/> Only XLS/XLSX file can be uploaded.")},TP_FLAGER:function(){this.tp_flag=!0},CML_FLAGER:function(){this.cml_flag=!0},PIPING_FLAGER:function(){this.piping_flag=!0},FETCH_FILE_PIPING:function(){var t=this;console.log("in");var e=parseInt(this.$route.params.id_tag);(0,s.Z)({method:"get",url:"piping-thickness/download-piping-thk?id_tag="+e,responseType:"blob",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){var a=e.data;t.downLoadFileExcel(a,"PIPING_TP_TEMPLATE")}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_FILE_CML:function(){var t=this,e=parseInt(this.$route.params.id_tag);(0,s.Z)({method:"get",url:"piping-thickness/download-piping-cml?id_tag="+e,responseType:"blob",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){var a=e.data;t.downLoadFileExcel(a,"PIPING_CML_TEMPLATE")}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},downLoadFileExcel:function(t,e){console.log(t);var a=document.createElement("a");a.setAttribute("href",window.URL.createObjectURL(new Blob([t]))),a.setAttribute("download",e+".xlsx"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)},VIEW_ITEM:function(t){this.current_view={},this.current_view=t,this.id_component=this.$route.params.id_component,this.id_inspection_record=t.id_inspection_record,this.FETCH_ADDITIONAL_REMARK()},FETCH_ADDITIONAL_REMARK:function(){var t=this,e=this.id_inspection_record;(0,s.Z)({method:"get",url:"additional-remark/get-additional-remark-by-ir-id-type?id_inspection_record="+e+"&type=piping_thk",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(console.warn("FETCH ADDITIONAL"),console.log(e.data),t.additionalRemarkList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},CREATE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t);var a=new FormData,i=JSON.parse(localStorage.getItem("user"));a.append("id_inspection_record",this.id_inspection_record),a.append("id_tag",this.$route.params.id_tag),a.append("remark_type","piping_thk"),a.append("remark_desc",t.data.remark_desc),a.append("file",this.file),a.append("created_by",i.id_account),a.append("updated_by",i.id_account),(0,s.Z)({method:"post",url:"additional-remark/add-additional-remark",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:a}).then((function(t){201==t.status&&t.data&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},DELETE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t),(0,s.Z)({method:"delete",url:"additional-remark/delete-additional-remark?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id:t.key}}).then((function(t){200==t.status&&t.data&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t);var a=JSON.parse(localStorage.getItem("user")),i=new FormData;i.append("id",t.key),i.append("id_tag",this.$route.params.id_tag),i.append("id_inspection_record",this.id_inspection_record),i.append("file",this.file),i.append("file_path",this.file_path),i.append("remark_type",t.data.remark_type),i.append("remark_desc",t.data.remark_desc),i.append("created_time",t.data.created_time),i.append("created_by",t.data.created_by),i.append("updated_by",a.id_account),(0,s.Z)({method:"put",url:"additional-remark/edit-additional-remark?id="+t.key,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:i}).then((function(t){204==t.status&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1,e.is_changed_dwg=0}))},ON_ATTACHMENT_CHANGE:function(t){var e=this;console.log(t),this.isInitEdit=1;var a=new FileReader;a.readAsDataURL(t.value[0]),a.onload=function(){e.imgHolder=a.result},this.file=t.value[0]},EDITING_START_ADDITIONAL_REMARK:function(t){console.warn("EDIT"),console.log(t),this.file=[],this.isInitEdit=0,this.file_path=t.data.file_path,this.dataIMGTemp=t},SAVE:function(t){console.log("save:"),console.log(t),0==t.changes.length&&this.UPDATE_ADDITIONAL_REMARK(this.dataIMGTemp)},INIT_NEW_ROW_ADDITIONAL_REMARK:function(){this.imgHolder="",this.file=[],this.isInitEdit=1},SHOW_HIDE_PANEL:function(){this.pagePanelHiding=!this.pagePanelHiding},DATE_FORMAT:function(t){return d()(t).format("LL")}}},T=f;var E=a(1001),D=(0,E.Z)(T,i,n,!1,null,"9e265a7a",null);const v=D.exports},3488:(t,e,a)=>{a.d(e,{Z:()=>h});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inspection-record-panel",class:[0==t.panelHiding?"inspection-record-panel":"inspection-record-panel-hide"]},[1==t.panelHiding?a("div",{staticClass:"insp-panel-header"},[a("span",[t._v("Inspection Record")])]):t._e(),0==t.panelHiding?a("v-ons-list",[a("v-ons-list-header",[t._v("Inspection Record")]),t._l(t.inspectionList,(function(e){return a("v-ons-list-item",{key:e.id_inspection_record,staticStyle:{cursor:"pointer"},attrs:{tappable:"",id:[e.id_inspection_record]},on:{click:function(a){return t.VIEW_ITEM(e)}}},[a("div",{staticClass:"center"},[a("span",{staticClass:"date",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.DATE_FORMAT(e.inspection_date)))]),a("span",{staticStyle:{position:"absolute",bottom:"0",right:"14px","font-size":"12px",color:"red"}},[t._v("id_insp: "+t._s(e.id_inspection_record))])]),a("div",{staticClass:"right"},[a("v-ons-toolbar-button",[a("i",{staticClass:"las la-search"})])],1)])}))],2):t._e(),a("div",{staticClass:"fixed-panel"},[a("v-ons-toolbar-button",{staticClass:"item bottom-btn",on:{click:function(e){return t.SHOW_HIDE_PANEL()}}},[0==t.panelHiding?a("i",{staticClass:"las la-caret-square-left"}):t._e(),1==t.panelHiding?a("i",{staticClass:"las la-caret-square-right"}):t._e(),a("span",[t._v("Hide List")])])],1)],1)},n=[],o=a(4367),s=(a(41539),a(21249),a(39477)),r=a(17133),d=a.n(r);const l={name:"inspection-record-panel",data:function(){return{isLoading:!1,inspectionList:[],panelHiding:!1,current_view:{}}},created:function(){1==this.$store.state.status.server&&this.FETCH_INSP_RECORD()},watch:{$route:function(){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),this.current_view.id_inspection_record=""}},methods:{FETCH_INSP_RECORD:function(){var t=this;this.inspectionList=[],this.isLoading=!0;var e=this.$route.params.id_tag;(0,s.Z)({method:"get",url:"/TankInspectionRecord/get-tank-ir-by-id-tag?id_tag="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(console.log("==> SUCCESS: Inspection Record"),t.inspectionList=e.data.map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{id_inspection_record:t.id})})),console.log(t.inspectionList))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},DATE_FORMAT:function(t){return d()(t).format("LL")},SHOW_HIDE_PANEL:function(){1==this.panelHiding?this.panelHiding=!1:this.panelHiding=!0,this.$emit("showHidePanel")},VIEW_ITEM:function(t){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),console.log("==> VIEW: Inspection Record Item"),console.log(t),this.$emit("viewItem",t),document.getElementById(t.id_inspection_record).classList.add("active"),this.current_view.id_inspection_record=t.id_inspection_record}}},c=l;var p=a(1001),u=(0,p.Z)(c,i,n,!1,null,"563a63c1",null);const h=u.exports}}]);
//# sourceMappingURL=9575.3a37575a.js.map