import{a9 as l,a8 as M,b as X,a1 as na,M as ra,ag as la,c9 as H,cU as ia,k as a,dO as oa,aL as ca,aO as k,G as o,aN as sa,S as da,c as B,r as J,T as ua,a5 as va,_ as O,F as fa,O as pa,Q as ga}from"./index.23965316.js";import{T as Y}from"./index.b163296c.js";import{R as N,C as d}from"./useForm.37d1448d.js";import{c as ba}from"./index.c8ee7c1a.js";var ha=Y.TabPane,ya={prefixCls:l.string,title:l.VNodeChild,extra:l.VNodeChild,bordered:l.looseBool.def(!0),bodyStyle:l.style,headStyle:l.style,loading:l.looseBool.def(!1),hoverable:l.looseBool.def(!1),type:l.string,size:l.oneOf(M("default","small")),actions:l.VNodeChild,tabList:{type:Array},tabBarExtraContent:l.VNodeChild,activeTabKey:l.string,defaultActiveTabKey:l.string,cover:l.VNodeChild,onTabChange:{type:Function}},ma=X({name:"ACard",mixins:[na],props:ya,setup:function(){return{configProvider:ra("configProvider",la)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(e){var c=e.map(function(n,p){return H(n)&&!ia(n)||!H(n)?a("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(p)},[a("span",null,[n])]):null});return c},triggerTabChange:function(e){this.$emit("tabChange",e)},isContainGrid:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c;return e.forEach(function(n){n&&oa(n.type)&&n.type.__ANT_CARD_GRID&&(c=!0)}),c}},render:function(){var e,c,n=this.$props,p=n.prefixCls,v=n.headStyle,L=v===void 0?{}:v,_=n.bodyStyle,h=_===void 0?{}:_,f=n.loading,y=n.bordered,m=y===void 0?!0:y,x=n.size,w=x===void 0?"default":x,G=n.type,g=n.tabList,r=n.hoverable,u=n.activeTabKey,S=n.defaultActiveTabKey,$=this.$slots,z=ca(this),K=this.configProvider.getPrefixCls,t=K("card",p),C=k(this,"tabBarExtraContent"),E=(e={},o(e,"".concat(t),!0),o(e,"".concat(t,"-loading"),f),o(e,"".concat(t,"-bordered"),m),o(e,"".concat(t,"-hoverable"),!!r),o(e,"".concat(t,"-contain-grid"),this.isContainGrid(z)),o(e,"".concat(t,"-contain-tabs"),g&&g.length),o(e,"".concat(t,"-").concat(w),w!=="default"),o(e,"".concat(t,"-type-").concat(G),!!G),e),V=h.padding===0||h.padding==="0px"?{padding:24}:void 0,T=a("div",{class:"".concat(t,"-loading-content"),style:V},[a(N,{gutter:8},{default:function(){return[a(d,{span:22},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}})]}}),a(N,{gutter:8},{default:function(){return[a(d,{span:8},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}}),a(d,{span:15},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}})]}}),a(N,{gutter:8},{default:function(){return[a(d,{span:6},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}}),a(d,{span:18},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}})]}}),a(N,{gutter:8},{default:function(){return[a(d,{span:13},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}}),a(d,{span:9},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}})]}}),a(N,{gutter:8},{default:function(){return[a(d,{span:4},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}}),a(d,{span:3},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}}),a(d,{span:16},{default:function(){return[a("div",{class:"".concat(t,"-loading-block")},null)]}})]}})]),D=u!==void 0,A=(c={size:"large"},o(c,D?"activeKey":"defaultActiveKey",D?u:S),o(c,"tabBarExtraContent",C),o(c,"onChange",this.triggerTabChange),o(c,"class","".concat(t,"-head-tabs")),c),b,Q=g&&g.length?a(Y,A,{default:function(){return[g.map(function(i){var W=i.tab,I=i.slots,q=I==null?void 0:I.tab,ea=W!==void 0?W:$[q]?$[q](i):null;return a(ha,{tab:ea,key:i.key,disabled:i.disabled},null)})]}}):null,R=k(this,"title"),j=k(this,"extra");(R||j||Q)&&(b=a("div",{class:"".concat(t,"-head"),style:L},[a("div",{class:"".concat(t,"-head-wrapper")},[R&&a("div",{class:"".concat(t,"-head-title")},[R]),j&&a("div",{class:"".concat(t,"-extra")},[j])]),Q]));var U=k(this,"cover"),Z=U?a("div",{class:"".concat(t,"-cover")},[U]):null,aa=a("div",{class:"".concat(t,"-body"),style:h},[f?T:z]),F=k(this,"actions"),ta=F&&F.length?a("ul",{class:"".concat(t,"-actions")},[this.getAction(F)]):null;return a("div",{class:E,ref:"cardContainerRef"},[b,Z,z?aa:null,ta])}}),Pa=ma,Ca={small:8,middle:16,large:24},_a={prefixCls:l.string,size:{type:[String,Number,Array]},direction:l.oneOf(M("horizontal","vertical")).def("horizontal"),align:l.oneOf(M("start","end","center","baseline")),wrap:l.looseBool};function xa(s){return typeof s=="string"?Ca[s]:s||0}var Sa=X({name:"ASpace",props:_a,slots:["split"],setup:function(e,c){var n=c.slots,p=da("space",e),v=p.prefixCls,L=p.space,_=p.direction,h=ba(),f=B(function(){var r;return e.size||((r=L.value)===null||r===void 0?void 0:r.size)||"small"}),y=J(),m=J();ua(f,function(){var r=(Array.isArray(f.value)?f.value:[f.value,f.value]).map(function(S){return xa(S)}),u=pa(r,2);y.value=u[0],m.value=u[1]},{immediate:!0});var x=B(function(){return e.align===void 0&&e.direction==="horizontal"?"center":e.align}),w=B(function(){var r;return ga(v.value,"".concat(v.value,"-").concat(e.direction),(r={},o(r,"".concat(v.value,"-rtl"),_.value==="rtl"),o(r,"".concat(v.value,"-align-").concat(x.value),x.value),r))}),G=B(function(){return _.value==="rtl"?"marginLeft":"marginRight"}),g=B(function(){var r={};return h.value&&(r.columnGap="".concat(y.value,"px"),r.rowGap="".concat(m.value,"px")),O(O({},r),e.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-m.value,"px")})});return function(){var r,u,S=e.wrap,$=e.direction,z=$===void 0?"horizontal":$,K=va((r=n.default)===null||r===void 0?void 0:r.call(n)),t=K.length;if(t===0)return null;var C=(u=n.split)===null||u===void 0?void 0:u.call(n),E="".concat(v.value,"-item"),V=y.value,T=t-1;return a("div",{class:w.value,style:g.value},[K.map(function(D,A){var b={};return h.value||(z==="vertical"?A<T&&(b={marginBottom:"".concat(V/(C?2:1),"px")}):b=O(O({},A<T&&o({},G.value,"".concat(V/(C?2:1),"px"))),S&&{paddingBottom:"".concat(m.value,"px")})),a(fa,null,[a("div",{class:E,style:b},[D]),A<T&&C&&a("span",{class:"".concat(E,"-split"),style:b},[C])])})])}}}),ka=sa(Sa);export{Pa as C,ka as S};