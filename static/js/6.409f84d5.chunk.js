(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{226:function(t,e,r){t.exports={formControl:"FromControls_formControl__11Fsg",error:"FromControls_error__1MjzQ",formSummaryError:"FromControls_formSummaryError__3xpUU"}},227:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return h}));var n=r(3),c=r(230),o=(r(0),r(226)),a=r.n(o),i=r(108),u=r(1),s=["input","meta"],b=["input","meta"],j=["input","meta"],m=function(t){t.input;var e=t.meta,r=Object(c.a)(t,s),n=e.touched&&e.error;return Object(u.jsxs)("div",{className:"".concat(a.a.formControl," ").concat(n?a.a.error:""),children:[r.children,n&&Object(u.jsx)("span",{children:e.error})]})},l=function(t){var e=t.input,r=(t.meta,Object(c.a)(t,b));return Object(u.jsx)(m,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("textarea",Object(n.a)(Object(n.a)({},e),r))}))},p=function(t){var e=t.input,r=(t.meta,Object(c.a)(t,j));return Object(u.jsx)(m,Object(n.a)(Object(n.a)({},t),{},{children:Object(u.jsx)("input",Object(n.a)(Object(n.a)({},e),r))}))},h=function(t,e,r,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return Object(u.jsx)("div",{children:Object(u.jsx)(i.a,Object(n.a)({component:c,validate:r,name:e,placeholder:t},o))})}},229:function(t,e,r){"use strict";r.d(e,"b",(function(){return n}));var n=function(t){return function(e){if(!(e&&e.length<=t))return"Max length is ".concat(t," symbols")}};e.a=function(t){if(!t)return"Field is required"}},252:function(t,e,r){t.exports={checkbox:"Login_checkbox__2h2-B"}},302:function(t,e,r){"use strict";r.r(e);var n=r(34),c=r(36),o=r(35),a=r(0),i=r.n(a),u=r(252),s=r.n(u),b=r(226),j=r.n(b),m=r(109),l=r(227),p=r(229),h=r(1),O=Object(m.a)({form:"login"})((function(t){var e=t.handleSubmit,r=t.error;return Object(h.jsxs)("form",{onSubmit:e,children:[r&&Object(h.jsxs)("div",{className:j.a.formSummaryError,children:[" ",r," "]}),Object(l.c)("Email","email",[p.a],l.a,{autoComplete:"true",type:"email"}),Object(l.c)("Password","password",[p.a],l.a,{autoComplete:"true",type:"password"}),Object(h.jsxs)("div",{className:s.a.checkbox,children:[Object(h.jsx)("label",{htmlFor:"loginCheckbox",children:"Remember me"}),Object(l.c)("","rememberMe",[],"input",{id:"loginCheckbox",type:"checkbox"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"Log in"})})]})})),d=r(27),f=r(19),x=r(7),v=function(t){Object(c.a)(r,t);var e=Object(o.a)(r);function r(){var t;Object(n.a)(this,r);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).onSubmit=function(e){t.props.login(e.email,e.password,e.rememberMe)},t.render=function(){return t.props.isAuth?Object(h.jsx)(x.a,{to:"/profile"}):Object(h.jsxs)("div",{className:s.a.formContainer,children:[Object(h.jsx)("h1",{children:"LOGIN"}),Object(h.jsx)(O,{onSubmit:t.onSubmit})]})},t}return r}(i.a.Component);e.default=Object(f.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:d.c})(v)}}]);
//# sourceMappingURL=6.409f84d5.chunk.js.map