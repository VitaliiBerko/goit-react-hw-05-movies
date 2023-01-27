"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{7961:function(e,t,r){r.r(t);var n=r(9439),a=r(2791),c=r(7689),i=r(1087),s=r(9660),o=r(2115),u=r(184);t.default=function(){var e=(0,a.useState)({}),t=(0,n.Z)(e,2),r=t[0],l=t[1],d=(0,a.useState)(!1),v=(0,n.Z)(d,2),p=v[0],f=v[1],h=(0,c.UO)().movieId,m=(0,c.TH)(),_=(0,c.s0)();(0,a.useEffect)((function(){h&&(f(!0),(0,s.uH)(h).then((function(e){return l(e)})).catch((function(e){return console.log(e)})).finally((function(){return f(!1)})))}),[h]);var x=r.title,g=r.poster_path,j=r.overview,w=r.popularity,Z=new Date(r.release_date).getFullYear();return(0,u.jsxs)(a.Fragment,{children:[p&&(0,u.jsx)("h2",{children:"Loading... "}),r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",onClick:function(){var e,t;return _(null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:o.Z.btn,children:"Go back"}),(0,u.jsxs)("div",{className:o.Z.movieDetails,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(g),alt:x}),(0,u.jsxs)("div",{className:o.Z.description,children:[(0,u.jsx)("h2",{children:x}),(0,u.jsx)("h3",{children:Z}),(0,u.jsxs)("h3",{children:["Use Score: ",w]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Overwie"}),(0,u.jsx)("p",{children:j})]})]})]})]}),(0,u.jsxs)("div",{className:o.Z.addInfor,children:[(0,u.jsx)("h2",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(i.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(i.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(c.j3,{})]})}},9660:function(e,t,r){r.d(t,{YG:function(){return l},l_:function(){return d},uH:function(){return v},uL:function(){return f},v4:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),i=r(3263),s=r(7596),o=(r(5462),"f4238f5bd8cc05dfda59a3450fa27d5e"),u="https://api.themoviedb.org/3",l=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),s.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.prev=1,e.next=4,i.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),s.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),s.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),s.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),s.Am.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},2115:function(e,t){t.Z={movieDetails:"movieDetails_movieDetails__bJShy",description:"movieDetails_description__tzHTk",btn:"movieDetails_btn__d4YP4",addInfor:"movieDetails_addInfor__6KpHZ",container:"movieDetails_container__0I5or",cardSet:"movieDetails_cardSet__ZR6c5",item:"movieDetails_item__NCgEc"}}}]);
//# sourceMappingURL=961.c5c77530.chunk.js.map