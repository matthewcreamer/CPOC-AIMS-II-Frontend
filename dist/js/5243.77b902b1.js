"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[5243],{21632:(t,e,i)=>{i.d(e,{Z:()=>f});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app-toolbar"}},[i("div",{staticClass:"left-col"},[t.isBack?i("v-ons-toolbar-button",{on:{click:function(e){return t.$router.go(-1)}}},[i("i",{staticClass:"las la-angle-left"}),i("span",[t._v("Back")])]):t._e(),t.isBackPath?i("v-ons-toolbar-button",{on:{click:function(e){return t.GO_BACK_TO()}}},[i("i",{staticClass:"las la-angle-left"}),i("span",[t._v("Back")])]):t._e(),t.infoFlowline?i("span",{staticStyle:{position:"absolute",top:"6px",left:"124px","font-size":"12px",color:"red"}},[t._v("id: "+t._s(t.infoFlowline.id))]):t._e(),i("h1",[t._v(t._s(t.pageName))]),i("h2",[t._v(t._s(t.pageSubName))]),t.pageSubInnerName?i("div",{staticClass:"sub-page-box"},[t._m(0),i("h2",[t._v(t._s(t.pageSubInnerName))])]):t._e(),t.infoFlowline?i("div",{staticClass:"toolbar-info mobile-none"},[i("div",{staticClass:"info-item"},[i("label",{staticClass:"desc"},[t._v("Line No:")]),i("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.line_no))])]),i("div",{staticClass:"info-item"},[i("label",{staticClass:"desc"},[t._v("Site Name:")]),i("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.id_site))])])]):t._e()],1),i("div",{staticClass:"right-col"},[1==t.isSearchBoxList?i("div",{staticClass:"search-box"},[i("i",{staticClass:"las la-search search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("isSearch")},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?i("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),1==t.isSearchDropdown?i("div",{staticClass:"search-box",attrs:{id:"v-search"}},[i("i",{staticClass:"las la-search search"}),i("v-select",{staticClass:"custom-select",attrs:{options:t.formattedOptions,placeholder:"search line no."},on:{input:t.onSelectOption},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}}),""!=t.searchKeyword?i("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()],1):t._e(),1==t.isSearchBox?i("div",{staticClass:"search-box"},[i("i",{staticClass:"las la-search search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.GET_SEARCH()},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?i("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),t.isSave?i("v-ons-toolbar-button",{staticClass:"highlight-btn",on:{click:function(e){return t.$emit("isSaveBtn")}}},[i("i",{staticClass:"las la-save"}),i("span",[t._v("Save")])]):t._e(),t.isEdit?i("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isEditBtn")}}},[i("i",{staticClass:"las la-edit"}),i("span",[t._v("Edit")])]):t._e(),t.isDelete?i("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDeleteBtn")}}},[i("i",{staticClass:"las la-trash"}),i("span",[t._v("Delete")])]):t._e(),t.isPrint||t.isDownload?i("div",{staticClass:"btn-group-separater"}):t._e(),t.isRefresh?i("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("refreshInfo")}}},[i("i",{staticClass:"las la-sync"}),i("span",[t._v("Refresh")])]):t._e(),t.isPrint?i("v-ons-toolbar-button",[i("i",{staticClass:"las la-print"}),i("span",[t._v("Print")])]):t._e(),t.isDownload?i("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDownloadBtn")}}},[i("i",{staticClass:"las la-download"}),i("span",[t._v("Download")])]):t._e(),t.isNewBtn?i("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("newBtnFn")}}},[i("i",{staticClass:"las la-plus"}),i("span",[t._v(t._s(t.newBtnLabel))])]):t._e(),t.isMoreBtn?i("v-ons-toolbar-button",{staticStyle:{"padding-right":"0px"},on:{click:function(e){return t.SHOW_POPOVER(e,"down",!0)}}},[i("i",{staticClass:"las la-cog"})]):t._e(),i("v-ons-popover",{attrs:{cancelable:"",visible:t.popoverVisible,target:t.popoverTarget,direction:t.popoverDirection,"cover-target":t.coverTarget},on:{"update:visible":function(e){t.popoverVisible=e}}},[i("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.EDIT_FLOWLINE_INFO()}}},[i("span",[t._v("Edit Info")]),i("i",{staticClass:"las la-edit"})]),i("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.DELETE_FLOWLINE_INFO()}}},[i("span",{staticStyle:{color:"red"}},[t._v("Delete")]),i("i",{staticClass:"las la-trash",staticStyle:{color:"red"}})])],1)],1),1==t.isAdd?i("popupAdd",{on:{closePopup:function(e){return t.TOGGLE_POPUPADD()}}}):t._e(),1==t.isEditPopup?i("popupEdit",{attrs:{editInfo:t.infoFlowline},on:{closePopup:function(e){return t.TOGGLE_POPUP()}}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn-group-separater-client"},[i("i",{staticClass:"las la-angle-right"})])}],o=(i(41539),i(21249),i(17133)),a=i.n(o),r=i(78193),l=i(71713),c=i(39477),u=i(30768),p=i.n(u);const d={name:"app-toolbar",components:{popupEdit:r.Z,popupAdd:l.Z,vSelect:p()},props:{pageName:String,pageSubName:String,pageSubInnerName:String,isBack:Boolean,isBack_specificPath:String,isBackPath:Boolean,isEdit:Boolean,isSave:Boolean,isDelete:Boolean,isPrint:Boolean,isDownload:Boolean,isNewBtn:Boolean,isRefresh:Boolean,isMoreBtn:Boolean,infoFlowline:Object,newBtnLabel:String,isSearchBox:Boolean,isSearchBoxList:Boolean,isSearchDropdown:Boolean,options:Array},data:function(){return{searchKeyword:"",isEditPopup:!1,isAdd:!1,selectedOption:null,popoverVisible:!1,popoverTarget:null,popoverDirection:"up",coverTarget:!1}},methods:{GO_BACK_TO:function(){this.$router.push(this.isBack_specificPath)},CLEAR_SEARCH:function(){this.searchKeyword=""},SHOW_POPOVER:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.popoverVisible=!0,this.popoverTarget=t,this.popoverDirection=e,this.coverTarget=i},TOGGLE_POPUP:function(){this.isEditPopup=!this.isEditPopup},TOGGLE_POPUPADD:function(){this.isAdd=!this.isAdd},NEW_FLOWLINE_INFO:function(){this.popoverVisible=!1,this.isAdd=!0},EDIT_FLOWLINE_INFO:function(){this.popoverVisible=!1,this.isEditPopup=!0},DELETE_FLOWLINE_INFO:function(){var t=this;this.popoverVisible=!1;var e=this.$route.params.id_tag;this.$ons.notification.confirm("Confirm delete?").then((function(i){1==i&&(0,c.Z)({method:"put",url:"/FlowlineInfo/delete-flowline-info?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.infoFlowline}).then((function(e){200==e.status&&(t.$ons.notification.alert("Project delete successful"),t.$router.push("/flowline"))}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){}))}))},onSelectOption:function(t){var e=encodeURI("/flowline/tag/"+t.value+"/info");this.$router.push(e)}},computed:{flowline_inservice_date:function(){return this.infoFlowline.inservice_date?a()(this.infoFlowline.inservice_date).format("LL"):"N/A"},formattedOptions:function(){return this.options.map((function(t){return{label:t.line_no,value:t.id}}))}}},h=d;var v=i(1001),_=(0,v.Z)(h,s,n,!1,null,"774be453",null);const f=_.exports},25243:(t,e,i)=>{i.r(e),i.d(e,{default:()=>b});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pm-page",class:[1==t.sidebarHiding?"pm-page-none-sidbar":"pm-page"]},[i("toolbar",{staticStyle:{"grid-column":"span 3"},attrs:{pageSubName:this.$store.state.currentPageName,pageSubInnerName:this.$store.state.currentPageInnerName,isBackPath:!0,isBack_specificPath:"/flowline",isNewBtn:!1,newBtnLabel:"New Line",infoFlowline:t.infoFlowline,isMoreBtn:!0,isSearchBox:!1,isRefresh:!0,isSearchDropdown:!0,options:t.flowlineList},on:{refreshInfo:function(e){return t.refreshPage()},newBtnFn:function(e){return t.TOGGLE_POPUPADD()}}}),i("sidebar",{on:{resizeGridLayout:function(e){return t.RESIZE_GRID_LAYOUT()}}}),i("div",{staticClass:"pm-page-container"},[i("router-view")],1),1==t.isAdd?i("popupAdd",{on:{closePopup:function(e){return t.TOGGLE_POPUPADD()}}}):t._e()],1)},n=[],o=(i(41539),i(39477)),a=i(21632),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-sidebar",class:[1==t.sidebarHiding?"app-sidebar-hide":"app-sidebar"]},[i("div",{staticClass:"item-container"},[t._m(0),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/info"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/info.png"}}),i("span",[t._v("Information")])])],1),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/insp-record"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/inspection-record.png"}}),i("span",[t._v("Inspection Record")])])],1),t._m(1),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/marked-up-drawing"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/drawing.png"}}),i("span",[t._v("Marked-up ISO")])])],1),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/thickness"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/thickness.png"}}),i("span",[t._v("Thickness")])])],1),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/checklist"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/checklist.png"}}),i("span",[t._v("Visual Checklist")])])],1),i("router-link",{attrs:{to:"/flowline/tag/"+t.id_tag+"/visual"}},[i("v-ons-toolbar-button",{staticClass:"item"},[i("img",{attrs:{src:"/img/icon_sidebar/tank/visual.png"}}),i("span",[t._v("Picture Log")])])],1),t._m(2),i("v-ons-popover",{attrs:{cancelable:"",visible:t.popoverVisible.checklist,target:t.popoverTarget,direction:t.popoverDirection,"cover-target":t.coverTarget},on:{"update:visible":function(e){return t.$set(t.popoverVisible,"checklist",e)}}},t._l(t.sidebarSubmenu.checklist,(function(e){return i("v-ons-toolbar-button",{key:e.id,staticClass:"popover-button",on:{click:function(i){return t.GO_TO(e,"checklist")}}},[i("span",[t._v(t._s(e.checklist_code))]),i("i",{staticClass:"las la-angle-right"})])})),1)],1),i("div",{staticClass:"item-container fixed-panel"},[i("v-ons-toolbar-button",{staticClass:"item bottom-btn",on:{click:function(e){return t.SHOW_HIDE_SIDEBAR()}}},[0==t.sidebarHiding?i("i",{staticClass:"las la-caret-square-left"}):t._e(),1==t.sidebarHiding?i("i",{staticClass:"las la-caret-square-right"}):t._e(),i("span",[t._v("Hide Sidebar")])])],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-label"},[i("label",[t._v("Information")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-label"},[i("label",[t._v("Inspection")]),i("hr")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-label"},[i("label",[t._v("Report")]),i("hr")])}];const c={name:"app-sidebar",created:function(){},props:{},data:function(){return{id_tag:this.$route.params.id_tag,asset_name:this.$route.params.asset_name,popoverVisible:{markup_drawing:!1,checklist:!1,thickness:!1,evaluation:!1},popoverTarget:null,popoverDirection:"right",coverTarget:!1,sidebarSubmenu:{checklist:[{id:1,checklist_code:"Generic"}],thickness:[{id:1,code:"Roof",path:"roof"},{id:3,code:"Shell",path:"shell"}]},sidebarHiding:!1}},computed:{},methods:{SHOW_POPOVER:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3?arguments[3]:void 0;this.popoverTarget=t,this.popoverDirection=e,this.coverTarget=i,"checklist"==s&&this.sidebarSubmenu.checklist.length>0&&(this.popoverVisible.checklist=!0)},GO_TO:function(t,e){this.popoverVisible.markup_drawing=!1,this.popoverVisible.checklist=!1,this.popoverVisible.thickness=!1,this.popoverVisible.evaluation=!1,"checklist"==e&&this.$router.push({path:"/flowline/tag/"+this.id_tag+"/checklist/form/"+t.id,replace:!0})},SHOW_HIDE_SIDEBAR:function(){0==this.sidebarHiding?this.sidebarHiding=!0:this.sidebarHiding=!1,this.$emit("resizeGridLayout")}}},u=c;var p=i(1001),d=(0,p.Z)(u,r,l,!1,null,"1dcb69c8",null);const h=d.exports;var v=i(71713);const _={name:"router-template-detail",components:{toolbar:a.Z,popupAdd:v.Z,sidebar:h},created:function(){this.$store.commit("UPDATE_CURRENT_INAPP",{name:"Flowline Management",icon:"/img/icon_menu/equipment/flowline.png"}),this.$store.commit("UPDATE_CURRENT_PAGENAME",{subpageName:"Flowline",subpageInnerName:null}),this.FETCH_INFO(),this.FETCH_LIST()},data:function(){return{infoFlowline:{},flowlineList:[],sidebarHiding:!1,isAdd:!1}},computed:{},watch:{$route:{handler:function(){this.FETCH_INFO()}}},methods:{FETCH_INFO:function(){var t=this;this.isLoading=!0;var e=this.$route.params.id_tag;(0,o.Z)({method:"get",url:"FlowlineInfo/"+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:null}).then((function(e){200==e.status&&e.data&&(t.infoFlowline=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},FETCH_LIST:function(){var t=this;this.isLoading=!0,(0,o.Z)({method:"get",url:"FlowlineInfo",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:null}).then((function(e){200==e.status&&e.data&&(t.flowlineList=e.data)}))["catch"]((function(e){console.log(e),t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){t.isLoading=!1}))},RESIZE_GRID_LAYOUT:function(){this.sidebarHiding=!this.sidebarHiding},TOGGLE_POPUPADD:function(){this.isAdd=!this.isAdd},refreshPage:function(){this.$router.go()}}},f=_;var g=(0,p.Z)(f,s,n,!1,null,"67c0d28c",null);const b=g.exports}}]);
//# sourceMappingURL=5243.77b902b1.js.map