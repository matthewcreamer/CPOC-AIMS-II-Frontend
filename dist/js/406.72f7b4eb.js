"use strict";(self["webpackChunktims_dexon"]=self["webpackChunktims_dexon"]||[]).push([[406],{40406:(t,e,a)=>{a.r(e),a.d(e,{default:()=>A});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},[a("div",{staticClass:"page-toolbar"},[a("toolbar",{attrs:{pageSubName:"User Account",isNewBtn:!0,newBtnLabel:"New Account",isBack:!0},on:{refreshInfo:function(e){return t.FETCH_LIST()},newBtnFn:function(e){return t.TOGGLE_POPUP("add")}}})],1),a("div",{staticClass:"page-content"},[a("DxDataGrid",{attrs:{id:"user-account-table","element-attr":t.dataGridAttributes,"data-source":t.accountList,selection:{mode:"single"},"hover-state-enabled":!0,"allow-column-reordering":!1,"show-borders":!0,"show-row-lines":!1,"row-alternation-enabled":!0},on:{exporting:t.EXPORT_DATA},scopedSlots:t._u([{key:"option-btn-password",fn:function(e){var s=e.data;return[5!=s.data.id_role?a("div",{staticClass:"table-btn-group"},[a("div",{staticClass:"table-btn table-btn-none",on:{click:function(e){return t.RESET_PASSWORD(s)}}},[a("i",{staticClass:"las la-undo-alt red"}),a("span",{staticClass:"red"},[t._v("reset password")])])]):t._e()]}},{key:"option-btn-set",fn:function(e){var s=e.data;return[5!=s.data.id_role?a("div",{staticClass:"table-btn-group"},[a("div",{staticClass:"table-btn",on:{click:function(e){return t.TOGGLE_POPUP("edit",s)}}},[a("i",{staticClass:"las la-pen green"})]),a("div",{staticClass:"table-btn",on:{click:function(e){return t.DELETE_ACCOUNT(s)}}},[a("i",{staticClass:"las la-trash red"})])]):t._e()]}}])},[a("DxColumn",{attrs:{"data-field":"id_account",alignment:"center",width:50,caption:"ID"}}),a("DxColumn",{attrs:{"data-field":"emp_no",caption:"Employee No"}}),a("DxColumn",{attrs:{"data-field":"prefix_desc",caption:"Prefix",width:80}}),a("DxColumn",{attrs:{"data-field":"first_name",caption:"First Name"}}),a("DxColumn",{attrs:{"data-field":"last_name",caption:"Last Name"}}),a("DxColumn",{attrs:{"data-field":"role_desc",caption:"Role"}}),a("DxColumn",{attrs:{"data-field":"username",caption:"Username"}}),a("DxColumn",{attrs:{"data-field":"position_desc",caption:"Position"}}),a("DxColumn",{attrs:{"data-field":"department_desc",caption:"Department"}}),a("DxColumn",{attrs:{caption:"Password",width:150,"cell-template":"option-btn-password"}}),a("DxColumn",{attrs:{width:90,caption:"","cell-template":"option-btn-set"}}),a("DxScrolling",{attrs:{mode:"standard"}}),a("DxSearchPanel",{attrs:{visible:!0}}),a("DxPaging",{attrs:{"page-size":10,"page-index":0}}),a("DxPager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20],"show-navigation-buttons":!0,"show-info":!0,"info-text":"Page {0} of {1} ({2} items)"}}),a("DxExport",{attrs:{enabled:!0}})],1)],1),1==t.isAdd?a("popupAdd",{on:{"btn-cancel-add":function(e){return t.TOGGLE_POPUP("add")},refreshList:function(e){return t.FETCH_LIST()}}}):t._e(),1==t.isEdit?a("popupEdit",{attrs:{editInfo:t.editInfo},on:{"btn-cancel-edit":function(e){return t.TOGGLE_POPUP("edit")},refreshList:function(e){return t.FETCH_LIST()}}}):t._e(),1==t.isLoading?a("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}}):t._e()],1)},i=[],o=(a(41539),a(71642)),n=a(53706),l=a.n(n),r=a(66262),c=a(48626),d=a(39477),m=a(62721),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-wrapper"},[a("div",{staticClass:"popup-card"},[t._m(0),1==t.all_form_select_loaded?a("div",{staticClass:"popup-content form"},[a("div",{staticClass:"form-item-container"},[a("label",{staticClass:"section-text",staticStyle:{"grid-column":"span 2","margin-top":"0"}},[t._v("Log-in Informations")]),a("div",{staticClass:"input-set"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"text",placeholder:"Password",disabled:""},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),a("label",{staticClass:"section-text",staticStyle:{"grid-column":"span 2"}},[t._v("Account Informations")]),a("div",{staticStyle:{display:"grid","grid-template-columns":"120px auto"}},[a("div",{staticClass:"input-set",staticStyle:{"padding-right":"10px",width:"unset"}},[t._m(3),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.prefixList,placeholder:"Select Prefix","display-expr":"prefix_desc","value-expr":"id_prefix"},model:{value:t.formData.id_prefix,callback:function(e){t.$set(t.formData,"id_prefix",e)},expression:"formData.id_prefix"}})],1),a("div",{staticClass:"input-set"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.first_name,expression:"formData.first_name"}],attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.formData.first_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"first_name",e.target.value)}}})])]),a("div",{staticClass:"input-set"},[a("p",{staticClass:"label"},[t._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.last_name,expression:"formData.last_name"}],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.formData.last_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"last_name",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.emp_no,expression:"formData.emp_no"}],attrs:{type:"text",placeholder:"Employee No"},domProps:{value:t.formData.emp_no},on:{input:function(e){e.target.composing||t.$set(t.formData,"emp_no",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(6),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.departmentList,placeholder:"Select Department","display-expr":"department_desc","value-expr":"id_department"},model:{value:t.formData.id_department,callback:function(e){t.$set(t.formData,"id_department",e)},expression:"formData.id_department"}})],1),a("div",{staticClass:"input-set"},[t._m(7),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.positionList,placeholder:"Select Position","display-expr":"position_desc","value-expr":"id_position"},model:{value:t.formData.id_position,callback:function(e){t.$set(t.formData,"id_position",e)},expression:"formData.id_position"}})],1),a("div",{staticClass:"input-set"},[t._m(8),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.roleList,placeholder:"Select Role","display-expr":"role_desc","value-expr":"id_role"},model:{value:t.formData.id_role,callback:function(e){t.$set(t.formData,"id_role",e)},expression:"formData.id_role"}})],1),a("div",{staticClass:"input-set"},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(10),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone_no,expression:"formData.phone_no"}],attrs:{type:"tel",placeholder:"Phone No"},domProps:{value:t.formData.phone_no},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone_no",e.target.value)}}})])])]):t._e(),0==t.all_form_select_loaded?a("div",{staticClass:"popup-content loading-section"},[a("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}})],1):t._e(),a("div",{staticClass:"popup-footer"},[a("div",{staticClass:"button-set"},[1==t.all_form_select_loaded?a("button",{staticClass:"blue",on:{click:function(e){return t.SAVE()}}},[a("label",[t._v("Save")])]):t._e(),a("button",{staticClass:"grey",on:{click:function(e){return t.CANCEL()}}},[a("label",[t._v("Cancel")])])])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-header"},[a("label",[t._v("Create New Account")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Username:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Password:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Prefix:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("First Name:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Employee No:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Department:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Position:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Role:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Email:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Phone No:")])])}],f=a(56935),_=a.n(f),h=a(30594),v=a(45549);const D={name:"popup-add-account",components:{DxSelectBox:_(),contentLoading:h.Z},created:function(){this.FETCH_DROPDOWN_LIST()},data:function(){return{formData:{password:"dex0n7845",is_active:!0,is_dexon:!0},formSelect:{roleList:[],departmentList:[],positionList:[],prefixList:[]}}},methods:{SAVE:function(){var t=this;this.formData.username&&this.formData.id_prefix&&this.formData.first_name&&this.formData.emp_no&&this.formData.id_department&&this.formData.id_position&&this.formData.id_role?this.$ons.notification.confirm("Confirm save?").then((function(e){if(1==e){var a=t.formData;a.password=(0,v.sha256)(a.password),console.log(a),(0,d.Z)({method:"post",url:"/account-user/add-dexon-account",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:a}).then((function(e){200==e.status&&(t.$ons.notification.alert("Add successful"),t.$emit("btn-cancel-add"),t.$emit("refreshList"))}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){}))}})):this.$ons.notification.alert("Please fill all required fields.")},CANCEL:function(){var t=this,e=this.formData;this.formData!=e?this.$ons.notification.confirm("Your unsaved changes will be lost").then((function(e){1==e&&t.$emit("btn-cancel-add")})):this.$emit("btn-cancel-add")},FETCH_DROPDOWN_LIST:function(){this.FETCH_DROPDOWN_DEXON_DEPARTMENT(),this.FETCH_DROPDOWN_DEXON_POSITION(),this.FETCH_DROPDOWN_ROLE(),this.FETCH_DROPDOWN_PREFIX()},FETCH_DROPDOWN_DEXON_DEPARTMENT:function(){var t=this;(0,d.Z)({method:"get",url:"/MdDexonDepartment",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.departmentList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_DEXON_POSITION:function(){var t=this;(0,d.Z)({method:"get",url:"/MdDexonPosition",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.positionList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_ROLE:function(){var t=this;(0,d.Z)({method:"get",url:"/account-user/role-list",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.roleList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_PREFIX:function(){var t=this;(0,d.Z)({method:"get",url:"/MdPrefix",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.prefixList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))}},computed:{all_form_select_loaded:function(){return this.formSelect.roleList.length>0&&this.formSelect.departmentList.length>0&&this.formSelect.positionList.length>0&&this.formSelect.prefixList.length>0}}},C=D;var x=a(1001),b=(0,x.Z)(C,u,p,!1,null,"4968cc12",null);const g=b.exports;var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-wrapper"},[a("div",{staticClass:"popup-card"},[t._m(0),1==t.all_form_select_loaded?a("div",{staticClass:"popup-content form"},[a("div",{staticClass:"form-item-container"},[a("label",{staticClass:"section-text",staticStyle:{"grid-column":"span 2","margin-top":"0"}},[t._v("Log-in Informations")]),a("div",{staticClass:"input-set"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),t._m(2),a("label",{staticClass:"section-text",staticStyle:{"grid-column":"span 2"}},[t._v("Account Informations")]),a("div",{staticStyle:{display:"grid","grid-template-columns":"120px auto"}},[a("div",{staticClass:"input-set",staticStyle:{"padding-right":"10px",width:"unset"}},[t._m(3),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.prefixList,placeholder:"Select Prefix","display-expr":"prefix_desc","value-expr":"id_prefix"},model:{value:t.formData.id_prefix,callback:function(e){t.$set(t.formData,"id_prefix",e)},expression:"formData.id_prefix"}})],1),a("div",{staticClass:"input-set"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.first_name,expression:"formData.first_name"}],attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.formData.first_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"first_name",e.target.value)}}})])]),a("div",{staticClass:"input-set"},[a("p",{staticClass:"label"},[t._v("Last Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.last_name,expression:"formData.last_name"}],attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.formData.last_name},on:{input:function(e){e.target.composing||t.$set(t.formData,"last_name",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(5),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.emp_no,expression:"formData.emp_no"}],attrs:{type:"text",placeholder:"Employee No"},domProps:{value:t.formData.emp_no},on:{input:function(e){e.target.composing||t.$set(t.formData,"emp_no",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(6),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.departmentList,placeholder:"Select Department","display-expr":"department_desc","value-expr":"id_department"},model:{value:t.formData.id_department,callback:function(e){t.$set(t.formData,"id_department",e)},expression:"formData.id_department"}})],1),a("div",{staticClass:"input-set"},[t._m(7),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.positionList,placeholder:"Select Position","display-expr":"position_desc","value-expr":"id_position"},model:{value:t.formData.id_position,callback:function(e){t.$set(t.formData,"id_position",e)},expression:"formData.id_position"}})],1),a("div",{staticClass:"input-set"},[t._m(8),a("DxSelectBox",{staticStyle:{border:"0","font-size":"14px"},attrs:{items:t.formSelect.roleList,placeholder:"Select Role","display-expr":"role_desc","value-expr":"id_role"},model:{value:t.formData.id_role,callback:function(e){t.$set(t.formData,"id_role",e)},expression:"formData.id_role"}})],1),a("div",{staticClass:"input-set"},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),a("div",{staticClass:"input-set"},[t._m(10),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone_no,expression:"formData.phone_no"}],attrs:{type:"tel",placeholder:"Phone No"},domProps:{value:t.formData.phone_no},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone_no",e.target.value)}}})])])]):t._e(),0==t.all_form_select_loaded?a("div",{staticClass:"popup-content loading-section"},[a("contentLoading",{attrs:{text:"Loading, please wait...",color:"#fc9b21"}})],1):t._e(),a("div",{staticClass:"popup-footer"},[a("div",{staticClass:"button-set"},[1==t.all_form_select_loaded?a("button",{staticClass:"blue",on:{click:function(e){return t.SAVE()}}},[a("label",[t._v("Save")])]):t._e(),a("button",{staticClass:"grey",on:{click:function(e){return t.CANCEL()}}},[a("label",[t._v("Cancel")])])])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-header"},[a("label",[t._v("Edit Account")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Username:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-set"},[a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Password:")])]),a("input",{attrs:{type:"password",placeholder:"**********",disabled:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Prefix:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("First Name:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Employee No:")]),a("span",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Department:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Position:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Role:")]),a("label",{staticClass:"star-label"},[a("i",{staticClass:"las la-asterisk"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Email:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"label-box"},[a("p",{staticClass:"label"},[t._v("Phone No:")])])}],P=a(89584);const N={name:"popup-edit-account",components:{DxSelectBox:_(),contentLoading:h.Z},props:{editInfo:Object},created:function(){this.formData=(0,P.Z)(this.editInfo),this.FETCH_DROPDOWN_LIST()},data:function(){return{formData:{},formSelect:{roleList:[],departmentList:[],positionList:[],prefixList:[]}}},methods:{SAVE:function(){var t=this;this.formData.username&&this.formData.id_prefix&&this.formData.first_name&&this.formData.emp_no&&this.formData.id_department&&this.formData.id_position&&this.formData.id_role?this.$ons.notification.confirm("Confirm save?").then((function(e){if(1==e){var a=t.formData;(0,d.Z)({method:"put",url:"/account-user/edit-dexon-account",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:a}).then((function(e){200==e.status&&(t.$ons.notification.alert("Edit successful"),t.$emit("btn-cancel-edit"),t.$emit("refreshList"))}))["catch"]((function(e){t.$ons.notification.alert(e.code+" "+e.response.status+" "+e.message)}))["finally"]((function(){}))}})):this.$ons.notification.alert("Please fill all required fields.")},CANCEL:function(){var t=this,e=this.formData;this.formData!=e?this.$ons.notification.confirm("Your unsaved changes will be lost").then((function(e){1==e&&t.$emit("btn-cancel-edit")})):this.$emit("btn-cancel-edit")},FETCH_DROPDOWN_LIST:function(){this.FETCH_DROPDOWN_DEXON_DEPARTMENT(),this.FETCH_DROPDOWN_DEXON_POSITION(),this.FETCH_DROPDOWN_ROLE(),this.FETCH_DROPDOWN_PREFIX()},FETCH_DROPDOWN_DEXON_DEPARTMENT:function(){var t=this;(0,d.Z)({method:"get",url:"/MdDexonDepartment",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.departmentList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_DEXON_POSITION:function(){var t=this;(0,d.Z)({method:"get",url:"/MdDexonPosition",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.positionList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_ROLE:function(){var t=this;(0,d.Z)({method:"get",url:"/account-user/role-list",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.roleList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))},FETCH_DROPDOWN_PREFIX:function(){var t=this;(0,d.Z)({method:"get",url:"/MdPrefix",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){200==e.status&&(t.formSelect.prefixList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))}},computed:{all_form_select_loaded:function(){return this.formSelect.roleList.length>0&&this.formSelect.departmentList.length>0&&this.formSelect.positionList.length>0&&this.formSelect.prefixList.length>0}}},O=N;var L=(0,x.Z)(O,E,S,!1,null,"7de054ae",null);const $=L.exports,T={name:"User-Account-List",components:{toolbar:m.Z,DxDataGrid:c.DxDataGrid,DxSearchPanel:c.DxSearchPanel,DxPaging:c.DxPaging,DxPager:c.DxPager,DxScrolling:c.DxScrolling,DxColumn:c.DxColumn,DxExport:c.DxExport,contentLoading:h.Z,popupAdd:g,popupEdit:$},created:function(){this.$store.commit("CLEAR_CURRENT_CLIENT"),this.$store.commit("UPDATE_CURRENT_INAPP",{name:"User Account Manager",icon:"/img/icon_menu/account/account.png"}),1==this.$store.state.status.server&&this.FETCH_LIST()},data:function(){return{accountList:[],isAdd:!1,isEdit:!1,isLoading:!1,errorMessage:"",editInfo:"",dataGridAttributes:{class:"data-grid-style"}}},computed:{},methods:{EXPORT_DATA:function(t){var e=new o.Workbook,a=e.addWorksheet("Clients");(0,r.d)({worksheet:a,component:t.component}).then((function(){e.xlsx.writeBuffer().then((function(t){l()(new Blob([t],{type:"application/octet-stream"}),"Clients.xlsx")}))})),t.cancel=!0},TOGGLE_POPUP:function(t,e){"add"==t?1==this.isAdd?this.isAdd=!1:this.isAdd=!0:"edit"==t&&(1==this.isEdit?this.isEdit=!1:(this.editInfo=(0,P.Z)(e.data),this.isEdit=!0))},FETCH_LIST:function(){var t=this;this.isLoading=!0,(0,d.Z)({method:"get",url:"/account-user/account-list",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){e.data&&(t.accountList=e.data)}))["catch"]((function(t){console.log(t)}))["finally"]((function(){t.isLoading=!1}))},DELETE_ACCOUNT:function(t){var e=this;this.$ons.notification.confirm("Confirm delete?").then((function(a){1==a&&(0,d.Z)({method:"put",url:"/account-user/delete-dexon-account",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id_account:t.data.id_account}}).then((function(t){200==t.status&&(e.$ons.notification.alert("Account delete successful"),e.FETCH_LIST())}))["catch"]((function(t){e.$ons.notification.alert(t.code+" "+t.response.status)}))["finally"]((function(){}))}))},RESET_PASSWORD:function(t){var e=this;this.$ons.notification.confirm("Confirm password reset?").then((function(a){1==a&&(0,d.Z)({method:"put",url:"/account-user/change-password",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("token"))},data:{id_account:t.data.id_account,password:(0,v.sha256)("dex0n7845")}}).then((function(t){200==t.status&&e.$ons.notification.alert("Password reset successful"),e.FETCH_LIST()}))["catch"]((function(t){console.log(t)}))["finally"]((function(){}))}))}}},w=T;var y=(0,x.Z)(w,s,i,!1,null,"9f7df074",null);const A=y.exports}}]);
//# sourceMappingURL=406.72f7b4eb.js.map