"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[7645,5470,1289],{18184:function(n,e,t){t.a(n,(async function(n){t(93300);var u=t(96461),i=(t(38049),t(94776)),l=(t(89397),t(98704)),a=(t(50460),t(80044)),r=(t(41539),t(26699),t(32023),t(54747),t(21249),t(66252)),c=t(2262),o=t(49963),d=t(3577),v=t(30167),f=t(65470),h=t(66309),s=t(60191),p=t(71289),k=n([v]);v=(k.then?await k:k)[0];var m={class:"input-box"};e.Z=(0,r.aZ)({props:{value:{type:Array,default:function(){return[]},isRequired:!0}},emits:["update:value"],setup:function(n,e){var t=e.emit,k=n,g=(0,h.NCN)(k,"value",t),w=(0,c.iH)(),C=(0,c.iH)((0,v.ik)()),_=a.ZP.useInjectFormItemContext(),y=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.reduce((function(e,t){var u,i;return null!==(u=t.children)&&void 0!==u&&u.length||!t.checked||!t.value||e.push({label:t.value,value:t.value,node:t}),null!==(i=t.children)&&void 0!==i&&i.length&&n(t.children,e),e}),t)},Z=function(n){var e=function n(e){return e.some((function(e){var t;return!!g.value.includes(e.value)||!(null===(t=e.children)||void 0===t||!t.length)&&n(e.children)}))};!function n(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null==t||t.forEach((function(t){var i,l;null!==(i=t.children)&&void 0!==i&&i.length&&n(t.children,t),t.parent=u,t.indeterminate=!1,t.checked=g.value.includes(t.value),null!==(l=t.children)&&void 0!==l&&l.length&&(t.indeterminate=e(t.children))}))}(n)};Z(C.value);var S=function(){g.value=[],setTimeout((function(){var n;C.value=(0,v.ik)(),Z(C.value),null===(n=w.value)||void 0===n||n.clearCheck()}))},U=(0,c.Fl)((function(){return y(C.value)}));return(0,r.YP)((function(){return U.value}),(function(n){g.value=n.map((function(n){return n.value})),_.onFieldChange()})),function(n,e){return(0,r.wg)(),(0,r.j4)((0,c.SU)(l.Z),{placement:"bottomLeft",trigger:"click"},{content:(0,r.w5)((function(){return[(0,r.Wm)(f.default,{ref_key:"nodePanelRef",ref:w,options:C.value},null,8,["options"])]})),default:(0,r.w5)((function(){return[(0,r._)("div",m,[(0,r.Wm)((0,c.SU)(i.ZP),{placeholder:"请选择"},(0,r.Nv)({_:2},[(0,c.SU)(U).length?{name:"prefix",fn:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,c.SU)(U),(function(n){return(0,r.wg)(),(0,r.j4)((0,c.SU)(u.Z),{key:n.value,class:"tag-item",closable:"",onClose:(0,o.iM)((function(e){return function(n){(0,p.updateNodeCheckStatus)(!1,n.node)}(n)}),["prevent"])},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,d.zw)(n.label),1)]})),_:2},1032,["onClose"])})),128)),(0,r.Wm)((0,c.SU)(s.Z),{class:"clear-icon",onClick:(0,o.iM)(S,["prevent"])},null,8,["onClick"])]}))}:void 0]),1024)])]})),_:1})}}})}))},71289:function(n,e,t){t.r(e),t.d(e,{setParentChecked:function(){return u},setChildrenChecked:function(){return i},updateNodeCheckStatus:function(){return l}});t(41539),t(54747);var u=function n(e){var t=null==e?void 0:e.children,u=null==t?void 0:t.length,i=!!u&&!t.some((function(n){return!n.checked})),l=!!u&&t.some((function(n){return n.checked||n.indeterminate}));e.checked=i,e.indeterminate=!i&&l,e.parent&&n(e.parent)},i=function n(e,t){null==e||e.forEach((function(e){var u;e.checked=t,e.indeterminate=!1,null!==(u=e.children)&&void 0!==u&&u.length&&n(e.children,t)}))},l=function(n,e){var t;e.checked=n,e.indeterminate=!1,Array.isArray(e.children)&&null!==(t=e.children)&&void 0!==t&&t.length&&i(e.children,n),e.parent&&u(e.parent)}},37645:function(n,e,t){t.a(n,(async function(n){t.r(e);var u=t(81670),i=(t(78482),t(83744)),l=n([u]);u=(l.then?await l:l)[0];const a=(0,i.Z)(u.Z,[["__scopeId","data-v-d3fedc3c"]]);e.default=a}))},65470:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});t(79861);var u=t(25808),i=(t(69826),t(41539),t(54747),t(66252)),l=t(2262),a=t(3577),r=t(67944),c=t(71289),o={class:"flex"},d={class:"ant-cascader-menu min-w-150px"},v=["onClick"],f={class:"label"},h=(0,i.aZ)({props:{options:{type:Array,default:function(){return[]}}},setup:function(n,e){var t=e.expose,h=n,s=(0,l.iH)(),p=(0,l.iH)([]),k=(0,l.iH)(),m=function(){var n,e;return null===(n=h.options)||void 0===n||null===(e=n.find((function(n){return n.value===k.value})))||void 0===e?void 0:e.children},g=(0,l.Fl)(m);(0,i.YP)(g,(function(n){n||(p.value=[])}));return t({clearCheck:function(){var n;p.value.forEach((function(n){n.checked=!1,n.indeterminate=!1})),p.value.length&&setTimeout((function(){p.value=m()||[]})),null===(n=s.value)||void 0===n||n.clearCheck()}}),function(e,t){var h,m=(0,i.up)("node-panel",!0);return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.options,(function(n){var e;return(0,i.wg)(),(0,i.iD)("div",{key:n.value,onClick:function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;p.value=n,k.value=e}(n.children,n.value)},class:"check-row ant-cascader-menu-item ant-cascader-menu-item-expand"},[(0,i._)("div",null,[(0,i.Wm)((0,l.SU)(u.ZP),{checked:n.checked,"onUpdate:checked":function(e){return n.checked=e},indeterminate:n.indeterminate,onChange:function(e){return function(n,e){var t=n.target.checked;(0,c.updateNodeCheckStatus)(t,e)}(e,n)}},null,8,["checked","onUpdate:checked","indeterminate","onChange"]),(0,i._)("span",f,(0,a.zw)(n.label),1)]),null!==(e=n.children)&&void 0!==e&&e.length?((0,i.wg)(),(0,i.j4)((0,l.SU)(r.Z),{key:0,class:"arrow"})):(0,i.kq)("",!0)],8,v)})),128))]),null!==(h=p.value)&&void 0!==h&&h.length&&(0,l.SU)(g)?((0,i.wg)(),(0,i.j4)(m,{key:0,ref_key:"nodePanelRef",ref:s,options:p.value},null,8,["options"])):(0,i.kq)("",!0)])}}});var s=(0,t(83744).Z)(h,[["__scopeId","data-v-f8cc67aa"]])},81670:function(n,e,t){t.a(n,(async function(n){t.d(e,{Z:function(){return u.Z}});var u=t(18184),i=n([u]);u=(i.then?await i:i)[0]}))},78482:function(){}}]);