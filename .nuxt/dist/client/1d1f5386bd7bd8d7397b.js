(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(t,e,l){var content=l(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(11).default)("8e3ddcb8",content,!0,{sourceMap:!1})},409:function(t,e,l){"use strict";var n={props:["allItems"],data:function(){return{search:"",state:[{text:"All states",value:"All"}],States:[{text:"All states",value:"All"},{text:"Paid",value:"Paid"},{text:"Published",value:"Published"},{text:"Overdue",value:"Overdue"},{text:"Drafts",value:"Draft"}],types:[{text:"All types",value:"All"},{text:"Invoice",value:"Invoice"},{text:"Cash invoice",value:"cash"},{text:"Credit invoice",value:"credit"}],activeclass:"primary",allclass:"normal",headers:[{text:"Invoice number",align:"start",sortable:!1,value:"ocrid"},{text:"Customer",value:"customername"},{text:"Invoice amount (inc VAT)",value:"summa"},{text:"status",value:"status"},{text:"Date of invoice",value:"fromDate"},{text:"Due date",value:"duedate"},{text:"Delivery  date",value:"deliveryDate"}],displaiedInvoices:[]}},watch:{allItems:function(t){this.displaiedInvoices=t}},methods:{getColor:function(t){return"Paid"==t?"green":"Overdue"==t?"red":"Draft"==t?"black":"Published"==t?"blue":void 0},filterstate:function(a){this.displaiedInvoices="All"==a?this.allItems:this.allItems.filter((function(t){return t.status==a}))},activeinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Paid"!=t.status})),this.activeclass="primary",this.allclass="normal"},allinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Draft"!=t.status})),this.allclass="primary",this.activeclass="normal"},handleClick:function(a){"Draft"==a.status?this.$router.push("/invoices/draft/"+a._id):"Overdue"==a.status?this.$router.push("/invoices/overdue/"+a._id):"Published"==a.status?this.$router.push("/invoices/published/"+a._id):this.$router.push("/invoices/paid/"+a._id)}},mounted:function(){this.displaiedInvoices=this.allItems,this.allinvoices()}},c=l(34),o=l(37),r=l.n(o),v=l(144),d=l(132),h=l(415),m=l(376),f=l(558),x=l(378),_=l(410),y=l(411),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-row",[l("v-btn",{attrs:{text:"",small:"",color:t.activeclass},on:{click:t.activeinvoices}},[t._v("Active invoices")]),t._v(" "),l("v-btn",{attrs:{text:"",small:"",color:t.allclass},on:{click:t.allinvoices}},[t._v("All invoices")])],1),t._v(" "),l("v-card",{staticClass:"pa-8"},[l("v-row",{staticClass:"pa-4"},[l("v-col",{attrs:{cols:"12",sm:"3"}},[l("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":"",solo:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"3"}},[l("v-select",{attrs:{items:t.States,"item-text":"text","item-value":"value",label:"All states",solo:"",dense:""},on:{change:t.filterstate},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"3"}},[l("v-select",{attrs:{items:t.types,"item-text":"text","item-value":"value",label:"All types",solo:"",dense:""}})],1)],1),t._v(" "),l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.displaiedInvoices,search:t.search},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"item.ocrid",fn:function(e){var n=e.item;return[l("P",{staticClass:"blue--text"},[t._v("#"+t._s(n.ocrid))])]}},{key:"item.status",fn:function(e){var n=e.item;return[l("v-chip",{attrs:{color:t.getColor(n.status),dark:""}},[t._v(t._s(n.status))])]}}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;r()(component,{VBtn:v.a,VCard:d.a,VChip:h.a,VCol:m.a,VDataTable:f.a,VRow:x.a,VSelect:_.a,VTextField:y.a})},460:function(t,e,l){"use strict";var n=l(381);l.n(n).a},461:function(t,e,l){(e=l(10)(!1)).push([t.i,".blueSection[data-v-14682740]{height:200px;background-color:#dceaf5}.blueSection[data-v-14682740],.itm[data-v-14682740]{display:block;width:100%}.itm[data-v-14682740]{height:100%;align-items:center;margin:auto}th[data-v-14682740]{vertical-align:top}",""]),t.exports=e},562:function(t,e,l){"use strict";l.r(e);l(16),l(55);var n=l(13),c={layout:"admin",components:{dateTable:l(409).a},data:function(){return{invoices:[],overdueSum:0}},methods:{},beforeMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/invoices").then((function(e){e.forEach((function(e){e.published&&!e.invoicepaid&&new Date(e.duedate)>Date.now()?e.status="Published":e.published&&!e.invoicepaid&&new Date(e.duedate)<Date.now()?(e.status="Overdue",t.overdueSum+=Number(e.summa)):e.published&&e.invoicepaid?e.status="Paid":e.published||(e.status="Draft"),e.duedate&&(e.duedate=new Date(e.duedate).toISOString().substring(0,10),e.createdate=new Date(e.createdate).toISOString().substring(0,10)),e.fromDate=e.createdate||"-",e.deliveryDate="-"})),t.invoices=e,console.log(e)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},o=(l(460),l(34)),r=l(37),v=l.n(r),d=l(144),h=l(376),m=l(541),f=l(378),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-layout",[l("v-row",[l("v-col",{attrs:{cols:"12",sm:"12"}},[l("div",{staticClass:"d-flex justify-space-between align-center",staticStyle:{width:"100%"}},[l("p",{staticClass:"py-0 my-0 black--text headline"},[t._v("Invoices")]),t._v(" "),l("v-btn",{attrs:{color:"success",to:"/newinvoice"}},[t._v("New invoice")])],1)]),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"12"}},[l("div",{staticClass:"blueSection"},[l("v-row",{staticStyle:{width:"100%",height:"100%"},attrs:{justify:"center",align:"center"}},[l("v-col",{attrs:{cols:"12",sm:"4"}},[l("h6",{staticClass:"grey--text text-center subtitle-1 my-4"},[t._v("Overpaid (inc VAT)")]),t._v(" "),l("h6",{staticClass:"display-1 text-center"},[t._v("0,00 kr")])]),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"4"}},[l("h6",{staticClass:"grey--text text-center subtitle-1 my-4"},[t._v("Overdue (inc VAT)")]),t._v(" "),l("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.overdueSum)+" kr")])]),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"4"}},[l("h6",{staticClass:"grey--text text-center subtitle-1 my-4"},[t._v("Outstanding (inc VAT)")]),t._v(" "),l("h6",{staticClass:"display-1 text-center"},[t._v("28 375,00")])])],1)],1)]),t._v(" "),l("v-col",{attrs:{cols:"12",sm:"12"}},[l("dateTable",{attrs:{allItems:t.invoices},on:{"update:allItems":function(e){t.invoices=e},"update:all-items":function(e){t.invoices=e}}})],1)],1)],1)}),[],!1,null,"14682740",null);e.default=component.exports;v()(component,{VBtn:d.a,VCol:h.a,VLayout:m.a,VRow:f.a})}}]);