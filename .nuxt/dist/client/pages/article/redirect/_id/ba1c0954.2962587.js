(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{494:function(e,r,t){"use strict";t.r(r);t(15);var n=t(2),c={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$axios,n=e.params,c=e.redirect,o=e.error,r.prev=1,r.next=4,t.get("/api/article/redirect/"+n.id);case 4:l=r.sent,c(302,l.url),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),o({statusCode:404,message:r.t0.message||"404"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},o=t(49),component=Object(o.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);r.default=component.exports}}]);