"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{859:function(e,t,n){n.d(t,{v:function(){return u}});var r=n(861),a=n(757),c=n.n(a),s=n(243);function u(e,t){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","83c7fa62ddc3adeb807030d6ee731236",e.next=4,s.Z.get("".concat("https://api.themoviedb.org/3/").concat(t,"?api_key=").concat("83c7fa62ddc3adeb807030d6ee731236","&").concat(n,"&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(87),i=n(689),o=n(791),l=n(859),f=n(264),p=n(458),h="Movies_form__4ow+Z",v="Movies_input__KrUqs",d="Movies_btn__TlfBQ",m="Movies_item__Ba4aJ",_=n(184),b=function(){var e,t=(0,u.lr)(),n=(0,a.Z)(t,2),c=n[0],b=n[1],x=(0,o.useState)([]),g=(0,a.Z)(x,2),y=g[0],k=g[1],w=(0,o.useState)(""),j=(0,a.Z)(w,2),S=j[0],Z=j[1],N=(0,i.TH)(),q=null!==(e=c.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){if(""!==q){Z(q);var e="search/movie",t="query=".concat(q);!function(){n.apply(this,arguments)}()}function n(){return(n=(0,r.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.v)(e,t);case 3:if(r=n.sent,a=r.data,k(a.results),0!==a.results.length){n.next=8;break}return n.abrupt("return",f.Notify.failure("Sorry, but nothing found"));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}}),[q]);return(0,_.jsxs)("section",{children:[(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.input.value;b({query:t})},className:h,children:[(0,_.jsx)("input",{className:v,type:"text",name:"input",onChange:function(e){Z(e.target.value)},value:S,placeholder:"Search movies"}),(0,_.jsx)("button",{className:d,type:"submit",children:(0,_.jsx)(p.w75,{color:"black",fontSize:"40px"})})]}),(0,_.jsx)("ul",{children:y.map((function(e){return(0,_.jsx)("li",{className:m,children:(0,_.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:N},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=881.8f1fecad.chunk.js.map