System.register(["./p-d6caec50.system.js","./p-c22eece8.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.h},function(e){r=e.a}],execute:function(){var n=undefined&&undefined.__rest||function(e,t){var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0)r[n]=e[n];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++){if(t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a]))r[n[a]]=e[n[a]]}return r};var a=e("D",(function(e){var a=e.date,o=e.format,i=o===void 0?{weekday:"short",year:"numeric",month:"long",day:"numeric"}:o,c=n(e,["date","format"]);var s=new Intl.DateTimeFormat("en-US",Object.assign({},i));return t("time",Object.assign({},r(c,{class:"ui-date"})),s.format(a))}))}}}));