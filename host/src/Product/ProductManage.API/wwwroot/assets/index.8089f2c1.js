import{_ as F,G as l,c as f,M as U,ag as X,L as D,r as H,ah as N,a8 as k,a9 as i,b as q,S as Q,C as R,U as Y,Q as K,k as V}from"./index.f5037e0e.js";var L=["xxl","xl","lg","md","sm","xs"],A={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},y=new Map,T=-1,E={},Z={matchHandlers:{},dispatch:function(e){return E=e,y.forEach(function(u){return u(E)}),y.size>=1},subscribe:function(e){return y.size||this.register(),T+=1,y.set(T,e),e(E),T},unsubscribe:function(e){y.delete(e),y.size||this.unregister()},unregister:function(){var e=this;Object.keys(A).forEach(function(u){var d=A[u],a=e.matchHandlers[d];a==null||a.mql.removeListener(a==null?void 0:a.listener)}),y.clear()},register:function(){var e=this;Object.keys(A).forEach(function(u){var d=A[u],a=function(b){var g=b.matches;e.dispatch(F(F({},E),l({},u,g)))},v=window.matchMedia(d);v.addListener(a),e.matchHandlers[d]={mql:v,listener:a},a(v)})}},B=Z,W=Symbol("SizeProvider"),ve=function(e){var u=U("configProvider",X),d=f(function(){return e.size||u.componentSize});return D(W,d),d},pe=function(e){var u=e?f(function(){return e.size}):U(W,f(function(){return"default"}));return u};function ee(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}var $=function(){return ee()&&window.document.documentElement},me=function(e){if($()){var u=Array.isArray(e)?e:[e],d=window.document.documentElement;return u.some(function(a){return a in d.style})}return!1},O,re=function(){if(!$())return!1;if(O!==void 0)return O;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),O=e.scrollHeight===1,document.body.removeChild(e),O},te=function(){var n=H(!1);return N(function(){n.value=re()}),n},J=Symbol("rowContextKey"),ne=function(e){D(J,e)},ae=function(){return U(J,{gutter:f(function(){}),wrap:f(function(){}),supportFlexGap:f(function(){})})},oe=k("top","middle","bottom","stretch"),ie=k("start","end","center","space-around","space-between"),ue={type:i.oneOf(["flex"]),align:i.oneOf(oe),justify:i.oneOf(ie),prefixCls:i.string,gutter:i.oneOfType([i.object,i.number,i.array]).def(0),wrap:i.looseBool},se=q({name:"ARow",props:ue,setup:function(e,u){var d=u.slots,a=Q("row",e),v=a.prefixCls,_=a.direction,b,g=H({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),z=te();N(function(){b=B.subscribe(function(r){var t=e.gutter||0;(!Array.isArray(t)&&R(t)==="object"||Array.isArray(t)&&(R(t[0])==="object"||R(t[1])==="object"))&&(g.value=r)})}),Y(function(){B.unsubscribe(b)});var G=f(function(){var r=[0,0],t=e.gutter,o=t===void 0?0:t,p=Array.isArray(o)?o:[o,0];return p.forEach(function(x,S){if(R(x)==="object")for(var s=0;s<L.length;s++){var w=L[s];if(g.value[w]&&x[w]!==void 0){r[S]=x[w];break}}else r[S]=x||0}),r});ne({gutter:G,supportFlexGap:z,wrap:f(function(){return e.wrap})});var I=f(function(){var r;return K(v.value,(r={},l(r,"".concat(v.value,"-no-wrap"),e.wrap===!1),l(r,"".concat(v.value,"-").concat(e.justify),e.justify),l(r,"".concat(v.value,"-").concat(e.align),e.align),l(r,"".concat(v.value,"-rtl"),_.value==="rtl"),r))}),M=f(function(){var r=G.value,t={},o=r[0]>0?"".concat(r[0]/-2,"px"):void 0,p=r[1]>0?"".concat(r[1]/-2,"px"):void 0;return o&&(t.marginLeft=o,t.marginRight=o),z.value?t.rowGap="".concat(r[1],"px"):p&&(t.marginTop=p,t.marginBottom=p),t});return function(){var r;return V("div",{class:I.value,style:M.value},[(r=d.default)===null||r===void 0?void 0:r.call(d)])}}}),xe=se;function ce(n){return typeof n=="number"?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}var m=i.oneOfType([i.string,i.number]),le=i.shape({span:m,order:m,offset:m,push:m,pull:m}).loose,C=i.oneOfType([i.string,i.number,le]),de={span:m,order:m,offset:m,push:m,pull:m,xs:C,sm:C,md:C,lg:C,xl:C,xxl:C,prefixCls:i.string,flex:m},he=q({name:"ACol",props:de,setup:function(e,u){var d=u.slots,a=ae(),v=a.gutter,_=a.supportFlexGap,b=a.wrap,g=Q("col",e),z=g.prefixCls,G=g.direction,I=f(function(){var r,t=e.span,o=e.order,p=e.offset,x=e.push,S=e.pull,s=z.value,w={};return["xs","sm","md","lg","xl","xxl"].forEach(function(j){var h,c={},P=e[j];typeof P=="number"?c.span=P:R(P)==="object"&&(c=P||{}),w=F(F({},w),(h={},l(h,"".concat(s,"-").concat(j,"-").concat(c.span),c.span!==void 0),l(h,"".concat(s,"-").concat(j,"-order-").concat(c.order),c.order||c.order===0),l(h,"".concat(s,"-").concat(j,"-offset-").concat(c.offset),c.offset||c.offset===0),l(h,"".concat(s,"-").concat(j,"-push-").concat(c.push),c.push||c.push===0),l(h,"".concat(s,"-").concat(j,"-pull-").concat(c.pull),c.pull||c.pull===0),l(h,"".concat(s,"-rtl"),G.value==="rtl"),h))}),K(s,(r={},l(r,"".concat(s,"-").concat(t),t!==void 0),l(r,"".concat(s,"-order-").concat(o),o),l(r,"".concat(s,"-offset-").concat(p),p),l(r,"".concat(s,"-push-").concat(x),x),l(r,"".concat(s,"-pull-").concat(S),S),r),w)}),M=f(function(){var r=e.flex,t=v.value,o={};if(t&&t[0]>0){var p="".concat(t[0]/2,"px");o.paddingLeft=p,o.paddingRight=p}if(t&&t[1]>0&&!_.value){var x="".concat(t[1]/2,"px");o.paddingTop=x,o.paddingBottom=x}return r&&(o.flex=ce(r),r==="auto"&&b.value===!1&&!o.minWidth&&(o.minWidth=0)),o});return function(){var r;return V("div",{class:I.value,style:M.value},[(r=d.default)===null||r===void 0?void 0:r.call(d)])}}});export{he as C,xe as R,B as a,ve as b,te as c,me as i,L as r,pe as u};