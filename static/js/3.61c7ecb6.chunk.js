(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[3],{184:function(e,a,t){e.exports={contactsWrapper:"contacts_contactsWrapper__1VYVQ",contactsHeader:"contacts_contactsHeader__3FXi2",form:"contacts_form__FoMhG",overlay:"contacts_overlay__5EdQJ",text:"contacts_text__VHYN4"}},187:function(e,a,t){"use strict";t.r(a);var n=t(48),c=t(41),l=t(0),s=t.n(l),r=t(184),m=t.n(r),o=function(e){return s.a.createElement("form",{onSubmit:e.handleSumbit,className:m.a.form},s.a.createElement("label",null,s.a.createElement("div",null,"YOUR NAME:"),s.a.createElement("input",{type:"text",name:"name",value:e.name,onChange:e.handleUserInput})),s.a.createElement("label",null,s.a.createElement("div",null,"YOUR EMAIL:"),s.a.createElement("input",{type:"text",name:"email",value:e.email,onChange:e.handleUserInput})),s.a.createElement("label",null,s.a.createElement("div",null,"YOUR COMMENT:"),s.a.createElement("textarea",{rows:"10",cols:"50",name:"comment",value:e.comment,onChange:e.handleUserInput})),s.a.createElement("input",{type:"submit",value:"SUBMIT"}))},u=function(e){var a=Object(l.useState)(!1),t=Object(c.a)(a,2),n=t[0],r=t[1],u=Object(l.useState)(""),i=Object(c.a)(u,2),p=i[0],E=i[1],d=Object(l.useState)(""),b=Object(c.a)(d,2),v=b[0],f=b[1],h=Object(l.useState)(""),_=Object(c.a)(h,2),O=_[0],N=_[1];console.log("props: ",e);return s.a.createElement("div",{className:m.a.contactsWrapper},s.a.createElement("div",{className:m.a.overlay,style:n?{display:"block"}:{display:"none"},onClick:function(){r(!1)}},s.a.createElement("div",{className:m.a.text},"Thanks for your feedback!")),s.a.createElement("div",{className:m.a.contactsHeader},s.a.createElement("h2",null,"LEAVE YOUR FEEDBACK!")),s.a.createElement("div",{className:m.a.formWrapper},s.a.createElement(o,{handleSumbit:function(a){a.preventDefault(),e.setNewMessage({name:p,email:v,comment:O}),r(!0)},handleUserInput:function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":E(t);break;case"email":f(t);break;case"comment":N(t)}},name:p,email:v,comment:O})))},i=t(60),p=Object(n.a)((function(e){return{contactMessages:e.contactMessages}}),{setNewMessage:i.b})(u);a.default=p}}]);
//# sourceMappingURL=3.61c7ecb6.chunk.js.map