(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{16:function(e,t,a){e.exports={nav:"header_nav__2TvTt",navWrapper:"header_navWrapper__PqOUR",navItems:"header_navItems__36qnq"}},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),o=a.n(s),c=(a(82),a(83),a(15)),u=a(16),i=a.n(u),l=function(e){return r.a.createElement("div",{className:i.a.navWrapper},r.a.createElement("div",{className:i.a.nav},r.a.createElement(c.b,{className:i.a.navItems,to:"/"},"TODOS"),r.a.createElement(c.b,{className:i.a.navItems,to:"/users"},"USERS"),r.a.createElement(c.b,{className:i.a.navItems,to:"/posts"},"POSTS"),r.a.createElement(c.b,{className:i.a.navItems,to:"/contacts"},"CONTACTS")))},m=a(13),p=a(48),d=a(12),f=a(3),E={tasksData:[],taskNewText:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TASK_TEXT":return Object(f.a)({},e,{taskNewText:t.taskNewText});case"ADD_TASK":if(""===e.taskNewText)return e;var a={id:Date.now(),taskText:e.taskNewText,isCompleted:!1};return Object(f.a)({},e,{tasksData:[].concat(Object(d.a)(e.tasksData),[a]),taskNewText:""});case"TOGGLE_IS_COMPLETED":return Object(f.a)({},e,{tasksData:e.tasksData.map((function(e){return e.id===t.elementId?Object(f.a)({},e,{isCompleted:!0}):e}))});case"TOGGLE_IS_NOT_COMPLETED":return Object(f.a)({},e,{tasksData:e.tasksData.map((function(e){return e.id===t.elementId?Object(f.a)({},e,{isCompleted:!1}):e}))});case"REMOVE_TASK":return Object(f.a)({},e,{tasksData:e.tasksData.filter((function(e){return e.id!==t.elementId}))});case"REMOVE_ALL_TASKS":return{tasksData:[],taskNewText:""};default:return e}},k=a(41),b=a(6),_=a.n(b),g=function(e){return r.a.createElement("div",{key:e.element.id,className:_.a.todoItem,style:e.element.isCompleted?{backgroundColor:"rgba(80, 209, 245, 0.452)"}:{backgroundColor:"rgba(196, 49, 13, 0.692)"},onClick:function(){e.toggleEventHandler(e.element.isCompleted,e.element.id)}},e.element.isCompleted?r.a.createElement("div",{className:_.a.itemButton},r.a.createElement("button",{onClick:function(){e.toggleEventHandler(e.element.isCompleted,e.element.id)}},"COMPLETED")):r.a.createElement("div",{className:_.a.itemButton},r.a.createElement("button",{onClick:function(){e.toggleEventHandler(e.element.isCompleted,e.element.id)}},"IN PROGRESS")),r.a.createElement("div",{className:_.a.itemButton},r.a.createElement("button",{className:_.a.removeButton,onClick:function(){e.removeTask(e.element.id)}},"REMOVE")),r.a.createElement("div",{className:_.a.taskText},e.element.taskText))},T=function(e){var t=r.a.createRef(),a=Object(n.useState)("default"),s=Object(k.a)(a,2),o=s[0],c=s[1],u=Object(n.useState)(e.tasksData),i=Object(k.a)(u,2),l=i[0],m=i[1];Object(n.useEffect)((function(){m(e.tasksData)}),[e.tasksData]),Object(n.useEffect)((function(){switch(o){case"default":m(e.tasksData);break;case"SHOW_COMPLETED":m(e.tasksCompleted);break;case"SHOW_IN_PROGRESS":m(e.tasksInProgress)}}),[o]);var p=function(t,a){t?e.toggleIsNotCompleted(a):e.toggleIsCompleted(a)},f=l.map((function(t){return r.a.createElement(g,{element:t,removeTask:e.removeTask,toggleEventHandler:p,key:t.id})}));return r.a.createElement("div",{className:_.a.todosWrapper},r.a.createElement("div",{className:_.a.formWrapper},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:_.a.form},r.a.createElement("label",{htmlFor:"newTask"},"NEW TASK"),r.a.createElement("input",{id:"newTask",onChange:function(){var a=t.current.value;e.updateNewTaskText(a)},value:e.taskNewText,ref:t,type:"text"}),r.a.createElement("button",{type:"submit",onClick:function(){m(Object(d.a)(e.tasksData)),e.addTask()}},"SUBMIT"))),r.a.createElement("div",{className:_.a.buttonsWrapper},r.a.createElement("button",{onClick:function(){c("default")}},"Show ALL"),r.a.createElement("button",{onClick:function(){c("SHOW_COMPLETED")}},"Show Completed"),r.a.createElement("button",{onClick:function(){c("SHOW_IN_PROGRESS")}},"Show in Progress"),r.a.createElement("button",{onClick:function(){e.removeAllTasks()}},"Remove all")),r.a.createElement("div",{className:_.a.todosItemsWrapper},f))},O=Object(p.a)((function(e){return{tasksData:e.todos.tasksData,taskNewText:e.todos.taskNewText,tasksCompleted:e.todos.tasksData.filter((function(e){return e.isCompleted})),tasksInProgress:e.todos.tasksData.filter((function(e){return!e.isCompleted}))}}),{updateNewTaskText:function(e){return{type:"UPDATE_TASK_TEXT",taskNewText:e}},addTask:function(){return{type:"ADD_TASK"}},toggleIsCompleted:function(e){return{type:"TOGGLE_IS_COMPLETED",elementId:e}},toggleIsNotCompleted:function(e){return{type:"TOGGLE_IS_NOT_COMPLETED",elementId:e}},removeTask:function(e){return{type:"REMOVE_TASK",elementId:e}},removeAllTasks:function(){return{type:"REMOVE_ALL_TASKS"}}})(T),h=a(19),S=a(50),w=a(59),L=a(74),x=a(183),N=a(60),y=Object(h.c)({todos:v,users:S.a,posts:w.a,contactMessages:N.a,form:x.a}),D=Object(h.d)(y,Object(h.a)(L.a)),j=a(47),C=a.n(j),I=function(e){return r.a.createElement("div",{className:C.a.footerWrapper},r.a.createElement("div",{className:C.a.socialLinks},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://icons.iconarchive.com/icons/froyoshark/enkel/512/Telegram-icon.png",alt:"telegramm",width:"50px"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png",alt:"instagram",width:"50px"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png",alt:"linkedin",width:"50px"}))))},A=a(71),W=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,188))})),M=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,189))})),P=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,187))})),R=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"appWrapper"},r.a.createElement(l,null),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{store:D})}}),r.a.createElement(n.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(m.a,{path:"/users",render:function(){return r.a.createElement(W,{store:D})}}),r.a.createElement(m.a,{path:"/posts",render:function(){return r.a.createElement(M,{store:D})}}),r.a.createElement(m.a,{path:"/contacts",render:function(){return r.a.createElement(P,{store:D})}})),r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return i}));var n=a(8),r=a.n(n),s=a(14),o=a(45),c=a.n(o),u=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("https://jsonplaceholder.typicode.com/posts?userId=1");case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("https://reqres.in/api/users");case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},47:function(e,t,a){e.exports={footerWrapper:"footer_footerWrapper__2xgTf",socialLinks:"footer_socialLinks__3BDoG"}},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(8),r=a.n(n),s=a(14),o=a(12),c=a(3),u=a(35),i={usersData:[]},l=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)();case 2:a=e.sent,t({type:"SET_USERS_DATA",usersData:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_DATA":return Object(c.a)({},e,{usersData:Object(o.a)(t.usersData)});default:return e}}},59:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(8),r=a.n(n),s=a(14),o=a(3),c=a(35),u={posts:[]},i=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)();case 2:a=e.sent,t({type:"SET_POSTS",posts:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return Object(o.a)({},e,{posts:t.posts});default:return e}}},6:function(e,t,a){e.exports={todosWrapper:"todos_todosWrapper__1SLD_",formWrapper:"todos_formWrapper__5iLHX",form:"todos_form__1Ekqu",buttonsWrapper:"todos_buttonsWrapper__3dXgr",todosItemsWrapper:"todos_todosItemsWrapper__2MYaP",todoItem:"todos_todoItem__3v0gu",removeButton:"todos_removeButton__5Sbak",itemButton:"todos_itemButton__Kci1e",taskText:"todos_taskText__1UVe7"}},60:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(12),r=a(3),s={messages:[]},o=function(e){return{type:"SET_NEW_MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_MESSAGE":return Object(r.a)({},e,{messages:[].concat(Object(n.a)(e.messages),[t.newMessage])});default:return e}}},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createElement("g",{transform:"translate(50 50)"},r.a.createElement("g",{transform:"rotate(26.7698)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0;45",keyTimes:"0;1",dur:"0.24509803921568626s",repeatCount:"indefinite"}),r.a.createElement("path",{d:"M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20",fill:"#e2eaf2"}))),u=function(e){var t=e.svgRef,a=e.title,n=o(e,["svgRef","title"]);return r.a.createElement("svg",s({style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"330px",height:"330px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t},n),a?r.a.createElement("title",null,a):null,c)},i=r.a.forwardRef((function(e,t){return r.a.createElement(u,s({svgRef:t},e))}));a.p,t.a=function(e){return r.a.createElement("div",null,r.a.createElement(i,null))}},77:function(e,t,a){e.exports=a(181)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.da95dd0f.chunk.js.map