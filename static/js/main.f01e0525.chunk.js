(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){},152:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(10),c=a.n(s),r=a(26),i=a(105),o="ADD_TASK",l="REMOVE_TASK",j="REMOVE_ALL_TASK",m="descTask",d="timeStart",b="tasksList",h="Name of your task",u="#3057c8",O="2px solid #e0e0e0",x=["To wash the dishes","Clean up the house","fill the car","read a book","teach lessons","Vacuum the room","Learn English",'Make a test of "Brocoders"',"Finish a pet project","Repeat Design Algorithms","Learn React","Learn React Redax, Mobx","Repeat regular expressions","Take over the world","Invent a vaccine against coronavirus","help the poor","Meditate","To do something useful for humanity","Do sports","Find a new hobby","The Running","To build a house","To see a movie","Relax","Wash","Mop the floors"],g={tasksList:[]},p=function(e){return{type:o,payload:e}},f=a(37),v=(a(124),a(197)),k=a(41),T=a(13),S=a(32),I=a(106),N=a(202),y=a(6),C=a.n(y),M=(C.a.number.isRequired,C.a.number.isRequired,C.a.number.isRequired,C.a.number,C.a.number,C.a.number,a(2)),R=["time"],D=function(e){var t=e.time,a=Object(I.a)(e,R);return Object(M.jsxs)(N.a,Object(r.a)(Object(r.a)({},a),{},{children:[t.h>=10?t.h:"0"+t.h,":",t.m>=10?t.m:"0"+t.m,":",t.s>=10?t.s:"0"+t.s,t.day&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("br",{}),"(",t.day<10?"0"+t.day:t.day,".",t.month<10?"0"+t.month:t.month,".",t.year,")"]})]}))},w=a(192),L=a(198),E=a(33),z=a.n(E),B=z()({circle:{width:250,height:250,borderRadius:"50%",boxShadow:"0 6px 11px rgb(0, 0, 0, .22)",margin:"15px 0"},timerBlock:{color:u,fontSize:38}}),J=function(e){var t=e.time,a=B();return Object(M.jsx)(w.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:1,className:a.circle,children:Object(M.jsx)(D,{time:t,className:a.timerBlock})})},A=a(193),F=a(102),K=z()({panelControl:{marginTop:20},input:{"& > div":{color:u}},tasksLog:{background:"#1fbcd3",color:"white",textTransform:"capitalize",height:50},panelControlItem:{color:"gray",padding:"20px 0"},taskBlock:{color:u,padding:"20px 0",background:"#eaf6ff",borderBottom:O},panelLog:{borderBottom:O},btn:{color:u,background:"white"}}),_=function(e){var t=e.inputTask,a=e.handleChange,n=e.time,s=e.isRun,c=e.startTimer,r=e.stopTimer,i=e.taskList,o=e.deleteTask,l=e.generateTasks,j=K(),m=Object(T.f)();return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(w.a,{container:!0,spacing:2,direction:"column",alignItems:"center",className:j.panelControl,children:[Object(M.jsx)(w.a,{item:!0,children:Object(M.jsx)(L.a,{id:"task-input",label:!1,color:"primary",inputProps:{min:0,maxLength:55,style:{textAlign:"center"}},multiline:!0,maxRows:4,value:t,onChange:function(e){return a(e)},className:j.input})}),Object(M.jsx)(w.a,{item:!0,children:Object(M.jsx)(J,{time:n})}),Object(M.jsx)(w.a,{item:!0,children:s?Object(M.jsx)(A.a,{variant:"contained",color:"secondary",onClick:r,children:"STOP"}):Object(M.jsx)(A.a,{variant:"outlined",onClick:c,color:"primary",children:"START"})})]}),Object(M.jsx)(w.a,{container:!0,justifyContent:"center",className:j.panelControl,children:Object(M.jsx)(w.a,{item:!0,className:j.tasksLog,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:"TASKS LOG"})}),Object(M.jsxs)(w.a,{container:!0,justifyContent:"space-around",alignItems:"center",className:j.panelLog,children:[Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"\u2116"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Task"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Time start"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Time end"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Time spend"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Info"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{className:j.panelControlItem,children:"Delete"})})]}),Object(M.jsxs)(F.a,{children:[i.map((function(e,t){var a=e.id,n=e.descTask,s=e.startTime,c=e.endTime,r=e.spendTime;return Object(M.jsxs)(w.a,{container:!0,justifyContent:"space-around",alignItems:"center",className:j.taskBlock,children:[Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{children:t+1})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(N.a,{children:n.length>=13?n.slice(0,12)+"...":n})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(D,{time:s})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(D,{time:c})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(D,{time:r})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(A.a,{variant:"outlined",className:j.btn,onClick:function(){return m.push("/task/"+a)},children:"Info"})}),Object(M.jsx)(w.a,{item:!0,xs:1,children:Object(M.jsx)(A.a,{variant:"outlined",className:j.btn,onClick:function(){return o(a)},children:"Delete"})})]},a)})),Object(M.jsx)(w.a,{container:!0,spacing:2,direction:"column",alignItems:"center",className:j.panelControl,children:Object(M.jsx)(A.a,{variant:"outlined",color:"primary",onClick:l,children:"Generate tasks"})})]})]})},q=function(){var e=Object(n.useState)({h:0,m:0,s:0}),t=Object(S.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(0),r=Object(S.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(!1),j=Object(S.a)(l,2),m=j[0],d=j[1],b=a.h,h=a.m,u=a.s,O=function(){59===h&&(b++,h=-1),59===u&&(h++,u=-1),s({h:b,m:h,s:u}),u++};return{start:function(){O(),d((function(e){return!e})),o(setInterval(O,1e3))},stop:function(){clearInterval(i),d((function(e){return!e})),s({h:0,m:0,s:0})},time:a,isRun:m,setTimer:function(e){var t=new Date(e),a=new Date(Date.now()-t);b=parseInt(a/36e5%24),h=parseInt(a/6e4%60),u=parseInt(a/1e3%60)}}},G=function(e,t){var a=new Date(e),n=new Date(t-a);return{hours:parseInt(n/36e5%24),minutes:parseInt(n/6e4%60),seconds:parseInt(n/1e3%60),spendTimeMs:n}},H=a(200),V=function(e){var t=e.startTime,a=e.endTime,n=e.spendTime,s=e.descTask;return{id:Object(H.a)(),descTask:s,startTime:{h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear()},endTime:{h:a.getHours(),m:a.getMinutes(),s:a.getSeconds(),day:a.getDate(),month:a.getMonth()+1,year:a.getFullYear()},spendTime:{h:n.hours,m:n.minutes,s:n.seconds}}},W=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.tasks.tasksList})),a=Object(n.useState)(h),s=Object(S.a)(a,2),c=s[0],r=s[1],i=q(),o=i.start,b=i.stop,u=i.time,O=i.isRun,g=i.setTimer;Object(n.useEffect)((function(){if(localStorage.getItem(d)&&localStorage.getItem(m)){var e=JSON.parse(localStorage.getItem(d)),t=JSON.parse(localStorage.getItem(m));r(t),g(e),o()}}),[]);return Object(M.jsx)(_,{inputTask:c,handleChange:function(e){r(e.currentTarget.value),localStorage.setItem(m,JSON.stringify(e.currentTarget.value))},time:u,isRun:O,startTimer:function(){localStorage.setItem(d,JSON.stringify(Date.now())),localStorage.setItem(m,JSON.stringify(c)),o()},stopTimer:function(){var t=JSON.parse(localStorage.getItem(d)),a=G(t,Date.now()),n=new Date(t),s=new Date(t+Date.parse(a.spendTimeMs)),i=V({startTime:n,endTime:s,spendTime:a,descTask:c});e(p(i)),localStorage.removeItem(d),localStorage.removeItem(m),r(h),b()},taskList:t,deleteTask:function(t){e({type:l,payload:t})},generateTasks:function(){e({type:j});for(var t=Math.floor(6*Math.random())+10,a=1e3*(Math.floor(24*Math.random())+1)*60*24,n=1e3*(Math.floor(60*Math.random())+1)*60,s=1e3*(Math.floor(60*Math.random())+1),c=1e3*(Math.floor(7*Math.random())+1)*60*60*24,r=new Date(Date.now()-c-s-n-a),i=Date.parse(r),o=0;o<t;o++){var l=new Date(i);i+=1e3*(Math.floor(90*Math.random())+10)*60+1e3*Math.floor(60*Math.random());var m=new Date(i),d=G(l,m),b=Math.floor(Math.random()*x.length),h=V({startTime:l,endTime:m,spendTime:d,descTask:x[b]});e(p(h))}}})},P=a(194),Y=a(195),Q=a(196),U=a(103),X=a.n(U),Z=(a(152),function(){return Object(M.jsx)("div",{className:"loadingio-spinner-spin-11c6t503gmv",children:Object(M.jsxs)("div",{className:"ldio-06z2k1d0zc9",children:[Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})}),Object(M.jsx)("div",{children:Object(M.jsx)("div",{})})]})})}),$=z()({card:{height:"100vh"},fontSize:{fontSize:20},btn:{fontSize:15},marginRight:{marginRight:3}}),ee=function(e){var t=e.taskData,a=e.isLoading,n=Object(T.f)(),s=$();return a?Object(M.jsx)(w.a,{container:!0,justifyContent:"center",alignItems:"center",className:s.card,children:Object(M.jsx)(Z,{})}):Object(M.jsx)(w.a,{container:!0,justifyContent:"center",alignItems:"center",className:s.card,children:Object(M.jsxs)(P.a,{children:[Object(M.jsxs)(Y.a,{children:[Object(M.jsxs)(w.a,{container:!0,alignItems:"center",className:s.fontSize,children:[Object(M.jsx)(N.a,{className:s.marginRight,children:Object(M.jsx)("b",{children:"Task:"})}),Object(M.jsx)(N.a,{children:t.descTask})]}),Object(M.jsx)("br",{}),Object(M.jsxs)(w.a,{container:!0,alignItems:"flex-start",className:s.fontSize,children:[Object(M.jsx)(N.a,{className:s.marginRight,children:Object(M.jsx)("b",{children:"Start Time:"})}),Object(M.jsx)(N.a,{children:Object(M.jsx)(D,{time:t.startTime,className:s.timerBlock})})]}),Object(M.jsx)("br",{}),Object(M.jsxs)(w.a,{container:!0,alignItems:"flex-start",className:s.fontSize,children:[Object(M.jsx)(N.a,{className:s.marginRight,children:Object(M.jsx)("b",{children:"End Time:"})}),Object(M.jsx)(N.a,{children:Object(M.jsx)(D,{time:t.endTime,className:s.timerBlock})})]}),Object(M.jsx)("br",{}),Object(M.jsxs)(w.a,{container:!0,alignItems:"center",className:s.fontSize,children:[Object(M.jsx)(N.a,{className:s.marginRight,children:Object(M.jsx)("b",{children:"Spend Time:"})}),Object(M.jsx)(N.a,{children:Object(M.jsx)(D,{time:t.spendTime,className:s.timerBlock})})]})]}),Object(M.jsx)(Q.a,{children:Object(M.jsxs)(A.a,{size:"small",onClick:function(){return n.push("/")},className:s.btn,children:[Object(M.jsx)(X.a,{fontSize:"small",className:s.marginRight})," ","back"]})})]})})},te=function(){var e=Object(T.g)().id,t=Object(T.f)(),a=Object(n.useState)(!0),s=Object(S.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!1),o=Object(S.a)(i,2),l=o[0],j=o[1];return Object(n.useEffect)((function(){if(localStorage.getItem(b)){var a=JSON.parse(localStorage.getItem(b)).find((function(t){return t.id===e}));return a?(r(!1),j(a)):t.push("/404")}return t.push("/404")}),[c]),Object(M.jsx)(ee,{isLoading:c,taskData:l})},ae=a.p+"static/media/error-404-design.18f495d7.png",ne=a(199),se=a(201),ce=z()({errorBlock:{height:"100vh"},block:{marginTop:15}}),re=function(){var e=ce(),t=Object(T.f)();return Object(M.jsxs)(w.a,{container:!0,justifyContent:"center",alignItems:"center",direction:"column",className:e.errorBlock,children:[Object(M.jsx)(w.a,{item:!0,children:Object(M.jsx)("img",{src:ae,alt:"404"})}),Object(M.jsx)(w.a,{item:!0,children:Object(M.jsx)(ne.a,{severity:"error",children:"Sorry, this page not found :("})}),Object(M.jsxs)(w.a,{item:!0,className:e.block,children:["Go"," ",Object(M.jsx)(se.a,{color:"primary",href:"#",underline:"always",onClick:function(){return t.push("/")},children:"Home"}),"?"]})]})},ie=[{path:"/",Component:W,isExact:!0},{path:"/task/:id",Component:te,isExact:!0},{path:"/404",Component:re,isExact:!0},{path:"*",Component:re,isExact:!1}];var oe=function(){var e=Object(f.b)();return Object(n.useEffect)((function(){localStorage.getItem(b)&&JSON.parse(localStorage.getItem(b)).forEach((function(t){return e(p(t))}))}),[e]),Object(M.jsx)(v.a,{maxWidth:"lg",children:Object(M.jsx)(k.a,{children:Object(M.jsx)(T.c,{children:ie.map((function(e){var t=e.path,a=e.Component,n=e.isExact;return Object(M.jsx)(T.a,{path:t,exact:n,component:a},t)}))})})})},le=a(78),je=a(104),me=Object(le.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var a=[t.payload].concat(Object(i.a)(e.tasksList)),n=Object(r.a)(Object(r.a)({},e),{},{tasksList:a});return localStorage.setItem(b,JSON.stringify(a)),n;case l:var s=e.tasksList.filter((function(e){return e.id!==t.payload})),c=Object(r.a)(Object(r.a)({},e),{},{tasksList:s});return localStorage.setItem(b,JSON.stringify(s)),c;case j:return localStorage.removeItem(b),Object(r.a)(Object(r.a)({},e),{},{tasksList:[]});default:return e}}}),de=Object(le.createStore)(me,Object(je.composeWithDevTools)());c.a.render(Object(M.jsx)(f.a,{store:de,children:Object(M.jsx)(oe,{})}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.f01e0525.chunk.js.map