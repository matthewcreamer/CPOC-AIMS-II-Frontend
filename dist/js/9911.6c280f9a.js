"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[9911],{62721:(t,e,a)=>{a.d(e,{Z:()=>_});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-toolbar"}},[a("div",{staticClass:"left-col"},[t.isBack?a("v-ons-toolbar-button",{on:{click:function(e){return t.$router.go(-1)}}},[a("i",{staticClass:"las la-angle-left"}),a("span",[t._v("Back")])]):t._e(),t.isBackPath?a("v-ons-toolbar-button",{on:{click:function(e){return t.GO_BACK_TO()}}},[a("i",{staticClass:"las la-angle-left"}),a("span",[t._v("Back")])]):t._e(),t.infoFlowline?a("span",{staticStyle:{position:"absolute",top:"6px",left:"124px","font-size":"12px",color:"red"}},[t._v("id: "+t._s(t.infoFlowline.id))]):t._e(),a("h1",[t._v(t._s(t.pageName))]),a("h2",[t._v(t._s(t.pageSubName))]),t.pageSubInnerName?a("div",{staticClass:"sub-page-box"},[t._m(0),a("h2",[t._v(t._s(t.pageSubInnerName))])]):t._e(),t.infoFlowline?a("div",{staticClass:"toolbar-info mobile-none"},[a("div",{staticClass:"info-item"},[a("label",{staticClass:"desc"},[t._v("Line No:")]),a("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.line_no))])]),a("div",{staticClass:"info-item"},[a("label",{staticClass:"desc"},[t._v("From:")]),a("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.line_from))])]),a("div",{staticClass:"info-item"},[a("label",{staticClass:"desc"},[t._v("To:")]),a("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.line_to))])]),a("div",{staticClass:"info-item"},[a("label",{staticClass:"desc"},[t._v("Site Name:")]),a("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.id_site))])]),a("div",{staticClass:"info-item"},[a("label",{staticClass:"desc"},[t._v("In-service Date :")]),a("label",{staticClass:"value"},[t._v(t._s(t.tank_inservice_date))])])]):t._e()],1),a("div",{staticClass:"right-col"},[1==t.isSearchBoxList?a("div",{staticClass:"search-box"},[a("i",{staticClass:"las la-search search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("isSearch")},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?a("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),1==t.isSearchBox?a("div",{staticClass:"search-box"},[a("i",{staticClass:"las la-search search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.GET_SEARCH()},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?a("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),t.isSave?a("v-ons-toolbar-button",{staticClass:"highlight-btn",on:{click:function(e){return t.$emit("isSaveBtn")}}},[a("i",{staticClass:"las la-save"}),a("span",[t._v("Save")])]):t._e(),t.isEdit?a("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isEditBtn")}}},[a("i",{staticClass:"las la-edit"}),a("span",[t._v("Edit")])]):t._e(),t.isDelete?a("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDeleteBtn")}}},[a("i",{staticClass:"las la-trash"}),a("span",[t._v("Delete")])]):t._e(),t.isPrint||t.isDownload?a("div",{staticClass:"btn-group-separater"}):t._e(),t.isRefresh?a("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("refreshInfo")}}},[a("i",{staticClass:"las la-sync"}),a("span",[t._v("Refresh")])]):t._e(),t.isPrint?a("v-ons-toolbar-button",[a("i",{staticClass:"las la-print"}),a("span",[t._v("Print")])]):t._e(),t.isDownload?a("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDownloadBtn")}}},[a("i",{staticClass:"las la-download"}),a("span",[t._v("Download")])]):t._e(),t.isNewBtn?a("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("newBtnFn")}}},[a("i",{staticClass:"las la-plus"}),a("span",[t._v(t._s(t.newBtnLabel))])]):t._e(),t.isMoreBtn?a("v-ons-toolbar-button",{staticStyle:{"padding-right":"0px"},on:{click:function(e){return t.SHOW_POPOVER(e,"down",!0)}}},[a("i",{staticClass:"las la-cog"})]):t._e(),a("v-ons-popover",{attrs:{cancelable:"",visible:t.popoverVisible,target:t.popoverTarget,direction:t.popoverDirection,"cover-target":t.coverTarget},on:{"update:visible":function(e){t.popoverVisible=e}}},[a("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.EDIT_TANK_INFO()}}},[a("span",[t._v("Edit Tank Info")]),a("i",{staticClass:"las la-edit"})]),a("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.DELETE_TANK_INFO()}}},[a("span",{staticStyle:{color:"red"}},[t._v("Delete Tank Info")]),a("i",{staticClass:"las la-trash",staticStyle:{color:"red"}})])],1)],1),1==t.isEditPopup?a("popupEdit",{attrs:{editInfo:t.infoFlowline},on:{closePopup:function(e){return t.TOGGLE_POPUP()}}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group-separater-client"},[a("i",{staticClass:"las la-angle-right"})])}],s=(a(41539),a(17133)),i=a.n(s),r=a(78193),l=a(39477);const c={name:"app-toolbar",components:{popupEdit:r.Z},props:{pageName:String,pageSubName:String,pageSubInnerName:String,isBack:Boolean,isBack_specificPath:String,isBackPath:Boolean,isEdit:Boolean,isSave:Boolean,isDelete:Boolean,isPrint:Boolean,isDownload:Boolean,isNewBtn:Boolean,isRefresh:Boolean,isMoreBtn:Boolean,infoFlowline:Object,newBtnLabel:String,isSearchBox:Boolean,isSearchBoxList:Boolean},data:function(){return{searchKeyword:"",isEditPopup:!1,popoverVisible:!1,popoverTarget:null,popoverDirection:"up",coverTarget:!1}},methods:{GO_BACK_TO:function(){this.$router.push(this.isBack_specificPath)},GET_SEARCH:function(){var t={};t.id_client&&t.id_tag?this.$router.push("/tank/client/"+t.id_client+"/tag/"+t.id_tag+"/info"):this.$ons.notification.alert("Tag number not found")},CLEAR_SEARCH:function(){this.searchKeyword=""},SHOW_POPOVER:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.popoverVisible=!0,this.popoverTarget=t,this.popoverDirection=e,this.coverTarget=a},TOGGLE_POPUP:function(){this.isEditPopup=!this.isEditPopup},EDIT_TANK_INFO:function(){this.popoverVisible=!1,this.isEditPopup=!0},DELETE_TANK_INFO:function(){var t=this;this.popoverVisible=!1;var e=this.$route.params.id_tag,a=this.$route.params.id_company,n=JSON.parse(localStorage.getItem("user"));this.$ons.notification.confirm("Confirm delete?").then((function(o){1==o&&(0,l.Z)({method:"put",url:"/tank-info/delete-tank-info",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id_tag:e,updated_by:n.id_user}}).then((function(e){200==e.status&&(t.$ons.notification.alert("Project delete successful"),t.$router.push("/tank/client/"+a))}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){}))}))}},computed:{tank_inservice_date:function(){return this.infoFlowline.inservice_date?i()(this.infoFlowline.inservice_date).format("LL"):"N/A"}}},d=c;var u=a(1001),p=(0,u.Z)(d,n,o,!1,null,"d151cdea",null);const _=p.exports},29911:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pm-page"},[a("div",{staticClass:"pm-toolbar"},[a("toolbar",{attrs:{pageName:"Dexon Department",isNewBtn:!1,newBtnLabel:"New"},on:{refreshInfo:function(e){return t.FETCH_LIST()},newBtnFn:function(e){return t.TOGGLE_POPUP()}}})],1),a("div",{staticClass:"pm-page-container"},[a("div",{staticClass:"page-container"},[a("DxDataGrid",{attrs:{id:"dexon-department-list","key-expr":"id_department","data-source":t.statusList,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!1,"row-alternation-enabled":!0},on:{"row-inserted":t.CREATE_DEPT,"row-updated":t.UPDATE_DEPT,"row-removed":t.DELETE_DEPT,exporting:t.EXPORT_DATA}},[a("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,mode:"row"}}),a("DxColumn",{attrs:{"data-field":"department_desc",caption:"Dexon Department"}},[a("DxRequiredRule")],1),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!0}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1)]),1==t.isLoading?a("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}}):t._e()],1)},o=[],s=(a(41539),a(71642)),i=a(53706),r=a.n(i),l=a(66262),c=a(48626),d=a(30594),u=a(62721),p=a(39477);const _={name:"ViewApplicableStatus",components:{toolbar:u.Z,DxDataGrid:c.DxDataGrid,DxSearchPanel:c.DxSearchPanel,DxPaging:c.DxPaging,DxPager:c.DxPager,DxScrolling:c.DxScrolling,DxColumn:c.DxColumn,DxExport:c.DxExport,DxEditing:c.DxEditing,DxRequiredRule:c.DxRequiredRule,contentLoading:d.Z},created:function(){this.$store.commit("UPDATE_CURRENT_INAPP",{name:"Master Data Manager",icon:"/img/icon_menu/master_data/table.png"}),1==this.$store.state.status.server&&this.FETCH_LIST()},data:function(){return{statusList:"",isAdd:!1,isEdit:!1,isLoading:!1,errorMessage:"",editInfo:""}},computed:{},methods:{VIEW_INFO:function(t){var e=t.data.id_project;null!=e&&this.$router.push("/projectmanager/projects/"+e)},EXPORT_DATA:function(t){var e=new s.Workbook,a=e.addWorksheet("Projects");(0,l.d)({worksheet:a,component:t.component}).then((function(){e.xlsx.writeBuffer().then((function(t){r()(new Blob([t],{type:"application/octet-stream"}),"Projects.xlsx")}))})),t.cancel=!0},TOGGLE_POPUP:function(){this.isAdd=!this.isAdd},FETCH_LIST:function(){var t=this;this.isLoading=!0,(0,p.Z)({method:"get",url:"/MdDexonDepartment",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log(e),200==e.status&&e.data&&(t.statusList=e.data)}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1}))},CREATE_DEPT:function(t){var e=this;console.log(t),(0,p.Z)({method:"post",url:"/MdDexonDepartment",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){201==t.status&&e.FETCH_LIST()}))["catch"]((function(t){e.$ons.notification.alert(t.code+" "+t.response.status+" "+t.message)}))["finally"]((function(){}))},UPDATE_DEPT:function(t){var e=this;console.log(t),(0,p.Z)({method:"put",url:"/MdDexonDepartment/"+t.data.id_department,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&e.FETCH_LIST()}))["catch"]((function(t){e.$ons.notification.alert(t.code+" "+t.response.status+" "+t.message)}))["finally"]((function(){}))},DELETE_DEPT:function(t){var e=this;console.log(t),(0,p.Z)({method:"delete",url:"/MdDexonDepartment/"+t.data.id_department,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.data}).then((function(t){204==t.status&&e.FETCH_LIST()}))["catch"]((function(t){e.$ons.notification.alert(t.code+" "+t.response.status+" "+t.message)}))["finally"]((function(){}))}}},f=_;var h=a(1001),v=(0,h.Z)(f,n,o,!1,null,"0b19d37a",null);const g=v.exports}}]);
//# sourceMappingURL=9911.6c280f9a.js.map