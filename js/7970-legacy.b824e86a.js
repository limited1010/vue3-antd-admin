"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[7970,4167],{92138:function(e,t,n){n.d(t,{ez:function(){return m}});var r=n(86500),a=n(1350),u=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function o(e){var t=e.r,n=e.g,a=e.b,u=(0,r.py)(t,n,a);return{h:360*u.h,s:u.s,v:u.v}}function l(e){var t=e.r,n=e.g,a=e.b;return"#".concat((0,r.vq)(t,n,a,!1))}function i(e,t,n){var r=n/100;return{r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b}}function c(e,t,n){var r;return(r=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-2*t:Math.round(e.h)+2*t:n?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?r+=360:r>=360&&(r-=360),r}function d(e,t,n){return 0===e.h&&0===e.s?e.s:((r=n?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(r=1),n&&5===t&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function s(e,t,n){var r;return(r=n?e.v+.05*t:e.v-.15*t)>1&&(r=1),Number(r.toFixed(2))}function f(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r=(0,a.uA)(e),f=5;f>0;f-=1){var m=o(r),v=l((0,a.uA)({h:c(m,f,!0),s:d(m,f,!0),v:s(m,f,!0)}));n.push(v)}n.push(l(r));for(var w=1;w<=4;w+=1){var p=o(r),U=l((0,a.uA)({h:c(p,w),s:d(p,w),v:s(p,w)}));n.push(U)}return"dark"===t.theme?u.map((function(e){var r=e.index,u=e.opacity;return l(i((0,a.uA)(t.backgroundColor||"#141414"),(0,a.uA)(n[r]),100*u))})):n}var m={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},v={},w={};Object.keys(m).forEach((function(e){v[e]=f(m[e]),v[e].primary=v[e][5],w[e]=f(m[e],{theme:"dark",backgroundColor:"#141414"}),w[e].primary=w[e][5]}));v.red,v.volcano,v.gold,v.orange,v.yellow,v.lime,v.green,v.cyan,v.blue,v.geekblue,v.purple,v.magenta,v.grey},30436:function(e,t,n){n.a(e,(async function(e){n(93300);var r=n(96461),a=(n(12431),n(66900)),u=(n(84324),n(95878)),o=n(48534),l=n(95082),i=(n(35666),n(92222),n(66252)),c=n(2262),d=n(3577),s=n(79811),f=n(88075),m=n(70027),v=e([f]);f=(v.then?await v:v)[0];var w={class:"sys-server-stat-container"},p={class:"disk-info"},U={class:"disk-info--item"},b={class:"disk-info"},h={class:"disk-info--item"};t.Z=(0,i.aZ)((0,l.Z)((0,l.Z)({},{name:"SystemMonitorServe"}),{},{setup:function(e){var t=-1,n=(0,c.qj)({runtime:{os:"",arch:"",nodeVersion:"",npmVersion:""},disk:{size:0,used:0,available:0},memory:{total:0,available:0},cpu:{manufacturer:"",brand:"",physicalCores:0,model:"",speed:0,rawCurrentLoad:0,rawCurrentLoadIdle:0,coresLoad:[]}}),l=(0,c.BK)(n),v=l.runtime,S=l.disk,k=l.memory,y=l.cpu,Z=(0,c.Fl)((function(){return{size:(0,s.GR)(S.value.size),used:(0,s.GR)(S.value.used),available:(0,s.GR)(S.value.available)}})),_=(0,c.Fl)((function(){return{total:(0,s.GR)(k.value.total),free:(0,s.GR)(k.value.available),used:(0,s.GR)(k.value.total-k.value.available)}})),g=(0,c.Fl)((function(){return S.value.size<=0?0:Math.floor(S.value.used/S.value.size*100)})),W=(0,c.Fl)((function(){return k.value.total<=0?0:Math.floor((k.value.total-k.value.available)/k.value.total*100)})),C=(0,c.Fl)((function(){return"".concat(y.value.manufacturer," ").concat(y.value.brand," @ ").concat(y.value.speed,"GHz")})),P=function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.P)();case 2:t=e.sent,v.value=t.runtime,S.value=t.disk,k.value=t.memory,y.value=t.cpu;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();P();var z=function(e){return e<30?"#5cb87a":e<70?"#e6a23c":"#f53f3f"},F=function(e,t){return t<=0?0:Math.floor(e/t*100)};return(0,i.bv)((function(){t=setInterval(P,1e4)})),(0,i.Jd)((function(){clearInterval(t)})),function(e,t){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i.Wm)((0,c.SU)(u.ZP),{class:"stat-card",title:"运行环境"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP),{column:1,"label-style":{width:"50%"}},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"操作系统"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(v).os),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"系统架构"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(v).arch),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"Node版本"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(r.Z),{color:"processing",size:"small"},{default:(0,i.w5)((function(){return[(0,i.Uk)("v"+(0,d.zw)((0,c.SU)(v).nodeVersion),1)]})),_:1})]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"NPM版本"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(r.Z),{color:"processing",size:"small"},{default:(0,i.w5)((function(){return[(0,i.Uk)("v"+(0,d.zw)((0,c.SU)(v).npmVersion),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,i.Wm)((0,c.SU)(u.ZP),{class:"stat-card",title:"CPU"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP),{column:1,"label-style":{width:"50%"},"content-style":{width:"50%"}},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"详细"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(C)),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"负载"},{default:(0,i.w5)((function(){return[(0,i.Wm)(m.default,{percent:F((0,c.SU)(y).rawCurrentLoad,(0,c.SU)(y).rawCurrentLoadIdle+(0,c.SU)(y).rawCurrentLoad),strokeColor:z},null,8,["percent"])]})),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,c.SU)(y).coresLoad,(function(e,t){return(0,i.wg)(),(0,i.j4)((0,c.SU)(a.ZP).Item,{key:t,label:"核心".concat(t+1," 负载")},{default:(0,i.w5)((function(){return[(0,i.Wm)(m.default,{percent:F(e.rawLoad,e.rawLoad+e.rawLoadIdle),strokeColor:z},null,8,["percent"])]})),_:2},1032,["label"])})),128))]})),_:1})]})),_:1}),(0,i.Wm)((0,c.SU)(u.ZP),{class:"stat-card",title:"磁盘"},{default:(0,i.w5)((function(){return[(0,i._)("div",p,[(0,i.Wm)((0,c.SU)(a.ZP),{class:"disk-info--item",column:1},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"总空间"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(Z).size),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"已用空间"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(Z).used),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"可用空间"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(Z).available),1)]})),_:1})]})),_:1}),(0,i._)("div",U,[(0,i.Wm)(m.default,{type:"dashboard",percent:(0,c.SU)(g),width:100,strokeColor:z},null,8,["percent"])])])]})),_:1}),(0,i.Wm)((0,c.SU)(u.ZP),{class:"stat-card",title:"内存"},{default:(0,i.w5)((function(){return[(0,i._)("div",b,[(0,i.Wm)((0,c.SU)(a.ZP),{class:"disk-info--item",column:1},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"总内存"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(_).total),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"已用内存"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(_).used),1)]})),_:1}),(0,i.Wm)((0,c.SU)(a.ZP).Item,{label:"可用内存"},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,d.zw)((0,c.SU)(_).free),1)]})),_:1})]})),_:1}),(0,i._)("div",h,[(0,i.Wm)(m.default,{type:"dashboard",percent:(0,c.SU)(W),width:100,strokeColor:z},null,8,["percent"])])])]})),_:1})])}}}))}))},88075:function(e,t,n){n.a(e,(async function(e){n.d(t,{P:function(){return o}});var r=n(30803),a=n(5155),u=e([r]);function o(){return(0,r.W)({url:a.default.stat,method:"get"})}r=(u.then?await u:u)[0]}))},70027:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(63197);var r=n(60911),a=n(95082),u=n(66252),o=n(2262),l=n(3577),i=n(50385),c=(0,u.aZ)({props:(0,a.Z)((0,a.Z)({},(0,i.Ot)()),{},{strokeColor:{type:[String,Object,Function]}}),setup:function(e){var t=e,n=(0,o.Fl)((function(){return"function"==typeof t.strokeColor?(0,a.Z)((0,a.Z)({},t),{},{strokeColor:t.strokeColor(t.percent)}):(0,a.Z)((0,a.Z)({},t),{},{strokeColor:t.strokeColor})}));return function(e,t){return(0,u.wg)(),(0,u.j4)((0,o.SU)(r.Z),(0,l.vs)((0,u.F4)((0,o.SU)(n))),null,16)}}});var d=c},72845:function(e,t,n){n.a(e,(async function(e){n.r(t);var r=n(86376),a=(n(16649),n(83744)),u=e([r]);r=(u.then?await u:u)[0];const o=(0,a.Z)(r.Z,[["__scopeId","data-v-98a0dc98"]]);t.default=o}))},86376:function(e,t,n){n.a(e,(async function(e){n.d(t,{Z:function(){return r.Z}});var r=n(30436),a=e([r]);r=(a.then?await a:a)[0]}))},16649:function(){}}]);