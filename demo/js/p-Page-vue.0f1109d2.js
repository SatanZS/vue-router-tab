(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Page-vue"],{2506:function(t,e,a){"use strict";var r=a("d585"),n=a.n(r);n.a},"30be":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"demo-table"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v("\n      name\n    ")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])])])},n=[],i=a("0c7c"),s={},o=Object(i["a"])(s,r,n,!1,null,null,null);e["a"]=o.exports},"778e":function(t,e,a){"use strict";e["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}},c21b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{on:{click:t.click}},[t._v("\n    页面"+t._s(t.pageId)+"\n  ")]),a("p",[t._v("你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面")]),a("h3",[t._v("页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.refresh()}}},[t._v("刷新当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.close()}}},[t._v("关闭当前页面")])]),a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.nextId}},[t._v("\n      打开“页面"+t._s(t.nextId)+"”\n    ")])],1),t.prevId>0?a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.prevId}},[t._v("\n      打开“页面"+t._s(t.prevId)+"”\n    ")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.prevId},nativeOn:{click:function(e){return t.$routerTab.refresh("../page/"+t.prevId)}}},[t._v("\n      全新打开“页面"+t._s(t.prevId)+"”\n    ")])],1):t._e(),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$router.push("../tab-dynamic")}}},[t._v("打开“动态更新页签”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.close("../tab-dynamic")}}},[t._v("关闭“动态更新页签”")])]),a("h3",[t._v("iframe 页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.openIframeTab("https://www.baidu.com","百度","rt-icon-web")}}},[t._v("打开“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.refreshIframeTab("https://www.baidu.com")}}},[t._v("刷新“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.closeIframeTab("https://www.baidu.com")}}},[t._v("关闭“百度”")])]),a("h3",[t._v("打开 iframe 页签")]),a("div",{staticClass:"custom-iframe"},[a("label",[t._v("\n      名称：\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.iframe.title,expression:"iframe.title"}],attrs:{name:"title",placeholder:"页签标题"},domProps:{value:t.iframe.title},on:{input:function(e){e.target.composing||t.$set(t.iframe,"title",e.target.value)}}})]),a("label",[t._v("\n      网址：\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.iframe.src,expression:"iframe.src"}],attrs:{name:"src",placeholder:"请输入完整的网址"},domProps:{value:t.iframe.src},on:{input:function(e){e.target.composing||t.$set(t.iframe,"src",e.target.value)}}})]),a("a",{staticClass:"demo-btn primary",on:{click:function(e){t.iframe.src&&t.$routerTab.openIframeTab(t.iframe.src,t.iframe.title,"rt-icon-web")}}},[t._v("打开页签")])]),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},n=[],i=a("778e"),s=a("30be"),o={name:"Page",components:{PageRouteInfo:s["a"]},mixins:[i["a"]],data:function(){var t=this.$route.params.id,e=this.$route.fullPath.indexOf("/i18n/")>-1;return{pageId:t,nextId:+t+1,prevId:+t-1,routeTab:{title:e?["page",t]:"页面"+t},iframe:{src:"https://www.hao123.com/",title:"Hao123"}}},methods:{click:function(){console.log("页面".concat(this.pageId))}}},c=o,u=(a("2506"),a("0c7c")),l=Object(u["a"])(c,r,n,!1,null,"ab7e8036",null);e["default"]=l.exports},d585:function(t,e,a){}}]);
//# sourceMappingURL=p-Page-vue.0f1109d2.js.map