(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[3610],{21632:(t,e,n)=>{"use strict";n.d(e,{Z:()=>_});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-toolbar"}},[n("div",{staticClass:"left-col"},[t.isBack?n("v-ons-toolbar-button",{on:{click:function(e){return t.$router.go(-1)}}},[n("i",{staticClass:"las la-angle-left"}),n("span",[t._v("Back")])]):t._e(),t.isBackPath?n("v-ons-toolbar-button",{on:{click:function(e){return t.GO_BACK_TO()}}},[n("i",{staticClass:"las la-angle-left"}),n("span",[t._v("Back")])]):t._e(),t.infoFlowline?n("span",{staticStyle:{position:"absolute",top:"6px",left:"124px","font-size":"12px",color:"red"}},[t._v("id: "+t._s(t.infoFlowline.id))]):t._e(),n("h1",[t._v(t._s(t.pageName))]),n("h2",[t._v(t._s(t.pageSubName))]),t.pageSubInnerName?n("div",{staticClass:"sub-page-box"},[t._m(0),n("h2",[t._v(t._s(t.pageSubInnerName))])]):t._e(),t.infoFlowline?n("div",{staticClass:"toolbar-info mobile-none"},[n("div",{staticClass:"info-item"},[n("label",{staticClass:"desc"},[t._v("Line No:")]),n("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.line_no))])]),n("div",{staticClass:"info-item"},[n("label",{staticClass:"desc"},[t._v("Site Name:")]),n("label",{staticClass:"value"},[t._v(t._s(t.infoFlowline.id_site))])])]):t._e()],1),n("div",{staticClass:"right-col"},[1==t.isSearchBoxList?n("div",{staticClass:"search-box"},[n("i",{staticClass:"las la-search search"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("isSearch")},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?n("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),1==t.isSearchDropdown?n("div",{staticClass:"search-box",attrs:{id:"v-search"}},[n("i",{staticClass:"las la-search search"}),n("v-select",{staticClass:"custom-select",attrs:{options:t.formattedOptions,placeholder:"search line no."},on:{input:t.onSelectOption},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}}),""!=t.searchKeyword?n("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()],1):t._e(),1==t.isSearchBox?n("div",{staticClass:"search-box"},[n("i",{staticClass:"las la-search search"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],attrs:{type:"text",placeholder:"search tag no."},domProps:{value:t.searchKeyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.GET_SEARCH()},input:function(e){e.target.composing||(t.searchKeyword=e.target.value)}}}),""!=t.searchKeyword?n("i",{staticClass:"las la-times clear",on:{click:function(e){return t.CLEAR_SEARCH()}}}):t._e()]):t._e(),t.isSave?n("v-ons-toolbar-button",{staticClass:"highlight-btn",on:{click:function(e){return t.$emit("isSaveBtn")}}},[n("i",{staticClass:"las la-save"}),n("span",[t._v("Save")])]):t._e(),t.isEdit?n("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isEditBtn")}}},[n("i",{staticClass:"las la-edit"}),n("span",[t._v("Edit")])]):t._e(),t.isDelete?n("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDeleteBtn")}}},[n("i",{staticClass:"las la-trash"}),n("span",[t._v("Delete")])]):t._e(),t.isPrint||t.isDownload?n("div",{staticClass:"btn-group-separater"}):t._e(),t.isRefresh?n("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("refreshInfo")}}},[n("i",{staticClass:"las la-sync"}),n("span",[t._v("Refresh")])]):t._e(),t.isPrint?n("v-ons-toolbar-button",[n("i",{staticClass:"las la-print"}),n("span",[t._v("Print")])]):t._e(),t.isDownload?n("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("isDownloadBtn")}}},[n("i",{staticClass:"las la-download"}),n("span",[t._v("Download")])]):t._e(),t.isNewBtn?n("v-ons-toolbar-button",{on:{click:function(e){return t.$emit("newBtnFn")}}},[n("i",{staticClass:"las la-plus"}),n("span",[t._v(t._s(t.newBtnLabel))])]):t._e(),t.isMoreBtn?n("v-ons-toolbar-button",{staticStyle:{"padding-right":"0px"},on:{click:function(e){return t.SHOW_POPOVER(e,"down",!0)}}},[n("i",{staticClass:"las la-cog"})]):t._e(),n("v-ons-popover",{attrs:{cancelable:"",visible:t.popoverVisible,target:t.popoverTarget,direction:t.popoverDirection,"cover-target":t.coverTarget},on:{"update:visible":function(e){t.popoverVisible=e}}},[n("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.EDIT_FLOWLINE_INFO()}}},[n("span",[t._v("Edit Info")]),n("i",{staticClass:"las la-edit"})]),n("v-ons-toolbar-button",{staticClass:"popover-button",on:{click:function(e){return t.DELETE_FLOWLINE_INFO()}}},[n("span",{staticStyle:{color:"red"}},[t._v("Delete")]),n("i",{staticClass:"las la-trash",staticStyle:{color:"red"}})])],1)],1),1==t.isAdd?n("popupAdd",{on:{closePopup:function(e){return t.TOGGLE_POPUPADD()}}}):t._e(),1==t.isEditPopup?n("popupEdit",{attrs:{editInfo:t.infoFlowline},on:{closePopup:function(e){return t.TOGGLE_POPUP()}}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group-separater-client"},[n("i",{staticClass:"las la-angle-right"})])}],s=(n(41539),n(21249),n(17133)),r=n.n(s),a=n(78193),l=n(71713),c=n(39477),u=n(30768),d=n.n(u);const p={name:"app-toolbar",components:{popupEdit:a.Z,popupAdd:l.Z,vSelect:d()},props:{pageName:String,pageSubName:String,pageSubInnerName:String,isBack:Boolean,isBack_specificPath:String,isBackPath:Boolean,isEdit:Boolean,isSave:Boolean,isDelete:Boolean,isPrint:Boolean,isDownload:Boolean,isNewBtn:Boolean,isRefresh:Boolean,isMoreBtn:Boolean,infoFlowline:Object,newBtnLabel:String,isSearchBox:Boolean,isSearchBoxList:Boolean,isSearchDropdown:Boolean,options:Array},data:function(){return{searchKeyword:"",isEditPopup:!1,isAdd:!1,selectedOption:null,popoverVisible:!1,popoverTarget:null,popoverDirection:"up",coverTarget:!1}},methods:{GO_BACK_TO:function(){this.$router.push(this.isBack_specificPath)},CLEAR_SEARCH:function(){this.searchKeyword=""},SHOW_POPOVER:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.popoverVisible=!0,this.popoverTarget=t,this.popoverDirection=e,this.coverTarget=n},TOGGLE_POPUP:function(){this.isEditPopup=!this.isEditPopup},TOGGLE_POPUPADD:function(){this.isAdd=!this.isAdd},NEW_FLOWLINE_INFO:function(){this.popoverVisible=!1,this.isAdd=!0},EDIT_FLOWLINE_INFO:function(){this.popoverVisible=!1,this.isEditPopup=!0},DELETE_FLOWLINE_INFO:function(){var t=this;this.popoverVisible=!1;var e=this.$route.params.id_tag;this.$ons.notification.confirm("Confirm delete?").then((function(n){1==n&&(0,c.Z)({method:"put",url:"/FlowlineInfo/delete-flowline-info?id="+e,headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:t.infoFlowline}).then((function(e){200==e.status&&(t.$ons.notification.alert("Project delete successful"),t.$router.push("/flowline"))}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){}))}))},onSelectOption:function(t){var e=encodeURI("/flowline/tag/"+t.value+"/info");this.$router.push(e)}},computed:{flowline_inservice_date:function(){return this.infoFlowline.inservice_date?r()(this.infoFlowline.inservice_date).format("LL"):"N/A"},formattedOptions:function(){return this.options.map((function(t){return{label:t.line_no,value:t.id}}))}}},f=p;var v=n(1001),h=(0,v.Z)(f,i,o,!1,null,"774be453",null);const _=h.exports},23610:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-layout"},[n("div",{staticClass:"page-toolbar"},[n("toolbar",{staticStyle:{"grid-column":"span 2"},attrs:{isNewBtn:!0,isBackPath:!0,isRefresh:!0,isSearchBoxList:!1,isSearchDropdown:!1,options:t.flowlineList,isBack_specificPath:"/",newBtnLabel:"New Line",pageName:"Flowline"},on:{refreshInfo:function(e){return t.FETCH_LIST()},newBtnFn:function(e){return t.TOGGLE_POPUPADD()},isSearch:function(e){return t.SEARCH_GET()}}})],1),n("div",{staticClass:"page-content"},[t._m(0),t._m(1),t._m(2),t._m(3),n("div",{staticClass:"table-wrapper"},[n("DxDataGrid",{attrs:{id:"data-table-flowline-list","key-expr":"id","data-source":t.flowlineList,"element-attr":t.dataGridAttributes,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!0,"show-borders":!0,"show-row-lines":!0,"row-alternation-enabled":!1,"word-wrap-enabled":!0},on:{"selection-changed":t.VIEW_INFO}},[n("DxFilterRow",{attrs:{visible:!0}}),n("DxHeaderFilter",{attrs:{visible:!1}}),n("DxSelection",{attrs:{mode:"single"}}),n("DxColumn",{attrs:{"data-field":"id_site",caption:"Site",width:90,alignment:"center"}},[n("DxLookup",{attrs:{"data-source":t.siteList,"display-expr":"site_desc","value-expr":"id"}})],1),n("DxColumn",{attrs:{"data-field":"line_no",caption:"Line Number",width:130,alignment:"left"}}),n("DxColumn",{attrs:{"data-field":"line_from",caption:"From",width:130,alignment:"left"}}),n("DxColumn",{attrs:{"data-field":"line_to",caption:"To",width:130,alignment:"left"}}),n("DxColumn",{attrs:{caption:"Corrosion Loop"}},[n("DxColumn",{attrs:{caption:"Number","data-field":"corrosion_loop_no",width:120}}),n("DxColumn",{attrs:{caption:"Description","data-field":"corrosion_loop_desc",width:120}})],1),n("DxColumn",{attrs:{"data-field":"risk_ranking",caption:"Risk Ranking",width:130,alignment:"left"}}),n("DxColumn",{attrs:{"data-field":"integrity_status",caption:"Integrity Status",width:130,alignment:"left"}}),n("DxColumn",{attrs:{caption:"Due Inspection"}},[n("DxColumn",{attrs:{caption:"Last","data-field":"last_inspection_date",format:"dd MMM yyyy",width:100}}),n("DxColumn",{attrs:{caption:"Next","data-field":"next_inspection_date",format:"dd MMM yyyy",width:100}}),n("DxColumn",{attrs:{caption:"Status","data-field":"due_inspection_status",width:100}})],1),n("DxColumn",{attrs:{caption:"Due Anomaly"}},[n("DxColumn",{attrs:{caption:"Last","data-field":"anom_last_inspection_date",format:"dd MMM yyyy",width:100}}),n("DxColumn",{attrs:{caption:"Next","data-field":"anom_next_inspection_date",format:"dd MMM yyyy",width:100}}),n("DxColumn",{attrs:{caption:"Status","data-field":"anom_due_inspection_status",width:100}})],1),n("DxScrolling",{attrs:{mode:"standard"}}),n("DxSearchPanel",{attrs:{visible:!1}}),n("DxPaging",{attrs:{"page-size":10,"page-index":0}}),n("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),n("DxExport",{attrs:{enabled:!0,fileName:"flowline-list"}})],1)],1)]),1==t.isLoading?n("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}}):t._e(),1==t.isAdd?n("popupAdd",{on:{closePopup:function(e){return t.TOGGLE_POPUPADD()}}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box bg-red-status"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"text-p-number",attrs:{id:"p1_val"}})]),n("div",{staticClass:"col-12 text-p"},[t._v(" RED "),n("div",{staticClass:"text-p-sub"},[t._v("HIGH")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box bg-orange-status"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"text-p-number",attrs:{id:"p1_val"}})]),n("div",{staticClass:"col-12 text-p"},[t._v(" ORANGE "),n("div",{staticClass:"text-p-sub"},[t._v("MEDIUM HIGH")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box bg-yellow-status"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"text-p-number",attrs:{id:"p1_val"}})]),n("div",{staticClass:"col-12 text-p"},[t._v(" YELLOW "),n("div",{staticClass:"text-p-sub"},[t._v("MEDIUM")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box bg-green-status"},[n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"text-p-number",attrs:{id:"p1_val"}})]),n("div",{staticClass:"col-12 text-p"},[t._v(" GREEN "),n("div",{staticClass:"text-p-sub"},[t._v("LOW")])])])])}],s=(n(41539),n(57327),n(26699),n(32023),n(30594)),r=n(21632),a=n(71713),l=n(87041),c=n(17133),u=n.n(c),d=n(39477),p=n(48626);const f={name:"FlowLine",components:{toolbar:r.Z,contentLoading:s.Z,popupAdd:a.Z,DxDataGrid:p.DxDataGrid,DxSearchPanel:p.DxSearchPanel,DxPaging:p.DxPaging,DxPager:p.DxPager,DxScrolling:p.DxScrolling,DxColumn:p.DxColumn,DxExport:p.DxExport,DxHeaderFilter:p.DxHeaderFilter,DxFilterRow:p.DxFilterRow,DxSelection:p.DxSelection,DxLookup:p.DxLookup},created:function(){this.$store.commit("UPDATE_CURRENT_INAPP",{name:"Flowline Management",icon:"/img/icon_menu/equipment/flowline.png"}),this.FETCH_SITE(),this.FETCH_LIST()},data:function(){return{isAdd:!1,isEdit:!1,isLoading:!1,editInfo:"",infoClient:{},flowlineList:[],flowlineListFiltered:[],dataGridAttributes:{class:"data-grid-style"},search_key:null,siteList:[]}},computed:{},watch:{search_key:function(){this.SEARCH_GET(this.search_key)}},methods:{format_inservice_date:function(t){return t.inservice_date?u()(t.inservice_date).format("LL"):"N/A"},VIEW_INFO:function(t){null!=t.selectedRowKeys&&this.$router.push("/flowline/tag/"+t.selectedRowKeys[0]+"/info")},TOGGLE_POPUPADD:function(){this.isAdd=!this.isAdd},FETCH_SITE:function(){var t=this;(0,d.Z)({method:"get",url:"/master-data/get-md-site-list",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){console.log(e),200==e.status&&e.data&&(t.siteList=e.data)}))["catch"]((function(e){console.log(e),t.$ons.notification.alert(e.code+" "+e.response.status+" "+l.errorMonitor.message)}))["finally"]((function(){t.isLoading=!1}))},FETCH_LIST:function(){var t=this;this.isLoading=!0,(0,d.Z)({method:"get",url:"FlowlineInfo",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:null}).then((function(e){200==e.status&&e.data&&(t.flowlineList=e.data)}))["catch"]((function(e){console.log(e),t.$ons.notification.alert(e.code+" "+e.response.status+" "+l.errorMonitor.message)}))["finally"]((function(){t.isLoading=!1}))},SEARCH_CLEAR:function(){this.search_key=null},SEARCH_GET:function(t){var e=this.flowlineList;""!=t&&t&&(e=e.filter((function(e){return e.line_no.toUpperCase().includes(t.toUpperCase())}))),this.flowlineListFiltered=e}}},v=f;var h=n(1001),_=(0,h.Z)(v,i,o,!1,null,"2c74e2f2",null);const m=_.exports},44048:(t,e,n)=>{var i=n(82109);i({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},36535:(t,e,n)=>{var i=n(82109),o=n(22104),s=n(19662),r=n(19670),a=n(47293),l=!a((function(){Reflect.apply((function(){}))}));i({target:"Reflect",stat:!0,forced:l},{apply:function(t,e,n){return o(s(t),e,r(n))}})},87041:(t,e,n)=>{"use strict";var i=n(17964)["default"];n(41539),n(81299),n(36535),n(67556),n(82526),n(92222),n(36210),n(44048),n(9653),n(21703),n(96647),n(69070),n(30489),n(78011),n(68309),n(24812),n(47941),n(47042);var o,s="object"===("undefined"===typeof Reflect?"undefined":i(Reflect))?Reflect:null,r=s&&"function"===typeof s.apply?s.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};function a(t){console&&console.warn&&console.warn(t)}o=s&&"function"===typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var l=Number.isNaN||function(t){return t!==t};function c(){c.init.call(this)}t.exports=c,t.exports.once=y,c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var u=10;function d(t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+i(t))}function p(t){return void 0===t._maxListeners?c.defaultMaxListeners:t._maxListeners}function f(t,e,n,i){var o,s,r;if(d(n),s=t._events,void 0===s?(s=t._events=Object.create(null),t._eventsCount=0):(void 0!==s.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),r=s[e]),void 0===r)r=s[e]=n,++t._eventsCount;else if("function"===typeof r?r=s[e]=i?[n,r]:[r,n]:i?r.unshift(n):r.push(n),o=p(t),o>0&&r.length>o&&!r.warned){r.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+r.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=r.length,a(l)}return t}function v(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=v.bind(i);return o.listener=n,i.wrapFn=o,o}function _(t,e,n){var i=t._events;if(void 0===i)return[];var o=i[e];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?b(o):g(o,o.length)}function m(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function w(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function b(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function y(t,e){return new Promise((function(n,i){function o(n){t.removeListener(e,s),i(n)}function s(){"function"===typeof t.removeListener&&t.removeListener("error",o),n([].slice.call(arguments))}x(t,e,s,{once:!0}),"error"!==e&&C(t,o,{once:!0})}))}function C(t,e,n){"function"===typeof t.on&&x(t,"error",e,n)}function x(t,e,n,o){if("function"===typeof t.on)o.once?t.once(e,n):t.on(e,n);else{if("function"!==typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+i(t));t.addEventListener(e,(function i(s){o.once&&t.removeEventListener(e,i),n(s)}))}}Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!==typeof t||t<0||l(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),c.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||l(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},c.prototype.getMaxListeners=function(){return p(this)},c.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[t];if(void 0===l)return!1;if("function"===typeof l)r(l,this,e);else{var c=l.length,u=g(l,c);for(n=0;n<c;++n)r(u[n],this,e)}return!0},c.prototype.addListener=function(t,e){return f(this,t,e,!1)},c.prototype.on=c.prototype.addListener,c.prototype.prependListener=function(t,e){return f(this,t,e,!0)},c.prototype.once=function(t,e){return d(e),this.on(t,h(this,t,e)),this},c.prototype.prependOnceListener=function(t,e){return d(e),this.prependListener(t,h(this,t,e)),this},c.prototype.removeListener=function(t,e){var n,i,o,s,r;if(d(e),i=this._events,void 0===i)return this;if(n=i[t],void 0===n)return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===e||n[s].listener===e){r=n[s].listener,o=s;break}if(o<0)return this;0===o?n.shift():w(n,o),1===n.length&&(i[t]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",t,r||e)}return this},c.prototype.off=c.prototype.removeListener,c.prototype.removeAllListeners=function(t){var e,n,i;if(n=this._events,void 0===n)return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var o,s=Object.keys(n);for(i=0;i<s.length;++i)o=s[i],"removeListener"!==o&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=n[t],"function"===typeof e)this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},c.prototype.listeners=function(t){return _(this,t,!0)},c.prototype.rawListeners=function(t){return _(this,t,!1)},c.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):m.call(t,e)},c.prototype.listenerCount=m,c.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}}}]);
//# sourceMappingURL=3610.f4343e47.js.map