"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[892],{89737:function(e,t,n){n.r(t),n.d(t,{tableData:function(){return u},columns:function(){return c}});n(93300);var a=n(96461),o=n(66252),r=(n(21249),n(91038),n(78783),n(41539),["王路飞","王大蛇","李白","刺客伍六七"]),l=["西装","领带","裙子","包包"],u=Array.from({length:30}).map((function(e,t){return{id:t+1,date:(new Date).toLocaleString(),name:r[~~(4*Math.random())],clothes:l[~~(4*Math.random())],gender:~~(2*Math.random()),status:~~(2*Math.random())}})),c=[{title:"姓名",align:"center",dataIndex:"name",formItemProps:{required:!0}},{title:"性别",align:"center",dataIndex:"gender",formItemProps:{component:"Select",componentProps:function(e){var t=e.schemaFormRef,n=e.formModel;return{options:[{label:"男",value:1},{label:"女",value:0}],onChange:function(){var e;t.updateSchema({field:"clothes",componentProps:{options:(e=n.gender,1===e?[{label:"西装",value:1},{label:"领带",value:0}]:0===e?[{label:"裙子",value:1},{label:"包包",value:0}]:[])}}),n.clothes=void 0}}}},bodyCell:function(e){var t=e.record;return(0,o.Wm)(o.HY,null,[["女","男"][t.gender]])}},{title:"衣服",align:"center",dataIndex:"clothes",formItemProps:{component:"Select"}},{title:"状态",align:"center",dataIndex:"status",formItemProps:{component:"Select",componentProps:{request:function(){return new Promise((function(e){setTimeout((function(){e([{label:"已售罄",value:0},{label:"热卖中",value:1}])}),1500)}))}}},bodyCell:function(e){var t=e.record;return(0,o.Wm)(a.Z,{color:1==t.status?"red":"default"},{default:function(){return[["已售罄","热卖中"][t.status]]}})}}]}}]);