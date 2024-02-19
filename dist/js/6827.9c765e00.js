"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[6827],{30594:(t,e,a)=>{a.d(e,{Z:()=>d});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-content-loading"},[a("div",{staticClass:"box"},[a("hash-loader",{staticClass:"custom-class",attrs:{color:"#1e1450",loading:!0,size:40,sizeUnit:"px"}})],1)])},n=[];const o={name:"AppLoading",props:{text:String,icon:String,color:String}},s=o;var l=a(1001),r=(0,l.Z)(s,i,n,!1,null,"cf1f01c2",null);const d=r.exports},21130:(t,e,a)=>{a.d(e,{Z:()=>h});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inspection-record-panel",class:[0==t.panelHiding?"inspection-record-panel":"inspection-record-panel-hide"]},[1==t.panelHiding?a("div",{staticClass:"insp-panel-header"},[a("span",[t._v("Inspection Record")])]):t._e(),0==t.panelHiding?a("v-ons-list",[a("v-ons-list-header",[t._v("Inspection Record")]),t._l(t.inspectionList,(function(e){return a("v-ons-list-item",{key:e.id_inspection_record,staticStyle:{cursor:"pointer"},attrs:{tappable:"",id:[e.id_inspection_record]},on:{click:function(a){return t.VIEW_ITEM(e)}}},[a("div",{staticClass:"center"},[a("span",{staticClass:"date"},[t._v(t._s(t.DATE_FORMAT(e.inspection_date)))]),a("span",{staticStyle:{position:"absolute",bottom:"0",right:"14px","font-size":"12px",color:"red"}},[t._v("id_insp: "+t._s(e.id_inspection_record))])]),a("div",{staticClass:"right"},[a("v-ons-toolbar-button",[a("i",{staticClass:"las la-search"})])],1)])}))],2):t._e(),a("div",{staticClass:"fixed-panel"},[a("v-ons-toolbar-button",{staticClass:"item bottom-btn",on:{click:function(e){return t.SHOW_HIDE_PANEL()}}},[0==t.panelHiding?a("i",{staticClass:"las la-caret-square-left"}):t._e(),1==t.panelHiding?a("i",{staticClass:"las la-caret-square-right"}):t._e(),a("span",[t._v("Hide List")])])],1)],1)},n=[],o=a(4367),s=(a(41539),a(21249),a(39477)),l=a(17133),r=a.n(l);const d={name:"inspection-record-panel",data:function(){return{isLoading:!1,inspectionList:[],panelHiding:!1,current_view:{}}},created:function(){1==this.$store.state.status.server&&this.FETCH_INSP_RECORD()},watch:{$route:function(){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),this.current_view.id_inspection_record=""}},methods:{FETCH_INSP_RECORD:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,s.Z)({method:"get",url:"FlowlineInspectionRecord/get-flowline-ir-by-id-line?id_line="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(console.log("==> SUCCESS: Inspection Record"),t.inspectionList=e.data.map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{id_inspection_record:t.id})})),console.log(t.inspectionList))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},DATE_FORMAT:function(t){return r()(t).format("LL")},SHOW_HIDE_PANEL:function(){1==this.panelHiding?this.panelHiding=!1:this.panelHiding=!0,this.$emit("showHidePanel")},VIEW_ITEM:function(t){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),console.log("==> VIEW: Inspection Record Item"),console.log(t),this.$emit("viewItem",t),document.getElementById(t.id_inspection_record).classList.add("active"),this.current_view.id_inspection_record=t.id_inspection_record}}},c=d;var p=a(1001),u=(0,p.Z)(c,i,n,!1,null,"8523439c",null);const h=u.exports},66827:(t,e,a)=>{a.r(e),a.d(e,{default:()=>T});var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"page-container"},[i("div",{staticClass:"tab-wrapper"},[i("vue-tabs-chrome",{attrs:{tabs:e.tabs},model:{value:e.tabCurrent,callback:function(t){e.tabCurrent=t},expression:"tabCurrent"}})],1),"A1"==e.tabCurrent?i("div",{staticClass:"page-section"},[e._m(0),i("div",{staticClass:"table-wrapper"},[i("DxDataGrid",{attrs:{id:"data-table-thk-cal","key-expr":"id_tp","data-source":e.dataList.last_insp_thk,"element-attr":e.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},scopedSlots:e._u([{key:"first-template",fn:function(t){var a=t.data;return[i("div",[a.data.first_insp_date?i("div",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(e.DATE_FORMAT(a.data.first_insp_date))+" "),i("br"),e._v(" "+e._s(a.data.first_t_actual)+" mm ")]):e._e(),a.data.first_insp_date?e._e():i("div",{staticStyle:{"text-align":"right"}},[e._v("   "),i("br"),e._v("  ")])])]}},{key:"previous-template",fn:function(t){var a=t.data;return[a.data.previous_insp_date?i("div",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(e.DATE_FORMAT(a.data.previous_insp_date))+" "),i("br"),e._v(" "+e._s(a.data.previous_t_actual)+" mm ")]):e._e()]}}],null,!1,708501474)},[i("DxFilterRow",{attrs:{visible:!0}}),i("DxHeaderFilter",{attrs:{visible:!1}}),i("DxColumn",{attrs:{"data-field":"cml_no",caption:"CML No",alignment:"center",width:60}}),i("DxColumn",{attrs:{"data-field":"part",caption:"Part",alignment:"center"}}),i("DxColumn",{attrs:{"data-field":"tp_name",caption:"TP Name",alignment:"center",width:60}}),i("DxColumn",{attrs:{"data-field":"tp_desc",caption:"TP Desc",alignment:"center",width:60}}),i("DxColumn",{attrs:{"data-field":"inservice_date",caption:"In-service Date","data-type":"date",format:"dd MMM yyyy",width:90,alignment:"right"}}),i("DxColumn",{attrs:{"data-field":"t_nom",caption:"tnom (mm)",format:"#,##0.00",width:60}}),i("DxColumn",{attrs:{"data-field":"t_req",caption:"treq (mm)",format:"#,##0.00",width:60}}),i("DxColumn",{attrs:{"data-field":"first_insp_date",caption:"First date","data-type":"date",format:"dd MMM yyyy",width:0}}),i("DxColumn",{attrs:{"data-field":"first_t_actual",caption:"First thickness (mm)",format:"#,##0.00",width:0}}),i("DxColumn",{attrs:{caption:"First","cell-template":"first-template",width:90}}),i("DxColumn",{attrs:{"data-field":"previous_insp_date",caption:"Previous date","data-type":"date",format:"dd MMM yyyy",width:0}}),i("DxColumn",{attrs:{"data-field":"previous_t_actual",caption:"Previous thickness (mm)",format:"#,##0.00",width:0}}),i("DxColumn",{attrs:{caption:"Previous","cell-template":"previous-template",width:90}}),i("DxColumn",{attrs:{caption:"Last"}},[i("DxColumn",{attrs:{"data-field":"inspection_date",caption:"Date","data-type":"date",format:"dd MMM yyyy",width:90,alignment:"right"}}),i("DxColumn",{attrs:{"data-field":"t_actual",caption:"Thickness (mm)",format:"#,##0.00",width:80}})],1),i("DxColumn",{attrs:{"data-field":"crs",caption:"ST_CR (mm/yr)",format:"#,##0.00",width:70}}),i("DxColumn",{attrs:{"data-field":"crl",caption:"LT_CR (mm/yr)",format:"#,##0.00",width:70}}),i("DxColumn",{attrs:{"data-field":"scr",caption:"SCR (mm/yr)",format:"#,##0.00",width:70}}),i("DxColumn",{attrs:{"data-field":"rl",caption:"RL (yrs)",format:"#,##0.00",width:70}}),i("DxColumn",{attrs:{"data-field":"integrity_status",caption:"Integrity Status",width:70,alignment:"center"}}),i("DxScrolling",{attrs:{mode:"standard"}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!0,fileName:"Piping Thickness Calculation"}})],1)],1)]):e._e(),"A2"==e.tabCurrent?i("div",{staticClass:"page-section overflow-x",attrs:{id:"x-page"}},[i("div",{staticClass:"table-wrapper"},[i("div",{staticClass:"table-header-toolbar",style:e.px_cml},[e._m(1),i("div",{staticClass:"right"},[i("v-ons-toolbar-button",{staticClass:"toolbarBTN"},[i("label",{attrs:{for:"cml-upload-btn"}},[e._v("Import")])])],1)]),i("input",{ref:"cml_upload_file",staticStyle:{display:"none"},attrs:{type:"file",id:"cml-upload-btn"},on:{change:function(t){return e.UPLOAD_CML()}}}),i("DxDataGrid",{attrs:{id:"data-table-cml","key-expr":"id_cml","data-source":e.dataList.cml,"element-attr":e.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":e.CREATE_CML,"row-updated":e.UPDATE_CML,"row-removed":e.DELETE_CML,"selection-changed":e.VIEW_TP,"row-click":e.CML_FLAGER,"init-new-row":function(e){e.data.cml_no=t.dataList.cml.length+1}},scopedSlots:e._u([{key:"cml-template",fn:function(t){var a=t.data;return[i("div",[i("table",{attrs:{width:"100%"}},[i("tr",[i("td",[e._v("tnom (mm)")]),i("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(e.TO_FIXED(a.data.tnom,2)))])]),i("tr",[i("td",[e._v("tdesign (mm)")]),i("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(e.TO_FIXED(a.data.t_design,2)))])]),i("tr",[i("td",[e._v("tstruc (mm)")]),i("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(e.TO_FIXED(a.data.t_struc,2)))])]),i("tr",[i("td",[e._v("treq (mm)")]),i("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(e.TO_FIXED(a.data.t_req,2)))])])])])]}}],null,!1,2764010232)},[i("DxFilterRow",{attrs:{visible:!0}}),i("DxHeaderFilter",{attrs:{visible:!1}}),i("DxSelection",{attrs:{mode:"single"}}),i("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,"use-icons":!0,mode:"form"}},[i("DxForm",{attrs:{"label-location":"top"}},[i("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}},[i("DxItem",{attrs:{"data-field":"cml_no","col-span":1}}),i("DxItem",{attrs:{"data-field":"part","col-span":1}}),i("DxItem",{attrs:{"data-field":"nps","col-span":1}}),i("DxItem",{attrs:{"data-field":"spec_class","col-span":1}}),i("DxItem",{attrs:{"data-field":"id_sch","col-span":1}}),i("DxItem",{attrs:{"data-field":"inservice_date","col-span":1}})],1)],1)],1),i("DxColumn",{attrs:{"data-field":"cml_no",caption:"CML No",width:60,alignment:"center"}}),i("DxColumn",{attrs:{"data-field":"part",caption:"Part",width:70,alignment:"center"}}),i("DxColumn",{attrs:{"data-field":"nps",caption:"NPS (inch)",width:70,alignment:"center"}},[i("DxLookup",{attrs:{"data-source":e.npsList}}),i("DxRequiredRule")],1),i("DxColumn",{attrs:{"data-field":"spec_class",caption:"Class",width:80,alignment:"center"}},[i("DxLookup",{attrs:{"data-source":e.classList,"display-expr":"spec_class","value-expr":"spec_class"}}),i("DxRequiredRule")],1),i("DxColumn",{attrs:{"data-field":"id_sch",caption:"Sch",width:70,alignment:"center"}},[i("DxLookup",{attrs:{"data-source":e.schList,"display-expr":"sch","value-expr":"id"}}),i("DxRequiredRule")],1),i("DxColumn",{attrs:{"data-field":"material_name",caption:"Material",width:80}}),i("DxColumn",{attrs:{"data-field":"inservice_date",caption:"In-service date","data-type":"date",format:"dd MMM yyyy",width:100}}),i("DxColumn",{attrs:{caption:"","cell-template":"cml-template","css-class":"text-vertical-align-top",width:140}}),i("DxColumn",{attrs:{type:"buttons"}},[i("DxButton",{attrs:{name:"edit",hint:"Edit",icon:"edit"}}),i("DxButton",{attrs:{name:"delete",hint:"Delete",icon:"trash"}})],1),i("DxScrolling",{attrs:{mode:"standard"}}),i("DxSearchPanel",{attrs:{visible:!1}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!0,fileName:"Piping CML Table"}})],1)],1),i("div",{staticClass:"table-wrapper"},[i("div",{staticClass:"table-header-toolbar",style:e.px},[e._m(2),i("div",{staticClass:"right"},[i("div",{staticClass:"dx-table-style"},[i("div",{staticClass:"table-toolbar-set"},[i("div",{staticClass:"download-btn"},[i("v-ons-toolbar-button",{staticClass:"toolbarBTN",on:{click:function(t){return e.FETCH_FILE_TP()}}},[i("label",{attrs:{for:"tp-download-tp-btn"}},[e._v("Download")])])],1),i("v-ons-toolbar-button",{staticClass:"toolbarBTN"},[i("label",{attrs:{for:"tp-upload-btn"}},[e._v("Import")])])],1)])])]),i("input",{ref:"tp_upload_file",staticStyle:{display:"none"},attrs:{type:"file",id:"tp-upload-btn"},on:{change:function(t){return e.UPLOAD_TP()}}}),i("DxDataGrid",{attrs:{id:"data-table-tp","key-expr":"id","data-source":e.dataList.tp,"element-attr":e.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":e.CREATE_TP,"row-updated":e.UPDATE_TP,"row-removed":e.DELETE_TP,"selection-changed":e.VIEW_UTM,"row-click":e.TP_FLAGER,"init-new-row":function(e){e.data.tp_name=t.dataList.tp.length+1}}},[i("DxFilterRow",{attrs:{visible:!0}}),i("DxHeaderFilter",{attrs:{visible:!1}}),i("DxSelection",{attrs:{mode:"single"}}),i("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":e.SELECTION_CML,"use-icons":!0,mode:"row"}}),i("DxColumn",{attrs:{"data-field":"tp_name",caption:"TP No",width:100,alignment:"center"}}),i("DxColumn",{attrs:{"data-field":"tp_desc",caption:"TP Desc",width:200,alignment:"center"}}),i("DxColumn",{attrs:{type:"buttons"}},[i("DxButton",{attrs:{name:"edit",hint:"Edit",icon:"edit"}}),i("DxButton",{attrs:{name:"delete",hint:"Delete",icon:"trash"}})],1),i("DxScrolling",{attrs:{mode:"standard"}}),i("DxSearchPanel",{attrs:{visible:!1}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!0,fileName:"Piping TP Table"}})],1)],1),i("div",{staticClass:"table-wrapper"},[i("div",{staticClass:"table-header-toolbar",style:e.px_thk},[e._m(3),i("div",{staticClass:"right"})]),i("DxDataGrid",{attrs:{id:"data-table-thk","key-expr":"id_data","data-source":e.dataList.thk,"element-attr":e.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"row-inserted":e.CREATE_THK,"row-updated":e.UPDATE_THK,"row-removed":e.DELETE_THK}},[i("DxFilterRow",{attrs:{visible:!0}}),i("DxHeaderFilter",{attrs:{visible:!1}}),i("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":e.SELECTION,"use-icons":!0,mode:"row"}}),i("DxColumn",{attrs:{"data-field":"id_inspection_record",caption:"Inspection date",width:150,"calculate-display-value":e.SET_FORMAT_DATE}},[i("DxLookup",{attrs:{"data-source":e.inspRecordList,"display-expr":"inspection_date","value-expr":"id"}})],1),i("DxColumn",{attrs:{"data-field":"t_actual",caption:"tactual (mm)",width:150}}),i("DxScrolling",{attrs:{mode:"standard"}}),i("DxSearchPanel",{attrs:{visible:!1}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!0,fileName:"Piping Thickness Table"}})],1)],1)]):e._e(),"A3"==e.tabCurrent?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page-container-A3",class:[0==e.pagePanelHiding?"page-container-A3":"page-container-hide"]},[i("InspectionRecordPanel",{on:{showHidePanel:e.SHOW_HIDE_PANEL,viewItem:e.VIEW_ITEM}}),this.id_inspection_record?i("div",{staticClass:"list-page"},[i("v-ons-list",[i("v-ons-list-header",[e._v(" Inspection Details of "),i("b",[e._v(e._s(e.DATE_FORMAT(e.current_view.inspection_date)))])])],1),i("div",{staticClass:"table-wrapper"},[i("DxDataGrid",{attrs:{id:"data-grid-style","key-expr":"id","data-source":e.additionalRemarkList,"element-attr":e.dataGridAttributes,"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1},on:{"row-inserted":e.CREATE_ADDITIONAL_REMARK,"row-updated":e.UPDATE_ADDITIONAL_REMARK,"row-removed":e.DELETE_ADDITIONAL_REMARK,"editing-start":e.EDITING_START_ADDITIONAL_REMARK,"init-new-row":e.INIT_NEW_ROW_ADDITIONAL_REMARK,saved:e.SAVE},scopedSlots:e._u([{key:"attch_img",fn:function(t){var a=t.data;return[i("div",{staticStyle:{position:"relative"}},[i("a",{attrs:{href:e.baseURL+a.value,download:"dwg",target:"_blank"}},[i("img",{attrs:{src:e.baseURL+a.value,width:"300",height:"200"}}),i("br")])])]}},{key:"attch_img-editor",fn:function(t){var a=t.data;return[i("div",[""!=e.imgHolder&&0==e.isInitEdit?i("img",{attrs:{src:e.baseURL+a.value,width:"300",height:"200"}}):e._e(),""!=e.imgHolder&&1==e.isInitEdit?i("img",{attrs:{src:e.imgHolder,width:"300",height:"200"}}):e._e(),""==e.imgHolder?i("img",{attrs:{src:"http://tmt-solution.com/public/image-empty.png",width:"300",height:"200"}}):e._e(),i("DxFileUploader",{attrs:{"select-button-text":"Select photo","label-text":"",accept:"image/*","upload-mode":"useForm"},on:{"value-changed":e.ON_ATTACHMENT_CHANGE}})],1)]}}],null,!1,1434287500)},[i("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,"use-icons":!0,mode:"form"}},[i("DxForm",{attrs:{"label-location":"top"}},[i("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}},[i("DxItem",{attrs:{"data-field":"file_path","col-span":2}}),i("DxItem",{attrs:{"data-field":"remark_desc","col-span":2}})],1)],1)],1),i("DxColumn",{attrs:{"data-field":"file_path",caption:"Attachment","cell-template":"attch_img","edit-cell-template":"attch_img-editor",width:400}}),i("DxColumn",{attrs:{"data-field":"remark_desc",caption:"Description","editor-options":e.fileNameInputOptions}}),i("DxSearchPanel",{attrs:{visible:!1}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!1}})],1)],1)],1):e._e(),""==this.id_inspection_record?i("SelectInspRecord"):e._e()],1)]):e._e(),1==e.isLoading?i("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}}):e._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-header-toolbar",staticStyle:{width:"calc(100% - 41px)"}},[a("div",{staticClass:"left"},[a("label",[t._v("Thickness Calculation Result")])]),a("div",{staticClass:"right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",[t._v("CML")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",[t._v("TP")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("label",[t._v("Thickness")])])}],o=(a(41539),a(89554),a(54747),a(91058),a(78783),a(33948),a(60285),a(41637),a(56977),a(39477)),s=a(17133),l=a.n(s),r=a(30594),d=a(25930),c=a.n(d),p=a(21130),u=a(34556),h=a(78417),_=a(60082),g=a(48626);const m={name:"ViewThickness",components:{DxForm:g.DxForm,DxItem:_.DxItem,DxFileUploader:h.DxFileUploader,SelectInspRecord:u.Z,InspectionRecordPanel:p.Z,contentLoading:r.Z,DxDataGrid:g.DxDataGrid,DxSearchPanel:g.DxSearchPanel,DxPaging:g.DxPaging,DxPager:g.DxPager,DxScrolling:g.DxScrolling,DxColumn:g.DxColumn,DxExport:g.DxExport,DxEditing:g.DxEditing,DxLookup:g.DxLookup,DxButton:g.DxButton,DxHeaderFilter:g.DxHeaderFilter,DxFilterRow:g.DxFilterRow,DxSelection:g.DxSelection,VueTabsChrome:c(),DxRequiredRule:g.DxRequiredRule},created:function(){this.$store.commit("UPDATE_CURRENT_PAGENAME",{subpageName:"Thickness Messurement",subpageInnerName:"Piping"}),1==this.$store.state.status.server&&(this.FETCH_SCH(),this.FETCH_CLASS(),this.FETCH_INSP_RECORD(),this.FETCH_CML(),this.FETCH_LAST_INSP_THK())},data:function(){return{pagePanelHiding:!1,current_view:"",id_inspection_record:"",px_thk:"width: calc(100% - 82px)",px:"width: calc(100% - 82px)",px_cml:"width: calc(100% - 82px)",cml_flag:!1,tp_flag:!1,dataList:{cml:[],tp:[],thk:[],last_insp_thk:[]},additionalRemarkList:[],imgHolder:"",file:[],isInitEdit:0,dataIMGTemp:"",fileNameInputOptions:{placeholder:"Enter description ..."},dataGridAttributes:{class:"data-grid-style"},isLoading:!1,current_view_item:{id_cml:null,id_tp:null,id_utm:null},inspRecordList:{},tabCurrent:"A2",tabs:[{label:"Calculation Result",key:"A1",closable:!1},{label:"Messurement Result",key:"A2",closable:!1}],schList:{},classList:{},npsList:[.125,.25,.375,.5,.75,1,1.25,1.5,2,2.5,3,3.5,4,5,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48],id_pipe_spec:0}},computed:{SELECTION:function(){return!!this.tp_flag},SELECTION_CML:function(){return!!this.cml_flag},baseURL:function(){var t=this.$store.state.mode;return"dev"==t?this.$store.state.modeURL.dev:"prod"==t?this.$store.state.modeURL.prod:console.log("develpment mode set up incorrect.")}},methods:{FETCH_SCH:function(){var t=this;(0,o.Z)({method:"get",url:"/master-data/get-md-pipeschedule-list",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&e.data&&(t.schList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_CLASS:function(){var t=this;(0,o.Z)({method:"get",url:"/master-data/get-md-pipespec-for-dd",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&e.data&&(t.classList=e.data,console.log(t.classList))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_CML:function(){var t=this,e=this.$route.params.id_tag;(0,o.Z)({method:"get",url:"/PipingThk/piping-thk-cml-view-by-info-id?id_piping="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log("==> CML"),console.log(e.data),200==e.status&&e.data&&(t.dataList.cml=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_TP:function(){var t=this;console.log("fetch tp");var e=this.current_view_item.id_cml;(0,o.Z)({method:"get",url:"/PipingThk/piping-thk-tp-by-cml-id?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log("==> TP"),console.log(e.data),200==e.status&&e.data&&(t.dataList.tp=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_UTM:function(){var t=this,e=this.current_view_item.id_tp;(0,o.Z)({method:"get",url:"/PipingThk/piping-thk-data-view-by-tp-id?id_tp="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log("==> UTM"),console.log(e.data),200==e.status&&e.data&&(t.dataList.thk=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_INSP_RECORD:function(){var t=this,e=this.$route.params.id_tag;(0,o.Z)({method:"get",url:"/PipingInspectionRecord/get-piping-ir-by-id-line?id_line="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log("insp record:"),console.log(e.data),200==e.status&&e.data&&(t.inspRecordList=e.data,t.inspRecordList.forEach((function(t){t.inspection_date=l()(t.inspection_date).format("DD MMM yyyy")})))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_LAST_INSP_THK:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,o.Z)({method:"get",url:"/PipingThk/piping-thk-last-data-view-by-info-id?id_piping="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log("==> LAST INSP THK"),console.log(e.data),200==e.status&&e.data&&(t.dataList.last_insp_thk=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},VIEW_TP:function(t){console.log(t),this.current_view_item.id_cml=t.selectedRowKeys[0],this.FETCH_TP(),this.dataList.thk=[],this.tp_flag=!1,this.dataList.thk=[]},VIEW_UTM:function(t){console.log(t),this.current_view_item.id_tp=t.selectedRowKeys[0],this.FETCH_UTM()},CREATE_CML:function(t){var e,a=this;this.isLoading=!0;var i=this.$route.params.id_tag;t.data.id_line=i,t.data.id=0,t.data.inservice_date=null!==(e=l()(t.data.inservice_date).format("L"))&&void 0!==e?e:"",(0,o.Z)({method:"get",url:"/master-data/get-md-pipespec-by-nps?spec_class="+t.data.spec_class+"&nps="+t.data.nps,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&e.data?(t.data.id_pipe_spec=e.data.id,(0,o.Z)({method:"post",url:"/PipingThk/add-piping-thk-cml",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t),201==t.status&&t.data&&a.FETCH_CML()}))["catch"]((function(t){console.log(t),a.isLoading=!1,a.$ons.notification.alert(t.message,{title:"Create failed"}).then((function(t){0==t&&a.FETCH_CML()}))}))["finally"]((function(){a.isLoading=!1}))):(console.log("not found pipe spec"),a.isLoading=!1)}))["catch"]((function(t){a.isLoading=!1,console.log(t),a.$ons.notification.alert("nps and class are not match",{title:"Pipe Spec NOT FOUND!"}).then((function(t){0==t&&a.FETCH_CML()}))}))["finally"]((function(){}))},UPDATE_CML:function(t){var e,a=this;t.data.inservice_date=null!==(e=l()(t.data.inservice_date).format("L"))&&void 0!==e?e:"",t.data.id=t.key,t.data.id_line=t.data.id_piping,console.log(t.data),this.isLoading=!0,(0,o.Z)({method:"get",url:"/master-data/get-md-pipespec-by-nps?spec_class="+t.data.spec_class+"&nps="+t.data.nps,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&e.data?(t.data.id_pipe_spec=e.data.id,(0,o.Z)({method:"put",url:"/PipingThk/edit-piping-thk-cml?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t),204==t.status&&a.FETCH_CML()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){a.isLoading=!1}))):(console.log("not found pipe spec"),a.isLoading=!1)}))["catch"]((function(t){a.isLoading=!1,console.log(t),a.$ons.notification.alert("nps and class are not match",{title:"Pipe Spec NOT FOUND!"}).then((function(t){0==t&&a.FETCH_CML()}))}))["finally"]((function(){}))},DELETE_CML:function(t){var e=this;console.log(t),this.isLoading=!0,(0,o.Z)({method:"delete",url:"/PipingThk/delete-piping-thk-cml?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),204==t.status&&e.FETCH_CML()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Delete failed"}).then((function(t){0==t&&e.FETCH_CML()}))}))["finally"]((function(){e.isLoading=!1}))},CREATE_TP:function(t){var e=this;t.data.id_cml=this.current_view_item.id_cml,t.data.id=0,console.log(t.data),this.isLoading=!0,(0,o.Z)({method:"post",url:"/PipingThk/add-piping-thk-tp",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t),201==t.status&&t.data&&e.FETCH_TP()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Create failed"}).then((function(t){0==t&&e.FETCH_TP()}))}))["finally"]((function(){e.isLoading=!1}))},UPDATE_TP:function(t){var e=this;console.log(t.data),this.isLoading=!0,(0,o.Z)({method:"put",url:"/PipingThk/edit-piping-thk-tp?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t),204==t.status&&e.FETCH_TP()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Edit failed"}).then((function(t){0==t&&e.FETCH_TP()}))}))["finally"]((function(){e.isLoading=!1}))},DELETE_TP:function(t){var e=this;console.log(t),(0,o.Z)({method:"delete",url:"/PipingThk/delete-piping-thk-tp?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),204==t.status&&e.FETCH_TP()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Delete failed"}).then((function(t){0==t&&e.FETCH_TP()}))}))["finally"]((function(){e.isLoading=!1}))},CREATE_THK:function(t){var e=this;t.data.id=0,t.data.id_tp=this.current_view_item.id_tp,console.log(t.data),this.isLoading=!0,(0,o.Z)({method:"post",url:"/PipingThk/add-piping-thk-data",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t),201==t.status&&t.data&&e.FETCH_UTM()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Create failed"}).then((function(t){0==t&&e.FETCH_UTM()}))}))["finally"]((function(){e.isLoading=!1}))},UPDATE_THK:function(t){var e=this;console.log(t.data),this.isLoading=!0,(0,o.Z)({method:"put",url:"/PipingThk/edit-piping-thk-data?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){console.log(t.data),204==t.status&&e.FETCH_UTM()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Edit failed"}).then((function(t){0==t&&e.FETCH_UTM()}))}))["finally"]((function(){e.isLoading=!1}))},DELETE_THK:function(t){var e=this;console.log(t),this.isLoading=!0,(0,o.Z)({method:"delete",url:"/PipingThk/delete-piping-thk-data?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),204==t.status&&e.FETCH_UTM()}))["catch"]((function(t){console.log(t),e.isLoading=!1,e.$ons.notification.alert(t.message,{title:"Delete failed"}).then((function(t){0==t&&e.FETCH_UTM()}))}))["finally"]((function(){e.isLoading=!1}))},SET_FORMAT_DATE:function(t){return null==t.inspection_date?"-":l()(t.inspection_date).format("DD MMM yyyy")},UPLOAD_CML:function(){var t=this;this.isLoading=!0;var e=this.$refs.cml_upload_file.files[0],a=parseInt(this.$route.params.id_tag);"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==e.type&&this.$route.params.id_tag?(0,o.Z)({method:"post",url:"/shell-thickness/upload-shell-thk-cml?id_tag="+a,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{file:e}}).then((function(t){console.log(t),204==t.status&&console.log("success")}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1,t.$ons.notification.alert("Upload Completed!")})):this.$ons.notification.alert("Incorrect filetype. <br/> Only XLS/XLSX file can be uploaded.")},UPLOAD_TP:function(){var t=this;this.isLoading=!0;var e=this.$refs.tp_upload_file.files[0],a=parseInt(this.$route.params.id_tag);"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"==e.type&&this.$route.params.id_tag?(0,o.Z)({method:"post",url:"/shell-thickness/upload-shell-thk-tp?id_tag="+a,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{file:e}}).then((function(e){console.log(e),204==e.status&&t.FETCH_LAST_INSP_THK()}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1,t.$ons.notification.alert("Upload Completed!")})):this.$ons.notification.alert("Incorrect filetype. <br/> Only XLS/XLSX file can be uploaded.")},TP_FLAGER:function(){this.tp_flag=!0},CML_FLAGER:function(){this.cml_flag=!0},FETCH_FILE_TP:function(){console.log("in")},downLoadFileExcel:function(t,e){console.log(t);var a=document.createElement("a");a.setAttribute("href",window.URL.createObjectURL(new Blob([t]))),a.setAttribute("download",e+".xlsx"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)},VIEW_ITEM:function(t){this.current_view={},this.current_view=t,this.id_component=this.$route.params.id_component,this.id_inspection_record=t.id_inspection_record},FETCH_ADDITIONAL_REMARK:function(){var t=this,e=this.id_inspection_record;(0,o.Z)({method:"get",url:"additional-remark/get-additional-remark-by-ir-id-type?id_inspection_record="+e+"&type=shell_thk",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(console.warn("FETCH ADDITIONAL"),console.log(e.data),t.additionalRemarkList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},CREATE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t);var a=new FormData,i=JSON.parse(localStorage.getItem("user"));a.append("id_inspection_record",this.id_inspection_record),a.append("id_tag",this.$route.params.id_tag),a.append("remark_type","shell_thk"),a.append("remark_desc",t.data.remark_desc),a.append("file",this.file),a.append("created_by",i.id_account),a.append("updated_by",i.id_account),(0,o.Z)({method:"post",url:"additional-remark/add-additional-remark",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:a}).then((function(t){201==t.status&&t.data&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},DELETE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t),(0,o.Z)({method:"delete",url:"additional-remark/delete-additional-remark?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id:t.key}}).then((function(t){200==t.status&&t.data&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_ADDITIONAL_REMARK:function(t){var e=this;console.log(t);var a=JSON.parse(localStorage.getItem("user")),i=new FormData;i.append("id",t.key),i.append("id_tag",this.$route.params.id_tag),i.append("id_inspection_record",this.id_inspection_record),i.append("file",this.file),i.append("file_path",this.file_path),i.append("remark_type",t.data.remark_type),i.append("remark_desc",t.data.remark_desc),i.append("created_time",t.data.created_time),i.append("created_by",t.data.created_by),i.append("updated_by",a.id_account),(0,o.Z)({method:"put",url:"additional-remark/edit-additional-remark?id="+t.key,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:i}).then((function(t){204==t.status&&e.FETCH_ADDITIONAL_REMARK()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1,e.is_changed_dwg=0}))},ON_ATTACHMENT_CHANGE:function(t){var e=this;console.log(t),this.isInitEdit=1;var a=new FileReader;a.readAsDataURL(t.value[0]),a.onload=function(){e.imgHolder=a.result},this.file=t.value[0]},EDITING_START_ADDITIONAL_REMARK:function(t){console.warn("EDIT"),console.log(t),this.file=[],this.isInitEdit=0,this.file_path=t.data.file_path,this.dataIMGTemp=t},SAVE:function(t){console.log("save:"),console.log(t),0==t.changes.length&&this.UPDATE_ADDITIONAL_REMARK(this.dataIMGTemp)},INIT_NEW_ROW_ADDITIONAL_REMARK:function(){this.imgHolder="",this.file=[],this.isInitEdit=1},SHOW_HIDE_PANEL:function(){this.pagePanelHiding=!this.pagePanelHiding},DATE_FORMAT:function(t){return null==t?"-":l()(t).format("DD MMM yyyy")},TO_FIXED:function(t,e){return null==t?0:t.toFixed(e)}}},f=m;var D=a(1001),v=(0,D.Z)(f,i,n,!1,null,"33fcf430",null);const T=v.exports}}]);
//# sourceMappingURL=6827.9c765e00.js.map