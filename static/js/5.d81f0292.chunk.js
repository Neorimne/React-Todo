(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[5],{185:function(e,a,s){e.exports={usersWrapper:"users_usersWrapper__3Qzsn",userContainer:"users_userContainer__34cnd",userInfo:"users_userInfo__17TTI",userImage:"users_userImage__3XxNm"}},188:function(e,a,s){"use strict";s.r(a);var r=s(41),t=s(0),n=s.n(t),u=s(185),c=s.n(u),l=s(71),i=function(e){var a=Object(t.useState)(!1),s=Object(r.a)(a,2),u=s[0],i=s[1];Object(t.useEffect)((function(){i(!0),e.getUsers(),i(!1)}),[]);var m=e.users.map((function(e){return n.a.createElement("div",{key:e.id,className:c.a.userContainer},n.a.createElement("div",{className:c.a.userImage},n.a.createElement("img",{src:e.avatar,alt:"user ava"})),n.a.createElement("div",{className:c.a.userInfo},n.a.createElement("h2",null,e.first_name),n.a.createElement("h2",null,e.last_name),n.a.createElement("div",null,e.email),n.a.createElement("div",null,e.website)))}));return n.a.createElement("div",{className:c.a.usersWrapper},u?n.a.createElement(l.a,null):m)},m=s(48),o=s(50),p=Object(m.a)((function(e){return{users:e.users.usersData}}),{getUsers:o.b})(i);a.default=p}}]);
//# sourceMappingURL=5.d81f0292.chunk.js.map