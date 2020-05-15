(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{339:function(t,e,n){var content=n(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2065bca8",content,!0,{sourceMap:!1})},340:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},368:function(t,e,n){"use strict";n(12),n(7),n(5),n(4),n(8),n(38),n(39);var o=n(2),r=(n(16),n(339),n(540)),l=n(342),c=n(142),d=n(346),v=n(149),h=n(353),m=n(354),f=n(40),x=n(143),_=n(6),w=n(9),y=n(0);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(_.a)(l.a,c.a,d.a,v.a,h.a,m.a,f.a);e.a=O.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===y.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:C({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=C({},data.style,{maxWidth:"none"===this.maxWidth?void 0:Object(y.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(y.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},380:function(t,e,n){var content=n(459);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2798868d",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";var o=n(380);n.n(o).a},459:function(t,e,n){(e=n(10)(!1)).push([t.i,".overline{color:#336882;font-size:25px}",""]),t.exports=e},559:function(t,e,n){"use strict";n.r(e);n(55);var o=n(13),r={data:function(){return{dialog:!1}},methods:{editUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.setToken(t.$auth.getToken("local"));case 2:return n=t.customer,e.next=5,t.$axios.$patch("/customers/".concat(n._id),n).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCustomer();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));case 5:case"end":return e.stop()}}),e)})))()}}},l=(n(458),n(34)),c=n(37),d=n.n(c),v=n(144),h=n(132),m=n(118),f=n(376),x=n(325),_=n(368),w=n(316),y=n(378),k=n(328),C=n(411),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{color:"success"}},o),[t._v("create new")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"overline"},[t._v("Add user Profile")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("p",{staticClass:"overline"},[t._v("Personal informations")]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Name*",placeholder:"Customer full name",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Org-nummer",placeholder:"YYYYMMDD-NNNN",outlined:"",type:"number",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"VAT-nummer",placeholder:"VAT-nummer",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Kundnummer",placeholder:"Kundnummer",outlined:"",type:"number",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-divider"),t._v(" "),n("h1",{staticClass:"overline pt-4 pb-4"},[t._v("Contact informations")])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Postadress",placeholder:"Postadress",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Postadress 2",placeholder:"Postadress 2",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Postnummer",placeholder:"Postnummer",outlined:"",type:"number",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"stad",placeholder:"stad",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Kontaktperson",placeholder:"Kontaktperson",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"E-post",placeholder:"E-post",type:"email",outlined:"",color:"#336882"}}),t._v(" "),n("v-divider")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("p",{staticClass:"overline"},[t._v("Term")]),t._v(" "),n("v-text-field",{attrs:{label:"Dagar*",placeholder:"Dagar",outlined:"",type:"number",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Dröjsmålsränta (%)",placeholder:"Dröjsmålsränta",outlined:"",color:"#336882"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Country",placeholder:"Country",outlined:"",color:"#336882"}})],1)],1)],1),t._v(" "),n("small",[t._v("*indicates required field")])],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)}),[],!1,null,null,null),O=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:f.a,VContainer:x.a,VDialog:_.a,VDivider:w.a,VRow:y.a,VSpacer:k.a,VTextField:C.a});var j={middleware:"auth",layout:"admin",components:{UserModal:O},beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/customers/").then((function(e){t.customers=e.data}));case 2:case"end":return e.stop()}}),e)})))()},methods:{handleClick:function(a){this.$router.push("/customer/"+a._id)}},data:function(){return{search:"",headers:[{text:"Customer Id",align:"start",sortable:!1,value:"_id"},{text:"customername",value:"customername"},{text:"vatnummer",value:"vatnummer"},{text:"overdueinterest (%)",value:"overdueinterest"}],customers:[]}}},$=n(558),A=n(541),T=Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-row",{staticClass:"pa-4"},[n("h1",{staticClass:"title"},[t._v("Customers")]),t._v(" "),n("v-spacer"),t._v(" "),n("UserModal")],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("p",{staticClass:"overline"},[t._v("All customers")]),t._v(" "),n("v-card",{staticClass:"pa-8",attrs:{tile:"",width:"100%"}},[n("v-row",[n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mb-4 pa-4",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",solo:"",dense:"",color:"#336882"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.customers,"items-per-page":5,search:t.search},on:{"click:row":t.handleClick}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=T.exports;d()(T,{VCard:h.a,VCol:f.a,VDataTable:$.a,VLayout:A.a,VRow:y.a,VSpacer:k.a,VTextField:C.a})}}]);