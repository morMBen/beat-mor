(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a,c=n(1),s=n.n(c),r=n(34),o=n.n(r),i=n(2),u=n(13),l=n(5),j=n(4),d=n.n(j),b=n(7),O=n(17),h=n.n(O);a="api";var p=h.a.create({baseURL:a}),m=(n(61),n.p+"static/media/openBackgound.68c73abe.jpg"),f=n(0),x=function(e){var t=e.setConsoleIsOpen,n=e.setCurrentCollection,a=Object(c.useState)(null),s=Object(i.a)(a,2),r=s[0],o=s[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/sound-collection");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(f.jsx)("div",{style:{paddingTop:"5rem"},children:Object(f.jsx)("div",{className:"home-main",children:r&&r.map((function(e,a){return Object(f.jsx)("section",{className:"home-section",onClick:function(){n(e._id),t(!0)},children:Object(f.jsxs)(u.b,{to:"/console",children:[Object(f.jsx)("figure",{className:"home-figure-img",children:Object(f.jsx)("img",{src:m,alt:"fasd"})}),Object(f.jsx)("figure",{className:"home-figure-text",children:Object(f.jsxs)("article",{className:"home-article",children:[Object(f.jsx)("span",{children:e.ownerName}),Object(f.jsxs)("h3",{className:"home-h3",children:[e.name," ",e._id]})]})})]})},"collection".concat(a))}))})})},g=(n(70),function(e){e.openCloseLogMenu,e.userlog,e.userDetails;var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(f.jsxs)("div",{className:"my-nav",style:{fontSize:"17px"},children:[Object(f.jsx)(u.b,{to:"/",className:"menu-logo",children:"A Beat Mor"}),Object(f.jsx)("div",{className:"hamburger",onClick:function(){s(!a)},children:"dads"}),Object(f.jsxs)("div",{className:"nav-menu",style:{maxHeight:a?"300px":"0"},children:[Object(f.jsx)(u.b,{to:"/search",className:"menu-link",children:"Search"}),Object(f.jsx)(u.b,{to:"/create",className:"menu-link",children:"Create"}),Object(f.jsx)(u.b,{to:"/",className:"menu-link",children:"Home"})]})]})}),v=(n(71),function(e){e.type;var t=e.onChange,n=e.value,a=e.className;return Object(f.jsx)("input",{className:a,onChange:t,value:n})}),y=(n(72),function(e){var t=e.setLoginCard,n=e.setIsLoged,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],o=s[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),j=l[0],O=l[1],h=Object(c.useState)(!1),m=Object(i.a)(h,2),x=m[0],g=m[1],y=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.post("/users/login",{password:r.toString(),email:j});case 3:a=e.sent,localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),t(!1),n(!0),console.log(localStorage.getItem("name")),console.log(localStorage.getItem("token")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),g(!0),setTimeout((function(){g(!1)}),2e3);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"log-in-top",children:Object(f.jsxs)("div",{className:"log-in-container",children:[Object(f.jsx)("h2",{className:"log-in-container-h2",children:"Welcome Back"}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{className:"log-in-container-h3",children:"Email"}),Object(f.jsx)(v,{className:"log-in-input",value:j,onChange:function(e){return O(e.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("h3",{className:"log-in-container-h3",children:"Password"}),Object(f.jsx)(v,{className:"log-in-input",value:r,onChange:function(e){return o(e.target.value.split(" "))}}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsx)("button",{className:"log-in-container-button",type:"button",onClick:y,children:"Submit"}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"log-in-container-button",type:"button",onClick:function(){o(""),O(""),t(!1)},children:"Cancel"})]}),Object(f.jsx)("br",{}),!x&&Object(f.jsx)("br",{}),x&&Object(f.jsx)("h4",{children:"Wrong input please try again"})]})})}),N=(n(73),function(e){var t=e.setLoginCard,n=e.setIsLoged,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],o=s[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),j=l[0],O=l[1],h=Object(c.useState)(""),m=Object(i.a)(h,2),x=m[0],g=m[1],y=Object(c.useState)(""),N=Object(i.a)(y,2),S=N[0],C=N[1],k=Object(c.useState)(!1),w=Object(i.a)(k,2),I=w[0],q=w[1],A=Object(c.useState)(""),F=Object(i.a)(A,2),E=F[0],L=F[1],T=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j===r){e.next=5;break}q(!0),setTimeout((function(){q(!1),L("Your password conformation is in currect")}),2e3),e.next=27;break;case 5:if(!(r.length<8)){e.next=10;break}q(!0),setTimeout((function(){q(!1),L("Your password must be at least 8 digits")}),2e3),e.next=27;break;case 10:return e.prev=10,e.next=13,p.post("/users/",{password:r.toString(),email:S,userName:x});case 13:a=e.sent,localStorage.clear(),localStorage.setItem("name",a.data.user.userName),localStorage.setItem("token",a.data.token),t(!1),n(!0),console.log(localStorage.getItem("name")),console.log(localStorage.getItem("token")),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(10),q(!0),setTimeout((function(){q(!1),L("Error in email Check the spelling and make sure you are not already registered")}),2e3);case 27:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"signin-top",children:Object(f.jsxs)("div",{className:"signin-container",children:[Object(f.jsx)("h2",{className:"signin-container-h2",children:"Ready to get started"}),Object(f.jsx)("h3",{className:"signin-container-h3",children:"Write your user name"}),Object(f.jsx)(v,{className:"signin-input",value:x,onChange:function(e){return g(e.target.value)}}),Object(f.jsx)("h3",{className:"signin-container-h3",children:"Enter your Email"}),Object(f.jsx)(v,{className:"signin-input",value:S,onChange:function(e){return C(e.target.value)}}),Object(f.jsx)("h3",{className:"signin-container-h3",children:"Choose password"}),Object(f.jsx)(v,{className:"signin-input",value:r,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("h3",{className:"signin-container-h3",children:"Confirm your password"}),Object(f.jsx)(v,{className:"signin-input",value:j,onChange:function(e){return O(e.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsx)("button",{className:"signin-container-button",type:"button",onClick:T,children:"Submit"}),Object(f.jsx)("button",{className:"signin-container-button",type:"button",onClick:function(){o(""),C(""),t(!1)},children:"Cancel"})]}),Object(f.jsx)("br",{}),!I&&Object(f.jsx)("br",{}),I&&Object(f.jsx)("h4",{children:E})]})})}),S=function(e){var t=e.setIsLoged,n=Object(c.useState)(!1),a=Object(i.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(!1),u=Object(i.a)(o,2),l=u[0],j=u[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),O=b[0],h=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"opening-page-container",children:[Object(f.jsx)("h1",{className:"opening-page-container-h1",children:"A Beat Mor"}),Object(f.jsx)("h2",{className:"opening-page-container-h2",children:"Tomorrow's sound starts today"}),Object(f.jsx)("h3",{className:"opening-page-container-h3",children:"Is your head full of sounds? You have an idea for the beat of the next hit?"}),Object(f.jsx)("h2",{className:"opening-page-container-h2",children:"Come and share..."}),Object(f.jsx)("h3",{className:"opening-page-container-h3",children:"Upload your own unique sounds or use existing sounds Create the rhythm Add audio effects. Save and share and let the world experience your touch."}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:s?"space-around ":"center"},children:[!s&&Object(f.jsx)("button",{className:"opening-page-container-button",onClick:function(){r(!0)},children:"Get started"}),s&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:"opening-page-container-button",onClick:function(){return h(!0)},children:"Log in"}),Object(f.jsx)("button",{className:"opening-page-container-button",onClick:function(){return j(!0)},children:"Sing"})]})]})]}),O&&Object(f.jsx)(y,{setLoginCard:h,setIsLoged:t}),l&&Object(f.jsx)(N,{setLoginCard:j,setIsLoged:t})]})},C=n(11),k=(n(74),n(75),function(e){var t=e.setAddSoundIsOpen,n=e.setSelectedSound,a=Object(c.useState)(null),s=Object(i.a)(a,2),r=s[0],o=s[1],u=Object(c.useState)(!1),l=Object(i.a)(u,2),j=l[0],O=l[1],h=Object(c.useState)(""),m=Object(i.a)(h,2),x=m[0],g=m[1],y=Object(c.useState)(null),N=Object(i.a)(y,2),S=N[0],C=N[1],k=Object(c.useState)(null),w=Object(i.a)(k,2),I=w[0],q=w[1],A=Object(c.useState)("Submit"),F=Object(i.a)(A,2),E=F[0],L=F[1],T=function(){var e=Object(b.a)(d.a.mark((function e(){var a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=5;break}q("File must have at least one tag"),L("Try Again"),e.next=29;break;case 5:if(!j){e.next=29;break}return a=localStorage.getItem("token"),e.next=9,r.result.split("data:audio/wav;base64,").join("");case 9:return c=e.sent,e.prev=10,e.next=13,p.post("sounds",{name:x,audio:c,tags:S},{headers:{Authorization:"Bearer ".concat(a)}});case 13:s=e.sent,q("Succeeded"),q(""),o(null),O(null),g(""),C(null),console.log(s.data.name),n({name:s.data.name,id:s.data._id,audio:s.data.audio}),t(!1),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(10),q("File name must be unique!"),L("Try Again");case 29:case"end":return e.stop()}}),e,null,[[10,25]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"add-sound-top",children:Object(f.jsxs)("div",{className:"add-sound-container",children:[Object(f.jsx)("div",{className:"add-sound-exit",onClick:function(){return t(!1)},children:"X"}),Object(f.jsx)("h2",{className:"add-sound-container-h2",children:"Upload new sound"}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound name"}),Object(f.jsx)("p",{className:"add-sound-container-p",children:"Must be unique (auto fill when upload file)"}),Object(f.jsx)(v,{className:"add-sound-input",value:x,onChange:function(e){return g(e.target.value)}}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("h3",{className:"add-sound-container-h3",children:"Insert sound tags"}),Object(f.jsx)("p",{className:"add-sound-container-p",children:"A space must be left between each tag"}),Object(f.jsx)(v,{className:"add-sound-input",value:S?S.join(" "):"",onChange:function(e){return C(e.target.value.split(" "))}}),Object(f.jsx)("br",{className:"add-sound-br"}),Object(f.jsx)("label",{htmlFor:"upload-sound",children:"Upload file"}),Object(f.jsxs)("div",{className:"add-sound-button-div",children:[Object(f.jsx)("input",{id:"upload-sound",size:"80",type:"file",accept:"audio/mp3, audio/wav ",onChange:function(e){var t=new FileReader;e.target.files[0]?(t.readAsDataURL(e.target.files[0]),o(t),O(!0),""===x&&(e.target.files[0].name.match(/\.wav$/)&&g(e.target.files[0].name.split(".wav")[0]),e.target.files[0].name.match(/\.mp3$/)&&g(e.target.files[0].name.split(".mp3")[0])),L("Submit")):O(!1)}}),Object(f.jsxs)("div",{children:[j&&Object(f.jsx)("button",{className:"add-sound-button",onClick:function(){new Audio("".concat(r.result)).play()},children:"Test"}),Object(f.jsx)("button",{className:"add-sound-button",type:"button",onClick:T,children:E})]})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[!I&&Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"add-sound-container-p",children:I})]})]})})})}),w=function(e){var t=e.value,n=e.options,a=e.setValue,c=e.className;return Object(f.jsx)("select",{className:c,value:t,onChange:function(e){return a(e.target.value)},children:n&&n.map((function(e){return Object(f.jsx)("option",{id:e,children:e},e)}))})},I=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(c.useState)(null),j=Object(i.a)(l,2),O=j[0],h=j[1],m=Object(c.useState)(""),x=Object(i.a)(m,2),g=x[0],v=x[1],y=Object(c.useState)(new Array(32).fill({color:""})),N=Object(i.a)(y,2),S=N[0],I=N[1],q=Object(c.useState)("purpule"),A=Object(i.a)(q,2),F=A[0],E=A[1];Object(c.useEffect)((function(){O&&v(O.name)}),[O]);var L=function(e){var t=e.target.id.replace("pad-num-","");if(o&&O){var n=S;n[t]=Object(C.a)(Object(C.a)({},n[t]),{},{id:O.id,audio:O.audio,name:O.name,color:F}),u(!1),I(n)}else{if(S[t].id)(function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Audio("data:audio/mp3;base64,".concat(S[t].audio)),e.next=3,n.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},T=function(e){var t=S.filter((function(t,n){return n>=e&&n<e+6}));return Object(f.jsx)("div",{className:"pads-grid",children:t.map((function(t,n){return Object(f.jsx)("div",{className:"single-pad ".concat(S[e+n].color),id:"pad-num-".concat(e+n),onClick:L},"create-pad-".concat(e+n))}))})},B=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(24!==(t=S.filter((function(e){return e.id}))).length){e.next=15;break}return e.prev=2,n=localStorage.getItem("token"),a=t.map((function(e){return{id:e.id,color:e.color}})),console.log(a),e.next=8,p.post("/sound-collection",{name:"noare",sounds:a},{headers:{Authorization:"Bearer ".concat(n)}});case 8:c=e.sent,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("the name is in use choose a differnt collection name");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)(k,{setAddSoundIsOpen:a,setSelectedSound:h}),Object(f.jsxs)("div",{className:"create-container",children:[Object(f.jsxs)("div",{className:"create-nav",children:[Object(f.jsx)("h2",{className:" create-h2",children:"Fill the board with sound"}),Object(f.jsx)("div",{className:"create-buttons-div",children:Object(f.jsx)("h3",{className:"create-h3",children:"Upload or choose other sound, than fill the pad board as your wish"})}),Object(f.jsxs)("div",{className:"create-buttons-div",children:[Object(f.jsx)("button",{className:"create-button",type:"button",onClick:function(){return a(!0)},children:"Upload sound"}),Object(f.jsx)("button",{className:"create-button",type:"button",children:"Search sound"})]}),Object(f.jsxs)("div",{className:"".concat(o?"create-file-sound-selected":""," create-file-sound"),onClick:function(){return u(!o)},children:[Object(f.jsx)("span",{style:{color:"var(--led-".concat(F,")")},children:"SOUND: "}),g]}),Object(f.jsxs)("div",{className:"create-buttons-div",children:[Object(f.jsx)("h3",{className:"create-h3",children:"Button color"}),Object(f.jsx)(w,{value:F,options:["ligth-blue","purpule","red","yellow","blue","green"],setValue:E,className:"create-selector"})]})]}),Object(f.jsxs)("div",{className:"pads-container",children:[Object(f.jsxs)("div",{className:"pads-container-san",children:[T(0),T(7),T(13),T(19)]}),Object(f.jsx)("button",{className:"create-button",onClick:function(){return B()},children:"Save"})]})]})]})},q=n(20),A=n(18),F=(n(76),function(e){var t=e.value,n=e.setValue,a=e.max,c=e.min;return Object(f.jsx)("div",{style:{padding:"0.3rem 1rem",background:"none",width:"50%"},children:Object(f.jsx)("input",{min:c,max:a,type:"range",value:t,onChange:n})})}),E=n(36),L=n.n(E),T=(n(78),function(e){var t=e.boxTiming,n=e.id,a=e.thisClass,s=e.padIndex,r=e.currentColor,o=e.rythemArr,u=e.setMyRythemArr,l=Object(c.useState)(null),j=Object(i.a)(l,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){b(o[n-1])}),[o,n,s]),Object(f.jsx)("div",{className:"".concat(a," ").concat(t!==n||d?"":"play-mode-boxIsOn","\n            ").concat(d&&t!==n&&"".concat(r," empty-center-of-box"),"\n            ").concat(d&&t===n&&r,"\n            "),onMouseDown:function(){var e=Object(A.a)(o);e[32]=d?1!==e[32]&&e[32]-1:!1===e[32]?1:e[32]+1,b(!d),e[n-1]=!e[n-1],u(e,s)}})}),B=n(37),M=function(e){var t=e.id,n=e.thisClass,a=e.padIndex,s=e.setPadIndex,r=e.so,o=e.boxTiming,u=e.rythemObj,l=e.setCurrentColor,j=e.padsStatus,O=e.setMyPadsStatus,h=e.ctx,p=e.gain,m=Object(c.useState)(0),x=Object(i.a)(m,2),g=x[0],v=x[1];Object(c.useEffect)((function(){if(j&&!0===u[o-1]){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.decode)(t),e.next=3,h.decodeAudioData(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(b.a)(d.a.mark((function t(n,a){var c,s,o,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"suspended"===h.state&&h.resume(),t.next=3,e(n);case 3:return c=t.sent,t.next=6,h.createGain();case 6:return(s=t.sent).gain.value=r.gain,s.connect(a),t.next=11,h.createBiquadFilter();case 11:(o=t.sent).frequency.value=r.frequency,o.detune.value=r.detune,o.type=r.type,o.connect(s),(i=h.createBufferSource()).buffer=c,i.connect(o),0===g?(i.start(),v(0)):i.start(0,h.currentTime-g);case 20:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}})()(r.myAudio,p)}}),[o,u,t,r,j,a,p,g,h]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"".concat(n," \n            ").concat(r.color,"\n            ").concat(a===t?"buttonOn":"buttonOff","\n            ").concat(j&&!0===u[o-1]?"play-mode-boxIsOn":"buttonOff"),onMouseDown:function(){s(t),u.find((function(e){return!0===e}))&&a===t&&O(a,!j),l(r.color)},children:Object(f.jsx)("div",{className:"play-mode-pad-icon",children:u[32]?j?Object(f.jsx)("i",{className:"fas fa-undo fa-1x"}):Object(f.jsx)("i",{className:"fas fa-pause fa-1x"}):""})})})},V=function(e){var t=e.ctx,n=e.sounds,a=e.setSounds,s=e.gainNode,r=e.biquadFilter,o=Object(c.useState)(!1),u=Object(i.a)(o,2),l=u[0],j=u[1],d=Object(c.useState)(120),b=Object(i.a)(d,2),O=b[0],h=b[1],p=Object(c.useState)(120),m=Object(i.a)(p,2),x=m[0],g=m[1],v=Object(c.useState)(!1),y=Object(i.a)(v,2),N=y[0],S=y[1],k=Object(c.useState)(0),w=Object(i.a)(k,2),I=w[0],E=w[1],B=Object(c.useState)(0),V=Object(i.a)(B,2),U=V[0],P=V[1],D=Object(c.useState)(!1),R=Object(i.a)(D,2),z=R[0],G=R[1],H=Object(c.useState)({}),W=Object(i.a)(H,2),Y=W[0],_=W[1],J=Object(c.useState)(1),$=Object(i.a)(J,2),X=$[0],K=$[1],Q=Object(c.useState)("ligth-blue"),Z=Object(i.a)(Q,2),ee=Z[0],te=Z[1];Object(c.useEffect)((function(){j(!n)}),[n]);var ne=Object(c.useState)(.75),ae=Object(i.a)(ne,2),ce=ae[0],se=ae[1],re=Object(c.useState)(350),oe=Object(i.a)(re,2),ie=oe[0],ue=oe[1];Object(c.useEffect)((function(){s&&(s.gain.value=ce),r&&(r.frequency.value=ie,r.type="notch")}),[s,ce,r,ie]);var le=function(e,t){var c=Object(A.a)(n);c[X-1][t]="gain"===t?e.target.value/100:e.target.value,a(c)};Object(c.useEffect)((function(){for(var e={},t=0;t<24;t++)e[t+1]=new Array(33).fill(!1);e.padsStatus=new Array(24).fill(!0),_(e)}),[z,a]),Object(c.useEffect)((function(){setTimeout((function(){g(O)}),1e3)}),[O]);var je=function(e,t){var n=Object(C.a)(Object(C.a)({},Y),{},Object(q.a)({},t,e));_(Object(C.a)({},n))},de=function(e,t){var n=Object(A.a)(Y.padsStatus);n[e-1]=t;var a=Object(C.a)(Object(C.a)({},Y),{},{padsStatus:n});_(Object(C.a)({},a))},be=function(e,a,c,s){var o=new Array(e).fill(1);return Object(f.jsx)("div",{className:a,children:o.map((function(e,a){return"play-mode-single-sequencer"===c?Object(f.jsx)(T,{thisClass:c,boxTiming:U,id:s+a,padIndex:X,currentColor:ee,rythemArr:Y["".concat(X)],setMyRythemArr:je},"".concat(c).concat(s+a)):Object(f.jsx)(M,{thisClass:c,id:s+a,padIndex:X,setPadIndex:K,boxTiming:U,rythemObj:Y["".concat(s+a)],setCurrentColor:te,padsStatus:Y.padsStatus[s+a-1],setMyPadsStatus:de,ctx:t,gain:r,so:n[s+a-1]},"".concat(c).concat(s+a))}))})},Oe=function(){N&&(E(0),P(0)),S(!N)};return Object(f.jsxs)(f.Fragment,{children:[l&&Object(f.jsx)("h1",{style:{color:"white"},children:"Loading Spinner"}),!l&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L.a,{timeout:6e4/x/4,enabled:N,callback:function(){E(I+1),P(U<32?U+1:1)}}),n&&t&&Object(f.jsxs)("div",{className:"play-mode-container",children:[Object(f.jsxs)("div",{className:"play-mode-sequencer-container",children:[be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",1),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",9),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",17),be(8,"play-mode-sequencer-grid","play-mode-single-sequencer",25),"BPM ",O,Object(f.jsx)(F,{value:O,setValue:function(e){h(e.target.value)},max:"220",min:"60"}),Object(f.jsx)(F,{value:100*ce,setValue:function(e){se(e.target.value/100)},max:"100",min:"0"}),"Gain ",ce,Object(f.jsx)(F,{value:ie,setValue:function(e){ue(e.target.value)},max:"4000",min:"0"}),"frequency ",ie,Object(f.jsx)("br",{}),U]}),Object(f.jsxs)("div",{className:"play-mode-pads-container",children:[be(6,"play-mode-sequencer-grid","play-mode-single-pad",1),be(6,"play-mode-sequencer-grid","play-mode-single-pad",7),be(6,"play-mode-sequencer-grid","play-mode-single-pad",13),be(6,"play-mode-sequencer-grid","play-mode-single-pad",19),I,Object(f.jsxs)("div",{style:{display:"flex",background:"none"},children:[Object(f.jsx)(F,{value:100*n[X-1].gain,setValue:function(e){le(e,"gain")},max:"100",min:"0"}),Object(f.jsx)(F,{value:n[X-1].frequency,setValue:function(e){le(e,"frequency")},max:"2000",min:"0"}),Object(f.jsx)(F,{value:n[X-1].detune,setValue:function(e){le(e,"detune")},max:"4000",min:"-4000"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("select",{value:n[X-1].type,onChange:function(e){le(e,"type")},children:[Object(f.jsx)("option",{value:"allpass",children:"Allpass"}),Object(f.jsx)("option",{value:"lowpass",children:"Lowpass"}),Object(f.jsx)("option",{value:"highpass",children:"Highpass"}),Object(f.jsx)("option",{value:"bandpass",children:"Bandpass"}),Object(f.jsx)("option",{value:"lowshelf",children:"Lowshelf"}),Object(f.jsx)("option",{value:"highshelf",children:"Highshelf"}),Object(f.jsx)("option",{value:"peaking",children:"Peaking"}),Object(f.jsx)("option",{value:"notch",children:"Notch"})]}),Object(f.jsx)("button",{onClick:function(){return Oe()},children:"Start"}),Object(f.jsx)("button",{onClick:function(){return G(!z),void Oe()},children:"Clear"})]})]})]})]})]})]})},U=function(e){var t=e.consoleIsOpen,n=e.setConsoleIsOpen,a=e.currentCollection,s=Object(c.useState)(t),r=Object(i.a)(s,2),o=r[0],u=r[1],j=Object(c.useState)(null),O=Object(i.a)(j,2),m=O[0],x=O[1],g=Object(c.useState)(null),v=Object(i.a)(g,2),y=v[0],N=v[1],S=Object(c.useState)(null),k=Object(i.a)(S,2),w=k[0],I=k[1],q=Object(c.useState)(null),A=Object(i.a)(q,2),F=A[0],E=A[1];return Object(c.useEffect)((function(){if(a){o&&x(new AudioContext);var e=new Array(24).fill({frequency:350,detune:0,type:"notch",gain:.75});(function(){var t=Object(b.a)(d.a.mark((function t(){var n,c,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/sound-collection/".concat(a));case 2:return n=t.sent,c=n.data[0].sounds,s=c.map(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/sounds/".concat(t.id));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r=null,t.next=8,h.a.all(s).then(h.a.spread((function(){for(var t=[],n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];for(var o=0;o<24;o++)t.push(Object(C.a)({myAudio:a[o].data[0].audio,color:c[o].color},e[o]));r=t}))).catch((function(e){}));case 8:console.log(n),E(r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}else n(!1)}),[o,a,n]),Object(c.useEffect)((function(){m&&!y&&(N(m.createGain()),I(m.createBiquadFilter()))}),[m,y]),Object(c.useEffect)((function(){y&&y.connect(m.destination),w&&w.connect(y)}),[y,m,w]),Object(f.jsxs)(f.Fragment,{children:[!a&&Object(f.jsx)(l.a,{to:"/"}),a&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:function(){o?(x(null),u(!1),N(null),I(null),E(null)):u(!0)},children:"get ctx"}),Object(f.jsx)(V,{ctx:m,sounds:F,setSounds:E,gainNode:y,biquadFilter:w})]})]})},P=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(i.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),O=b[0],h=b[1],p=Object(c.useState)(null),m=Object(i.a)(p,2),v=m[0],y=m[1];return Object(c.useEffect)((function(){localStorage.token&&(h(!0),y(localStorage.getItem("name")))}),[O]),Object(f.jsxs)(f.Fragment,{children:[console.log(n),!O&&Object(f.jsx)(S,{setIsLoged:h}),Object(f.jsx)(u.a,{children:O&&Object(f.jsxs)(f.Fragment,{children:[!n&&Object(f.jsx)(g,{userName:v}),Object(f.jsx)(l.b,{path:"/",exact:!0,component:function(){return Object(f.jsx)(x,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:j})}}),Object(f.jsx)(l.b,{path:"/home",exact:!0,component:function(){return Object(f.jsx)(x,{setConsoleIsOpen:a,consoleIsOpen:n,setCurrentCollection:j})}}),Object(f.jsx)(l.b,{path:"/create",exact:!0,component:function(){return Object(f.jsx)(I,{})}}),Object(f.jsx)(l.b,{path:"/console",exact:!0,component:function(){return Object(f.jsx)(U,{consoleIsOpen:n,setConsoleIsOpen:a,currentCollection:o})}})]})})]})};n(79);o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.d6119011.chunk.js.map