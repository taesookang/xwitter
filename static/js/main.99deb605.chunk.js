(this.webpackJsonpxwitter=this.webpackJsonpxwitter||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(33),i=a.n(s),o=a(8),u=a(22),l=a(6),j=a(7),d=a.n(j),b=a(13),h=a(24);a(45),a(57),a(56);h.a.initializeApp({apiKey:"AIzaSyCWB9YyiTll4BHRPyT2Ilr83GIVRbRYuxc",authDomain:"xwitter-7f639.firebaseapp.com",projectId:"xwitter-7f639",storageBucket:"xwitter-7f639.appspot.com",messagingSenderId:"1094476367673",appId:"1:1094476367673:web:acb908d7ed056b69f64ae8",measurementId:"G-CM4KTC40C4"});var p=h.a,x=h.a.auth(),O=h.a.firestore(),f=h.a.storage(),m=a(58),v=a(11),g=a(17);function w(e){var t=e.refreshUser,a=e.userObj,r=Object(l.f)(),s=Object(c.useState)(a.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],h=Object(c.useState)(a.photo),p=Object(o.a)(h,2),O=p[0],w=p[1],N=function(){var e=Object(b.a)(d.a.mark((function e(n){var c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",a.displayName===u){e.next=6;break}return e.next=6,a.updateProfile({displayName:u});case 6:if(a.photo===O){e.next=17;break}return r=f.ref().child("".concat(a.uid,"/profilePhoto/").concat(Object(m.a)())),e.next=10,r.putString(O,"data_url");case 10:return s=e.sent,e.next=13,s.ref.getDownloadURL();case 13:return c=e.sent,e.next=16,a.updateProfile({photoURL:c});case 16:console.log(a.photo);case 17:t();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"profile-container",children:[Object(n.jsxs)("form",{onSubmit:N,className:"profileForm",children:[Object(n.jsx)("label",{htmlFor:"attach-photo",children:Object(n.jsxs)("div",{className:"profilePhoto-container",children:[a.photo?Object(n.jsx)("img",{className:"profile-photo",src:O,alt:""}):Object(n.jsx)(v.a,{className:"profile-user",icon:g.g}),Object(n.jsx)("div",{className:"edit-icon",children:Object(n.jsx)(v.a,{icon:g.b,color:"white"})})]})}),Object(n.jsx)("input",{id:"attach-photo",type:"file",accept:"image/*",value:"",onChange:function(e){var t=e.target.files[0],a=new FileReader;Boolean(t)&&a.readAsDataURL(t),a.onloadend=function(e){var t=e.currentTarget.result;w(t)}}}),Object(n.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display Name",value:u,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn"})]}),Object(n.jsx)("button",{className:"formBtn cancelBtn logOut",onClick:function(){x.signOut(),r.push("/")},children:"Log Out"})]})})}var N=a(23);function y(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!1),h=Object(o.a)(j,2),p=h[0],O=h[1],f=Object(c.useState)(""),m=Object(o.a)(f,2),v=m[0],g=m[1],w=function(e){var t=e.target,a=t.name,n=t.value;return"email"===a?r(n):"password"===a?l(n):void 0},N=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=7;break}return e.next=5,x.createUserWithEmailAndPassword(a,u);case 5:e.next=9;break;case 7:return e.next=9,x.signInWithEmailAndPassword(a,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:N,className:"container",children:[Object(n.jsx)("input",{className:"authInput",name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:w}),Object(n.jsx)("input",{className:"authInput",name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(n.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),v&&Object(n.jsxs)("span",{className:"authError",children:[" ",v," "]})]}),Object(n.jsx)("span",{className:"authSwitch",onClick:function(){return O((function(e){return!e}))},children:p?"Sign In":"Create Account"})]})}function I(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a&&(n=new p.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(v.a,{className:"logo",icon:N.c,size:"3x"}),Object(n.jsx)(y,{}),Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{className:"authBtn",onClick:e,name:"google",children:["Continue with Google ",Object(n.jsx)(v.a,{icon:N.b})]}),Object(n.jsxs)("button",{className:"authBtn",onClick:e,name:"github",children:["Continue with Github ",Object(n.jsx)(v.a,{icon:N.a})]})]})]})})}var S=a(37),k=a(28),C=a.n(k),A=a(36),P=a.n(A);function F(e){var t=e.userObj,a=e.xweetObj,r=e.isOwner,s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(a.text),h=Object(o.a)(j,2),p=h[0],x=h[1],m=Object(c.useState)(a.url),w=Object(o.a)(m,2),N=w[0],y=w[1],I=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete this xweet?")){e.next=7;break}return e.next=4,O.doc("xweets/".concat(a.id)).delete();case 4:if(!a.url){e.next=7;break}return e.next=7,f.refFromURL(a.url).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return l((function(e){return!e}))},k=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.doc("xweets/".concat(a.id)).update({text:p,url:N});case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"xweet",children:[r&&Object(n.jsxs)("div",{className:"xweet-label",children:[Object(n.jsxs)("div",{className:"user-info",children:[Object(n.jsx)("img",{id:"profile-photo",src:t.photo,alt:""}),Object(n.jsx)("span",{children:t.displayName}),Object(n.jsxs)("h5",{children:["@",t.uid]})]}),Object(n.jsxs)("div",{className:"xweet-icons",children:[Object(n.jsx)("span",{onClick:S,children:Object(n.jsx)(v.a,{icon:g.c})}),Object(n.jsx)("span",{onClick:I,children:Object(n.jsx)(v.a,{icon:g.f})})]})]}),u?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{onSubmit:k,children:[Object(n.jsxs)("div",{className:"xweet-edit",children:[Object(n.jsx)("textarea",{type:"text",placeholder:"New content is...",value:p,onChange:function(e){var t=e.target.value;x(t)},required:!0}),a.url&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{htmlFor:"input-photo-edit",children:[Object(n.jsx)("img",{className:"xweet-photo photo-edit",src:N,alt:""}),Object(n.jsx)(v.a,{className:"edit-icon",icon:g.a,size:"2x"})]}),Object(n.jsx)("input",{id:"input-photo-edit",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;Boolean(t)&&a.readAsDataURL(t),a.onloadend=function(e){var t=e.currentTarget.result;y(t)}}})]})]}),Object(n.jsxs)("div",{className:"xweet-footer",children:[Object(n.jsx)("input",{type:"submit",value:"Update Xweet"}),Object(n.jsx)("button",{onClick:S,children:"Cancel"})]})]})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:a.text}),a.url&&Object(n.jsx)("img",{className:"xweet-photo",src:a.url,alt:""}),Object(n.jsxs)("div",{className:"xweet-footer",children:[Object(n.jsx)(P.a,{date:a.createdAt,format:"MMM DD YYYY, hh:mm A"}),Object(n.jsx)("span",{children:C()(a.createdAt).fromNow()})]})]})]})}function U(e){var t=e.userObj,a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],h=l[1],p=new FileReader,x=function(){var e=Object(b.a)(d.a.mark((function e(a){var n,c,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===j){e.next=10;break}return c=f.ref().child("".concat(t.uid,"/attachments/").concat(Object(m.a)())),e.next=6,c.putString(j,"data_url");case 6:return r=e.sent,e.next=9,r.ref.getDownloadURL();case 9:n=e.sent;case 10:return o={text:s,createdAt:Date.now(),authorId:t.uid,url:n},e.next=13,O.collection("xweets").add(o);case 13:i(""),h("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:x,className:"factory-form",children:[Object(n.jsxs)("div",{className:"factoryInput-container",children:[Object(n.jsx)("input",{className:"factoryInput-input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(n.jsx)("input",{className:"factoryInput-arrow",type:"submit",value:"\u2192"})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput-label",children:[Object(n.jsx)("span",{children:"Add photos"}),Object(n.jsx)(v.a,{icon:g.d})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0];p.onloadend=function(e){var t=e.currentTarget.result;h(t)},Boolean(t)&&p.readAsDataURL(t)}}),j&&Object(n.jsxs)("div",{className:"factoryForm-attachment",children:[Object(n.jsx)("img",{alt:"",src:j,style:{backgroundImage:j}}),Object(n.jsxs)("div",{className:"factoryForm-clear",onClick:function(){h("")},children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(v.a,{icon:g.e})]})]})]})}function R(e){var t=e.userObj,a=Object(c.useState)([]),r=Object(o.a)(a,2),s=r[0],i=r[1],u=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("xweets").where("authorId","==",t.uid).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(S.a)({id:e.id},e.data())}));i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return u(),i([])}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(U,{userObj:t}),Object(n.jsx)("div",{className:"xweet-container",children:s.map((function(e){return Object(n.jsx)(F,{userObj:t,xweetObj:e,isOwner:e.authorId===t.uid},e.id)}))})]})}function B(e){var t=e.userObj;return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/",replace:!0,children:Object(n.jsx)(v.a,{className:"navIcon",icon:N.c,size:"2x"})})}),Object(n.jsx)("li",{children:Object(n.jsxs)(u.b,{to:"/profile",replace:!0,children:[t.photo?Object(n.jsx)("div",{className:"user-photo",children:Object(n.jsx)("img",{src:t.photo,alt:""})}):Object(n.jsx)(v.a,{className:"navIcon",icon:g.g,size:"2x"}),t.displayName?Object(n.jsxs)("span",{children:[Object(n.jsx)("strong",{children:t.displayName}),"'s Profile"]}):Object(n.jsx)("span",{children:"Profile"})]})})]})})}function D(e){var t=e.refreshUser,a=e.isLoggedIn,c=e.userObj;return Object(n.jsxs)(u.a,{children:[a&&Object(n.jsx)(B,{userObj:c}),Object(n.jsx)(l.c,{children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(R,{userObj:c})}),Object(n.jsx)(l.a,{exact:!0,path:"/profile",children:Object(n.jsx)(w,{refreshUser:t,userObj:c})})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(I,{})})})})]})}var L=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){x.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,photo:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(n.jsxs)("div",{className:"App",children:[a?Object(n.jsx)(D,{refreshUser:function(){var e=x.currentUser;l({displayName:e.displayName,uid:e.uid,photo:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Loading...",Object(n.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Xwitter by Taesoo Kang "]})]})};a(54);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.99deb605.chunk.js.map