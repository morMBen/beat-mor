(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a,c=n(1),s=n.n(c),r=n(33),o=n.n(r),u=n(2),i=n(12),l=n(5),d=n(3),j=n.n(d),b=n(4),h=n(16),O=n.n(h);a="api";var m=O.a.create({baseURL:a}),f=(n(60),n.p+"static/media/openBackgound.68c73abe.jpg"),p=n(0),x=function(e){var t=e.setConsoleIsOpen,n=e.setCurrentCollection,a=e.consoleIsOpen,s=Object(c.useState)(null),r=Object(u.a)(s,2),o=r[0],l=r[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/sound-collection");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),a&&t(!1)}),[a,t]);return Object(p.jsx)("div",{style:{paddingTop:"5rem"},children:Object(p.jsx)("div",{className:"home-main",children:o&&o.map((function(e,a){return Object(p.jsx)("section",{className:"home-section",onClick:function(){n(e._id),t(!0)},children:Object(p.jsxs)(i.b,{to:"/console",children:[Object(p.jsx)("figure",{className:"home-figure-img",children:Object(p.jsx)("img",{src:f,alt:"fasd"})}),Object(p.jsx)("figure",{className:"home-figure-text",children:Object(p.jsxs)("article",{className:"home-article",children:[Object(p.jsx)("span",{children:e.ownerName}),Object(p.jsx)("h3",{className:"home-h3",children:e.name})]})})]})},"collection".concat(a))}))})})},g=(n(67),function(e){e.openCloseLogMenu,e.userlog,e.userDetails;var t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(p.jsxs)("div",{className:"my-nav",style:{fontSize:"17px"},children:[Object(p.jsx)(i.b,{to:"/",className:"menu-logo",children:"A Beat Mor"}),Object(p.jsx)("div",{className:"hamburger",onClick:function(){s(!a)},children:"dads"}),Object(p.jsxs)("div",{className:"nav-menu",style:{maxHeight:a?"300px":"0"},children:[Object(p.jsx)(i.b,{to:"/search",className:"menu-link",children:"Search"}),Object(p.jsx)(i.b,{to:"/create",className:"menu-link",children:"Create"}),Object(p.jsx)(i.b,{to:"/",className:"menu-link",children:"Home"})]})]})}),v=function(e){e.type;var t=e.onChange,n=e.value,a=e.className;return Object(p.jsx)("input",{className:a,onChange:t,value:n})},w=function(e){var t=e.setIsloginCardOpen,n=e.setIsUserLogedIn,a=Object(c.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(!1),f=Object(u.a)(O,2),x=f[0],g=f[1],w=Object(c.useState)(!0),N=Object(u.a)(w,2),y=N[0],S=N[1],C=function(){var e=Object(b.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!1),e.next=4,m.post("/users/login",{password:r.toString(),email:d});case 4:a=e.sent,localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),localStorage.setItem("id",a.data.user._id),t(!1),n(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),x||(g(!0),setTimeout((function(){g(!1),S(!0)}),2e3));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"glow-card-background",children:Object(p.jsxs)("div",{className:"glow-card-container",children:[Object(p.jsx)("h2",{className:"glow-card-h1 font-red-shadow-red upprcase margin-top-1r",children:"Welcome Back"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green margin-top-1r",children:"Email"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h3",value:d,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green  margin-top-1r",children:"Password"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h3 ",value:r,onChange:function(e){return o(e.target.value.split(" "))}}),Object(p.jsxs)("div",{className:"flex-space-between margin-top-2r",children:[Object(p.jsx)("button",{className:"glow-card-button ",type:"button",onClick:function(){C()},children:"Submit"}),Object(p.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){y&&t(!1)},children:"Cancel"})]}),Object(p.jsx)("br",{}),!x&&Object(p.jsx)("br",{}),x&&Object(p.jsx)("h4",{className:"glow-card-h3",children:"Wrong input please try again"})]})})},N=function(e){var t=e.setIsSingCardOpen,n=e.setIsUserLogedIn,a=Object(c.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),x=f[0],g=f[1],w=Object(c.useState)(""),N=Object(u.a)(w,2),y=N[0],S=N[1],C=Object(c.useState)(!1),k=Object(u.a)(C,2),I=k[0],A=k[1],q=Object(c.useState)(""),F=Object(u.a)(q,2),L=F[0],E=F[1],T=function(){var e=Object(b.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d===r){e.next=6;break}A(!0),E("Your password conformation is in currect"),setTimeout((function(){A(!1)}),2e3),e.next=28;break;case 6:if(!(r.length<8)){e.next=12;break}A(!0),E("Your password must be at least 8 digits"),setTimeout((function(){A(!1)}),2e3),e.next=28;break;case 12:return e.prev=12,e.next=15,m.post("/users/",{password:r.toString(),email:y,userName:x});case 15:a=e.sent,localStorage.clear(),localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),t(!1),n(!0),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(12),E("Error in email Check the spelling and make sure you are not already registered"),A(!0),setTimeout((function(){A(!1)}),2e3);case 28:case"end":return e.stop()}}),e,null,[[12,23]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"glow-card-background",children:Object(p.jsxs)("div",{className:"glow-card-container",children:[Object(p.jsx)("h2",{className:"glow-card-h1 font-red-shadow-red",children:"Ready to get started"}),Object(p.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Write your user name"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h4",value:x,onChange:function(e){return g(e.target.value)}}),Object(p.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Enter your Email"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h4",value:y,onChange:function(e){return S(e.target.value)}}),Object(p.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Choose password"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h4",value:r,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Confirm your password"}),Object(p.jsx)(v,{className:"glow-card-input glow-card-h4",value:d,onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("br",{}),!I&&Object(p.jsxs)("div",{className:"flex-space-between",children:[Object(p.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){return T()},children:"Submit"}),Object(p.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){o(""),S(""),t(!1)},children:"Cancel"})]}),I&&Object(p.jsx)("h4",{className:"glow-card-h3 font-orange-shadow-red",children:L})]})})},y=function(e){var t=e.setIsUserLogedIn,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"glow-card-background",children:Object(p.jsxs)("div",{className:"glow-card-container",style:{height:"80vh",width:"80%"},children:[Object(p.jsx)("h1",{className:"glow-card-h1 font-red-shadow-red upprcase",children:"A Beat Mor"}),Object(p.jsx)("h2",{className:"glow-card-h2 font-white-shadow-green",children:"Tomorrow's sound starts today"}),Object(p.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green",children:"Is your head full of sounds? You have an idea for the beat of the next hit?"}),Object(p.jsx)("h2",{className:"glow-card-h2 font-white-shadow-green",children:"Come and share..."}),Object(p.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green",children:"Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects. Save and share and let the world experience your touch."}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:s?"space-around ":"center"},children:[!s&&Object(p.jsx)("button",{className:"glow-card-button",onClick:function(){r(!0)},children:"Get started"}),s&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"glow-card-button",onClick:function(){return O(!0)},children:"Login"}),Object(p.jsx)("button",{className:"glow-card-button",onClick:function(){return d(!0)},children:"Sing"})]})]})]})}),h&&Object(p.jsx)(w,{setIsloginCardOpen:O,setIsUserLogedIn:t}),l&&Object(p.jsx)(N,{setIsSingCardOpen:d,setIsUserLogedIn:t})]})},S=n(10),C=(n(68),n(69),function(e){var t=e.setAddSoundIsOpen,n=e.setSelectedSound,a=Object(c.useState)(null),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),x=f[0],g=f[1],w=Object(c.useState)(null),N=Object(u.a)(w,2),y=N[0],S=N[1],C=Object(c.useState)(null),k=Object(u.a)(C,2),I=k[0],A=k[1],q=Object(c.useState)("Submit"),F=Object(u.a)(q,2),L=F[0],E=F[1],T=function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=5;break}A("File must have at least one tag"),E("Try Again"),e.next=29;break;case 5:if(!d){e.next=29;break}return a=localStorage.getItem("token"),e.next=9,r.result.split("data:audio/wav;base64,").join("");case 9:return c=e.sent,e.prev=10,e.next=13,m.post("sounds",{name:x,audio:c,tags:y},{headers:{Authorization:"Bearer ".concat(a)}});case 13:s=e.sent,A("Succeeded"),A(""),o(null),h(null),g(""),S(null),console.log(s.data.name),n({name:s.data.name,id:s.data._id,audio:s.data.audio}),t(!1),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(10),A("File name must be unique!"),E("Try Again");case 29:case"end":return e.stop()}}),e,null,[[10,25]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"add-sound-top",children:Object(p.jsxs)("div",{className:"add-sound-container",children:[Object(p.jsx)("div",{className:"add-sound-exit",onClick:function(){return t(!1)},children:"X"}),Object(p.jsx)("h2",{className:"add-sound-container-h2",children:"Upload new sound"}),Object(p.jsx)("br",{className:"add-sound-br"}),Object(p.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound name"}),Object(p.jsx)("p",{className:"add-sound-container-p",children:"Must be unique (auto fill when upload file)"}),Object(p.jsx)(v,{className:"add-sound-input",value:x,onChange:function(e){return g(e.target.value)}}),Object(p.jsx)("br",{className:"add-sound-br"}),Object(p.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound tags"}),Object(p.jsx)("p",{className:"add-sound-container-p",children:"A space must be left between each tag"}),Object(p.jsx)(v,{className:"add-sound-input",value:y?y.join(" "):"",onChange:function(e){return S(e.target.value.split(" "))}}),Object(p.jsx)("br",{className:"add-sound-br"}),Object(p.jsx)("label",{htmlFor:"upload-sound",children:"Upload file"}),Object(p.jsxs)("div",{className:"add-sound-button-div",children:[Object(p.jsx)("input",{id:"upload-sound",size:"80",type:"file",accept:"audio/mp3, audio/wav ",onChange:function(e){var t=new FileReader;e.target.files[0]?(t.readAsDataURL(e.target.files[0]),o(t),h(!0),e.target.files[0].name.match(/\.wav$/)&&g(e.target.files[0].name.split(".wav")[0]),e.target.files[0].name.match(/\.mp3$/)&&g(e.target.files[0].name.split(".mp3")[0]),E("Submit")):h(!1)}}),Object(p.jsxs)("div",{children:[d&&Object(p.jsx)("button",{className:"add-sound-button",onClick:function(){new Audio("".concat(r.result)).play()},children:"Test"}),Object(p.jsx)("button",{className:"add-sound-button",type:"button",onClick:T,children:L})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[!I&&Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"add-sound-container-p",children:I})]})]})})})}),k=function(e){var t=e.value,n=e.options,a=e.setValue,c=e.className;return Object(p.jsx)("select",{className:c,value:t,onChange:function(e){return a(e.target.value)},children:n&&n.map((function(e){return Object(p.jsx)("option",{id:e,children:e},e)}))})},I=(n(70),function(e){var t=e.setSearchSoundIsOpen,n=e.setSelected,a=Object(c.useState)(!0),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(null),f=Object(u.a)(O,2),x=f[0],g=f[1],w=Object(c.useState)(null),N=Object(u.a)(w,2),y=N[0],S=N[1],C=Object(c.useState)([]),I=Object(u.a)(C,2),A=I[0],q=I[1],F=Object(c.useState)(""),L=Object(u.a)(F,2),E=L[0],T=L[1],B=Object(c.useState)(null),U=Object(u.a)(B,2),M=U[0],V=U[1],P=Object(c.useState)(null),_=Object(u.a)(P,2),D=_[0],R=_[1],z=Object(c.useState)(null),G=Object(u.a)(z,2),H=G[0],W=G[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/sounds/tags");case 3:return t=e.sent,e.t0=g,e.next=7,t.data.sort();case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=S,e.next=12,t.data[0];case 12:e.t3=e.sent,(0,e.t2)(e.t3),o(!1),e.next=20;break;case 17:e.prev=17,e.t4=e.catch(0),console.log(e.t4);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var Y=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,m.get("/sounds/tags/".concat(y));case 3:t=e.sent,q(t.data),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length>0)){e.next=7;break}return h(!0),e.next=4,m.get("/sounds/search/".concat(E));case 4:t=e.sent,q(t.data),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M!==t.target.id){e.next=4;break}V(null),e.next=19;break;case 4:return h(!0),V(t.target.id),e.next=8,m.get("/sounds/".concat(t.target.id));case 8:return n=e.sent,e.next=11,n.data[0].audio;case 11:return a=e.sent,e.t0=W,e.next=15,n.data[0];case 15:e.t1=e.sent,(0,e.t0)(e.t1),R(new Audio("data:audio/wav;base64,".concat(a))),h(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),D.play(),h(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[d&&Object(p.jsx)("div",{className:"search-sound-loading-on-page"}),Object(p.jsx)("div",{className:"search-sound-top",children:Object(p.jsx)("div",{className:"search-sound-container",children:!r&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"add-sound-exit",onClick:function(){return t(!1)},children:"X"}),Object(p.jsx)("h2",{className:"search-sound-container-h2",children:"Search sound"}),Object(p.jsxs)("div",{className:"search-sound-button-div",children:[Object(p.jsx)("h3",{className:"search-sound-container-h3",children:"Search by tag name:"}),Object(p.jsx)(k,{value:y,options:x,setValue:S,className:"search-sound-selector"}),Object(p.jsx)("button",{className:"search-sound-button",onClick:function(){return Y()},children:"Search"})]}),Object(p.jsxs)("div",{className:"search-sound-button-div",children:[Object(p.jsx)("h3",{className:"search-sound-container-h3",children:"Search by sound name:"}),Object(p.jsx)(v,{className:"search-sound-input",value:E,onChange:function(e){return T(e.target.value)}}),Object(p.jsx)("button",{className:"search-sound-button",onClick:function(){return J()},children:"Search"})]}),Object(p.jsx)("div",{className:"search-sound-results",children:A.length>0&&A.map((function(e,t){return Object(p.jsxs)("div",{className:"search-sound-result-container",children:[Object(p.jsxs)("div",{onClick:function(e){return X(e)},id:e._id,className:"search-sound-file-sound ".concat(M===e._id?"search-sound-file-sound-selected":""),children:[e.name,Object(p.jsxs)("div",{style:{display:"flex"},id:e._id,children:[Object(p.jsx)("span",{children:"tags: "}),e.tags.map((function(t,n){return Object(p.jsx)("span",{id:e._id,style:{marginLeft:"0.6rem"},children:t},"soundlist-tag-".concat(n))}))]})]}),M===e._id&&Object(p.jsx)("button",{className:"search-sound-button",style:{color:"var(--led-red)"},onClick:function(){return $()},children:"Test"})]},"soundList-".concat(t))}))}),Object(p.jsx)("button",{className:"search-sound-button",onClick:function(){t(!1),n({name:H.name,id:H._id,audio:H.audio})},children:"Submit"})]})})})]})}),A=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(u.a)(l,2),h=d[0],O=d[1],f=Object(c.useState)(null),x=Object(u.a)(f,2),g=x[0],w=x[1],N=Object(c.useState)(""),y=Object(u.a)(N,2),A=y[0],q=y[1],F=Object(c.useState)(new Array(32).fill({color:""})),L=Object(u.a)(F,2),E=L[0],T=L[1],B=Object(c.useState)("purpule"),U=Object(u.a)(B,2),M=U[0],V=U[1],P=Object(c.useState)(""),_=Object(u.a)(P,2),D=_[0],R=_[1];Object(c.useEffect)((function(){g&&q(g.name)}),[g]);var z=function(e){var t=e.target.id.replace("pad-num-","");if(h&&g){var n=E;n[t]=Object(S.a)(Object(S.a)({},n[t]),{},{id:g.id,audio:g.audio,name:g.name,color:M}),O(!1),T(n)}else{if(E[t].id)(function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Audio("data:audio/mp3;base64,".concat(E[t].audio)),e.next=3,n.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},G=function(e){var t=E.filter((function(t,n){return n>=e&&n<e+6}));return Object(p.jsx)("div",{className:"pads-grid",children:t.map((function(t,n){return Object(p.jsx)("div",{className:"single-pad ".concat(E[e+n].color),id:"pad-num-".concat(e+n),onClick:z},"create-pad-".concat(e+n))}))})},H=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(24===(t=E.filter((function(e){return e.id}))).length&&D.length>0)){e.next=15;break}return e.prev=2,n=localStorage.getItem("token"),a=t.map((function(e){return{id:e.id,color:e.color}})),console.log(a),e.next=8,m.post("/sound-collection",{name:D,sounds:a},{headers:{Authorization:"Bearer ".concat(n)}});case 8:c=e.sent,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("the name is in use choose a differnt collection name");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[o&&Object(p.jsx)(I,{setSearchSoundIsOpen:i,setSelected:w}),n&&Object(p.jsx)(C,{setAddSoundIsOpen:a,setSelectedSound:w}),Object(p.jsxs)("div",{className:"create-container",children:[Object(p.jsxs)("div",{className:"create-nav",children:[Object(p.jsx)("h2",{className:" create-h2",children:"Fill the board with sound"}),Object(p.jsx)("div",{className:"create-buttons-div",children:Object(p.jsx)("h3",{className:"create-h3",children:"Upload or choose other sound, than fill the pad board as your wish"})}),Object(p.jsxs)("div",{className:"create-buttons-div",children:[Object(p.jsx)("button",{className:"create-button",type:"button",onClick:function(){return a(!0)},children:"Upload sound"}),Object(p.jsx)("button",{className:"create-button",type:"button",onClick:function(){return i(!0)},children:"Search sound"})]}),Object(p.jsxs)("div",{className:"".concat(h?"create-file-sound-selected":""," create-file-sound"),onClick:function(){return O(!h)},children:[Object(p.jsx)("span",{style:{color:"var(--led-".concat(M,")")},children:"SOUND: "}),A]}),Object(p.jsxs)("div",{className:"create-buttons-div",children:[Object(p.jsx)("h3",{className:"create-h3",children:"Button color"}),Object(p.jsx)(k,{value:M,options:["ligth-blue","purpule","red","yellow","blue","green"],setValue:V,className:"create-selector"})]})]}),Object(p.jsxs)("div",{className:"pads-container",children:[Object(p.jsxs)("div",{className:"pads-container-san",children:[G(0),G(7),G(13),G(19)]}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"100%",padding:"0 1rem"},children:[Object(p.jsx)("h3",{className:"create-h3",children:"Collection Name:"}),Object(p.jsx)(v,{className:"create-selector-input",value:D,onChange:function(e){return R(e.target.value)}}),Object(p.jsx)("button",{className:"create-button",onClick:function(){return H()},children:"Save"})]})]})]})]})},q=n(19),F=n(17),L=(n(71),function(e){var t=e.value,n=e.setValue,a=e.max,c=e.min;return Object(p.jsx)("div",{style:{padding:"0.3rem 1rem",background:"none",width:"50%"},children:Object(p.jsx)("input",{min:c,max:a,type:"range",value:t,onChange:n})})}),E=n(35),T=n.n(E),B=(n(73),function(e){var t=e.boxTiming,n=e.id,a=e.thisClass,s=e.padIndex,r=e.currentColor,o=e.rythemArr,i=e.setMyRythemArr,l=Object(c.useState)(null),d=Object(u.a)(l,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){b(o[n-1])}),[o,n,s]),Object(p.jsx)("div",{className:"".concat(a," ").concat(t!==n||j?"":"play-mode-boxIsOn","\n            ").concat(j&&t!==n&&"".concat(r," empty-center-of-box"),"\n            ").concat(j&&t===n&&r,"\n            "),onMouseDown:function(){var e=Object(F.a)(o);e[32]=j?1!==e[32]&&e[32]-1:!1===e[32]?1:e[32]+1,b(!j),e[n-1]=!e[n-1],i(e,s)}})}),U=n(36),M=function(e){var t=e.id,n=e.thisClass,a=e.padIndex,s=e.setPadIndex,r=e.so,o=e.boxTiming,i=e.rythemObj,l=e.setCurrentColor,d=e.padsStatus,h=e.setMyPadsStatus,O=e.ctx,m=e.gain,f=Object(c.useState)(0),x=Object(u.a)(f,2),g=x[0],v=x[1];Object(c.useEffect)((function(){if(d&&!0===i[o-1]){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(U.decode)(t),e.next=3,O.decodeAudioData(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(b.a)(j.a.mark((function t(n,a){var c,s,o,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"suspended"===O.state&&O.resume(),t.next=3,e(n);case 3:return c=t.sent,t.next=6,O.createGain();case 6:return(s=t.sent).gain.value=r.gain,s.connect(a),t.next=11,O.createBiquadFilter();case 11:(o=t.sent).frequency.value=r.frequency,o.detune.value=r.detune,o.type=r.type,o.connect(s),(u=O.createBufferSource()).buffer=c,u.connect(o),0===g?(u.start(),v(0)):u.start(0,O.currentTime-g);case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}})()(r.myAudio,m)}}),[o,i,t,r,d,a,m,g,O]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"".concat(n," \n            ").concat(r.color,"\n            ").concat(a===t?"buttonOn":"buttonOff","\n            ").concat(d&&!0===i[o-1]?"play-mode-boxIsOn":"buttonOff"),onMouseDown:function(){s(t),i.find((function(e){return!0===e}))&&a===t&&h(a,!d),l(r.color)},children:Object(p.jsx)("div",{className:"play-mode-pad-icon",children:i[32]?d?Object(p.jsx)("i",{className:"fas fa-undo fa-1x"}):Object(p.jsx)("i",{className:"fas fa-pause fa-1x"}):""})})})},V=function(e){var t=e.ctx,n=e.sounds,a=e.setSounds,s=e.gainNode,r=e.biquadFilter,o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(120),b=Object(u.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)(120),f=Object(u.a)(m,2),x=f[0],g=f[1],v=Object(c.useState)(!1),w=Object(u.a)(v,2),N=w[0],y=w[1],C=Object(c.useState)(0),k=Object(u.a)(C,2),I=k[0],A=k[1],E=Object(c.useState)(0),U=Object(u.a)(E,2),V=U[0],P=U[1],_=Object(c.useState)(!1),D=Object(u.a)(_,2),R=D[0],z=D[1],G=Object(c.useState)({}),H=Object(u.a)(G,2),W=H[0],Y=H[1],J=Object(c.useState)(1),X=Object(u.a)(J,2),$=X[0],K=X[1],Q=Object(c.useState)("ligth-blue"),Z=Object(u.a)(Q,2),ee=Z[0],te=Z[1];Object(c.useEffect)((function(){d(!n)}),[n]);var ne=Object(c.useState)(.75),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],re=Object(c.useState)(350),oe=Object(u.a)(re,2),ue=oe[0],ie=oe[1];Object(c.useEffect)((function(){s&&(s.gain.value=ce),r&&(r.frequency.value=ue,r.type="notch")}),[s,ce,r,ue]);var le=function(e,t){var c=Object(F.a)(n);c[$-1][t]="gain"===t?e.target.value/100:e.target.value,a(c)};Object(c.useEffect)((function(){for(var e={},t=0;t<24;t++)e[t+1]=new Array(33).fill(!1);e.padsStatus=new Array(24).fill(!0),Y(e)}),[R,a]),Object(c.useEffect)((function(){setTimeout((function(){g(h)}),1e3)}),[h]);var de=function(e,t){var n=Object(S.a)(Object(S.a)({},W),{},Object(q.a)({},t,e));Y(Object(S.a)({},n))},je=function(e,t){var n=Object(F.a)(W.padsStatus);n[e-1]=t;var a=Object(S.a)(Object(S.a)({},W),{},{padsStatus:n});Y(Object(S.a)({},a))},be=function(e,a,c,s){var o=new Array(e).fill(1);return Object(p.jsx)("div",{className:a,children:o.map((function(e,a){return"play-mode-single-sequencer"===c?Object(p.jsx)(B,{thisClass:c,boxTiming:V,id:s+a,padIndex:$,currentColor:ee,rythemArr:W["".concat($)],setMyRythemArr:de},"".concat(c).concat(s+a)):Object(p.jsx)(M,{thisClass:c,id:s+a,padIndex:$,setPadIndex:K,boxTiming:V,rythemObj:W["".concat(s+a)],setCurrentColor:te,padsStatus:W.padsStatus[s+a-1],setMyPadsStatus:je,ctx:t,gain:r,so:n[s+a-1]},"".concat(c).concat(s+a))}))})},he=function(){N&&(A(0),P(0)),y(!N)};return Object(p.jsxs)(p.Fragment,{children:[l&&Object(p.jsx)("h1",{style:{color:"white"},children:"Loading Spinner"}),!l&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{timeout:6e4/x/4,enabled:N,callback:function(){A(I+1),P(V<32?V+1:1)}}),n&&t&&Object(p.jsxs)("div",{className:"play-mode-container",children:[Object(p.jsxs)("div",{className:"play-mode-sequencer-container",children:[be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",1),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",9),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",17),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",25),"BPM ",h,Object(p.jsx)(L,{value:h,setValue:function(e){O(e.target.value)},max:"220",min:"60"}),Object(p.jsx)(L,{value:100*ce,setValue:function(e){se(e.target.value/100)},max:"100",min:"0"}),"Gain ",ce,Object(p.jsx)(L,{value:ue,setValue:function(e){ie(e.target.value)},max:"4000",min:"0"}),"frequency ",ue,Object(p.jsx)("br",{}),V]}),Object(p.jsxs)("div",{className:"play-mode-pads-container",children:[be(6,"play-mode-sequencer-grid","play-mode-single-pad",1),be(6,"play-mode-sequencer-grid","play-mode-single-pad",7),be(6,"play-mode-sequencer-grid","play-mode-single-pad",13),be(6,"play-mode-sequencer-grid","play-mode-single-pad",19),I,Object(p.jsxs)("div",{style:{display:"flex",background:"none"},children:[Object(p.jsx)(L,{value:100*n[$-1].gain,setValue:function(e){le(e,"gain")},max:"100",min:"0"}),Object(p.jsx)(L,{value:n[$-1].frequency,setValue:function(e){le(e,"frequency")},max:"2000",min:"0"}),Object(p.jsx)(L,{value:n[$-1].detune,setValue:function(e){le(e,"detune")},max:"4000",min:"-4000"}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("select",{value:n[$-1].type,onChange:function(e){le(e,"type")},children:[Object(p.jsx)("option",{value:"allpass",children:"Allpass"}),Object(p.jsx)("option",{value:"lowpass",children:"Lowpass"}),Object(p.jsx)("option",{value:"highpass",children:"Highpass"}),Object(p.jsx)("option",{value:"bandpass",children:"Bandpass"}),Object(p.jsx)("option",{value:"lowshelf",children:"Lowshelf"}),Object(p.jsx)("option",{value:"highshelf",children:"Highshelf"}),Object(p.jsx)("option",{value:"peaking",children:"Peaking"}),Object(p.jsx)("option",{value:"notch",children:"Notch"})]}),Object(p.jsx)("button",{onClick:function(){return he()},children:"Start"}),Object(p.jsx)("button",{onClick:function(){return z(!R),void he()},children:"Clear"})]})]})]})]})]})]})},P=function(e){var t=e.consoleIsOpen,n=e.setConsoleIsOpen,a=e.currentCollection,s=Object(c.useState)(t),r=Object(u.a)(s,2),o=r[0],i=r[1],d=Object(c.useState)(null),h=Object(u.a)(d,2),f=h[0],x=h[1],g=Object(c.useState)(null),v=Object(u.a)(g,2),w=v[0],N=v[1],y=Object(c.useState)(null),C=Object(u.a)(y,2),k=C[0],I=C[1],A=Object(c.useState)(null),q=Object(u.a)(A,2),F=q[0],L=q[1];return Object(c.useEffect)((function(){if(a){o&&x(new AudioContext);var e=new Array(24).fill({frequency:350,detune:0,type:"notch",gain:.75});(function(){var t=Object(b.a)(j.a.mark((function t(){var n,c,s,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("/sound-collection/".concat(a));case 2:return n=t.sent,c=n.data[0].sounds,s=c.map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/sounds/".concat(t.id));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r=null,t.next=8,O.a.all(s).then(O.a.spread((function(){for(var t=[],n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];for(var o=0;o<24;o++)t.push(Object(S.a)({myAudio:a[o].data[0].audio,color:c[o].color},e[o]));r=t}))).catch((function(e){}));case 8:console.log(n),L(r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}else n(!1)}),[o,a,n]),Object(c.useEffect)((function(){f&&!w&&(N(f.createGain()),I(f.createBiquadFilter()))}),[f,w]),Object(c.useEffect)((function(){w&&w.connect(f.destination),k&&k.connect(w)}),[w,f,k]),Object(p.jsxs)(p.Fragment,{children:[!a&&Object(p.jsx)(l.a,{to:"/"}),a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{onClick:function(){o?(x(null),i(!1),N(null),I(null),L(null)):i(!0)},children:"get ctx"}),Object(p.jsx)(V,{ctx:f,sounds:F,setSounds:L,gainNode:w,biquadFilter:k})]})]})},_=(n(74),function(){return Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(p.jsxs)("div",{className:"loader",children:[Object(p.jsx)("span",{className:"loader-span"}),Object(p.jsx)("span",{className:"loader-span"}),Object(p.jsx)("span",{className:"loader-span"}),Object(p.jsx)("span",{className:"loader-span"})]})})}),D=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(u.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)(null),f=Object(u.a)(m,2),v=f[0],w=f[1],N=Object(c.useState)(!0),S=Object(u.a)(N,2),C=S[0],k=S[1];return Object(c.useEffect)((function(){k(!0),localStorage.token&&!h&&(O(!0),w(localStorage.getItem("name"))),k(!1)}),[h]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(p.Fragment,{children:[C&&Object(p.jsx)(_,{}),!C&&!h&&Object(p.jsx)(y,{setIsUserLogedIn:O}),Object(p.jsx)(i.a,{children:!C&&h&&Object(p.jsxs)(p.Fragment,{children:[!n&&Object(p.jsx)(g,{userName:v}),Object(p.jsx)(l.b,{path:"/",exact:!0,component:function(){return Object(p.jsx)(x,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:d,setIsLoading:k,isLoading:C})}}),Object(p.jsx)(l.b,{path:"/home",exact:!0,component:function(){return Object(p.jsx)(x,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:d,setIsLoading:k,isLoading:C})}}),Object(p.jsx)(l.b,{path:"/create",exact:!0,component:function(){return Object(p.jsx)(A,{})}}),Object(p.jsx)(l.b,{path:"/console",exact:!0,component:function(){return Object(p.jsx)(P,{consoleIsOpen:n,setConsoleIsOpen:a,currentCollection:o,setcurrentCollection:d})}})]})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(75);o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),R()}},[[76,1,2]]]);
//# sourceMappingURL=main.c966800c.chunk.js.map