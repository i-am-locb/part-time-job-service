(function(){"use strict";var r={6100:function(r,e,n){var s=n(6369),t=function(){var r=this,e=r._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("h1",{staticClass:"title"},[r._v("ПОЛЬЗОВАТЕЛИ")]),e("div",{staticClass:"card"},[e("span",[r._v("ID: "+r._s(r.users[0].id))]),e("br"),e("span",[r._v("firstName: "+r._s(r.users[0].firstName))]),e("br"),e("span",[r._v("secondName: "+r._s(r.users[0].secondName))]),e("br"),e("span",[r._v("age: "+r._s(r.users[0].age))]),e("br"),e("span",[r._v("balance: "+r._s(r.users[0].balance))]),e("br"),e("span",[r._v("birthday: "+r._s(r.users[0].birthday))]),e("br"),e("span",[r._v("contactEmail: "+r._s(r.users[0].contactEmail))]),e("br"),e("span",[r._v("gender: "+r._s(r.users[0].gender))]),e("br"),e("span",[r._v("phoneNumber: "+r._s(r.users[0].phoneNumber))]),e("br")])]),e("div",{staticClass:"wrapper"},[e("h1",{staticClass:"title"},[r._v("Склады")]),e("div",{staticClass:"card"},[e("span",[r._v("ID: "+r._s(r.warehouses[0].id))]),e("br"),e("span",[r._v("name: "+r._s(r.warehouses[0].name))]),e("br"),e("span",[r._v("address: "+r._s(r.warehouses[0].address))]),e("br")])])])},a=[],i=n(70),o={name:"App",components:{},data(){return{warehouses:[],users:[]}},async created(){try{const r=await i.ZP.get("https://i-am-locb.github.io/jsonapi/warehouses.json"),e=await i.ZP.get("https://i-am-locb.github.io/jsonapi/users.json");this.warehouses=r.data,this.users=e.data}catch(r){console.error(r)}},methods:{}},u=o,c=n(1001),p=(0,c.Z)(u,t,a,!1,null,null,null),f=p.exports;s.ZP.config.productionTip=!1,new s.ZP({render:r=>r(f)}).$mount("#app")}},e={};function n(s){var t=e[s];if(void 0!==t)return t.exports;var a=e[s]={exports:{}};return r[s](a,a.exports,n),a.exports}n.m=r,function(){var r=[];n.O=function(e,s,t,a){if(!s){var i=1/0;for(p=0;p<r.length;p++){s=r[p][0],t=r[p][1],a=r[p][2];for(var o=!0,u=0;u<s.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(r){return n.O[r](s[u])}))?s.splice(u--,1):(o=!1,a<i&&(i=a));if(o){r.splice(p--,1);var c=t();void 0!==c&&(e=c)}}return e}a=a||0;for(var p=r.length;p>0&&r[p-1][2]>a;p--)r[p]=r[p-1];r[p]=[s,t,a]}}(),function(){n.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return n.d(e,{a:e}),e}}(),function(){n.d=function(r,e){for(var s in e)n.o(e,s)&&!n.o(r,s)&&Object.defineProperty(r,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};n.O.j=function(e){return 0===r[e]};var e=function(e,s){var t,a,i=s[0],o=s[1],u=s[2],c=0;if(i.some((function(e){return 0!==r[e]}))){for(t in o)n.o(o,t)&&(n.m[t]=o[t]);if(u)var p=u(n)}for(e&&e(s);c<i.length;c++)a=i[c],n.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return n.O(p)},s=self["webpackChunkpart_time_job_service"]=self["webpackChunkpart_time_job_service"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6100)}));s=n.O(s)})();
//# sourceMappingURL=app.cf4c5bbf.js.map