"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[447],{6368:function(t,e,n){var r=n(7689),a=n(1087),c=n(184);e.Z=function(t){var e=t.movies,n=t.path,u=(0,r.TH)(),o=n?"".concat(n,"/"):"";return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(o).concat(e),state:{from:u},children:n})},e)}))})})}},5447:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(3433),a=n(9439),c=n(6368),u=n(2791),o=n(5663),i="searchBar_form__A7-sl",s="searchBar_btn__wCuwC",f=n(184),p=function(t){var e=t.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),c=r[0],p=r[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===c.trim()&&o.Am.info("Enter movie`s name"),e(c),p("")},className:i,children:[(0,f.jsx)("input",{type:"text",value:c,name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(t){p(null===t||void 0===t?void 0:t.target.value.toLowerCase())}}),(0,f.jsx)("button",{type:"submit",disabled:!c,className:s,children:"Search"})]})})},v=n(1087),l=n(9660),m=function(){var t,e=(0,v.lr)(),n=(0,a.Z)(e,2),i=n[0],s=n[1],m=(0,u.useState)([]),h=(0,a.Z)(m,2),d=h[0],g=h[1],x=null!==(t=i.get("query"))&&void 0!==t?t:"";(0,u.useEffect)((function(){x&&(0,l.l_)(x).then((function(t){var e,n=t.results,a=null!==(e=(0,r.Z)(n.map((function(t){return{id:t.id,title:t.title}}))))&&void 0!==e?e:[];a.length||o.Am.info("Movie is not found"),g(a)})).catch((function(t){console.log(t)}))}),[x]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:function(t){s({query:"".concat(t)})}}),d&&(0,f.jsx)(c.Z,{movies:d,path:""})]})}},9660:function(t,e,n){n.d(e,{YG:function(){return f},l_:function(){return p},uH:function(){return v},uL:function(){return m},v4:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),u=n(3263),o=n(5663),i=(n(5462),"f4238f5bd8cc05dfda59a3450fa27d5e"),s="https://api.themoviedb.org/3",f=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.prev=1,t.next=4,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(1),o.Am.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=447.96a2a998.chunk.js.map