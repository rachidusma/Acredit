(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{338:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("694800fa",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";var o=n(1),r=n(0);e.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},349:function(t,e,n){"use strict";var o=n(64),r=n(1);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}})},350:function(t,e,n){"use strict";n(18),n(19),n(4);var o=n(335),r=n(349),l=n(347),c=n(6);e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:function(e){e.preventDefault(),t.onChange()}},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},351:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2e2bc7da",content,!0,{sourceMap:!1})},359:function(t,e,n){"use strict";var o=n(338);n.n(o).a},360:function(t,e,n){(e=n(10)(!1)).push([t.i,'.opacity-1[data-v-4fc7e439]{position:absolute;top:150px;z-index:99;margin:auto;width:60%}@media only screen and (max-width:960px){.opacity-1[data-v-4fc7e439]{width:100%}.opacity-1 p[data-v-4fc7e439]{display:none}.min[data-v-4fc7e439]{height:200px!important}}@media only screen and (min-width:960px){.min[data-v-4fc7e439]{min-height:600px}}.img-bg[data-v-4fc7e439]{background-image:url(https://d36fgo9tveb5fn.cloudfront.net/wp-content/uploads/2019/08/23141524/ff_photographer_25.jpg);background-size:cover;background-position:50%;margin-right:0!important;position:relative}.img-bg>.bg-overlay[data-v-4fc7e439] :after{content:"";position:absolute;display:inline-block;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:rgba(0,88,124,.5);z-index:8}.font1[data-v-4fc7e439]{font-size:35px}.font2[data-v-4fc7e439]{font-size:22px}',""]),t.exports=e},361:function(t,e,n){(e=n(10)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=e},365:function(t,e,n){"use strict";n(359);var o=n(34),r=n(37),l=n.n(r),c=n(376),d=n(325),v=n(129),f=n(378),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"7",sm:"12"}},[n("v-row",{staticClass:"fill-height img-bg",attrs:{dark:"",align:"center",justify:"center"}},[n("v-row",{staticClass:"fill-height bg-overlay",attrs:{dark:"",align:"center",justify:"center"}},[n("v-row",{staticClass:"min",attrs:{dark:"",align:"center",justify:"center"}},[n("v-container")],1)],1)],1),t._v(" "),n("div",{staticClass:"opacity-1"},[n("h1",{staticClass:"font1 white--text bold text-uppercase",attrs:{align:"center"}},[t._v(" Quick, safe and easy ")]),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-file-multiple-outline")]),t._v(" Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-account-arrow-left-outline")]),t._v("Create Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-bike-fast")]),t._v("Create Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-bike-fast")]),t._v("Create Your invoice and Get paid right now")],1)])],1)}),[],!1,null,"4fc7e439",null);e.a=component.exports;l()(component,{VCol:c.a,VContainer:d.a,VIcon:v.a,VRow:f.a})},391:function(t,e,n){var content=n(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("12a190a6",content,!0,{sourceMap:!1})},392:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},487:function(t,e,n){"use strict";n(12),n(7),n(5),n(8),n(18),n(19),n(4);var o=n(2),r=(n(391),n(351),n(63)),l=n(335),c=n(350);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v({},l.a.options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},566:function(t,e,n){"use strict";n.r(e);n(55);var o=n(13),r={components:{LeftSide:n(365).a},data:function(){return{snackbar:!1,timeout:5e3,text:"",color:"",snackbarErr:!1,valid:!0,value:!0,ex4:!1,ex5:!1,rules:{required:function(t){return!!t||"Required."}},userInfo:{first:"rachid",last:"ouannas",number:"123123",email:"usmarachid9@gmail.com",password:"123123",confirmPass:"123123"},emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],confirmPasswordRules:[function(t){return!!t||"Password is required"}]}},computed:{passwordConfirmationRule:function(){var t=this;return function(){return t.userInfo.password===t.userInfo.confirmPass||"Password must match"}}},methods:{userRegister:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o=t.first,r=t.last,l=t.email,c=t.password,n.next=7,e.$axios.post("http://localhost:5000/api/users",{name:o,lastname:r,email:l,password:c});case 7:n.sent,e.text="Registration success",e.color="success",e.snackbar=!0,e.$router.push("/register"),n.next=19;break;case 14:n.prev=14,n.t0=n.catch(0),e.text="Registration failed, Email already used",e.color="error",e.snackbar=!0;case 19:case"end":return n.stop()}}),n,null,[[0,14]])})))()},validate:function(){this.$refs.form.validate()}}},l=n(34),c=n(37),d=n.n(c),v=n(144),f=n(487),h=n(376),m=n(325),x=n(542),w=n(378),_=n(543),y=n(411),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":""}},[n("LeftSide"),t._v(" "),n("v-col",{staticStyle:{"padding-top":"30px"},attrs:{cols:"12",md:"5",sm:"12"}},[n("h6",{staticClass:"display-2 bold",staticStyle:{color:"#336882"},attrs:{align:"center"}},[t._v(" Create Account ")]),t._v(" "),n("v-form",[n("v-container",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{label:"First name",required:""},model:{value:t.userInfo.first,callback:function(e){t.$set(t.userInfo,"first",e)},expression:"userInfo.first"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{label:"Last name",required:""},model:{value:t.userInfo.last,callback:function(e){t.$set(t.userInfo,"last",e)},expression:"userInfo.last"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{label:"Number",required:""},model:{value:t.userInfo.number,callback:function(e){t.$set(t.userInfo,"number",e)},expression:"userInfo.number"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{autocomplete:"current-password",value:t.userInfo.password,label:"Password","append-icon":t.value?"mdi-eye":"mdi-eye-off",type:t.value?"password":"text",required:""},on:{"click:append":function(){return t.value=!t.value},input:function(e){return t.userPassword=e}},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-text-field",{attrs:{autocomplete:"confirm-password",value:t.userInfo.confirmPass,label:"Confirm Password",rules:t.confirmPasswordRules.concat(t.passwordConfirmationRule),"append-icon":t.value?"mdi-eye":"mdi-eye-off",type:t.value?"password":"text",required:""},on:{"click:append":function(){return t.value=!t.value},input:function(e){return t.userPassword=e}},model:{value:t.userInfo.confirmPass,callback:function(e){t.$set(t.userInfo,"confirmPass",e)},expression:"userInfo.confirmPass"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-checkbox",{attrs:{label:"By creating an account I approve ACREDIT  General  Terms and Conditions ",color:"#336882","hide-details":""},model:{value:t.ex4,callback:function(e){t.ex4=e},expression:"ex4"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-checkbox",{attrs:{label:"I consent to the processing of my personal data in accordance with  ACREDIT Privacy Policy",color:"#336882","hide-details":""},model:{value:t.ex5,callback:function(e){t.ex5=e},expression:"ex5"}})],1)],1),t._v(" "),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"center",justify:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",outlined:"",disabled:!(t.ex4&&t.ex5&&t.userInfo.password&&t.userInfo.password===t.userInfo.confirmPass),color:"#336882"},on:{click:function(e){return t.userRegister(t.userInfo)}}},[t._v("\n                      Create Account\n                    ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout,color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n         "+t._s(t.text)+"\n         "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n         Close\n        ")])],1)],1)}),[],!1,null,"6a30aef7",null);e.default=component.exports;d()(component,{VBtn:v.a,VCheckbox:f.a,VCol:h.a,VContainer:m.a,VForm:x.a,VRow:w.a,VSnackbar:_.a,VTextField:y.a})}}]);