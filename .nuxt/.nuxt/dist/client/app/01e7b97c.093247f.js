(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(n,e,r){n.exports=r.p+"img/logo.4b6982e.png"},175:function(n,e,r){},67:function(n,e,r){"use strict";var t=r(89),o=r(90),l=function(){function n(){Object(t.a)(this,n)}return Object(o.a)(n,[{key:"hasRole",value:function(n,e){if(!n||!n.roles||!n.roles.length)return!1;for(var i=0;i<n.roles.length;i++)if(n.roles[i]===e)return!0;return!1}},{key:"hasAnyRole",value:function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];if(!r||!r.length)return!1;for(var i=0;i<r.length;i++)if(this.hasRole(n,r[i]))return!0;return!1}},{key:"isOwner",value:function(n){return this.hasRole(n,"owner")}},{key:"isAdmin",value:function(n){return this.hasRole(n,"admin")}}]),n}();e.a=new l}}]);