(function(){"use strict";var t={1247:function(t,n,r){var e=r(6369),s=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[t._v("Тест")]),n("div",{staticClass:"wrapper"},[n("h1",{staticClass:"title"},[t._v("ПОЛЬЗОВАТЕЛИ")]),t._l(t.users,(function(r){return n("div",{key:r.id,staticClass:"card"},[n("span",[t._v("ID: "+t._s(r.id))]),n("br"),n("span",[t._v("Name: "+t._s(r.name))])])}))],2),n("div",{staticClass:"wrapper"},[n("h1",{staticClass:"title"},[t._v("Склады")]),t._l(t.warehouses,(function(r){return n("div",{key:r.id,staticClass:"card"},[n("span",[t._v("ID: "+t._s(r.id))]),n("br"),n("span",[t._v("Company: "+t._s(r.company))]),n("br"),n("span",[t._v("Address: "+t._s(r.address))]),n("br"),n("span",[t._v("IsActive: "+t._s(r.isActive))])])}))],2)])},i=[],o=r(70),a={name:"App",components:{},data(){return{warehouses:[],users:[]}},async created(){try{const t=await o.ZP.get("https://i-am-locb.github.io/jsonapi/warehouses.json"),n=await o.ZP.get("https://i-am-locb.github.io/jsonapi/users.json");this.warehouses=t.data,this.users=n.data}catch(t){console.error(t)}},methods:{}},u=a,c=r(1001),f=(0,c.Z)(u,s,i,!1,null,null,null),p=f.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(p)}).$mount("#app")}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,e,s,i){if(!e){var o=1/0;for(f=0;f<t.length;f++){e=t[f][0],s=t[f][1],i=t[f][2];for(var a=!0,u=0;u<e.length;u++)(!1&i||o>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(a=!1,i<o&&(o=i));if(a){t.splice(f--,1);var c=s();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[e,s,i]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var s,i,o=e[0],a=e[1],u=e[2],c=0;if(o.some((function(n){return 0!==t[n]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(u)var f=u(r)}for(n&&n(e);c<o.length;c++)i=o[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(f)},e=self["webpackChunkpart_time_job_service"]=self["webpackChunkpart_time_job_service"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(1247)}));e=r.O(e)})();
//# sourceMappingURL=app.081630fe.js.map