(this["webpackJsonpttd-demo"]=this["webpackJsonpttd-demo"]||[]).push([[0],{33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(3),r=a.n(c),i=a(15),s=a.n(i),o=(a(33),a(23)),l=a(18);l.a.initializeApp({apiKey:"AIzaSyAB_oF3A50erwT5cvkgSeoxvaFsqxprz1U",authDomain:"videoanalytics-414b3.firebaseapp.com",projectId:"videoanalytics-414b3",storageBucket:"videoanalytics-414b3.appspot.com",messagingSenderId:"63961094206",appId:"1:63961094206:web:fbb1bf1332ac1a8b32996f",measurementId:"G-PM2PFS4C9Z"}),l.a.analytics();var d=l.a,p=a(9),u=a.n(p),b=a.p+"static/media/dashboard2.4ac8149a.png",m=a(11),j=function(e){var t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useState)("\u25ba"),i=Object(o.a)(r,2),s=i[0],l=i[1],p=Object(c.useState)(.1),j=Object(o.a)(p,2),A=j[0],g=j[1],h=Object(m.b)(),v=Object(m.c)((function(e){return e.data})),O=Object(m.c)((function(e){return e.rpm})),_=Object(m.c)((function(e){return e.mph}));Object(c.useEffect)((function(){return t.current.addEventListener("timeupdate",y),function(){t&&t.current&&t.current.removeEventListener("timeupdate",y)}}),[v,_,O]),Object(c.useEffect)((function(){d.firestore().collection("bunnyVideo").doc("UBgphJ8hmICKHb3gtl3Y").get().then((function(e){h({type:"add",val:e.data().FirstSlot})}))}),[]);var y=function(){var e=t.current.currentTime/t.current.duration*100;g(e);var a=t.current.currentTime/60;v.map((function(e){a<e.timeUpperLimit&&a>e.timeLowerLimit&&(h({type:"changeMph",val:e.mph}),h({type:"changeRpm",val:e.rpm}))})),100==e&&x()},f=function(){t.current.paused?(l("\u275a\u275a"),t.current.play()):(l("\u25ba"),t.current.pause())},x=function(){t.current.pause(),g(.5),l("\u25ba"),h({type:"changeMph",val:"0"}),h({type:"changeRpm",val:"0"})},C=function(e){var a=e.target.name;t.current[a]=e.target.value},k=function(e){t.current.currentTime+=parseFloat(e.currentTarget.dataset.skip)};return Object(n.jsxs)("div",{className:u.a.player,children:[Object(n.jsx)("video",{className:u.a.player__video,ref:t,onClick:f,src:e.src,type:"video/mp4"}),Object(n.jsxs)("div",{className:u.a.dynamicControls,children:[Object(n.jsxs)("div",{className:u.a.mph,children:[Object(n.jsx)("img",{src:b,style:{width:"65px",height:"65px"}}),Object(n.jsx)("span",{children:_})]}),Object(n.jsxs)("div",{className:u.a.mph,children:[Object(n.jsx)("img",{src:b,style:{width:"65px",height:"65px"}}),Object(n.jsx)("span",{children:O})]})]}),Object(n.jsxs)("div",{className:u.a.player__controls,children:[Object(n.jsx)("div",{className:u.a.progress,ref:a,onClick:function(e){var n=e.nativeEvent.offsetX/a.current.offsetWidth*t.current.duration;t.current.currentTime=n},children:Object(n.jsx)("div",{className:u.a.progress__filled,style:{flexBasis:"".concat(A,"%")}})}),Object(n.jsxs)("div",{className:u.a.controlButtons,children:[Object(n.jsxs)("div",{className:u.a.controlCapsule,children:[Object(n.jsx)("button",{"data-skip":"-10",className:u.a.icon,onClick:k,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAuklEQVRIie3VsQ3CMBCF4V9QQcMEGYGeMWABZmEM2IA1CEWqrMAGlHRIocHoFF8gZzm2kPxJJ6V4eoUV+6AoClgDLXCdKK/aAw+ge0/svGcFnEXBryJrXrUBbkrJUJE175kDB+A5UNIvsuZVFVB/KegXWfOqHXAfUdIF5j1L4DSywI01r2qMJSHzMRPfQfcshgVwJMNRO1sS/1xSBVwMRVGuk5PlAZGSP5lSliUhJV+Lklvs9UT5ovhTL8w18VO1JlgoAAAAAElFTkSuQmCC",style:{width:"29px",height:"29px",backgroundColor:"lightgray",borderRadius:"5px"}})}),Object(n.jsx)("button",{className:u.a.player__button,onClick:f,title:"Toggle Play",children:s}),Object(n.jsx)("button",{"data-skip":"25",className:u.a.icon,onClick:k,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAwUlEQVRIie3VsW0CMRiG4QckCtKyQfqsQMkMZApmoUu2yA4RCCSYIk3KpKIipsFNJO7OPt8Vp/ukr/Irv9Iv2T9jxgw9O5zx0hH/MOHeCzaYFOZrL4r9wKIg3/iigG+sCvFJ4oA/bDFrySeLY494bsFniwN+8ZrJtxLHvmfwTyXEOd1H0bRuBIUTqg66GvUb5m3EP1hn8pWjqOpB2nP6zyeLr9I+kEd8kvgLy0J8Y3HvS6L3tfiJk+aLPZUfM2bAuQEkB/LK6C2gmAAAAABJRU5ErkJggg==",style:{width:"29px",height:"29px",backgroundColor:"lightgray",borderRadius:"5px"}})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"range",name:"playbackRate",className:"player__slider",min:"0.5",max:"2",step:"0.1",onChange:C}),Object(n.jsx)("input",{type:"range",name:"volume",className:"player__slider",min:"0",max:"1",step:"0.05",onChange:C})]})]})]})]})},A=a.p+"static/media/bunnyStory.589e728e.mp4";a(40);var g=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:"Video Analytics Player"}),Object(n.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:Object(n.jsx)(j,{src:A})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},v=a(17),O=a(27),_=a(12),y={data:[],mph:"0",rpm:"0"};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return Object(_.a)(Object(_.a)({},e),{},{data:Object(O.a)(t.val)});case"changeMph":return Object(_.a)(Object(_.a)({},e),{},{mph:t.val});case"changeRpm":return Object(_.a)(Object(_.a)({},e),{},{rpm:t.val});default:return e}},x=Object(v.b)(f);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m.a,{store:x,children:Object(n.jsx)(g,{})})}),document.getElementById("root")),h()},9:function(e,t,a){e.exports={player__controls:"Video_player__controls__32Uim",player__video:"Video_player__video__21rQy",player:"Video_player__2ngrn",mph:"Video_mph__1gc-r",progress:"Video_progress__2nJP8",progress__filled:"Video_progress__filled__8vehh",player__button:"Video_player__button__2c1zQ",icon:"Video_icon__37oMA",controlCapsule:"Video_controlCapsule__2IxOJ",controlButtons:"Video_controlButtons__2Onnx",dynamicControls:"Video_dynamicControls__1jqZy"}}},[[41,1,2]]]);
//# sourceMappingURL=main.5fc84360.chunk.js.map