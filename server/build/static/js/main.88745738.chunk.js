(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a,c=n(1),s=n.n(c),r=n(33),o=n.n(r),u=n(2),i=n(12),l=n(5),d=n(3),j=n.n(d),b=n(4),h=n(16),O=n.n(h);a="api";var m=O.a.create({baseURL:a}),p=(n(60),n.p+"static/media/openBackgound.68c73abe.jpg"),f=(n(61),n(62),n(0)),x=function(e){var t=e.messege,n=void 0===t?"":t,a=e.messege2,c=void 0===a?"":a;return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},children:[Object(f.jsx)("div",{style:{marginBottom:"2.5rem"},className:"glow-card-h2 font-red-shadow-red",children:n}),Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("span",{className:"loader-span"}),Object(f.jsx)("span",{className:"loader-span"}),Object(f.jsx)("span",{className:"loader-span"}),Object(f.jsx)("span",{className:"loader-span"})]}),Object(f.jsx)("div",{style:{marginTop:"2.5rem"},className:"glow-card-h2 font-red-shadow-red",children:c})]})},g=function(e){var t=e.setChoosePatternMenuIsOpen,n=e.tempCurrentCollection,a=e.setCurrentCollection,s=e.setConsoleIsOpen,r=e.setCurrentPattern,o=Object(c.useState)(!0),d=Object(u.a)(o,2),h=d[0],O=d[1],p=Object(c.useState)(!0),g=Object(u.a)(p,2),v=(g[0],g[1]),w=Object(c.useState)(null),N=Object(u.a)(w,2),y=N[0],S=N[1],C=Object(c.useState)(null),k=Object(u.a)(C,2),I=k[0],q=k[1],A=Object(l.f)();Object(c.useEffect)((function(){v(!1),function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/patterns/all/".concat(n));case 3:t=e.sent,S(t.data[0].patterns?t.data[0].patterns:[]),O(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S([]),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),v(!0)}),[n]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"glow-card-background",children:Object(f.jsxs)("div",{className:"glow-card-container choose-pattern-container-height",children:[h&&Object(f.jsx)(x,{messege:"Loading patterns please wait a bit.",messege2:"Thenks..."}),!h&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)("div",{className:"exit-button",onClick:function(){return t(!1)},children:"X"})}),Object(f.jsx)("div",{className:"glow-card-h2 font-red-shadow-red",children:"Choose Pattern :"}),Object(f.jsx)("div",{className:"glow-card-h3 font-orange-shadow-red",children:"- Highlight by click the pattern name you want and press submit to open the console.  "}),Object(f.jsx)("div",{className:"glow-card-h3 font-orange-shadow-red",children:"- Wanna start from with no pattern? just press submit and start play."}),Object(f.jsx)("div",{className:"search-sound-results",children:y&&(y.length>0?y.map((function(e,t){return Object(f.jsx)("div",{onClick:function(e){I===e.target.id?q(null):q(e.target.id)},id:e._id,className:"align-center flex",children:Object(f.jsxs)("div",{id:e._id,className:"search-sound-file-sound ".concat(I===e._id?"search-sound-file-sound-selected":""),children:[Object(f.jsx)("div",{className:"flex glow-card-h3",id:e._id,children:e.name}),Object(f.jsx)("div",{className:"flex glow-card-h3",id:e._id,children:Object(f.jsxs)("span",{id:e._id,children:["by:",Object(f.jsx)("span",{id:e._id,style:{marginLeft:"0.3rem"},children:e.userName},"soundlist-tag-".concat(t))]})})]})},"patternOps-".concat(t))})):Object(f.jsx)("div",{className:"font-white-shadow-green glow-card-h4 margin-left-05r",children:"No Pattern found"}))}),Object(f.jsx)("button",{className:"glow-card-button",onClick:function(){t(!1),a(n||"empty"),s(!0),r(I||"empty"),console.log(A),A.push("/console")},children:"Submit"})]})]})})})},v=function(e){var t=e.setConsoleIsOpen,n=e.setCurrentCollection,a=e.consoleIsOpen,s=e.setCurrentPattern,r=Object(c.useState)(null),o=Object(u.a)(r,2),i=o[0],l=o[1],d=Object(c.useState)(!1),h=Object(u.a)(d,2),O=h[0],x=h[1],v=Object(c.useState)(null),w=Object(u.a)(v,2),N=w[0],y=w[1];Object(c.useEffect)((function(){S(),a&&t(!1)}),[a,t]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/sound-collection");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"home-main",children:[i&&i.map((function(e,t){return Object(f.jsxs)("section",{className:"home-section",onClick:function(){y(e._id),x(!0)},children:[Object(f.jsx)("figure",{className:"home-figure-img",children:Object(f.jsx)("img",{src:p,alt:"fasd",className:"home-img"})}),Object(f.jsx)("figure",{className:"home-figure-text",children:Object(f.jsxs)("article",{className:"home-article",children:[Object(f.jsx)("span",{className:"home-span",children:e.ownerName}),Object(f.jsx)("h3",{className:"home-h3",children:e.name})]})})]},"collection".concat(t))})),O&&N&&Object(f.jsx)(g,{tempCurrentCollection:N,setChoosePatternMenuIsOpen:x,setCurrentCollection:n,setConsoleIsOpen:t,setCurrentPattern:s})]})})},w=(n(69),function(e){e.openCloseLogMenu,e.userlog,e.userDetails;var t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],s=n[1];return Object(f.jsxs)("div",{className:"my-nav",style:{fontSize:"17px"},children:[Object(f.jsx)(i.b,{to:"/",className:"menu-logo",children:"A Beat Mor"}),Object(f.jsx)("div",{className:"hamburger",onClick:function(){s(!a)},children:"dads"}),Object(f.jsxs)("div",{className:"nav-menu",style:{maxHeight:a?"300px":"0"},children:[Object(f.jsx)(i.b,{to:"/search",className:"menu-link",children:"Search"}),Object(f.jsx)(i.b,{to:"/create",className:"menu-link",children:"Create"}),Object(f.jsx)(i.b,{to:"/",className:"menu-link",children:"Home"})]})]})}),N=function(e){e.type;var t=e.onChange,n=e.value,a=e.className;return Object(f.jsx)("input",{className:a,onChange:t,value:n})},y=function(e){var t=e.setIsloginCardOpen,n=e.setIsUserLogedIn,a=Object(c.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(!1),p=Object(u.a)(O,2),x=p[0],g=p[1],v=Object(c.useState)(!0),w=Object(u.a)(v,2),y=w[0],S=w[1],C=function(){var e=Object(b.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!1),e.next=4,m.post("/users/login",{password:r.toString(),email:d});case 4:a=e.sent,localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),localStorage.setItem("id",a.data.user._id),t(!1),n(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),x||(g(!0),setTimeout((function(){g(!1),S(!0)}),2e3));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"glow-card-background",children:Object(f.jsxs)("div",{className:"glow-card-container",children:[Object(f.jsx)("h2",{className:"glow-card-h1 font-red-shadow-red upprcase margin-top-1r",children:"Welcome Back"}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green margin-top-1r",children:"Email"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h3",value:d,onChange:function(e){return h(e.target.value)}}),Object(f.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green  margin-top-1r",children:"Password"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h3 ",value:r,onChange:function(e){return o(e.target.value.split(" "))}}),Object(f.jsxs)("div",{className:"flex-space-between margin-top-2r",children:[Object(f.jsx)("button",{className:"glow-card-button ",type:"button",onClick:function(){C()},children:"Submit"}),Object(f.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){y&&t(!1)},children:"Cancel"})]}),Object(f.jsx)("br",{}),!x&&Object(f.jsx)("br",{}),x&&Object(f.jsx)("h4",{className:"glow-card-h3",children:"Wrong input please try again"})]})})},S=function(e){var t=e.setIsSingCardOpen,n=e.setIsUserLogedIn,a=Object(c.useState)(""),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),x=p[0],g=p[1],v=Object(c.useState)(""),w=Object(u.a)(v,2),y=w[0],S=w[1],C=Object(c.useState)(!1),k=Object(u.a)(C,2),I=k[0],q=k[1],A=Object(c.useState)(""),F=Object(u.a)(A,2),L=F[0],P=F[1],E=function(){var e=Object(b.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d===r){e.next=6;break}q(!0),P("Your password conformation is in currect"),setTimeout((function(){q(!1)}),2e3),e.next=28;break;case 6:if(!(r.length<8)){e.next=12;break}q(!0),P("Your password must be at least 8 digits"),setTimeout((function(){q(!1)}),2e3),e.next=28;break;case 12:return e.prev=12,e.next=15,m.post("/users/",{password:r.toString(),email:y,userName:x});case 15:a=e.sent,localStorage.clear(),localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),t(!1),n(!0),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(12),P("Error in email Check the spelling and make sure you are not already registered"),q(!0),setTimeout((function(){q(!1)}),2e3);case 28:case"end":return e.stop()}}),e,null,[[12,23]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"glow-card-background",children:Object(f.jsxs)("div",{className:"glow-card-container",children:[Object(f.jsx)("h2",{className:"glow-card-h1 font-red-shadow-red",children:"Ready to get started"}),Object(f.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Write your user name"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h4",value:x,onChange:function(e){return g(e.target.value)}}),Object(f.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Enter your Email"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h4",value:y,onChange:function(e){return S(e.target.value)}}),Object(f.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Choose password"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h4",value:r,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("h3",{className:"glow-card-h4 font-white-shadow-green",children:"Confirm your password"}),Object(f.jsx)(N,{className:"glow-card-input glow-card-h4",value:d,onChange:function(e){return h(e.target.value)}}),Object(f.jsx)("br",{}),!I&&Object(f.jsxs)("div",{className:"flex-space-between",children:[Object(f.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){return E()},children:"Submit"}),Object(f.jsx)("button",{className:"glow-card-button",type:"button",onClick:function(){o(""),S(""),t(!1)},children:"Cancel"})]}),I&&Object(f.jsx)("h4",{className:"glow-card-h3 font-orange-shadow-red",children:L})]})})},C=function(e){var t=e.setIsUserLogedIn,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"glow-card-background",children:Object(f.jsxs)("div",{className:"glow-card-container",style:{height:"80vh",width:"80%"},children:[Object(f.jsx)("h1",{className:"glow-card-h1 font-red-shadow-red upprcase",children:"A Beat Mor"}),Object(f.jsx)("h2",{className:"glow-card-h2 font-white-shadow-green",children:"Tomorrow's sound starts today"}),Object(f.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green",children:"Is your head full of sounds? You have an idea for the beat of the next hit?"}),Object(f.jsx)("h2",{className:"glow-card-h2 font-white-shadow-green",children:"Come and share..."}),Object(f.jsx)("h3",{className:"glow-card-h3 font-white-shadow-green",children:"Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects. Save and share and let the world experience your touch."}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:s?"space-around ":"center"},children:[!s&&Object(f.jsx)("button",{className:"glow-card-button",onClick:function(){r(!0)},children:"Get started"}),s&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:"glow-card-button",onClick:function(){return O(!0)},children:"Login"}),Object(f.jsx)("button",{className:"glow-card-button",onClick:function(){return d(!0)},children:"Sing"})]})]})]})}),h&&Object(f.jsx)(y,{setIsloginCardOpen:O,setIsUserLogedIn:t}),l&&Object(f.jsx)(S,{setIsSingCardOpen:d,setIsUserLogedIn:t})]})},k=n(10),I=(n(70),n(71),function(e){var t=e.setAddSoundIsOpen,n=e.setSelectedSound,a=Object(c.useState)(null),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),x=p[0],g=p[1],v=Object(c.useState)(null),w=Object(u.a)(v,2),y=w[0],S=w[1],C=Object(c.useState)(null),k=Object(u.a)(C,2),I=k[0],q=k[1],A=Object(c.useState)("Submit"),F=Object(u.a)(A,2),L=F[0],P=F[1],E=function(){var e=Object(b.a)(j.a.mark((function e(){var a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=5;break}q("File must have at least one tag"),P("Try Again"),e.next=29;break;case 5:if(!d){e.next=29;break}return a=localStorage.getItem("token"),e.next=9,r.result.split("data:audio/wav;base64,").join("");case 9:return c=e.sent,e.prev=10,e.next=13,m.post("sounds",{name:x,audio:c,tags:y},{headers:{Authorization:"Bearer ".concat(a)}});case 13:s=e.sent,q("Succeeded"),q(""),o(null),h(null),g(""),S(null),console.log(s.data.name),n({name:s.data.name,id:s.data._id,audio:s.data.audio}),t(!1),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(10),q("File name must be unique!"),P("Try Again");case 29:case"end":return e.stop()}}),e,null,[[10,25]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"add-sound-top",children:Object(f.jsxs)("div",{className:"add-sound-container",children:[Object(f.jsx)("div",{className:"add-sound-exit",onClick:function(){return t(!1)},children:"X"}),Object(f.jsx)("h2",{className:"add-sound-container-h2",children:"Upload new sound"}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound name"}),Object(f.jsx)("p",{className:"add-sound-container-p",children:"Must be unique (auto fill when upload file)"}),Object(f.jsx)(N,{className:"add-sound-input",value:x,onChange:function(e){return g(e.target.value)}}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound tags"}),Object(f.jsx)("p",{className:"add-sound-container-p",children:"A space must be left between each tag"}),Object(f.jsx)(N,{className:"add-sound-input",value:y?y.join(" "):"",onChange:function(e){return S(e.target.value.split(" "))}}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("label",{htmlFor:"upload-sound",children:"Upload file"}),Object(f.jsxs)("div",{className:"add-sound-button-div",children:[Object(f.jsx)("input",{id:"upload-sound",size:"80",type:"file",accept:"audio/mp3, audio/wav ",onChange:function(e){var t=new FileReader;e.target.files[0]?(t.readAsDataURL(e.target.files[0]),o(t),h(!0),e.target.files[0].name.match(/\.wav$/)&&g(e.target.files[0].name.split(".wav")[0]),e.target.files[0].name.match(/\.mp3$/)&&g(e.target.files[0].name.split(".mp3")[0]),P("Submit")):h(!1)}}),Object(f.jsxs)("div",{children:[d&&Object(f.jsx)("button",{className:"add-sound-button",onClick:function(){new Audio("".concat(r.result)).play()},children:"Test"}),Object(f.jsx)("button",{className:"add-sound-button",type:"button",onClick:E,children:L})]})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[!I&&Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"add-sound-container-p",children:I})]})]})})})}),q=function(e){var t=e.value,n=e.options,a=e.setValue,c=e.className;return Object(f.jsx)("select",{className:c,value:t,onChange:function(e){return a(e.target.value)},children:n&&n.map((function(e){return Object(f.jsx)("option",{id:e,children:e},e)}))})},A=(n(72),function(e){var t=e.setSearchSoundIsOpen,n=e.setSelected,a=Object(c.useState)(!0),s=Object(u.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],h=l[1],O=Object(c.useState)(null),p=Object(u.a)(O,2),x=p[0],g=p[1],v=Object(c.useState)(null),w=Object(u.a)(v,2),y=w[0],S=w[1],C=Object(c.useState)([]),k=Object(u.a)(C,2),I=k[0],A=k[1],F=Object(c.useState)(""),L=Object(u.a)(F,2),P=L[0],E=L[1],T=Object(c.useState)(null),_=Object(u.a)(T,2),B=_[0],M=_[1],U=Object(c.useState)(null),V=Object(u.a)(U,2),D=V[0],R=V[1],H=Object(c.useState)(null),z=Object(u.a)(H,2),G=z[0],W=z[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/sounds/tags");case 3:return t=e.sent,e.t0=g,e.next=7,t.data.sort();case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=S,e.next=12,t.data[0];case 12:e.t3=e.sent,(0,e.t2)(e.t3),o(!1),e.next=20;break;case 17:e.prev=17,e.t4=e.catch(0),console.log(e.t4);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,m.get("/sounds/tags/".concat(y));case 3:t=e.sent,A(t.data),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(P.length>0)){e.next=7;break}return h(!0),e.next=4,m.get("/sounds/search/".concat(P));case 4:t=e.sent,A(t.data),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B!==t.target.id){e.next=4;break}M(null),e.next=19;break;case 4:return h(!0),M(t.target.id),e.next=8,m.get("/sounds/".concat(t.target.id));case 8:return n=e.sent,e.next=11,n.data[0].audio;case 11:return a=e.sent,e.t0=W,e.next=15,n.data[0];case 15:e.t1=e.sent,(0,e.t0)(e.t1),R(new Audio("data:audio/wav;base64,".concat(a))),h(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!0),D.play(),h(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[d&&Object(f.jsx)("div",{className:"search-sound-loading-on-page"}),Object(f.jsx)("div",{className:"search-sound-top",children:Object(f.jsx)("div",{className:"search-sound-container",children:!r&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"add-sound-exit",onClick:function(){return t(!1)},children:"X"}),Object(f.jsx)("h2",{className:"search-sound-container-h2",children:"Search sound"}),Object(f.jsxs)("div",{className:"search-sound-button-div",children:[Object(f.jsx)("h3",{className:"search-sound-container-h3",children:"Search by tag name:"}),Object(f.jsx)(q,{value:y,options:x,setValue:S,className:"search-sound-selector"}),Object(f.jsx)("button",{className:"search-sound-button",onClick:function(){return X()},children:"Search"})]}),Object(f.jsxs)("div",{className:"search-sound-button-div",children:[Object(f.jsx)("h3",{className:"search-sound-container-h3",children:"Search by sound name:"}),Object(f.jsx)(N,{className:"search-sound-input",value:P,onChange:function(e){return E(e.target.value)}}),Object(f.jsx)("button",{className:"search-sound-button",onClick:function(){return Y()},children:"Search"})]}),Object(f.jsx)("div",{className:"search-sound-results",children:I.length>0&&I.map((function(e,t){return Object(f.jsxs)("div",{className:"search-sound-result-container",children:[Object(f.jsxs)("div",{onClick:function(e){return J(e)},id:e._id,className:"search-sound-file-sound ".concat(B===e._id?"search-sound-file-sound-selected":""),children:[e.name,Object(f.jsxs)("div",{style:{display:"flex"},id:e._id,children:[Object(f.jsx)("span",{children:"tags: "}),e.tags.map((function(t,n){return Object(f.jsx)("span",{id:e._id,style:{marginLeft:"0.6rem"},children:t},"soundlist-tag-".concat(n))}))]})]}),B===e._id&&Object(f.jsx)("button",{className:"search-sound-button",style:{color:"var(--led-red)"},onClick:function(){return $()},children:"Test"})]},"soundList-".concat(t))}))}),Object(f.jsx)("button",{className:"search-sound-button",onClick:function(){t(!1),n({name:G.name,id:G._id,audio:G.audio})},children:"Submit"})]})})})]})}),F=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(u.a)(s,2),o=r[0],i=r[1],l=Object(c.useState)(!1),d=Object(u.a)(l,2),h=d[0],O=d[1],p=Object(c.useState)(null),x=Object(u.a)(p,2),g=x[0],v=x[1],w=Object(c.useState)(""),y=Object(u.a)(w,2),S=y[0],C=y[1],F=Object(c.useState)(new Array(32).fill({color:""})),L=Object(u.a)(F,2),P=L[0],E=L[1],T=Object(c.useState)("purpule"),_=Object(u.a)(T,2),B=_[0],M=_[1],U=Object(c.useState)(""),V=Object(u.a)(U,2),D=V[0],R=V[1];Object(c.useEffect)((function(){g&&C(g.name)}),[g]);var H=function(e){var t=e.target.id.replace("pad-num-","");if(h&&g){var n=P;n[t]=Object(k.a)(Object(k.a)({},n[t]),{},{id:g.id,audio:g.audio,name:g.name,color:B}),O(!1),E(n)}else{if(P[t].id)(function(){var e=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Audio("data:audio/mp3;base64,".concat(P[t].audio)),e.next=3,n.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},z=function(e){var t=P.filter((function(t,n){return n>=e&&n<e+6}));return Object(f.jsx)("div",{className:"pads-grid",children:t.map((function(t,n){return Object(f.jsx)("div",{className:"single-pad ".concat(P[e+n].color),id:"pad-num-".concat(e+n),onClick:H},"create-pad-".concat(e+n))}))})},G=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(24===(t=P.filter((function(e){return e.id}))).length&&D.length>0)){e.next=15;break}return e.prev=2,n=localStorage.getItem("token"),a=t.map((function(e){return{id:e.id,color:e.color}})),console.log(a),e.next=8,m.post("/sound-collection",{name:D,sounds:a},{headers:{Authorization:"Bearer ".concat(n)}});case 8:c=e.sent,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("the name is in use choose a differnt collection name");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(A,{setSearchSoundIsOpen:i,setSelected:v}),n&&Object(f.jsx)(I,{setAddSoundIsOpen:a,setSelectedSound:v}),Object(f.jsxs)("div",{className:"create-container",children:[Object(f.jsxs)("div",{className:"create-nav",children:[Object(f.jsx)("h2",{className:" create-h2",children:"Fill the board with sound"}),Object(f.jsx)("div",{className:"create-buttons-div",children:Object(f.jsx)("h3",{className:"create-h3",children:"Upload or choose other sound, than fill the pad board as your wish"})}),Object(f.jsxs)("div",{className:"create-buttons-div",children:[Object(f.jsx)("button",{className:"create-button",type:"button",onClick:function(){return a(!0)},children:"Upload sound"}),Object(f.jsx)("button",{className:"create-button",type:"button",onClick:function(){return i(!0)},children:"Search sound"})]}),Object(f.jsxs)("div",{className:"".concat(h?"create-file-sound-selected":""," create-file-sound"),onClick:function(){return O(!h)},children:[Object(f.jsx)("span",{style:{color:"var(--led-".concat(B,")")},children:"SOUND: "}),S]}),Object(f.jsxs)("div",{className:"create-buttons-div",children:[Object(f.jsx)("h3",{className:"create-h3",children:"Button color"}),Object(f.jsx)(q,{value:B,options:["ligth-blue","purpule","red","yellow","blue","green"],setValue:M,className:"create-selector"})]})]}),Object(f.jsxs)("div",{className:"pads-container",children:[Object(f.jsxs)("div",{className:"pads-container-san",children:[z(0),z(7),z(13),z(19)]}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"100%",padding:"0 1rem"},children:[Object(f.jsx)("h3",{className:"create-h3",children:"Collection Name:"}),Object(f.jsx)(N,{className:"create-selector-input",value:D,onChange:function(e){return R(e.target.value)}}),Object(f.jsx)("button",{className:"create-button",onClick:function(){return G()},children:"Save"})]})]})]})]})},L=n(19),P=n(17),E=(n(73),function(e){var t=e.value,n=e.setValue,a=e.max,c=e.min;return Object(f.jsx)("div",{style:{padding:"0.3rem 1rem",background:"none",width:"50%"},children:Object(f.jsx)("input",{min:c,max:a,type:"range",value:t,onChange:n})})}),T=n(35),_=n.n(T),B=(n(75),function(e){var t=e.boxTiming,n=e.id,a=e.thisClass,s=e.padIndex,r=e.currentColor,o=e.rythemArr,i=e.setMyRythemArr,l=Object(c.useState)(null),d=Object(u.a)(l,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){b(o[n-1])}),[o,n,s]),Object(f.jsx)("div",{className:"".concat(a," ").concat(t!==n||j?"":"play-mode-boxIsOn","\n            ").concat(j&&t!==n&&"".concat(r," empty-center-of-box"),"\n            ").concat(j&&t===n&&r,"\n            "),onMouseDown:function(){var e=Object(P.a)(o);e[32]=j?1!==e[32]&&e[32]-1:!1===e[32]?1:e[32]+1,b(!j),e[n-1]=!e[n-1],i(e,s)}})}),M=n(36),U=function(e){var t=e.id,n=e.thisClass,a=e.padIndex,s=e.setPadIndex,r=e.so,o=e.boxTiming,i=e.rythemObj,l=e.setCurrentColor,d=e.padsStatus,h=e.setMyPadsStatus,O=e.ctx,m=e.gain,p=Object(c.useState)(0),x=Object(u.a)(p,2),g=x[0],v=x[1];Object(c.useEffect)((function(){if(d&&!0===i[o-1]){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(M.decode)(t),e.next=3,O.decodeAudioData(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(b.a)(j.a.mark((function t(n,a){var c,s,o,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"suspended"===O.state&&O.resume(),t.next=3,e(n);case 3:return c=t.sent,t.next=6,O.createGain();case 6:return(s=t.sent).gain.value=r.gain,s.connect(a),t.next=11,O.createBiquadFilter();case 11:(o=t.sent).frequency.value=r.frequency,o.detune.value=r.detune,o.type=r.type,o.connect(s),(u=O.createBufferSource()).buffer=c,u.connect(o),0===g?(u.start(),v(0)):u.start(0,O.currentTime-g);case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}})()(r.myAudio,m)}}),[o,i,t,r,d,a,m,g,O]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"".concat(n," \n            ").concat(r.color,"\n            ").concat(a===t?"buttonOn":"buttonOff","\n            ").concat(d&&!0===i[o-1]?"play-mode-boxIsOn":"buttonOff"),onMouseDown:function(){s(t),i.find((function(e){return!0===e}))&&a===t&&h(a,!d),l(r.color)},children:Object(f.jsx)("div",{className:"play-mode-pad-icon",children:i[32]?d?Object(f.jsx)("i",{className:"fas fa-undo fa-1x"}):Object(f.jsx)("i",{className:"fas fa-pause fa-1x"}):""})})})},V=function(e){var t=e.ctx,n=e.sounds,a=e.setSounds,s=e.gainNode,r=e.biquadFilter,o=Object(c.useState)(!1),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(120),b=Object(u.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)(120),p=Object(u.a)(m,2),x=p[0],g=p[1],v=Object(c.useState)(!1),w=Object(u.a)(v,2),N=w[0],y=w[1],S=Object(c.useState)(0),C=Object(u.a)(S,2),I=C[0],q=C[1],A=Object(c.useState)(0),F=Object(u.a)(A,2),T=F[0],M=F[1],V=Object(c.useState)(!1),D=Object(u.a)(V,2),R=D[0],H=D[1],z=Object(c.useState)({}),G=Object(u.a)(z,2),W=G[0],X=G[1],Y=Object(c.useState)(1),J=Object(u.a)(Y,2),$=J[0],K=J[1],Q=Object(c.useState)("ligth-blue"),Z=Object(u.a)(Q,2),ee=Z[0],te=Z[1];Object(c.useEffect)((function(){d(!n)}),[n]);var ne=Object(c.useState)(.75),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],re=Object(c.useState)(350),oe=Object(u.a)(re,2),ue=oe[0],ie=oe[1];Object(c.useEffect)((function(){s&&(s.gain.value=ce),r&&(r.frequency.value=ue,r.type="notch")}),[s,ce,r,ue]);var le=function(e,t){var c=Object(P.a)(n);c[$-1][t]="gain"===t?e.target.value/100:e.target.value,a(c)};Object(c.useEffect)((function(){for(var e={},t=0;t<24;t++)e[t+1]=new Array(33).fill(!1);e.padsStatus=new Array(24).fill(!0),X(e)}),[R,a]),Object(c.useEffect)((function(){setTimeout((function(){g(h)}),1e3)}),[h]);var de=function(e,t){var n=Object(k.a)(Object(k.a)({},W),{},Object(L.a)({},t,e));X(Object(k.a)({},n))},je=function(e,t){var n=Object(P.a)(W.padsStatus);n[e-1]=t;var a=Object(k.a)(Object(k.a)({},W),{},{padsStatus:n});X(Object(k.a)({},a))},be=function(e,a,c,s){var o=new Array(e).fill(1);return Object(f.jsx)("div",{className:a,children:o.map((function(e,a){return"play-mode-single-sequencer"===c?Object(f.jsx)(B,{thisClass:c,boxTiming:T,id:s+a,padIndex:$,currentColor:ee,rythemArr:W["".concat($)],setMyRythemArr:de},"".concat(c).concat(s+a)):Object(f.jsx)(U,{thisClass:c,id:s+a,padIndex:$,setPadIndex:K,boxTiming:T,rythemObj:W["".concat(s+a)],setCurrentColor:te,padsStatus:W.padsStatus[s+a-1],setMyPadsStatus:je,ctx:t,gain:r,so:n[s+a-1]},"".concat(c).concat(s+a))}))})},he=function(){N&&(q(0),M(0)),y(!N)};return Object(f.jsxs)(f.Fragment,{children:[l&&Object(f.jsx)("h1",{style:{color:"white"},children:"Loading Spinner"}),!l&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a,{timeout:6e4/x/4,enabled:N,callback:function(){q(I+1),M(T<32?T+1:1)}}),n&&t&&Object(f.jsxs)("div",{className:"play-mode-container",children:[Object(f.jsxs)("div",{className:"play-mode-sequencer-container",children:[be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",1),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",9),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",17),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",25),"BPM ",h,Object(f.jsx)(E,{value:h,setValue:function(e){O(e.target.value)},max:"220",min:"60"}),Object(f.jsx)(E,{value:100*ce,setValue:function(e){se(e.target.value/100)},max:"100",min:"0"}),"Gain ",ce,Object(f.jsx)(E,{value:ue,setValue:function(e){ie(e.target.value)},max:"4000",min:"0"}),"frequency ",ue,Object(f.jsx)("br",{}),T]}),Object(f.jsxs)("div",{className:"play-mode-pads-container",children:[be(6,"play-mode-sequencer-grid","play-mode-single-pad",1),be(6,"play-mode-sequencer-grid","play-mode-single-pad",7),be(6,"play-mode-sequencer-grid","play-mode-single-pad",13),be(6,"play-mode-sequencer-grid","play-mode-single-pad",19),I,Object(f.jsxs)("div",{style:{display:"flex",background:"none"},children:[Object(f.jsx)(E,{value:100*n[$-1].gain,setValue:function(e){le(e,"gain")},max:"100",min:"0"}),Object(f.jsx)(E,{value:n[$-1].frequency,setValue:function(e){le(e,"frequency")},max:"2000",min:"0"}),Object(f.jsx)(E,{value:n[$-1].detune,setValue:function(e){le(e,"detune")},max:"4000",min:"-4000"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("select",{value:n[$-1].type,onChange:function(e){le(e,"type")},children:[Object(f.jsx)("option",{value:"allpass",children:"Allpass"}),Object(f.jsx)("option",{value:"lowpass",children:"Lowpass"}),Object(f.jsx)("option",{value:"highpass",children:"Highpass"}),Object(f.jsx)("option",{value:"bandpass",children:"Bandpass"}),Object(f.jsx)("option",{value:"lowshelf",children:"Lowshelf"}),Object(f.jsx)("option",{value:"highshelf",children:"Highshelf"}),Object(f.jsx)("option",{value:"peaking",children:"Peaking"}),Object(f.jsx)("option",{value:"notch",children:"Notch"})]}),Object(f.jsx)("button",{onClick:function(){return he()},children:"Start"}),Object(f.jsx)("button",{onClick:function(){return H(!R),void he()},children:"Clear"})]})]})]})]})]})]})},D=function(e){var t=e.consoleIsOpen,n=e.setConsoleIsOpen,a=e.currentCollection,s=e.currentPattern,r=Object(c.useState)(t),o=Object(u.a)(r,2),i=o[0],d=(o[1],Object(c.useState)(null)),j=Object(u.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)(null),m=Object(u.a)(O,2),p=m[0],x=m[1],g=Object(c.useState)(null),v=Object(u.a)(g,2),w=v[0],N=v[1],y=Object(c.useState)(null),S=Object(u.a)(y,2),C=S[0],k=S[1],I=Object(c.useState)(null),q=Object(u.a)(I,2),A=q[0],F=q[1];return Object(c.useEffect)((function(){a&&s?(i&&h(new AudioContext),R(s,a,F,k)):n(!1)}),[i,a,n,s]),Object(c.useEffect)((function(){b&&!p&&(x(b.createGain()),N(b.createBiquadFilter()))}),[b,p]),Object(c.useEffect)((function(){p&&p.connect(b.destination),w&&w.connect(p)}),[p,b,w]),Object(f.jsxs)(f.Fragment,{children:[!a&&Object(f.jsx)(l.a,{to:"/"}),a&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(V,{ctx:b,sounds:C,setSounds:k,gainNode:p,biquadFilter:w,patternArr:A})})]})},R=function(){var e=Object(b.a)(j.a.mark((function e(t,n,a,c){var s,r,o,u,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,a);case 2:return s=e.sent,console.log(s),e.next=6,m.get("/sound-collection/".concat(n));case 6:return r=e.sent,o=r.data[0].sounds,e.next=10,o.map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/sounds/".concat(t.id));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:return u=e.sent,i=null,e.next=14,O.a.all(u).then(O.a.spread((function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var c=0;c<24;c++)e.push(Object(k.a)({myAudio:n[c].data[0].audio,color:o[c].color},s[c]));i=e}))).catch((function(e){}));case 14:c(i);case 15:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"!==t){e.next=5;break}a=new Array(24).fill({frequency:350,detune:0,type:"notch",gain:.75}),n("empty"),e.next=22;break;case 5:return e.prev=5,e.next=8,m.get("/patterns/".concat(t));case 8:return c=e.sent,e.t0=n,e.next=12,c.data[0].pattern;case 12:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=16,c.data[0].pattern.map((function(e){return{frequency:Number(e.frequency),detune:Number(e.detune),type:e.type,gain:Number(e.gacurrentCollectionin)}}));case 16:a=e.sent,e.next=22;break;case 19:e.prev=19,e.t2=e.catch(5),console.log(e.t2);case 22:return e.next=24,a;case 24:return e.abrupt("return",e.sent);case 25:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(u.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(null),b=Object(u.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)(!1),p=Object(u.a)(m,2),g=p[0],N=p[1],y=Object(c.useState)(null),S=Object(u.a)(y,2),k=S[0],I=S[1],q=Object(c.useState)(!0),A=Object(u.a)(q,2),L=A[0],P=A[1];return Object(c.useEffect)((function(){P(!0),localStorage.token&&!g&&(N(!0),I(localStorage.getItem("name"))),P(!1)}),[g]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(f.Fragment,{children:[L&&Object(f.jsx)(x,{}),!L&&!g&&Object(f.jsx)(C,{setIsUserLogedIn:N}),Object(f.jsx)(i.a,{children:!L&&g&&Object(f.jsxs)(f.Fragment,{children:[!n&&Object(f.jsx)(w,{userName:k}),Object(f.jsx)(l.b,{path:"/",exact:!0,component:function(){return Object(f.jsx)(v,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:d,setIsLoading:P,isLoading:L,setCurrentPattern:O})}}),Object(f.jsx)(l.b,{path:"/home",exact:!0,component:function(){return Object(f.jsx)(v,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:d,setIsLoading:P,isLoading:L,setCurrentPattern:O})}}),Object(f.jsx)(l.b,{path:"/create",exact:!0,component:function(){return Object(f.jsx)(F,{})}}),Object(f.jsx)(l.b,{path:"/console",exact:!0,component:function(){return Object(f.jsx)(D,{consoleIsOpen:n,setConsoleIsOpen:a,currentCollection:o,setcurrentCollection:d,currentPattern:h})}})]})})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(76);o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),G()}},[[77,1,2]]]);
//# sourceMappingURL=main.88745738.chunk.js.map