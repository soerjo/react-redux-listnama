(this["webpackJsonpreact-redux-listnama"]=this["webpackJsonpreact-redux-listnama"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=(a(49),a(50),a(33)),l=a(99),o=a(98),u=a(89),d=a(92),b=a(15),m=a(28),j={users:[{name:"Soerjo",describe:"Manusia ciptaan Tuhan yang luarbiasa, terkadang banyak melakukan kesalahan dan sering kali menglami pembentukan Tuhan namun Ia tetap bertahan dan berdiri teguh kepada Tuhan."}]};var h=a(7),p=Object(u.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function O(){var e=p(),t=Object(b.b)(),a=r.a.useState(""),n=Object(s.a)(a,2),i=n[0],c=n[1],u=r.a.useState(""),m=Object(s.a)(u,2),j=m[0],O=m[1];return Object(h.jsx)(d.a,{component:"main",maxWidth:"xs",children:Object(h.jsx)("div",{className:e.paper,children:Object(h.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(h.jsx)(o.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(o.a,{variant:"outlined",id:"describe",label:"Describe the user",required:!0,fullWidth:!0,multiline:!0,value:j,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)(l.a,{disabled:!i||!j,type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),t(function(e){return{type:"store",value:e}}({name:i,describe:j})),c(""),O("")},children:"Add User"})]})})})}var v=a(94),x=a(97),f=a(95),g=a(96),k=Object(u.a)({root:{width:"80%",minWidth:275,margin:"auto",marginBottom:"10px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function y(e){var t=e.user,a=k(),n=t.name,r=t.describe,i=Object(b.b)();return Object(h.jsxs)(v.a,{className:a.root,variant:"outlined",children:[Object(h.jsxs)(f.a,{children:[Object(h.jsx)(g.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:"User Name:"}),Object(h.jsx)(g.a,{variant:"h5",component:"h2",children:n.toUpperCase()}),Object(h.jsx)(g.a,{variant:"body2",component:"p",color:"textSecondary",children:r})]}),Object(h.jsx)(x.a,{children:Object(h.jsx)(l.a,{size:"small",onClick:function(){return i({type:"deleteData",value:n})},children:"Delete"})})]})}var N=function(){var e=Object(b.c)((function(e){return e.storing})).users;return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)("div",{children:e.map((function(e,t){return Object(h.jsx)(y,{user:e},t)}))})]})},S=a(34),C=Object(S.a)({storing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(console.log("isi dari action: ",t.value),t.type){case"store":return Object(m.a)(Object(m.a)({},e),{},{user:e.users.push(t.value)});case"deleteData":var a=e.users.filter((function(e){return e.name!==t.value}));return Object(m.a)(Object(m.a)({},e),{},{users:a});default:return e}}}),D=Object(S.b)(C);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b.a,{store:D,children:Object(h.jsx)(N,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8feb6d9f.chunk.js.map