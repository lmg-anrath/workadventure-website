(function(){"use strict";var o={7706:function(o,n,t){var e=t(9242),r=t(2483),i=t(3396);function s(o,n,t,e,r,s){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var a={name:"App",components:{}},c=t(89);const u=(0,c.Z)(a,[["render",s]]);var l=u;const f=(0,i._)("a",{href:"https://www.lmg-anrath.de/workadventure/"},"link",-1);function p(o,n,t,r,s,a){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",null,[(0,i.Uk)(" If you are not redirected automatically, follow this "),f,(0,i.Uk)(". ")],512)),[[e.F8,s.timeoutComplete]])}var h={name:"Redirect",data(){return{timeoutComplete:!1}},created(){setTimeout((()=>this.timeoutComplete=!0),1e3)}};const m=(0,c.Z)(h,[["render",p]]);var d=m,v=t(7139);const w=o=>((0,i.dD)("data-v-c0450af8"),o=o(),(0,i.Cn)(),o),g={class:"map-page"},b={class:"map-header"},y=w((()=>(0,i._)("h1",null,[(0,i.Uk)("Karte des "),(0,i._)("span",null,"LMG")],-1))),k={key:0},O={class:"map-switch"},P=["src"];function _(o,n,t,r,s,a){return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",b,[y,(0,i._)("h3",null,[(0,i.Uk)(" Hier können Sie die Karte der Schule "),s.isIngame?((0,i.wg)(),(0,i.iD)("span",k,"und Ihre Position in dieser")):(0,i.kq)("",!0),(0,i.Uk)(" sehen. ")])]),(0,i._)("div",O,[(0,i._)("div",{class:(0,v.C_)(["map-switch-element map-switch-element-top",["OG"===s.floor?"map-switch-active":null]]),onClick:n[0]||(n[0]=(...o)=>a.changeFloor&&a.changeFloor(...o))}," OG ",2),(0,i._)("div",{class:(0,v.C_)(["map-switch-element map-switch-element-bottom",["EG"===s.floor?"map-switch-active":null]]),onClick:n[1]||(n[1]=(...o)=>a.changeFloor&&a.changeFloor(...o))}," EG ",2)]),(0,i._)("div",{ref:"mapsvg",class:"map-view",style:(0,v.j5)({cursor:s.isPanning?"grabbing":"grab"})},[(0,i.wy)((0,i._)("div",{class:"map-marker",style:(0,v.j5)({top:`${s.cursorPos.y}px`,left:`${s.cursorPos.x}px`})}," POS: ("+(0,v.zw)(s.cursorPos.x)+","+(0,v.zw)(s.cursorPos.y)+") FLOOR: "+(0,v.zw)(s.cursorPos.floor),5),[[e.F8,s.floor===s.cursorPos.floor]]),(0,i._)("img",{src:a.map,alt:"",class:"map-svg filter-white",width:"6200",height:"4250"},null,8,P)],4)])}var G=t(2617),x=t.n(G),C={name:"Map",data(){return{cursorPos:{x:0,y:0,floor:""},floor:"OG",isIngame:!1,isPanning:!1}},mounted:function(){const o=this.$route.query.x,n=this.$route.query.y,t=this.$route.query.map;if(o&&n&&t)switch(console.warn(o,n,t),this.isIngame=!0,this.cursorPos.x=o,this.cursorPos.y=n,t){case"OG":this.floor="OG",this.cursorPos.floor="OG";break;default:this.floor="EG",this.cursorPos.floor="EG";break}const e=x()(this.$refs.mapsvg,{maxZoom:1.75,minZoom:.25,initialZoom:.5,smoothScroll:!1,bounds:!0,boundsPadding:.5});e.on("pan",(o=>{console.log("panning process",o),this.isPanning=!0,console.warn(e.getTransform())})),e.on("panend",(o=>{console.log("pan ended",o),this.isPanning=!1}))},methods:{changeFloor(o){o.target.classList.contains("map-switch-element-top")?this.floor="OG":this.floor="EG"}},computed:{map(){return"EG"===this.floor?t(6131):t(9810)}}};const j=(0,c.Z)(C,[["render",_],["__scopeId","data-v-c0450af8"]]);var E=j;const F=(0,r.p7)({history:(0,r.PO)(),routes:[{path:"/",component:d,beforeEnter(){window.location.href="https://www.lmg-anrath.de/workadventure/"}},{path:"/map",component:E}]}),I=(0,e.ri)(l);I.use(F),I.mount("#app")},6131:function(o,n,t){o.exports=t.p+"img/Karte_EG.a7326040.svg"},9810:function(o,n,t){o.exports=t.p+"img/Karte_OG.093f3d55.svg"}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return o[e].call(i.exports,i,i.exports,t),i.exports}t.m=o,function(){var o=[];t.O=function(n,e,r,i){if(!e){var s=1/0;for(l=0;l<o.length;l++){e=o[l][0],r=o[l][1],i=o[l][2];for(var a=!0,c=0;c<e.length;c++)(!1&i||s>=i)&&Object.keys(t.O).every((function(o){return t.O[o](e[c])}))?e.splice(c--,1):(a=!1,i<s&&(s=i));if(a){o.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=o.length;l>0&&o[l-1][2]>i;l--)o[l]=o[l-1];o[l]=[e,r,i]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){t.p="/"}(),function(){var o={143:0};t.O.j=function(n){return 0===o[n]};var n=function(n,e){var r,i,s=e[0],a=e[1],c=e[2],u=0;if(s.some((function(n){return 0!==o[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var l=c(t)}for(n&&n(e);u<s.length;u++)i=s[u],t.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return t.O(l)},e=self["webpackChunkworkadventure_website"]=self["webpackChunkworkadventure_website"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(7706)}));e=t.O(e)})();
//# sourceMappingURL=app.7eecc7d9.js.map