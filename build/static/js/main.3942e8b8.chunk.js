(this["webpackJsonpreact-calendar-demo"]=this["webpackJsonpreact-calendar-demo"]||[]).push([[0],{113:function(t,e,n){},123:function(t,e,n){var r={"./bug1.json":[134,4],"./bug2.json":[135,5],"./bug3.json":[136,6],"./bug4.json":[137,7],"./bug5.json":[138,8],"./bug6.json":[139,9],"./bug7.json":[140,10],"./bug8_4_9_to_12.json":[141,11],"./demo1.json":[142,12]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id=123,t.exports=o},127:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(10),a=n.n(o),c=(n(113),n(32)),i=n(80),s=n(16),l=n(83),u=n(189),d=n(190),j=n(17),b=n(30),h=n.n(b),m=n(48),f=n(84),O=n.n(f),p=function(t,e){return Math.floor(Math.random()*(e-t))+t},g=15,x=90,v=700,y=function(){var t,e,n=756e5,r=60*p(9,21)*60*1e3+p(0,4)*g*60*1e3,o=r+p(1,8)*g*60*1e3+60*(t=0,e=g,Math.floor(e/(Math.random()*e+t)))*1e3;return{start:r,end:o>n?n:o}},w=function(){return new Promise((function(t,e){t(new Array(10).fill({}).map((function(){var t=function(){var t=new O.a,e=Math.random().toString(),n=t.createParagraph(p(1,4)),r=t.createParagraph(p(0,100)),o=y();return{id:e,name:n,description:r,start:o.start,end:o.end,attendees:new Array(p(0,4)).fill(null).map((function(){return t.createFullName(!1)})),location:t.createParagraph(p(0,4))}}();return{id:t.id,name:t.name,description:t.description,start:t.start,end:t.end,attendees:t.attendees,location:t.location}})))}))},C=function(){var t=Object(m.a)(h.a.mark((function t(e){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=11;break}return t.prev=1,t.next=4,n(123)("./".concat(e,".json"));case 4:return r=t.sent,t.abrupt("return",r.default.map((function(t){return{id:t.id,name:t.name,description:t.description,start:t.start,end:t.end,attendees:t.attendees,location:t.location}})));case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0.message,"Generating mock data instead");case 11:return t.abrupt("return",w());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(m.a)(h.a.mark((function t(){var e,n=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:void 0,t.next=3,C(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=n(57),N=n(58),M=n(21),E=n.n(M),L=function(){function t(e,n,r,o,a,c,i){Object(S.a)(this,t),this._layout={sequence:0,cols:[],colsBefore:[],column:void 0,totalColumns:1,colspan:1,width:"100%",height:"auto",top:0,left:0},this.id=e,this.name=n,this.description=r,this.start=o,this.end=a,this.attendees=c||[],this.location=i}return Object(N.a)(t,[{key:"layout",get:function(){return this._layout},set:function(t){this._layout=t}},{key:"length",get:function(){return this.end-this.start}},{key:"lengthInMinutes",get:function(){return this.length/1e3/60}},{key:"startInMinutes",get:function(){return this.start/1e3/60}},{key:"startFormatted",get:function(){return E.a.utc(this.start).format("h:mm A")}},{key:"endFormatted",get:function(){return E.a.utc(this.end).format("h:mm A")}}],[{key:"cloneEvent",value:function(e){var n=new t(e.id,e.name,e.description,e.start,e.end,e.attendees,e.location);return n.layout=e.layout,n}}]),t}(),B=n(92),F=function(t,e){return t.end>e.start&&t.start<e.end},H=function(t,e){return t.start===e.start?t.length>e.length?-1:1:t.start>e.start?1:-1},T=function(t){var e=Object(B.a)(t);e.sort(H);for(var n=0;n<e.length;n++)for(var r=0;r<e.length;r++)F(e[n],e[r])&&(e[n].layout.cols.push(r),n>r&&e[n].layout.colsBefore.push(r));return e.forEach((function(t,n){if(n>0&&t.layout.colsBefore.length>0){var r=e[n-1];if(r.layout.column>0){for(var o=0;o<r.layout.colsBefore.length;o++){-1!==t.layout.colsBefore.indexOf(n-(o+2))||F(t,r)||(t.layout.column=e[n-(o+2)].layout.column)}"undefined"===typeof t.layout.column&&(F(t,r)?t.layout.column=r.layout.column+1:t.layout.column=r.layout.column)}else{for(var a=0,c=0;c<t.layout.colsBefore.length;c++){e[t.layout.colsBefore[t.layout.colsBefore.length-1-c]].layout.column===a&&a++}t.layout.column=a}}else t.layout.column=0})),e.forEach((function(t,n){if(t.layout.cols.length>1){var r=[],o=[];!function t(n){for(var a=0;a<n.layout.cols.length;a++)-1===r.indexOf(n.layout.cols[a])&&(r.push(n.layout.cols[a]),o.push(e[n.layout.cols[a]].layout.column),t(e[n.layout.cols[a]]))}(t),t.layout.totalColumns=Math.max.apply(null,o)+1}})),e.forEach((function(t,e){return t.layout.sequence=e})),e},_="SET_EVENTS",I="TOGGLE_DEBUG_MODE",z={events:[],debugMode:!1},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(j.a)(Object(j.a)({},t),{},{events:e.payload.events});case I:return Object(j.a)(Object(j.a)({},t),{},{debugMode:!t.debugMode});default:return t}},R=n(91),A=Object(R.a)({shape:Object(j.a)({},{borderRadius:0})}),P=n(188),W=n(168),G=n(45),J=n(194),U=n(22),Y=n(191),q=n(42),V=n(12),K=n(180),Q=n(179),X=n(175),Z=n(174),$=n(178),tt=n(176),et=n(177),nt=n(170),rt=n(171),ot=n(173),at=n(196),ct=n(172),it=n(85),st=n.n(it),lt=n(2),ut=Object(W.a)((function(t){return{root:{width:"100%"},avatar:{minWidth:"auto",marginRight:t.spacing(1)},small:{width:t.spacing(3),height:t.spacing(3)}}})),dt=function(t){var e=ut();return Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)(G.a,{variant:"h6",component:"p",children:"Attendees"}),Object(lt.jsx)(nt.a,{className:e.root,dense:!0,children:t.attendees.map((function(t){return Object(lt.jsxs)(rt.a,{button:!0,children:[Object(lt.jsx)(ct.a,{className:e.avatar,children:Object(lt.jsx)(at.a,{className:e.small,children:Object(lt.jsx)(st.a,{})})})," ",Object(lt.jsx)(ot.a,{primary:t})]},t)}))})]})},jt=n(86),bt=n.n(jt),ht=Object(W.a)((function(t){return{root:{flexWrap:"nowrap"},location:{overflow:"hidden"},text:{marginBottom:t.spacing(.5)},textSmall:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})),mt=function(t){var e=t.fontSize,n=void 0===e?"small":e,o=t.iconColor,a=void 0===o?"action":o,c=t.fontColor,i=void 0===c?"initial":c,s=Object(q.a)(t,["fontSize","iconColor","fontColor"]),l=ht();return Object(lt.jsx)(r.Fragment,{children:s.location&&Object(lt.jsxs)(Z.a,{container:!0,direction:"row",alignItems:"center",component:Y.a,mb:2,className:l.root,children:[Object(lt.jsx)(Z.a,{item:!0,children:Object(lt.jsx)(bt.a,{fontSize:n,color:a})}),Object(lt.jsx)(Z.a,{item:!0,className:l.location,children:Object(lt.jsx)(G.a,{variant:"small"===n?"subtitle2":"body1",color:i,component:"h2",className:[l.text,"small"===n?l.textSmall:""].join(" "),children:s.location})})]})})},ft=Object(W.a)((function(t){return{text:{marginBottom:t.spacing(.5)},popoverPaper:{width:400},popoverTime:{backgroundColor:t.palette.grey[800],color:"white"},cardActions:{justifyContent:"flex-end"}}})),Ot=function(t){var e=ft(),n=Object(s.c)((function(t){return t.events.debugMode}));return Object(lt.jsxs)(X.a,{className:e.popoverPaper,children:[Object(lt.jsx)(tt.a,{className:e.popoverTime,children:Object(lt.jsx)(G.a,{children:Object(lt.jsxs)("strong",{children:[t.event.startFormatted," \u2014 ",t.event.endFormatted]})})}),n&&Object(lt.jsxs)(tt.a,{children:[Object(lt.jsx)("pre",{children:JSON.stringify(t.event.layout,null,2)}),Object(lt.jsx)(Z.a,{container:!0,children:["totalColumns","column","colspan"].map((function(e){return Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)(Z.a,{item:!0,xs:6,children:e}),Object(lt.jsx)(Z.a,{item:!0,xs:6,children:Object(lt.jsx)("input",{type:"number",value:t.event.layout[e],onChange:t.onChange.bind(undefined,e)})})]},e)}))})]}),Object(lt.jsxs)(tt.a,{children:[Object(lt.jsx)(G.a,{variant:"h5",component:"h1",children:Object(lt.jsx)("strong",{children:t.event.name})}),Object(lt.jsx)(mt,{location:t.event.location,fontSize:"large",iconColor:"primary",fontColor:"primary"}),Object(lt.jsx)(G.a,{variant:"body1",component:"p",dangerouslySetInnerHTML:{__html:t.event.description}})]}),t.event.attendees.length>0&&Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)(et.a,{}),Object(lt.jsx)(tt.a,{mt:2,children:Object(lt.jsx)(dt,{attendees:t.event.attendees})})]}),Object(lt.jsx)($.a,{className:e.cardActions,children:Object(lt.jsx)(Z.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:Object(lt.jsx)(Z.a,{item:!0,children:Object(lt.jsx)(Q.a,{size:"small",color:"primary",onClick:t.handleClose,children:"Close"})})})})]})},pt=Object(W.a)((function(t){return{text:{lineHeight:1.5,marginBottom:t.spacing(.5)}}})),gt=function(t){var e=pt(),n=Object(s.c)((function(t){return t.events.debugMode}));return Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)(G.a,{variant:"subtitle2",component:"h2",className:e.text,children:n?Object(lt.jsxs)(r.Fragment,{children:["[",t.event.layout.sequence,"] - ",Object(lt.jsx)("strong",{children:t.event.startFormatted})," to",Object(lt.jsx)("strong",{children:t.event.endFormatted})]}):Object(lt.jsx)("strong",{children:t.event.startFormatted})}),Object(lt.jsx)(G.a,{variant:"subtitle1",component:"h1",className:e.text,gutterBottom:!0,children:Object(lt.jsx)("strong",{children:t.event.name})}),n&&Object(lt.jsx)("pre",{children:JSON.stringify(t.event.layout,null,2)}),Object(lt.jsx)(mt,{location:t.event.location}),Object(lt.jsx)(G.a,{variant:"body1",component:"p",className:e.text,children:t.event.description})]})},xt=Object(W.a)((function(t){return{root:{overflow:"hidden",borderWidth:1,borderStyle:"solid",borderColor:function(t){return Object(V.a)(t.bgColor,.2)},backgroundColor:function(t){return t.bgColor},boxSizing:"border-box",transition:t.transitions.create(["border","background"]),"&:hover":{cursor:"pointer",backgroundColor:function(t){return Object(V.a)(t.bgColor,.2)},borderColor:function(t){return Object(V.a)(t.bgColor,.4)}}},layout:{position:"absolute",left:function(t){return t.layout.left},top:function(t){return t.layout.top},height:function(t){return t.layout.height},width:function(t){return t.layout.width}}}})),vt=function(t){var e=t.rowHeight,n=Object(q.a)(t,["rowHeight"]),o=Object(r.useCallback)((function(t){return function(t,e){var n=L.cloneEvent(t),r=(n.startInMinutes-540)/g;n.layout.top=e*r+r;var o=n.lengthInMinutes/g;n.layout.height=e*o+o;var a=(v-x)/n.layout.totalColumns;return n.layout.width=a*n.layout.colspan,n.layout.left=a*n.layout.column,n}(t,e)}),[e]),a=Object(r.useState)(o(n.event)),c=Object(U.a)(a,2),i=c[0],s=c[1],l=xt({bgColor:Object(r.useMemo)((function(){return function(){for(var t="#",e=0;e<3;e++)t+=("0"+Math.floor((1+Math.random())*Math.pow(16,2)/2).toString(16)).slice(-2);return t}()}),[]),layout:i.layout}),u=Object(r.useState)(null),d=Object(U.a)(u,2),b=d[0],h=d[1],m=function(){h(null)};return Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)(Y.a,{p:.5,className:[l.root,l.layout].join(" "),onClick:function(t){h(t.currentTarget)},component:"article",children:Object(lt.jsx)(gt,{event:i})}),Object(lt.jsx)(K.a,Object(j.a)(Object(j.a)({},{anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}}),{},{open:Boolean(b),anchorEl:b,onClose:m,children:Object(lt.jsx)(Ot,{event:i,handleClose:m,onChange:function(t,e){s((function(n){var r=L.cloneEvent(n);return r.layout[t]=parseInt(e.target.value),o(r)}))}})}))]})},yt=Object(W.a)((function(t){return{root:{height:"100%",width:"100%"}}})),wt=function(t){var e=yt(),n=Object(s.c)((function(t){return t.events.events}));return Object(lt.jsx)(Y.a,{className:e.root,children:n.map((function(e){return Object(lt.jsx)(vt,{event:e,rowHeight:t.rowHeight},e.id)}))})},Ct=function(){function t(e,n,r){Object(S.a)(this,t),this.h=e>12?e-12:e,this.m=n.toString().padStart(2,"0"),this.isStartOfHour=r%4===0,this.ms=60*e*60*1e3+60*n*1e3}return Object(N.a)(t,[{key:"label",get:function(){return E.a.utc(this.ms).format("h:mm A")}}]),t}(),kt=n(70),St=n.n(kt),Nt=n(52),Mt=n.n(Nt),Et=Object(W.a)((function(t){return{nowLineContainer:{position:"absolute",zIndex:10,width:"100%",cursor:"pointer",transition:t.transitions.create(["top","background"])},nowLineContainerShow:{visibility:"visible"},nowLineContainerHide:{visibility:"hidden"},nowLine:{marginLeft:t.spacing(1),width:"calc(100% - ".concat(t.spacing(1),"px )"),background:"linear-gradient(to right top, ".concat(Object(V.b)(Mt.a[900],.6),", ").concat(Object(V.b)(St.a[700],.6),")"),transition:t.transitions.create(["top","background"]),"&:hover":{background:"linear-gradient(to right top, ".concat(St.a[700],", ").concat(Mt.a[900],")"),"&:after":{background:Object(V.b)(Mt.a[900],1)}},"&:after":{content:"' '",display:"block",height:0,width:0,padding:t.spacing(1),borderRadius:"50%",background:Object(V.b)(Mt.a[900],.6),position:"absolute",left:-t.spacing(1),top:-t.spacing(1)}}}})),Lt=function(t){var e=t.rowHeight,n=(Object(q.a)(t,["rowHeight"]),Object(r.useCallback)((function(){return E.a.duration(E()().seconds(0).milliseconds(0).format("HH:mm")).asMilliseconds()}),[])),o=Object(r.useRef)(null),a=324e5,c=756e5,i=n(),s=Et(),l=Object(r.useState)(!1),u=Object(U.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(!1),h=Object(U.a)(b,2),m=h[0],f=h[1],O=Object(r.useState)(0),p=Object(U.a)(O,2),x=p[0],v=p[1];Object(r.useEffect)((function(){if(0===x&&i>=a&&i<c&&e>0){var t=i-a,n=(e+1)/g*E.a.duration(t).asMinutes();v(n)}}),[x,e,i,a,c]),Object(r.useEffect)((function(){!d&&i>a&&i<c?f(!0):d&&i>c&&j(!1),m&&!d&&(o.current=setInterval((function(){v((function(t){return t+e/g}))}),6e4),j(!0))}),[m,d,x,e,a,c,i]),Object(r.useEffect)((function(){return function(){o.current&&clearTimeout(o.current)}}),[]);return Object(lt.jsx)(J.a,{title:"Now ".concat(E()().format("h:mm A")),placement:"left",children:Object(lt.jsx)("div",{className:[s.nowLineContainer,d?s.nowLineContainerShow:s.nowLineContainerHide].join(" "),style:{top:x},children:Object(lt.jsx)(et.a,{className:s.nowLine})})})},Bt=Object(W.a)((function(t){return{timeContainer:{borderTopWidth:1,borderTopStyle:"solid"},timeContainerBold:{borderTopColor:t.palette.grey[500]},timeContainerNormal:{borderTopColor:t.palette.grey[100]},timeContainerNormalEnd:{backgroundColor:"transparent"},timeLabel:{width:x,padding:t.spacing(1),textAlign:"right",borderRightWidth:1,borderRightStyle:"solid",borderRightColor:t.palette.grey[500]},timeLabelBold:{fontWeight:"bold"},timeLabelNormal:{color:t.palette.grey[500]},eventContainer:{flexGrow:1},timeEndContainer:{backgroundColor:"transparent"},timeLabelEnd:{borderRightColor:"transparent"}}})),Ft=Object(r.forwardRef)((function(t,e){var n=Bt(),r={};return e&&(r.ref=e),Object(lt.jsx)(X.a,Object(j.a)(Object(j.a)({},r),{},{elevation:0,className:[n.timeContainer,t.timeData.isStartOfHour?n.timeContainerBold:n.timeContainerNormal,t.isEnd?n.timeContainerNormalEnd:""].join(" "),children:Object(lt.jsxs)(Z.a,{container:!0,children:[Object(lt.jsx)(Z.a,{item:!0,className:[n.timeLabel,t.isEnd?n.timeLabelEnd:""].join(" "),children:Object(lt.jsx)(G.a,{variant:"body2",className:[t.timeData.isStartOfHour?n.timeLabelBold:n.timeLabelNormal].join(" "),children:t.timeData.label})}),Object(lt.jsx)(Z.a,{item:!0,className:n.eventContainer})]})}))})),Ht=Object(W.a)((function(t){return{root:{position:"relative",width:"100%"},eventsContainer:{position:"absolute",top:0,left:x,width:v-x,height:function(t){return"calc(100% - ".concat(t.rowHeight,"px)")}}}})),Tt=function(){var t=Object(r.useState)(0),e=Object(U.a)(t,2),n=e[0],o=e[1],a=Object(r.useRef)(null);Object(r.useEffect)((function(){a.current&&o(a.current.clientHeight)}),[a]);var c=Ht({rowHeight:n}),i=new Array(48).fill({}).map((function(t,e){var n=Math.floor(e/4)+9;return new Ct(n,e%4*g,e)}));return Object(lt.jsxs)("section",{className:c.root,children:[Object(lt.jsx)(Lt,{rowHeight:n}),Object(lt.jsxs)(Y.a,{children:[i.map((function(t,e){return Object(lt.jsx)(Ft,{timeData:t},e)})),Object(lt.jsx)(Ft,{ref:a,isEnd:!0,timeData:new Ct(21,0,0)})]}),Object(lt.jsx)("div",{className:c.eventsContainer,children:Object(lt.jsx)(wt,{rowHeight:n})})]})},_t=n(182),It=n(88),zt=n.n(It),Dt=function(){var t=Object(s.b)(),e=Object(r.useCallback)((function(){t(function(){var t=Object(m.a)(h.a.mark((function t(e){var n,r,o,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n);case 2:r=t.sent,o=r.map((function(t){return new L(t.id,t.name,t.description,t.start,t.end,t.attendees,t.location)})),console.log(o),a=T(o),e({type:_,payload:{events:a}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[t]);return Object(r.useEffect)((function(){e()}),[e]),Object(lt.jsxs)(r.Fragment,{children:[Object(lt.jsx)("div",{style:{position:"fixed",left:10,top:70},children:Object(lt.jsx)(J.a,{title:"Refresh Events",placement:"right",children:Object(lt.jsx)(_t.a,{onClick:e,size:"small",children:Object(lt.jsx)(zt.a,{fontSize:"small"})})})}),Object(lt.jsx)(G.a,{variant:"h5",component:"h1",children:"Today's Calendar"}),Object(lt.jsx)(G.a,{color:"textSecondary",gutterBottom:!0,children:E()().format("dddd, MMMM DD, YYYY")}),Object(lt.jsx)(Tt,{})]})},Rt=n(89),At=n.n(Rt),Pt=n(90),Wt=n.n(Pt),Gt=n(193),Jt=n(187),Ut=n(184),Yt=n(185),qt=n(183),Vt=n(71),Kt=n.n(Vt),Qt=n(186),Xt=Object(W.a)((function(t){return{root:{position:"fixed",left:10,top:20}}})),Zt=function(){var t=Xt(),e=Object(r.useState)(!1),n=Object(U.a)(e,2),o=n[0],a=n[1],c=function(){a(!1)};return Object(lt.jsxs)("div",{className:t.root,children:[Object(lt.jsx)(J.a,{title:"Explanation",placement:"right",children:Object(lt.jsx)(_t.a,{onClick:function(t){a(!0)},size:"small",children:o?Object(lt.jsx)(At.a,{fontSize:"small"}):Object(lt.jsx)(Wt.a,{fontSize:"small"})})}),Object(lt.jsxs)(Gt.a,{open:o,onClose:c,children:[Object(lt.jsx)(qt.a,{children:"Original demo constraints"}),Object(lt.jsx)(Ut.a,{children:Object(lt.jsxs)(Yt.a,{component:"div",children:[Object(lt.jsx)(nt.a,{dense:!0,children:["Use React and some other packages, <strong><em>except a package that generates a calendar layout</em></strong>.","Randomely generate 10 calendar events.","9 AM to 9 PM.","Meeting is at least 15 minutes long, with step of 1 minutes.","Fixed width of 700px.","Various edge cases of overlapping events."].map((function(t,e){return Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(Qt.a,{style:{minWidth:0},children:Object(lt.jsx)(Kt.a,{})}),Object(lt.jsx)(ot.a,{primary:Object(lt.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})]},e)}))}),Object(lt.jsx)("h4",{children:"Extras"}),Object(lt.jsx)(nt.a,{dense:!0,children:["Shows a NowLine when viewing in between 9AM to 9PM",'Issues are tracked on <a target="_blank" href="https://github.com/dattupatel/react-calendar-demo/">Github</a>'].map((function(t,e){return Object(lt.jsxs)(rt.a,{children:[Object(lt.jsx)(Qt.a,{style:{minWidth:0},children:Object(lt.jsx)(Kt.a,{})}),Object(lt.jsx)(ot.a,{primary:Object(lt.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})]},e)}))})]})}),Object(lt.jsx)(Jt.a,{children:Object(lt.jsx)(Q.a,{onClick:c,color:"primary",children:"Close"})})]})]})},$t=n(192),te=Object(W.a)((function(t){return{root:{position:"fixed",left:0,top:110}}})),ee=function(){var t=te(),e=Object(s.b)(),n=Object(s.c)((function(t){return t.events.debugMode}));return Object(lt.jsx)(J.a,{title:"Debug?",placement:"right",children:Object(lt.jsx)($t.a,{checked:n,onChange:function(t){e({type:I})},className:t.root,color:"primary"})})},ne=Object(W.a)((function(t){return{root:{marginTop:t.spacing(1),marginBottom:t.spacing(10),width:v,padding:0}}})),re=function(){var t=ne();return Object(lt.jsxs)("div",{style:{minWidth:850},children:[Object(lt.jsx)(Zt,{}),Object(lt.jsx)(ee,{}),Object(lt.jsx)(P.a,{className:t.root,children:Object(lt.jsx)(Dt,{})})]})},oe=Object(c.combineReducers)({events:D}),ae=Object(c.createStore)(oe,Object(i.composeWithDevTools)(Object(c.applyMiddleware)(l.a)));var ce=function(){return Object(lt.jsx)(s.a,{store:ae,children:Object(lt.jsxs)(u.a,{theme:A,children:[Object(lt.jsx)(d.a,{}),Object(lt.jsx)(re,{})]})})},ie=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))};a.a.render(Object(lt.jsx)(ce,{}),document.getElementById("root")),ie()}},[[127,1,2]]]);
//# sourceMappingURL=main.3942e8b8.chunk.js.map