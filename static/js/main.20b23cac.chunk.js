(this.webpackJsonpnursestaffingsim=this.webpackJsonpnursestaffingsim||[]).push([[0],{27:function(t,e,s){},28:function(t,e,s){},29:function(t,e,s){},30:function(t,e,s){},35:function(t,e,s){},36:function(t,e,s){},37:function(t,e,s){},38:function(t,e,s){},39:function(t,e,s){},41:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),i=s(14),r=s.n(i),c=(s(27),s(28),s(22)),o=s(7),d=s(8),l=s(15),h=s(10),u=s(9),f=s(11),b=(s(29),s(48)),j=s(49),p=(s(30),s(1)),O=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).generateUUID=function(){for(var t=[],e="0123456789abcdef",s=0;s<36;s++)t[s]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},a.getShiftValue=function(t){var e=0;switch(t){case"12 Hours Day":case"12 Hours Night":e=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":e=8;break;default:e=0}return e},a.handleAdd=function(t){t.preventDefault();var e=new FormData(t.target),s=Object.fromEntries(e.entries()),n=a.generateUUID(),i=parseInt(s.quantity)*a.getShiftValue(s.shift),r={id:n,quantity:s.quantity,type:s.staffType,shift:s.shift,shiftTotal:i};a.props.onStaffAdd(r),a.handleClose()},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.state={open:!1,show:!1},a}return Object(d.a)(s,[{key:"render",value:function(){for(var t=[],e=1;e<=50;e++)t.push(e);var s=t.map((function(t){return Object(p.jsx)("option",{value:t,children:t},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"addstaff-id",onClick:this.handleShow,children:"Add Staff"}),Object(p.jsx)(b.a,{animation:!1,show:this.state.show,"data-testid":"addStaffModal-id",onHide:this.handleClose,children:Object(p.jsxs)(f.a,{onSubmit:this.handleAdd,children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsx)(b.a.Title,{children:"Select your staff member"})}),Object(p.jsxs)(b.a.Body,{children:[Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"staffType",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Staff Type"}),Object(p.jsxs)(f.a.Control,{as:"select",name:"staffType",children:[Object(p.jsx)("option",{value:"RN",children:"RN"}),Object(p.jsx)("option",{value:"LVN",children:"LVN"}),Object(p.jsx)("option",{value:"Unlicensed",children:"Unlicensed"})]})]}),Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"shiftType",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Shift Type"}),Object(p.jsxs)(f.a.Control,{as:"select",name:"shift",className:"caret",children:[Object(p.jsx)("option",{value:"12 Hours Day",children:"12 Hours Day"}),Object(p.jsx)("option",{value:"12 Hours Night",children:"12 Hours Night"}),Object(p.jsx)("option",{value:"8 Hours Day",children:"8 Hours Day"}),Object(p.jsx)("option",{value:"8 Hours Evening",children:"8 Hours Evening"}),Object(p.jsx)("option",{value:"8 Hours Night",children:"8 Hours Night"})]})]}),Object(p.jsxs)(f.a.Group,{className:"mb-3",controlId:"quantity",required:!0,children:[Object(p.jsx)(f.a.Label,{children:"Quantity"}),Object(p.jsx)(f.a.Control,{as:"select",name:"quantity",children:s})]})]}),Object(p.jsxs)(b.a.Footer,{children:[Object(p.jsx)(j.a,{variant:"outline-secondary","data-testid":"cancelStaffAdd-id",onClick:this.handleClose,children:"Close"}),Object(p.jsx)(j.a,{variant:"outline-primary","data-testid":"addStaffConfirm-id",type:"submit",children:"Add New Staff"})]})]})})]})}}]),s}(n.a.Component),m=(s(35),s(45)),v=s(46),x=s(47),g=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).listAdd=function(e){var s=parseInt(t.props.staffs[e].quantity),a=parseInt(t.props.staffs[e].shiftTotal);s+=1,a=12===parseInt(t.props.staffs[e].shift)?parseInt(a)+12:parseInt(a)+8,s<=100&&(t.props.staffs[e].quantity=s,t.props.staffs[e].shiftTotal=a,t.props.onStaffChangeOnUpdate(t.props.staffs))},t.listSub=function(e){var s=parseInt(t.props.staffs[e].quantity),a=parseInt(t.props.staffs[e].shiftTotal);s-=1,a=12===parseInt(t.props.staffs[e].shift)?parseInt(a)-12:parseInt(a)-8,s<=0?t.props.staffs.splice(e,1):(t.props.staffs[e].quantity=s,t.props.staffs[e].shiftTotal=a),t.props.onStaffChangeOnUpdate(t.props.staffs)},t.listRemove=function(e){t.props.staffs.splice(e,1),t.props.onStaffChangeOnUpdate(t.props.staffs)},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this,e=this.props.staffs.map((function(e,s){return Object(p.jsxs)("tr",{id:e.id,children:[Object(p.jsx)("td",{children:Object(p.jsx)(m.a,{className:"bTrash","data-testid":"delete-id",onClick:t.listRemove.bind(e,s)})}),Object(p.jsx)("td",{children:e.type}),Object(p.jsxs)("td",{children:[Object(p.jsx)(v.a,{className:"bPlus","data-testid":"add-id",onClick:t.listAdd.bind(e,s)}),e.quantity,Object(p.jsx)(x.a,{className:"bDash","data-testid":"minus-id",onClick:t.listSub.bind(e,s)})]}),Object(p.jsx)("td",{children:e.shift}),Object(p.jsx)("td",{children:e.shiftTotal})]},e.id)}));return Object(p.jsxs)("table",{className:"table table-striped table-hover",id:"staffCont",children:[Object(p.jsx)("thead",{className:"table-BSU",children:e.length>0&&Object(p.jsxs)("tr",{"data-testid":"staffList-id",children:[Object(p.jsx)("th",{}),Object(p.jsx)("th",{scope:"col",children:"Staff Type"}),Object(p.jsx)("th",{scope:"col",children:"Quantity"}),Object(p.jsx)("th",{scope:"col",children:"Shift Type"}),Object(p.jsx)("th",{scope:"col",children:"Shift Total"})]})}),Object(p.jsx)("tbody",{children:e})]})}}]),s}(n.a.Component),y=g,C=(s(36),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).getShiftValue=function(t){var e=0;switch(t){case"12 Hours Day":case"12 Hours Night":e=12;break;case"8 Hours Day":case"8 Hours Evening":case"8 Hours Night":e=8;break;default:e=0}return e},t.getStaffHours=function(e){for(var s=0,a=0;a<e.length;a++){s+=t.getShiftValue(e[a].shift)*parseInt(e[a].quantity)}return s},t.calculation=function(e,s){var a=parseInt(e.census)*parseInt(e.HPPD)-t.getStaffHours(s);return a||"--"},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this.calculation(this.props.info,this.props.staffs);return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:"Hours for Day Remaining"}),Object(p.jsxs)("div",{id:"results",className:"card-body",children:[Object(p.jsx)("label",{children:"HPPD"}),Object(p.jsx)("h1",{"data-testid":"result",className:t<0?"negCalc":"",children:"--"!==t?t.toFixed(0):t})]})]})}}]),s}(n.a.Component)),N=C,S=(s(37),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).random=function(t,e){var s=e-t,a=Math.random();return t+Math.round(a*s)},t.setRandomValues=function(){var e=t.random(1,30),s=t.random(1,60),a={unit:"Random Hospital Unit",HPPD:e,bedUnit:s,census:t.random(1,s)};t.props.onInfoChange(a)},t}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"random-id",onClick:this.setRandomValues,children:"Random Scenario"})}}]),s}(n.a.Component)),H=S,w=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).getShiftBudget=function(t){for(var e=0,s=0;s<t.length;s++){var a=parseInt(t[s].shiftTotal);"RN"===t[s].type?e+=35*a:"LVN"===t[s].type?e+=24*a:e+=15*a}return e},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this.getShiftBudget(this.props.staffs);return this.props.showBudget?Object(p.jsxs)("div",{className:"card mt-4",children:[Object(p.jsx)("div",{className:"card-header",children:"Total Budget for Staff"}),Object(p.jsx)("div",{id:"budget",className:"card-body",children:Object(p.jsxs)("h1",{"data-testid":"shiftBudgetValue-id",children:["$",t]})})]}):null}}]),s}(n.a.Component),P=w,I=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).handleStaffChange=function(t){a.setState({staffs:t})},a.handleStaffAdd=function(t){console.log(t);var e=[].concat(Object(c.a)(a.state.staffs),[t]);a.setState({staffs:e})},a.handleInfoChange=function(t){a.setState({info:t})},a.handleCheckChange=function(t){var e=t.target.checked;a.setState((function(t){Object.assign({},t.showBudget);return{showBudget:e}}))},a.findFormErrors=function(t,e){var s={};return"HPPD"===t?e&&""!==e?(e<1||e>30)&&(s.HPPD="HPPD should be between 1 and 30"):s.HPPD="HPPD cannot be blank!":"bedUnit"===t?e&&""!==e?(e<1||e>60)&&(s.bedUnit="Number of beds should be between 1 and 60"):s.bedUnit="Number of beds cannot be blank!":"census"===t&&(e&&""!==e?e<1?s.census="Census cannot be less than 1":e>a.state.info.bedUnit&&(s.census="Census cannot exceed the number of beds in a unit!"):s.census="Census cannot be blank!"),s},a.state={results:"",staffNum:"The Results:",num:"",center:{"text-align":"center"},staffs:[],showBudget:!1,info:{unit:"",HPPD:"",bedUnit:"",census:""},errors:{HPPD:"",bedUnit:"",census:""}},a.handleInputChange=a.handleInputChange.bind(Object(l.a)(a)),a}return Object(d.a)(s,[{key:"handleInputChange",value:function(t){var e=t.target,s=e.value,a=e.name,n={};"unit"!==a&&(n=this.findFormErrors(a,s),Object.keys(n).length>0&&this.setState((function(t){var e=Object.assign({},t.errors);return e[a]=n[a],{errors:e}}))),this.setState((function(t){var e=Object.assign({},t.info);e[a]=s,"bedUnit"===a&&(e.census=s);var i=Object.assign({},t.errors);return i[a]&&i[a]!==n[a]&&(i[a]=null),{info:e,errors:i}}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"row mt-5",children:[Object(p.jsxs)("div",{className:"col-md-3 col-sm-6 order-sm-last",children:[Object(p.jsx)(N,{staffs:this.state.staffs,info:this.state.info}),Object(p.jsx)(P,{staffs:this.state.staffs,showBudget:this.state.showBudget})]}),Object(p.jsxs)("div",{className:"col-md-9 col-sm-6 order-sm-first",children:[Object(p.jsxs)(f.a,{className:"row",noValidate:!0,children:[Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)(f.a.Label,{htmlFor:"unit",children:"Hospital unit"}),Object(p.jsx)(f.a.Control,{type:"text",name:"unit",id:"unit","data-testid":"unit-id",placeholder:"Hospital Unit",onChange:this.handleInputChange,value:this.state.info.unit})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"HPPD",children:"HPPD"}),Object(p.jsx)(f.a.Control,{type:"number",name:"HPPD",id:"HPPD","data-testid":"hppd-id",placeholder:"HPPD",onChange:this.handleInputChange,value:this.state.info.HPPD,isInvalid:!!this.state.errors.HPPD}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.HPPD})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"bedUnit",children:"Number of beds"}),Object(p.jsx)(f.a.Control,{type:"number",name:"bedUnit",id:"bedUnit","data-testid":"numbeds-id",placeholder:"Number of Beds",onChange:this.handleInputChange,value:this.state.info.bedUnit,isInvalid:!!this.state.errors.bedUnit}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.bedUnit})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)(f.a.Label,{htmlFor:"census",children:"Census"}),Object(p.jsx)(f.a.Control,{type:"number",name:"census",id:"census","data-testid":"census-id",placeholder:"Census",onChange:this.handleInputChange,value:this.state.info.census,isInvalid:!!this.state.errors.census}),Object(p.jsx)(f.a.Control.Feedback,{type:"invalid",children:this.state.errors.census})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(p.jsx)(O,{onStaffChange:this.handleStaffChange,onStaffAdd:this.handleStaffAdd,staffs:this.state.staffs})}),Object(p.jsx)("div",{className:"col-md-4 mt-4 ",children:Object(p.jsx)(H,{onInfoChange:this.handleInfoChange})}),Object(p.jsx)("div",{className:"col-md-4 mt-4",children:Object(p.jsx)(f.a.Check,{type:"checkbox",id:"showBudget",label:"Show Budget",name:"showBudget","data-testid":"showbudget-id",checked:this.state.showBudget,onChange:this.handleCheckChange})})]}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsx)(y,{staffs:this.state.staffs,onStaffChangeOnUpdate:this.handleStaffChange})})]})]})})}}]),s}(n.a.Component),k=(s(38),s.p+"static/media/Left-aligned-square-gray-2.11bbe62b.png"),D=function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onReload=function(){console.log("Reload clicked"),window.location.reload()},t}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("header",{children:[Object(p.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("img",{src:k,alt:"Logo","data-testid":"reload",onClick:this.onReload}),Object(p.jsx)("div",{id:"navbarSupportedContent",children:Object(p.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link",href:"https://www.boisestate.edu/nursing/",children:"BSU Nursing Department"})})})})]})}),Object(p.jsx)("div",{className:"p-5 bg-primary text-white rounded",children:Object(p.jsx)("h1",{children:"Inpatient Nurse Staffing Simulator"})})]})}}]),s}(n.a.Component),U=D;s(39);var T=function(){return Object(p.jsx)("footer",{id:"footer",children:"BSU Nursing |   Dr. Renee Walters   |   reneewalters@boisestate.edu"})};var B=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(U,{}),Object(p.jsx)(I,{}),Object(p.jsx)(T,{})]})})},A=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),i(t),r(t)}))};s(40);r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.20b23cac.chunk.js.map