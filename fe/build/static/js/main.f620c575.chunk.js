(this.webpackJsonprxshell=this.webpackJsonprxshell||[]).push([[0],{162:function(e,t,a){e.exports=a(187)},167:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),c=(a(167),a(128)),l=a(129),s=a(154),u=a(151),m=a(237),p=a(18),d=a(9),g=a(130),f=a(5),h=a(19),E=a(33),b=a(32),v=a(238),O=a(239),S=a(108),w=a(250),j=a(234),y=a(243),_=a(244),C=a(245),x=a(233),T=a(242),I=a(241),P=a(240),D=a(148),R=a.n(D),N=a(89),W=a.n(N),k=a(149),A=a.n(k),L=a(122),B=a.n(L),U=a(150),K=a.n(U),H=a(131);function V(){try{return"undefined"!==typeof Storage&&JSON.parse(localStorage.getItem("fwo:auth")).isAuthorised||!1}catch(e){return!1}}var F={auth:{isAuthenticated:V,getData:function(){return function(){try{if("undefined"!==typeof Storage){var e=JSON.parse(localStorage.getItem("fwo:auth"));return null===e&&(Object(H.a)("auth"),(e={}).isAuthorised=!1),e}return!1}catch(t){return!1}}()},signInURL:"/signin"}},J=a(6);var q=Object(J.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"100px"}}}))((function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement("h1",null,"Landing page"))})),M=a(247),z=a(235),Y=a(189),G=Object(x.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(d.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,"marginTop",e.spacing(8)),Object(d.a)(t,"display","flex"),Object(d.a)(t,"flexDirection","column"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),X=function(){var e=G(),t=Object(h.e)(),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1];var d=function(e){!function(e){if("undefined"!==typeof Storage)try{e.isAuthorised=!0,localStorage.setItem("fwo:auth",JSON.stringify(e))}catch(t){console.log(t)}}(e);var a=t.location;if(V()){var n="/home";a.state&&a.state.from?(n=a.state.from.pathname,t.push(n)):t.push(n)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:e.paper,elevation:6},o.a.createElement("div",{className:e.container},o.a.createElement(S.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),d({displayName:"User",email:i})},noValidate:!0},o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email"}),o.a.createElement(M.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),o.a.createElement(M.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password_confirm",label:"Confirm Password",type:"password",id:"password_confirm",autoComplete:"current-password"}),o.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign up")))))};function Q(e){if("undefined"!==typeof Storage)try{localStorage.setItem("twtr:auth",JSON.stringify(e))}catch(t){console.log(t)}}var $=Object(x.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(d.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,"marginTop",e.spacing(8)),Object(d.a)(t,"display","flex"),Object(d.a)(t,"flexDirection","column"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},buttonPadding:{marginBottom:"30px"}}})),Z=function(){var e=$(),t=Object(h.e)(),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:e.paper,elevation:6},o.a.createElement("div",{className:e.container},o.a.createElement(S.a,{component:"h1",variant:"h5",className:e.padding},"Sign Out"),o.a.createElement(S.a,{gutterBottom:!0},"If you are not the only one on this device."),o.a.createElement(z.a,{fullWidth:!0,variant:"contained",margin:"normal",color:"secondary",onClick:function(){!function(){if("undefined"!==typeof Storage)try{localStorage.removeItem("twtr:auth")}catch(e){console.log(e)}}(),t.push("/")},className:e.buttonPadding},"Sign Out"),o.a.createElement(S.a,{component:"h1",variant:"h5",className:e.padding},"Fast Sign In"),o.a.createElement(S.a,{gutterBottom:!0},"If this is your device."),o.a.createElement(z.a,{fullWidth:!0,variant:"contained",margin:"normal",color:"primary",onClick:function(){var e=function(){if("undefined"!==typeof Storage)try{return JSON.parse(localStorage.getItem("twtr:auth"))}catch(e){console.log(e)}}(),a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};console.log("Signin.js: fetching from "+"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/fastlogin")),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/fastlogin"),a).then((function(e){return e.json()})).then((function(e){console.log("received these keys in return:"),console.log(e),Q({access:e[0][0],refresh:e[0][1]}),t.push("/")})).catch((function(e){alert(e),console.log(e)}))},className:e.buttonPadding},"Sign In"),o.a.createElement(S.a,{component:"h1",variant:"h5"},"Password Sign In"),o.a.createElement(S.a,{gutterBottom:!0},"You may password-sign-in on any device."),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var a={name:i,password:u},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)};console.log("sending out:"),console.log(a),console.log("Signin.js: fetching from "+"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/login")),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/login"),n).then((function(e){return e.json()})).then((function(e){var a;(null===(a=e[0])||void 0===a?void 0:a.access_token)?(console.log("received these keys in return:"),console.log(e),console.log(e[0].access_token),console.log(e[0].refresh_token),console.log("---"),Q({access:e[0].access_token,refresh:e[0].refresh_token}),t.push("/")):alert("Username or password is not correct")})).catch((function(e){alert(e),console.log(e)}))},noValidate:!0},o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),o.a.createElement(M.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),o.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in")),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}},o.a.createElement(E.a,{to:"/password_reset"},"Forgot Password?"),o.a.createElement(E.a,{to:"/signup"},"Register")))))},ee=Object(x.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(d.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,"marginTop",e.spacing(8)),Object(d.a)(t,"display","flex"),Object(d.a)(t,"flexDirection","column"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),te=function(){var e=ee(),t=Object(h.e)(),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),s=Object(p.a)(l,2);s[0],s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:e.paper,elevation:6},o.a.createElement("div",{className:e.container},o.a.createElement(S.a,{component:"h1",variant:"h5"},"Password reset"),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t.replace("/signin")},noValidate:!0},o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email",autoFocus:!0}),o.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Reset Password")))))},ae=Object(x.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(d.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,"marginTop",e.spacing(8)),Object(d.a)(t,"display","flex"),Object(d.a)(t,"flexDirection","column"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),ne=function(){var e=ae(),t=Object(h.e)(),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),s=Object(p.a)(l,2);s[0],s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:e.paper,elevation:6},o.a.createElement("div",{className:e.container},o.a.createElement(S.a,{component:"h1",variant:"h5"},"Password reset"),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t.replace("/signin")},noValidate:!0},o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email",autoFocus:!0}),o.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Reset Password")))))},oe=a(72),re=a.n(oe),ie=a(153),ce=a(102),le=a(88),se=a(236),ue=a(10),me=a(246),pe=a(8),de=a(152),ge=a(145),fe=ue.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:15,marginBottom:5,backgroundColor:"white",borderBottomWidth:ue.a.hairlineWidth,borderBottomColor:"rgba(0,0,0,0.1)"},rowIcon:{width:64,height:64,marginRight:20,borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.1)"},rowData:{flex:1},rowDataText:{fontSize:15,textTransform:"capitalize",color:"#4b4b4b"},rowDataSubText:{fontSize:13,opacity:.8,color:"#a8a689",marginTop:4}}),he=function(e){var t=e.item;return o.a.createElement(pe.a,{style:fe.row},o.a.createElement(de.a,{style:fe.rowIcon,source:t.pic}),o.a.createElement(pe.a,{style:fe.rowData},o.a.createElement(ge.a,{style:fe.rowDataText},"".concat(t.date," ").concat(t.user," ").concat(t.private," ").concat(t.aboutme)),o.a.createElement(ge.a,{style:fe.rowDataSubText},t.description)))},Ee=a(248),be=ue.a.create({actionsContainer:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",padding:10},actionButton:{padding:10,color:"white",borderRadius:6,width:90,backgroundColor:"lightblue",marginRight:5,marginLeft:5},actionButtonDestructive:{backgroundColor:"pink"},actionButtonText:{textAlign:"center"}}),ve=function(e){return console.log(e),o.a.createElement(pe.a,{style:be.actionsContainer},o.a.createElement(Ee.a,{style:be.actionButton,onPress:function(){alert("You could do something with this about-me action!")}},o.a.createElement(ge.a,{style:be.actionButtonText},"Reply")),o.a.createElement(Ee.a,{style:[be.actionButton,be.actionButtonDestructive],onPress:function(){alert("You could do something with this up-vote action!")}},o.a.createElement(ge.a,{style:be.actionButtonText},"Upvote")))},Oe=function(e){var t=e.tweets;return o.a.createElement(me.a,{data:t,bounceFirstRowOnMount:!0,maxSwipeDistance:160,renderItem:he,renderQuickActions:ve})},Se=ue.a.create({container:{backgroundColor:"whitesmoke",marginTop:"60px"},centering:{alignItems:"center",justifyContent:"center",padding:8,height:"100vh"}}),we=function(){var e=o.a.useState([]),t=Object(p.a)(e,2),a=t[0],r=t[1],i=o.a.useState(!0),c=Object(p.a)(i,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(ce.a)(re.a.mark((function e(){var t,a,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/tweets-results"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.results,console.log(n),r(Object(ie.a)(n)),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("Home.js: fetching from "+"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/tweets-results")),e()}),[]),o.a.createElement(le.a,{noSpacer:!0,noScroll:!0,style:Se.container},l?o.a.createElement(se.a,{style:[Se.centering],color:"#ff8179",size:"large"}):o.a.createElement(Oe,{tweets:a}))};function je(){if("undefined"!==typeof Storage)try{return JSON.parse(localStorage.getItem("twtr:auth")).access}catch(e){console.log(e)}}var ye=Object(x.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(d.a)(t,e.breakpoints.up(720+e.spacing(6)),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(d.a)(t,"marginTop",e.spacing(8)),Object(d.a)(t,"display","flex"),Object(d.a)(t,"flexDirection","column"),Object(d.a)(t,"alignItems","center"),Object(d.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),_e=function(){var e=ye(),t=Object(h.e)(),a=Object(n.useState)(""),r=Object(p.a)(a,2),i=r[0],c=r[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1],d=function(){var e=Object(ce.a)(re.a.mark((function e(a,n,o,r){var i,c,l,s,u;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=je(),console.log("access_token:"),console.log(i),c={user:a,description:n,private:o,pic:r,"access-token":i},console.log("postTweet paramdict:"),console.log(c),e.prev=6,l={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)},console.log("Compose.js: fetching from "+"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/tweet")),e.next=11,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_SERVICE_URL,"/tweet"),l);case 11:return(s=e.sent).ok?console.log("success on send."):alert("response: "+s.toString()),e.prev=13,e.next=16,s.json();case 16:u=e.sent,console.log("on reply:"),console.log(u),t.push("/"),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(13),console.log(e.t0),alert("exception on reply!");case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(6),console.log(e.t1),alert("exception on send");case 32:case"end":return e.stop()}}),e,null,[[6,28],[13,22]])})));return function(t,a,n,o){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{className:e.paper,elevation:6},o.a.createElement("div",{className:e.container},o.a.createElement(S.a,{component:"h1",variant:"h5"},"Compose Tweet"),o.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=["women","men"],a="https://randomuser.me/api/portraits/"+t[Math.floor(Math.random()*t.length)]+"/"+(Math.floor(100*Math.random())+1).toString()+".jpg";d(u,i,!0,a),alert("tweet posted!")},noValidate:!0},o.a.createElement(M.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",autoFocus:!0}),o.a.createElement(M.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"tweet",label:"Tweet",name:"tweet",autoComplete:"tweet",autoFocus:!0}),o.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Submit")),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}))))},Ce=Object(b.a)(),xe=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(g.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerPaperCollapsed:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(0)},e.breakpoints.up("sm"),{width:e.spacing(0)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},footer:{position:"fixed",left:0,bottom:0,width:"100%",backgroundColor:"grey",color:"white",textAlign:"center",fontStyle:"italic"}}}));F.auth.isAuthenticated();function Te(){var e=xe(),t=o.a.useState(!0),a=Object(p.a)(t,2),n=a[0],r=a[1],i=o.a.useState(!1),c=Object(p.a)(i,2),l=c[0],s=c[1],u=o.a.useState("Home"),d=Object(p.a)(u,2),g=d[0],b=d[1],x=function(){s(!0),r(!1)},D=function(e){return function(){b(e)}};return o.a.createElement("div",{className:e.root},o.a.createElement(m.a,null),o.a.createElement(v.a,{position:"absolute",className:Object(f.a)(e.appBar,n&&e.appBarShift,l&&e.appBar)},o.a.createElement(O.a,{title:g,className:e.toolbar},o.a.createElement(P.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0),s(!1)},className:Object(f.a)(e.menuButton,n&&e.menuButtonHidden)},o.a.createElement(R.a,null)),o.a.createElement(S.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},g),o.a.createElement(P.a,{color:"inherit"},o.a.createElement(I.a,{badgeContent:2,color:"secondary"},o.a.createElement(A.a,null))))),o.a.createElement(h.b,{history:Ce,title:g},o.a.createElement(w.a,{variant:"permanent",classes:{paper:Object(f.a)(e.drawerPaper,!n&&e.drawerPaperClose,l&&e.drawerPaperCollapsed)},open:n},o.a.createElement("div",{className:e.toolbarIcon},o.a.createElement(P.a,{onClick:function(){r(!1),s(!1)}},o.a.createElement(W.a,null))),o.a.createElement(T.a,null),o.a.createElement(j.a,null,o.a.createElement(y.a,{button:!0,component:E.a,to:"/tweets",onClick:D("Tweets")},o.a.createElement(_.a,null,o.a.createElement(B.a,null)),o.a.createElement(C.a,{primary:"Tweets"}),"Tweets"===g&&o.a.createElement(_.a,null,o.a.createElement(P.a,{onClick:x},o.a.createElement(W.a,null)))),o.a.createElement(y.a,{button:!0,component:E.a,to:"/compose",onClick:D("Compose")},o.a.createElement(_.a,null,o.a.createElement(B.a,null)),o.a.createElement(C.a,{primary:"Compose"}),"Compose"===g&&o.a.createElement(_.a,null,o.a.createElement(P.a,{onClick:x},o.a.createElement(W.a,null)))),o.a.createElement(y.a,{button:!0,component:E.a,to:"/signin",onClick:D("Sign In")},o.a.createElement(_.a,null,o.a.createElement(K.a,null)),o.a.createElement(C.a,{primary:"Sign In"}),"Sign In"===g&&o.a.createElement(_.a,null,o.a.createElement(P.a,{onClick:x},o.a.createElement(W.a,null)))))),o.a.createElement("main",{className:e.content},o.a.createElement(h.a,{exact:!0,path:"/",component:q}),o.a.createElement(h.a,{path:"/tweets",component:we}),o.a.createElement(h.a,{path:"/compose",component:_e}),o.a.createElement(h.a,{path:"/signin",component:Z}),o.a.createElement(h.a,{path:"/signup",component:X}),o.a.createElement(h.a,{path:"/password_reset",component:te}),o.a.createElement(h.a,{path:"/password_change",component:ne}))))}a(186);var Ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement(Te,{config:F}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.f620c575.chunk.js.map