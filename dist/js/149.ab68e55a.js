"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[149],{34556:(t,e,i)=>{i.d(e,{Z:()=>d});var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"center-box"},[i("div",{staticClass:"page-content-message-wrapper"},[i("i",{staticClass:"las la-search"}),i("span",[t._v(" Select inspection record "),i("br"),t._v(" to view information")])])])])}];const o={name:"Select-Inspection-Record"},r=o;var s=i(1001),c=(0,s.Z)(r,n,a,!1,null,"9e6fef0e",null);const d=c.exports},21130:(t,e,i)=>{i.d(e,{Z:()=>_});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inspection-record-panel",class:[0==t.panelHiding?"inspection-record-panel":"inspection-record-panel-hide"]},[1==t.panelHiding?i("div",{staticClass:"insp-panel-header"},[i("span",[t._v("Inspection Record")])]):t._e(),0==t.panelHiding?i("v-ons-list",[i("v-ons-list-header",[t._v("Inspection Record")]),t._l(t.inspectionList,(function(e){return i("v-ons-list-item",{key:e.id_inspection_record,staticStyle:{cursor:"pointer"},attrs:{tappable:"",id:[e.id_inspection_record]},on:{click:function(i){return t.VIEW_ITEM(e)}}},[i("div",{staticClass:"center"},[i("span",{staticClass:"date"},[t._v(t._s(t.DATE_FORMAT(e.inspection_date)))]),i("span",{staticStyle:{position:"absolute",bottom:"0",right:"14px","font-size":"12px",color:"red"}},[t._v("id_insp: "+t._s(e.id_inspection_record))])]),i("div",{staticClass:"right"},[i("v-ons-toolbar-button",[i("i",{staticClass:"las la-search"})])],1)])}))],2):t._e(),i("div",{staticClass:"fixed-panel"},[i("v-ons-toolbar-button",{staticClass:"item bottom-btn",on:{click:function(e){return t.SHOW_HIDE_PANEL()}}},[0==t.panelHiding?i("i",{staticClass:"las la-caret-square-left"}):t._e(),1==t.panelHiding?i("i",{staticClass:"las la-caret-square-right"}):t._e(),i("span",[t._v("Hide List")])])],1)],1)},a=[],o=i(4367),r=(i(41539),i(21249),i(39477)),s=i(17133),c=i.n(s);const d={name:"inspection-record-panel",data:function(){return{isLoading:!1,inspectionList:[],panelHiding:!1,current_view:{}}},created:function(){1==this.$store.state.status.server&&this.FETCH_INSP_RECORD()},watch:{$route:function(){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),this.current_view.id_inspection_record=""}},methods:{FETCH_INSP_RECORD:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,r.Z)({method:"get",url:"FlowlineInspectionRecord/get-flowline-ir-by-id-line?id_line="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){200==e.status&&e.data&&(console.log("==> SUCCESS: Inspection Record"),t.inspectionList=e.data.map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{id_inspection_record:t.id})})),console.log(t.inspectionList))}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},DATE_FORMAT:function(t){return c()(t).format("LL")},SHOW_HIDE_PANEL:function(){1==this.panelHiding?this.panelHiding=!1:this.panelHiding=!0,this.$emit("showHidePanel")},VIEW_ITEM:function(t){this.current_view.id_inspection_record&&document.getElementById(this.current_view.id_inspection_record).classList.remove("active"),console.log("==> VIEW: Inspection Record Item"),console.log(t),this.$emit("viewItem",t),document.getElementById(t.id_inspection_record).classList.add("active"),this.current_view.id_inspection_record=t.id_inspection_record}}},l=d;var p=i(1001),u=(0,p.Z)(l,n,a,!1,null,"8523439c",null);const _=u.exports},80149:(t,e,i)=>{i.r(e),i.d(e,{default:()=>T});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container",class:[0==t.pagePanelHiding?"page-container":"page-container-hide"]},[i("InspectionRecordPanel",{on:{showHidePanel:t.SHOW_HIDE_PANEL,viewItem:t.VIEW_ITEM}}),this.id_inspection_record?i("div",{staticClass:"list-page"},[i("v-ons-list",[i("v-ons-list-header",[t._v(" Inspection Details of "),i("b",[t._v(t._s(t.DATE_FORMAT(t.current_view.inspection_date)))])])],1),i("DxDataGrid",{attrs:{id:"data-grid-style","key-expr":"id","data-source":t.attachments,"element-attr":t.dataGridAttributes,"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1},on:{exporting:t.EXPORT_DATA,"row-inserted":t.CREATE_DWG,"row-updated":t.UPDATE_DWG,"row-removed":t.DELETE_DWG,"editing-start":t.EDITING_START_DWG,"init-new-row":t.INIT_NEW_ROW_DWG,saved:t.SAVE},scopedSlots:t._u([{key:"dwg-img",fn:function(e){var n=e.data;return[i("div",{staticStyle:{position:"relative"}},[i("a",{attrs:{href:t.baseURL+n.value,download:"dwg",target:"_blank"}},[i("img",{attrs:{src:t.baseURL+n.value,width:"300",height:"200"}}),i("br")])])]}},{key:"dwg-img-editor",fn:function(e){var n=e.data;return[i("div",[""!=t.imgHolder&&0==t.isInitEdit?i("img",{attrs:{src:t.baseURL+n.value,width:"300",height:"200"}}):t._e(),""!=t.imgHolder&&1==t.isInitEdit?i("img",{attrs:{src:t.imgHolder,width:"300",height:"200"}}):t._e(),""==t.imgHolder?i("img",{attrs:{src:"http://tmt-solution.com/public/image-empty.png",width:"300",height:"200"}}):t._e(),i("DxFileUploader",{attrs:{"select-button-text":"Select photo","label-text":"",accept:"image/*","upload-mode":"useForm"},on:{"value-changed":t.ON_DWG_CHANGE}})],1)]}}],null,!1,3984226209)},[i("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":t.IS_VISIBLE_ADD(),"use-icons":!0,mode:"form"}},[i("DxForm",{attrs:{"label-location":"top"}},[i("DxItem",{attrs:{"col-count":2,"col-span":2,"item-type":"group"}},[i("DxItem",{attrs:{"data-field":"file_path","col-span":2}}),i("DxItem",{attrs:{"data-field":"note","col-span":2}})],1)],1)],1),i("DxColumn",{attrs:{"data-field":"file_path",caption:"Attachment","cell-template":"dwg-img","edit-cell-template":"dwg-img-editor",width:320}}),i("DxColumn",{attrs:{"data-field":"note",caption:"Description","editor-options":t.fileNameInputOptions}}),i("DxScrolling",{attrs:{mode:"standard"}}),i("DxSearchPanel",{attrs:{visible:!0}}),i("DxPaging",{attrs:{"page-size":10,"page-index":0}}),i("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),i("DxExport",{attrs:{enabled:!0}})],1)],1):t._e(),""==this.id_inspection_record?i("SelectInspRecord"):t._e()],1)},a=[],o=(i(41539),i(39477)),r=i(17133),s=i.n(r),c=i(21130),d=i(34556),l=i(71642),p=i(53706),u=i.n(p),_=i(66262),h=i(48626),g=i(78417),m=i(60082),f="fu",v="img";const E={name:"ViewProjectList",components:{DxDataGrid:h.DxDataGrid,DxSearchPanel:h.DxSearchPanel,DxPaging:h.DxPaging,DxPager:h.DxPager,DxScrolling:h.DxScrolling,DxColumn:h.DxColumn,DxExport:h.DxExport,DxEditing:h.DxEditing,DxFileUploader:g.DxFileUploader,DxForm:h.DxForm,DxItem:m.DxItem,InspectionRecordPanel:c.Z,SelectInspRecord:d.Z},created:function(){this.$store.commit("UPDATE_CURRENT_PAGENAME",{subpageName:"Other Attachment"})},data:function(){return{drawingList:null,attachments:"",inspRecordList:{},campaignList:{},isLoading:!1,fileUploaderRef:f,imgRef:v,imgHolder:"",file:[],isInitEdit:0,id_component:0,id_inspection_record:0,dataGridAttributes:{class:"data-grid-style"},pagePanelHiding:!1,current_view:{},dataIMGTemp:"",fileNameInputOptions:{placeholder:"Enter text here ..."}}},computed:{baseURL:function(){var t=this.$store.state.mode;return"dev"==t?this.$store.state.modeURL.dev:"prod"==t?this.$store.state.modeURL.prod:console.log("develpment mode set up incorrect.")}},methods:{EXPORT_DATA:function(t){var e=new l.Workbook,i=e.addWorksheet("Projects");(0,_.d)({worksheet:i,component:t.component}).then((function(){e.xlsx.writeBuffer().then((function(t){u()(new Blob([t],{type:"application/octet-stream"}),"Projects.xlsx")}))})),t.cancel=!0},FETCH_ATTACHMENTS:function(){var t=this;(0,o.Z)({method:"get",url:"other-attachment/get-other-attachment-by-ir-id?id_inspection_record="+this.id_inspection_record,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{}}).then((function(e){console.log("attachments :"),console.log(e.data),200==e.status&&e.data&&(t.attachments=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},VIEW_ITEM:function(t){console.clear(),this.current_view={},this.id_inspection_record=t.id_inspection_record,this.current_view=t,this.FETCH_ATTACHMENTS()},CREATE_DWG:function(t){var e=this;console.log(t);var i=new FormData,n=JSON.parse(localStorage.getItem("user"));i.append("id_inspection_record",this.id_inspection_record),i.append("note",t.data.note),i.append("file",this.file),i.append("created_by",n.id_account),i.append("updated_by",n.id_account),(0,o.Z)({method:"post",url:"other-attachment/add-other-attachment",headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:i}).then((function(t){console.log("FETCH ATTACHMENTS :"),201==t.status&&t.data&&(console.log(t.data),e.FETCH_ATTACHMENTS())}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},DELETE_DWG:function(t){var e=this;console.log(t),(0,o.Z)({method:"delete",url:"other-attachment/delete-other-attachment?id="+t.key,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id:t.key}}).then((function(t){200==t.status&&t.data&&e.FETCH_ATTACHMENTS()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},UPDATE_DWG:function(t){var e=this;console.log(t);var i=JSON.parse(localStorage.getItem("user")),n=new FormData;n.append("id",t.key),n.append("id_inspection_record",this.id_inspection_record),n.append("file",this.file),n.append("file_path",this.file_path),n.append("note",t.data.note),n.append("created_time",t.data.created_time),n.append("created_by",t.data.created_by),n.append("updated_by",i.id_account),(0,o.Z)({method:"put",url:"other-attachment/edit-other-attachment?id="+t.key,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:n}).then((function(t){204==t.status&&e.FETCH_ATTACHMENTS()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){e.isLoading=!1}))},ON_DWG_CHANGE:function(t){var e=this;console.log(t),this.isInitEdit=1;var i=new FileReader;i.readAsDataURL(t.value[0]),i.onload=function(){e.imgHolder=i.result},this.file=t.value[0]},EDITING_START_DWG:function(t){console.warn("EDIT"),console.log(t),this.file=[],this.isInitEdit=0,this.file_path=t.data.file_path,this.dataIMGTemp=t},SAVE:function(t){console.log("save:"),console.log(t),0==t.changes.length&&this.UPDATE_DWG(this.dataIMGTemp)},INIT_NEW_ROW_DWG:function(){this.imgHolder="",this.file=[],this.isInitEdit=1},IS_VISIBLE_ADD:function(){return 0!=this.id_inspection_record},SHOW_HIDE_PANEL:function(){this.pagePanelHiding=!this.pagePanelHiding},DATE_FORMAT:function(t){return s()(t).format("LL")}}},D=E;var I=i(1001),w=(0,I.Z)(D,n,a,!1,null,"13770dd9",null);const T=w.exports},4367:(t,e,i)=>{i.d(e,{Z:()=>o});i(47941),i(82526),i(57327),i(41539),i(38880),i(89554),i(54747),i(49337),i(33321),i(69070);var n=i(23796);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}}}]);
//# sourceMappingURL=149.ab68e55a.js.map