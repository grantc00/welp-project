(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=(n(27),n(16)),a=n.n(c),i=n(5),o=n(8),u=n(3),l=n(7),j=n(2),d=n.n(j),b=n(4),h=n(22),O=n.n(h);function p(e){return x.apply(this,arguments)}function x(){return x=Object(b.a)(d.a.mark((function e(t){var n,s,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=r.length>1&&void 0!==r[1]?r[1]:{}).method=n.method||"GET",n.headers=n.headers||{},"GET"!==n.method.toUpperCase()&&(n.headers["Content-Type"]=n.headers["Content-Type"]||"application/json",n.headers["XSRF-Token"]=O.a.get("XSRF-TOKEN")),e.next=6,window.fetch(t,n);case 6:if(!((s=e.sent).status>=400)){e.next=9;break}throw s;case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var f="session/setUser",v="session/removeUser",m=function(e){return{type:f,payload:e}},w=function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var s,r,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.credential,r=e.password,t.next=3,p("/api/session",{method:"POST",body:JSON.stringify({credential:s,password:r})});case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,n(m(a.user)),t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g={user:null},N=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return(e=Object.assign({},t)).user=n.payload,e;case v:return(e=Object.assign({},t)).user=null,e;default:return t}},y=(n(37),n(0));var S=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.session.user})),n=Object(s.useState)(""),r=Object(u.a)(n,2),c=r[0],a=r[1],j=Object(s.useState)(""),h=Object(u.a)(j,2),O=h[0],p=h[1],x=Object(s.useState)([]),f=Object(u.a)(x,2),v=f[0],m=f[1];return t?Object(y.jsx)(l.a,{to:"/"}):Object(y.jsx)("div",{className:"login-container",children:Object(y.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),m([]),e(w({credential:c,password:O})).catch(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:(n=e.sent)&&n.errors&&m(n.errors);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(y.jsx)("p",{className:"login-form-header",children:"Log in to Welp"}),Object(y.jsxs)("p",{className:"login-form-header-2",children:["New to Welp?",Object(y.jsx)(o.b,{to:"/signup",className:"signup-text",children:"Sign up"})]}),Object(y.jsx)("ul",{style:{color:"#bbbbbb",listStyle:"none"},children:v.map((function(e,t){return Object(y.jsx)("li",{children:e},t)}))}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{className:"info-textarea",type:"text",value:c,placeholder:"Email or Username",onChange:function(e){return a(e.target.value)},required:!0})}),Object(y.jsx)("label",{children:Object(y.jsx)("input",{className:"info-textarea",type:"password",value:O,placeholder:"Password",onChange:function(e){return p(e.target.value)},required:!0})}),Object(y.jsx)("button",{className:"loginButton",type:"submit",children:"Log In"}),Object(y.jsx)("button",{className:"loginButton",onClick:function(){e(w({credential:"demo@user.io",password:"password"}))},children:"Demo User"})]})})};n(43);var C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.session.user})),n=Object(s.useState)(""),r=Object(u.a)(n,2),c=r[0],a=r[1],j=Object(s.useState)(""),h=Object(u.a)(j,2),O=h[0],x=h[1],f=Object(s.useState)(""),v=Object(u.a)(f,2),w=v[0],g=v[1],N=Object(s.useState)(""),S=Object(u.a)(N,2),C=S[0],k=S[1],M=Object(s.useState)([]),P=Object(u.a)(M,2),E=P[0],I=P[1];return t?Object(y.jsx)(l.a,{to:"/"}):Object(y.jsx)("div",{className:"signup-container",children:Object(y.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),w===C?(I([]),e((n={email:c,username:O,password:w},function(){var e=Object(b.a)(d.a.mark((function e(t){var s,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.username,r=n.email,c=n.password,e.next=3,p("/api/users",{method:"POST",body:JSON.stringify({username:s,email:r,password:c})});case 3:return a=e.sent,e.next=6,a.json();case 6:return i=e.sent,t(m(i.user)),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:(n=e.sent)&&n.errors&&I(n.errors);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):I(["Confirm Password field must be the same as the Password field"]);var n},children:[Object(y.jsxs)("p",{className:"signup-form-header",children:["Already on Welp?",Object(y.jsx)(o.b,{to:"/login",className:"login-text",children:"Log in"})]}),Object(y.jsx)("ul",{children:E.map((function(e,t){return Object(y.jsx)("li",{children:e},t)}))}),Object(y.jsxs)("label",{className:"signupText",children:["Email",Object(y.jsx)("input",{className:"signup-textarea",type:"text",value:c,placeholder:"Email",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(y.jsxs)("label",{className:"signupText",children:["Username",Object(y.jsx)("input",{className:"signup-textarea",type:"text",placeholder:"Username",value:O,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(y.jsxs)("label",{className:"signupText",children:["Password",Object(y.jsx)("input",{className:"signup-textarea",type:"password",placeholder:"Password",value:w,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(y.jsxs)("label",{className:"signupText",children:["Confirm Password",Object(y.jsx)("input",{className:"signup-textarea",type:"password",placeholder:"Confirm Password",value:C,onChange:function(e){return k(e.target.value)},required:!0})]}),Object(y.jsx)("button",{className:"signupButton",type:"submit",children:"Sign Up"})]})})};var k=function(e){var t=e.user,n=Object(i.b)(),r=Object(s.useState)(!1),c=Object(u.a)(r,2),a=c[0],o=c[1];return Object(s.useEffect)((function(){if(a){var e=function(){o(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[a]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{onClick:function(){a||o(!0)},children:Object(y.jsx)("i",{className:"fas fa-user-circle"})}),a&&Object(y.jsxs)("ul",{className:"profile-dropdown",style:{color:"#bbbbbb",listStyle:"none"},children:[Object(y.jsx)("li",{children:t.username}),Object(y.jsx)("li",{children:t.email}),Object(y.jsx)("li",{children:Object(y.jsx)("button",{onClick:function(e){e.preventDefault(),n(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/session",{method:"DELETE"});case 2:return n=e.sent,t({type:v}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"})})]})]})},M=(n(44),n.p+"static/media/welp-Logo.81f86ab1.png");var P=function(e){var t,n=e.isLoaded,s=Object(i.c)((function(e){return e.session.user}));return t=s?Object(y.jsx)(k,{user:s}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(o.c,{id:"loginButton",to:"/login",children:"Log In"}),Object(y.jsx)(o.c,{id:"singupButton",to:"/signup",children:"Sign Up"})]})}),Object(y.jsxs)("div",{className:"nav-bar-container",children:[Object(y.jsx)("div",{children:Object(y.jsx)(o.c,{className:"homeButton",exact:!0,to:"/",children:Object(y.jsx)("img",{className:"logo",src:M,alt:"Welp"})})}),Object(y.jsx)("div",{className:"nav-bar",children:n&&t})]})},E=(n(45),n(13)),I="businesses/SET_BUSINESSES",T=function(e){return{type:I,payload:e}},B=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/business");case 2:if(!(n=e.sent).ok){e.next=16;break}return e.next=6,n.json();case 6:if(!(s=e.sent).errors){e.next=12;break}return r=Object.values(s.errors),e.abrupt("return",r);case 12:t(T(s));case 13:return e.abrupt("return",s);case 16:return e.abrupt("return","response not okay, try again later");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){var t=e.ownerId,n=e.title,s=e.description,r=e.address;return function(){var e=Object(b.a)(d.a.mark((function e(c){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/business",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ownerId:t,title:n,description:s,address:r})});case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,c((o=i.businesses,{type:I,payload:o}));case 7:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("/api/business/".concat(e,"/delete"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({businessId:e})});case 2:return s=t.sent,t.next=5,s.json();case 5:r=t.sent,n(T(r));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q={businesses:null};n(46);var L=function(e){var t,n=Object(i.b)(),r=Object(s.useState)(""),c=Object(u.a)(r,2),a=c[0],o=c[1],l=Object(s.useState)(""),j=Object(u.a)(l,2),h=j[0],O=j[1],p=Object(s.useState)(""),x=Object(u.a)(p,2),f=x[0],v=x[1],m=Object(i.c)((function(e){return e.session.user}));if(m&&(t=m.id),!e.show)return null;var w=function(){var e=Object(b.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=3;break}return e.next=3,n(A({ownerId:t,title:a,description:h,address:f})).catch(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(y.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(y.jsx)("div",{className:"modal-header",children:Object(y.jsx)("h4",{className:"modal-title",children:"Create New Business"})}),Object(y.jsxs)("form",{onSubmit:w,children:[Object(y.jsxs)("div",{className:"modal-body",children:[Object(y.jsxs)("label",{children:["Title:",Object(y.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(y.jsx)("textarea",{name:"textarea",placeholder:"Business Description",value:h,onChange:function(e){return O(e.target.value)},required:!0}),Object(y.jsxs)("label",{children:["Address:",Object(y.jsx)("input",{type:"text",name:"address",value:f,onChange:function(e){return v(e.target.value)},required:!0})]})]}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{onClick:e.onClose,className:"button",children:"Close"}),Object(y.jsx)("button",{onClick:e.onSubmit,className:"submit-button",type:"submit",children:"Submit"})]})]})]})})};var U=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.session.user})),n=Object(l.g)(),r=Object(s.useState)({}),c=Object(u.a)(r,2),a=c[0],j=c[1],h=Object(s.useState)(!0),O=Object(u.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)(!1),v=Object(u.a)(f,2),m=v[0],w=v[1];if(Object(s.useEffect)((function(){Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(B());case 2:n=t.sent,j(n),x(!1);case 5:case"end":return t.stop()}}),t)})))()}),[e]),p)return Object(y.jsx)("div",{className:"App",children:"Loading..."});var g=null===a||void 0===a?void 0:a.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(o.b,{to:"/business/".concat(e.id),children:Object(y.jsxs)("div",{className:"homePage-item",children:[Object(y.jsx)("div",{className:"homePage-picture-container",children:Object(y.jsx)("img",{className:"homePage-pic",src:"https://images.unsplash.com/photo-1500868766630-f5477adf6f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",alt:e.title,height:"174px",width:"216px"})}),Object(y.jsx)("p",{className:"homePage-business-title",children:e.title})]})})},e.id)}));return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:"homePage-business",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"homePage-img"}),Object(y.jsx)("h1",{className:"container-title",children:"Find the Best Businesses in Town"}),Object(y.jsx)("div",{className:"homePage-business-container",children:g}),Object(y.jsxs)("div",{className:"button-container",children:[Object(y.jsx)("button",{className:"Business-button",onClick:t?function(){return w(!0)}:function(){return n.push("/login")},children:"New Business"}),Object(y.jsx)(L,{onClose:function(){return w(!1)},show:m})]})]})})})};n(47);var H=function(){return Object(y.jsx)("div",{className:"about",children:Object(y.jsx)("div",{className:"footer-container"})})},R="reviews/ADD_REVIEW",W="reviews/SET_REVIEWS",G="reviews/UPDATE_REVIEW",J=function(e){return{type:W,payload:e}},F=function(e){var t=e.userId,n=e.businessId,s=e.rating,r=e.answer;return function(){var e=Object(b.a)(d.a.mark((function e(c){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t,businessId:n,rating:s,answer:r})});case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,c((o=i.review,{type:R,payload:o}));case 7:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n){var s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("/api/review/".concat(e,"/delete"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reviewId:e})});case 2:return s=t.sent,t.next=5,s.json();case 5:r=t.sent,n(J(r));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V={review:null,reviews:null};n(48),n(49);var _=function(e){var t,n,r=Object(i.b)(),c=Object(i.c)((function(e){return e.session.user})),a=Object(s.useState)(""),o=Object(u.a)(a,2),l=o[0],j=o[1],h=Object(s.useState)(""),O=Object(u.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)(!1),v=Object(u.a)(f,2);v[0],v[1];if(!e.show)return null;e.findMatch&&(n=e.findMatch.id),c&&(t=c.id);var m=function(){var e=Object(b.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=3;break}return e.next=3,r(F({userId:t,businessId:n,rating:p,answer:l})).catch(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:j("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(y.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(y.jsx)("div",{className:"modal-header",children:Object(y.jsx)("h4",{className:"modal-title",children:e.findMatch.title})}),Object(y.jsxs)("form",{onSubmit:m,children:[Object(y.jsxs)("div",{className:"modal-body",children:[Object(y.jsxs)("label",{children:["Pick your rating:",Object(y.jsxs)("select",{value:p,onChange:function(e){return x(e.target.value)},children:[Object(y.jsx)("option",{value:"1"}),Object(y.jsx)("option",{value:"1",children:"1"}),Object(y.jsx)("option",{value:"2",children:"2"}),Object(y.jsx)("option",{value:"3",children:"3"}),Object(y.jsx)("option",{value:"4",children:"4"}),Object(y.jsx)("option",{value:"5",children:"5"})]})]}),Object(y.jsx)("textarea",{name:"textarea",placeholder:"Please be kind",value:l,onChange:function(e){return j(e.target.value)},required:!0})]}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{onClick:e.onClose,className:"button",children:"Close"}),Object(y.jsx)("button",{onClick:e.onSubmit,className:"submit-button",type:"submit",children:"Submit"})]})]})]})})},X=n(24),K=n.n(X),z=function(e){var t,n,r,c=Object(i.b)(),a=Object(i.c)((function(e){return e.session.user})),o=Object(s.useState)(""),l=Object(u.a)(o,2),j=l[0],h=l[1],O=Object(s.useState)(""),x=Object(u.a)(O,2),f=x[0],v=x[1];if(!e.showEdit)return null;e.findMatch&&(n=e.findMatch.id),a&&(t=a.id),e.currentReviews&&(r=e.currentReviews.id);return Object(y.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(y.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(y.jsx)("div",{className:"modal-header",children:Object(y.jsx)("h4",{className:"modal-title",children:e.findMatch.title})}),Object(y.jsxs)("form",{onSubmit:function(e){a&&c(function(e){var t=e.reviewId,n=e.userId,s=e.businessId,r=e.rating,c=e.answer;return function(){var e=Object(b.a)(d.a.mark((function e(a){var i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/review/".concat(t,"/edit"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,businessId:s,rating:r,answer:c})});case 2:return i=e.sent,e.next=5,i.json();case 5:o=e.sent,a({type:G,payload:o});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({reviewId:r,userId:t,businessId:n,rating:f,answer:j}))},children:[Object(y.jsxs)("div",{className:"modal-body",children:[Object(y.jsxs)("label",{children:["Pick your rating:",Object(y.jsxs)("select",{value:f,onChange:function(e){return v(e.target.value)},children:[Object(y.jsx)("option",{value:"1"}),Object(y.jsx)("option",{value:"1",children:"1"}),Object(y.jsx)("option",{value:"2",children:"2"}),Object(y.jsx)("option",{value:"3",children:"3"}),Object(y.jsx)("option",{value:"4",children:"4"}),Object(y.jsx)("option",{value:"5",children:"5"})]})]}),Object(y.jsx)("textarea",{name:"textarea",placeholder:e.currentReviews.answer,value:j,onChange:function(e){return h(e.target.value)},required:!0})]}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{onClick:e.onClose,className:"button",children:"Close"}),Object(y.jsx)("button",{onClick:e.onSubmit,className:"submit-button",type:"submit",children:"Update"})]})]})]})})},Q=function(e){var t,n=Object(i.b)(),r=Object(i.c)((function(e){return e.session.user})),c=Object(s.useState)(""),a=Object(u.a)(c,2),o=a[0],l=a[1],j=Object(s.useState)(""),h=Object(u.a)(j,2),O=h[0],x=h[1],f=Object(s.useState)(""),v=Object(u.a)(f,2),m=v[0],w=v[1];if(!e.showBusinessEdit)return null;e.findMatch&&(t=e.findMatch.id);return Object(y.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(y.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(y.jsx)("div",{className:"modal-header",children:Object(y.jsx)("h4",{className:"modal-title",children:"Edit Business"})}),Object(y.jsxs)("form",{onSubmit:function(e){r&&n(function(e){var t=e.businessId,n=e.title,s=e.description,r=e.address;return function(){var e=Object(b.a)(d.a.mark((function e(c){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/business/".concat(t,"/edit"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,description:s,address:r})});case 2:return a=e.sent,e.next=5,a.json();case 5:i=e.sent,c({type:I,payload:i});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({businessId:t,title:o,description:O,address:m}))},children:[Object(y.jsxs)("div",{className:"modal-body",children:[Object(y.jsxs)("label",{children:["Title:",Object(y.jsx)("input",{type:"text",name:"title",value:o,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(y.jsx)("textarea",{name:"textarea",placeholder:"Business Description",value:O,onChange:function(e){return x(e.target.value)},required:!0}),Object(y.jsxs)("label",{children:["Address:",Object(y.jsx)("input",{type:"text",name:"address",value:m,onChange:function(e){return w(e.target.value)},required:!0})]})]}),Object(y.jsxs)("div",{className:"modal-footer",children:[Object(y.jsx)("button",{onClick:e.onClose,className:"button",children:"Close"}),Object(y.jsx)("button",{onClick:e.onSubmit,className:"submit-button",type:"submit",children:"Update"})]})]})]})})};var Z=function(){var e,t=Object(i.b)(),n=Object(s.useState)({}),r=Object(u.a)(n,2),c=r[0],a=r[1],o=Object(s.useState)([]),j=Object(u.a)(o,2),h=j[0],O=j[1],x=Object(l.h)(),f=Object(l.g)(),v=Object(s.useState)(!1),m=Object(u.a)(v,2),w=m[0],g=m[1],N=Object(l.h)(),S=Object(i.c)((function(e){return e.session.user}));S&&(e=S.id);var C=Object(s.useState)(!1),k=Object(u.a)(C,2),M=k[0],P=k[1];Object(s.useEffect)((function(){S&&P(!0)}),[S]);var E=Object(s.useState)(!1),I=Object(u.a)(E,2),T=I[0],A=I[1],q=Object(s.useState)(!1),L=Object(u.a)(q,2),U=L[0],H=L[1],R=Object(s.useState)(!0),W=Object(u.a)(R,2),G=W[0],F=W[1],V=Object(s.useState)(!0),X=Object(u.a)(V,2),Z=X[0],$=X[1];if(Object(s.useEffect)((function(){Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(B());case 2:n=e.sent,a(Object.values(n).find((function(e){return e.id==x.id}))),F(!1);case 5:case"end":return e.stop()}}),e)})))()}),[t,x]),Object(s.useEffect)((function(){Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/review");case 2:if(!(n=e.sent).ok){e.next=16;break}return e.next=6,n.json();case 6:if(!(s=e.sent).errors){e.next=12;break}return r=Object.values(s.errors),e.abrupt("return",r);case 12:t(J(s));case 13:return e.abrupt("return",s);case 16:return e.abrupt("return","response not okay, try again later");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:n=e.sent,O(Object.values(n).filter((function(e){return e.businessId==x.id}))),$(!1);case 5:case"end":return e.stop()}}),e)})))()}),[t,x]),G)return Object(y.jsx)("div",{className:"App",children:"Loading..."});if(Z)return Object(y.jsx)("div",{className:"App",children:"Review Loading..."});var ee=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Y(n.target.value));case 2:window.location.reload(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=null===h||void 0===h?void 0:h.map((function(t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"review-top",children:Object(y.jsxs)("div",{className:"user-info",children:[Object(y.jsxs)("div",{className:"user-name",children:["UserId: ",t.userId]}),Object(y.jsxs)("div",{className:"review-date",children:["Date: ",K()(t.createdAt).format("d MMM YYYY")]}),Object(y.jsxs)("div",{className:"review-rating",children:[" ",t.rating," / 5"]})]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"review-container",children:Object(y.jsx)("div",{className:"review-box-container",children:Object(y.jsx)("p",{className:"review-box",children:t.answer})})}),t.userId===e&&Object(y.jsxs)("div",{className:"edit-delete-container",children:[Object(y.jsx)("button",{onClick:function(){return H(!0)},children:"Edit"}),Object(y.jsx)(z,{onClose:function(){return H(!1)},showEdit:U,findMatch:c,currentReviews:t}),Object(y.jsx)("button",{value:t.id,onClick:ee,children:"Delete"})]})]})]},t.id)})),ne=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(D(N.id));case 2:f.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"business-page-nav",children:Object(y.jsx)("div",{className:"business-top-container"})}),Object(y.jsxs)("div",{className:"business-info-container",children:[Object(y.jsxs)("div",{className:"business-pictures-container",children:[Object(y.jsx)("img",{src:"https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",alt:""}),Object(y.jsx)("img",{src:"https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",alt:""}),Object(y.jsx)("img",{src:"https://images.unsplash.com/photo-1617196034003-475e2195380e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",alt:""})]}),Object(y.jsx)("div",{className:"business-information",children:Object(y.jsxs)("div",{className:"business-info-text",children:[Object(y.jsx)("p",{className:"business-title",children:c.title}),Object(y.jsxs)("div",{className:"rating-box",children:[Object(y.jsx)("div",{}),Object(y.jsx)("span",{className:"rating-text",children:"9 reviews"})]})]})})]}),Object(y.jsx)("div",{className:"business-review-button",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{onClick:M?function(){return A(!0)}:function(){return f.push("/login")},children:"Review"}),Object(y.jsx)(_,{onClose:function(){return A(!1)},show:T,findMatch:c})]})}),Object(y.jsx)("div",{className:"business-description",children:Object(y.jsx)("p",{children:c.description})}),Object(y.jsxs)("div",{className:"business-info",children:[Object(y.jsx)("div",{className:"business-location-hours-title",children:"Location and Hours"}),Object(y.jsxs)("div",{className:"business-location-hours-container",children:[Object(y.jsx)("div",{className:"business-location",children:Object(y.jsx)("div",{className:"address",children:c.address})}),Object(y.jsxs)("div",{className:"business-day-hours-container",children:[Object(y.jsxs)("div",{className:"business-day",children:[Object(y.jsx)("div",{className:"eachday",children:"Mon"}),Object(y.jsx)("div",{className:"eachday",children:"Tue"}),Object(y.jsx)("div",{className:"eachday",children:"Wed"}),Object(y.jsx)("div",{className:"eachday",children:"Thu"}),Object(y.jsx)("div",{className:"eachday",children:"Fri"}),Object(y.jsx)("div",{className:"eachday",children:"Sat"}),Object(y.jsx)("div",{className:"eachday",children:"Sun"})]}),Object(y.jsxs)("div",{className:"business-hours",children:[Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"}),Object(y.jsx)("div",{className:"hours",children:"11:00 AM - 10:00 PM"})]})]})]})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"review-whole-container",children:[Object(y.jsx)("h4",{className:"review-header",children:"Reviews"}),te]})}),Object(y.jsx)("div",{className:"business-remove-edit-button-container",children:e===c.ownerId&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{className:"business-remove-button",onClick:ne,children:"Remove Business"}),Object(y.jsx)("button",{className:"business-edit-button",onClick:function(){return g(!0)},children:"Edit Business"}),Object(y.jsx)(Q,{onClose:function(){return g(!1)},showBusinessEdit:w,findMatch:c})]})})]})};var $,ee=function(){var e=Object(i.b)(),t=Object(s.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(s.useEffect)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/session");case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,t(m(s.user)),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){return c(!0)}))}),[e]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P,{isLoaded:r}),r&&Object(y.jsxs)(l.d,{children:[Object(y.jsx)(l.b,{path:"/",exact:!0,children:Object(y.jsx)(U,{})}),Object(y.jsx)(l.b,{path:"/login",children:Object(y.jsx)(S,{})}),Object(y.jsx)(l.b,{path:"/signup",children:Object(y.jsx)(C,{})}),Object(y.jsx)(l.b,{path:"/business/:id",children:Object(y.jsx)(Z,{})}),Object(y.jsx)(l.b,{children:Object(y.jsx)("p",{children:"Page Not Found"})})]}),Object(y.jsx)(H,{})]})},te=n(17),ne=n(25),se=Object(te.b)({session:N,businesses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(E.a)(Object(E.a)({},e),{},{businesses:t.payload}):e},reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(E.a)(Object(E.a)({},e),{},{review:t.payload});case W:case G:return Object(E.a)(Object(E.a)({},e),{},{reviews:t.payload});default:return e}}});$=Object(te.a)(ne.a);var re=function(e){return Object(te.c)(se,e,$)}();function ce(){return Object(y.jsx)(i.a,{store:re,children:Object(y.jsx)(o.a,{children:Object(y.jsx)(ee,{})})})}a.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(ce,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.39c44e62.chunk.js.map