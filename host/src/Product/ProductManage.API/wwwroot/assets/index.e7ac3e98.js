import{k as f,aB as he,a9 as i,aJ as be,aL as W,G as v,c9 as ye,b as N,a1 as I,j as ge,a4 as me,L as Te,a7 as R,_ as b,ca as J,M as Q,aO as w,cb as X,R as _,ab as xe,cc as Be,a8 as E,C as Y,cd as Ce,ce as Pe,cf as Oe,cg as $e,ag as Se,aQ as _e,a5 as ke,aP as Re}from"./index.f5037e0e.js";import{U as we}from"./useContentViewHeight.bf04c9e4.js";var Ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Ke=Ne;function U(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(r){Ae(a,r,t[r])})}return a}function Ae(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var M=function(e,t){var n=U({},e,t.attrs);return f(he,U({},n,{icon:Ke}),null)};M.displayName="PlusOutlined";M.inheritAttrs=!1;var Ee=M,j={LEFT:37,UP:38,RIGHT:39,DOWN:40},We={width:0,height:0,overflow:"hidden",position:"absolute"},z={name:"Sentinel",props:{setRef:i.func,prevElement:i.any,nextElement:i.any},methods:{onKeyDown:function(e){var t=e.target,n=e.which,r=e.shiftKey,s=this.$props,o=s.nextElement,l=s.prevElement;n!==be.TAB||document.activeElement!==t||(!r&&o&&o.focus(),r&&l&&l.focus())}},render:function(){var e=this.$props.setRef;return f("div",{tabindex:0,ref:e,style:We,onKeydown:this.onKeyDown,role:"presentation"},[W(this)])}};function Ie(a){var e=[];return a.forEach(function(t){ye(t)&&e.push(t)}),e}function ee(a,e){for(var t=Ie(a),n=0;n<t.length;n++)if(t[n].key===e)return n;return-1}function H(a,e){a.transform=e,a.webkitTransform=e,a.mozTransform=e}function te(a){return("transform"in a||"webkitTransform"in a||"MozTransform"in a)&&window.atob}function je(a){return{transform:a,WebkitTransform:a,MozTransform:a}}function D(a){return a==="left"||a==="right"}function He(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=D(e)?"translateY":"translateX";return!D(e)&&t==="rtl"?"".concat(n,"(").concat(a*100,"%) translateZ(0)"):"".concat(n,"(").concat(-a*100,"%) translateZ(0)")}function ze(a,e){var t=D(e)?"marginTop":"marginLeft";return v({},t,"".concat(-a*100,"%"))}function ne(a,e){return+window.getComputedStyle(a).getPropertyValue(e).replace("px","")}function ae(a){return Object.keys(a).reduce(function(e,t){return(t.substr(0,5)==="aria-"||t.substr(0,5)==="data-"||t==="role")&&(e[t]=a[t]),e},{})}function A(a,e){return+a.getPropertyValue(e).replace("px","")}function re(a,e,t,n,r){var s=ne(r,"padding-".concat(a));if(!n||!n.parentNode)return s;var o=n.parentNode.childNodes;return Array.prototype.some.call(o,function(l){if(!l.tagName)return!1;var c=window.getComputedStyle(l);return l!==n?(s+=A(c,"margin-".concat(a)),s+=l[e],s+=A(c,"margin-".concat(t)),c.boxSizing==="content-box"&&(s+=A(c,"border-".concat(a,"-width"))+A(c,"border-".concat(t,"-width"))),!1):(s+=A(c,"margin-".concat(a)),!0)}),s}function De(a,e){return re("left","offsetWidth","right",a,e)}function Le(a,e){return re("top","offsetHeight","bottom",a,e)}var Ge=globalThis&&globalThis.__rest||function(a,e){var t={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(a);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(a,n[r])&&(t[n[r]]=a[n[r]]);return t};function V(a){var e,t=a.children;return t.forEach(function(n){n&&!J(e)&&!n.disabled&&(e=n.key)}),e}function Me(a,e){var t=a.children,n=t.map(function(r){return r&&r.key});return n.indexOf(e)>=0}var Ue=N({name:"Tabs",mixins:[I],inheritAttrs:!1,props:{destroyInactiveTabPane:i.looseBool,renderTabBar:i.func.isRequired,renderTabContent:i.func.isRequired,navWrapper:i.func.def(function(a){return a}),children:i.any.def([]),prefixCls:i.string.def("ant-tabs"),tabBarPosition:i.string.def("top"),activeKey:i.oneOfType([i.string,i.number]),defaultActiveKey:i.oneOfType([i.string,i.number]),direction:i.string.def("ltr"),tabBarGutter:i.number},setup:function(e){var t;e.activeKey!==void 0?t=e.activeKey:e.defaultActiveKey!==void 0?t=e.defaultActiveKey:t=V(e);var n=ge({_activeKey:t});return me(function(){e.activeKey!==void 0?n._activeKey=e.activeKey:Me(e,n._activeKey)||(n._activeKey=V(e))},{flush:"sync"}),{state:n}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,Te("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(e,t){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(e,t),this.setActiveKey(e)},onNavKeyDown:function(e){var t=e.keyCode;if(t===j.RIGHT||t===j.DOWN){e.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(t===j.LEFT||t===j.UP){e.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(e){var t=e.target,n=e.currentTarget;t===n&&t.scrollLeft>0&&(t.scrollLeft=0)},setSentinelStart:function(e){this.sentinelStart=e},setSentinelEnd:function(e){this.sentinelEnd=e},setPanelSentinelStart:function(e){e!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=e},setPanelSentinelEnd:function(e){e!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=e},setActiveKey:function(e){if(this.state._activeKey!==e){var t=this.$props;t.activeKey===void 0&&(this.state._activeKey=e),this.__emit("update:activeKey",e),this.__emit("change",e)}},getNextActiveKey:function(e){var t=this.state._activeKey,n=[];this.$props.children.forEach(function(o){var l,c;o&&!(!((l=o.props)===null||l===void 0)&&l.disabled)&&((c=o.props)===null||c===void 0?void 0:c.disabled)!==""&&(e?n.push(o):n.unshift(o))});var r=n.length,s=r&&n[0].key;return n.forEach(function(o,l){o.key===t&&(l===r-1?s=n[0].key:s=n[l+1].key)}),s},updateSentinelContext:function(){var e=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame(function(){e.destroy||e.$forceUpdate()}))}},render:function(){var e,t=this.$props,n=t.prefixCls,r=t.navWrapper,s=t.tabBarPosition,o=t.renderTabContent,l=t.renderTabBar,c=t.destroyInactiveTabPane,d=t.direction,p=t.tabBarGutter,g=this.$attrs,u=g.class;g.onChange;var m=g.style,x=Ge(g,["class","onChange","style"]),y=(e={},v(e,u,u),v(e,n,1),v(e,"".concat(n,"-").concat(s),1),v(e,"".concat(n,"-rtl"),d==="rtl"),e);this.tabBar=l();var B=R(this.tabBar,{prefixCls:n,navWrapper:r,tabBarPosition:s,panels:t.children,activeKey:this.state._activeKey,direction:d,tabBarGutter:p,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),C=R(o(),{prefixCls:n,tabBarPosition:s,activeKey:this.state._activeKey,destroyInactiveTabPane:c,direction:d,onChange:this.setActiveKey,children:t.children,key:"tabContent"}),h=f(z,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),P=f(z,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),T=[];s==="bottom"?T.push(h,C,P,B):T.push(B,h,C,P);var $=b(b({},ae(x)),{style:m,onScroll:this.onScroll,class:y});return f("div",$,[T])}}),ie=N({name:"TabPane",props:{active:i.looseBool,destroyInactiveTabPane:i.looseBool,forceRender:i.looseBool,placeholder:i.any,rootPrefixCls:i.string,tab:i.any,closable:i.looseBool,disabled:i.looseBool},setup:function(){return{isActived:void 0,sentinelContext:Q("sentinelContext",{})}},render:function(){var e,t=this.$props,n=t.destroyInactiveTabPane,r=t.active,s=t.forceRender,o=t.rootPrefixCls,l=W(this),c=w(this,"placeholder");this.isActived=this.isActived||r;var d="".concat(o,"-tabpane"),p=(e={},v(e,d,1),v(e,"".concat(d,"-inactive"),!r),v(e,"".concat(d,"-active"),r),e),g=n?r:this.isActived,u=g||s,m=this.sentinelContext,x=m.sentinelStart,y=m.sentinelEnd,B=m.setPanelSentinelStart,C=m.setPanelSentinelEnd,h,P;return r&&u&&(h=f(z,{setRef:B,prevElement:x},null),P=f(z,{setRef:C,nextElement:y},null)),f("div",{class:p,role:"tabpanel","aria-hidden":r?"false":"true"},[h,u?l:c,P])}}),se=N({name:"TabContent",inheritAttrs:!1,props:{animated:i.looseBool.def(!0),animatedWithMargin:i.looseBool.def(!0),prefixCls:i.string.def("ant-tabs"),activeKey:i.oneOfType([i.string,i.number]),tabBarPosition:i.string,direction:i.string,destroyInactiveTabPane:i.looseBool,children:i.any},computed:{classes:function(){var e,t=this.animated,n=this.prefixCls,r=this.$attrs.class;return e={},v(e,r,!!r),v(e,"".concat(n,"-content"),!0),v(e,t?"".concat(n,"-content-animated"):"".concat(n,"-content-no-animated"),!0),e}},methods:{getTabPanes:function(e){var t=this.$props,n=t.activeKey,r=[];return e.forEach(function(s){if(!!s){var o=s.key,l=n===o;r.push(R(s,{active:l,destroyInactiveTabPane:t.destroyInactiveTabPane,rootPrefixCls:t.prefixCls}))}}),r}},render:function(){var e=this.activeKey,t=this.tabBarPosition,n=this.animated,r=this.animatedWithMargin,s=this.direction,o=this.classes,l=this.children,c={};if(n&&l){var d=ee(l,e);if(d!==-1){var p=r?ze(d,t):je(He(d,t,s));c=b(b({},this.$attrs.style),p)}else c=b(b({},this.$attrs.style),{display:"none"})}return f("div",{class:o,style:c},[this.getTabPanes(l||[])])}});function q(a,e){var t=a.$props,n=t.styles,r=n===void 0?{}:n,s=t.panels,o=t.activeKey,l=t.direction,c=a.getRef("root"),d=a.getRef("nav")||c,p=a.getRef("inkBar"),g=a.getRef("activeTab"),u=p.style,m=a.$props.tabBarPosition,x=ee(s,o);if(e&&(u.display="none"),g){var y=g,B=te(u);if(H(u,""),u.width="",u.height="",u.left="",u.top="",u.bottom="",u.right="",m==="top"||m==="bottom"){var C=De(y,d),h=y.offsetWidth;h===c.offsetWidth?h=0:r.inkBar&&r.inkBar.width!==void 0&&(h=parseFloat(r.inkBar.width,10),h&&(C+=(y.offsetWidth-h)/2)),l==="rtl"&&(C=ne(y,"margin-left")-C),B?H(u,"translate3d(".concat(C,"px,0,0)")):u.left="".concat(C,"px"),u.width="".concat(h,"px")}else{var P=Le(y,d),T=y.offsetHeight;r.inkBar&&r.inkBar.height!==void 0&&(T=parseFloat(r.inkBar.height,10),T&&(P+=(y.offsetHeight-T)/2)),B?(H(u,"translate3d(0,".concat(P,"px,0)")),u.top="0"):u.top="".concat(P,"px"),u.height="".concat(T,"px")}}u.display=x!==-1?"block":"none"}var Ve={name:"InkTabBarNode",mixins:[I],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:i.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:i.func.def(function(){}),getRef:i.func.def(function(){}),panels:i.array,activeKey:i.oneOfType([i.string,i.number])},updated:function(){var e=this;this.$nextTick(function(){q(e)})},mounted:function(){var e=this;this.$nextTick(function(){q(e,!0)})},render:function(){var e,t=this.prefixCls,n=this.styles,r=n===void 0?{}:n,s=this.inkBarAnimated,o="".concat(t,"-ink-bar"),l=(e={},v(e,o,!0),v(e,s?"".concat(o,"-animated"):"".concat(o,"-no-animated"),!0),e);return f("div",{style:r.inkBar,class:l,key:"inkBar",ref:this.saveRef("inkBar")},null)}};function G(){}var qe={name:"TabBarTabsNode",mixins:[I],inheritAttrs:!1,props:{activeKey:i.oneOfType([i.string,i.number]),panels:i.any.def([]),prefixCls:i.string.def(""),tabBarGutter:i.any.def(null),onTabClick:i.func,saveRef:i.func.def(G),getRef:i.func.def(G),renderTabBarNode:i.func,tabBarPosition:i.string,direction:i.string},render:function(){var e=this,t=this.$props,n=t.panels,r=t.activeKey,s=t.prefixCls,o=t.tabBarGutter,l=t.saveRef,c=t.tabBarPosition,d=t.direction,p=[],g=this.renderTabBarNode||this.$slots.renderTabBarNode;return n.forEach(function(u,m){if(!!u){var x=X(u),y=u.key,B=r===y?"".concat(s,"-tab-active"):"";B+=" ".concat(s,"-tab");var C={},h=x.disabled;h?B+=" ".concat(s,"-tab-disabled"):C.onClick=function(){e.__emit("tabClick",y)};var P=w(u,"tab"),T=o&&m===n.length-1?0:o;T=typeof T=="number"?"".concat(T,"px"):T;var $=d==="rtl"?"marginLeft":"marginRight",L=v({},D(c)?"marginBottom":$,T),S=f("div",_(_({role:"tab","aria-disabled":h?"true":"false","aria-selected":r===y?"true":"false"},C),{},{class:B.trim(),key:y,style:L,ref:r===y?l("activeTab"):G}),[P]);g&&(S=g(S)),p.push(S)}}),f("div",{ref:this.saveRef("navTabsContainer")},[p])}},Fe=globalThis&&globalThis.__rest||function(a,e){var t={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(a);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(a,n[r])&&(t[n[r]]=a[n[r]]);return t};function F(){}var Ze={name:"TabBarRootNode",mixins:[I],inheritAttrs:!1,props:{saveRef:i.func.def(F),getRef:i.func.def(F),prefixCls:i.string.def(""),tabBarPosition:i.string.def("top"),extraContent:i.any},methods:{onKeyDown:function(e){this.__emit("keydown",e)}},render:function(){var e,t=this.prefixCls,n=this.onKeyDown,r=this.tabBarPosition,s=this.extraContent,o=this.$attrs,l=o.class,c=o.style;o.onKeydown;var d=Fe(o,["class","style","onKeydown"]),p=(e={},v(e,"".concat(t,"-bar"),!0),v(e,l,!!l),e),g=r==="top"||r==="bottom",u=g?{float:"right"}:{},m=W(this),x=m;return s&&(x=[R(s,{key:"extra",style:b({},u)}),R(m,{key:"content"})],x=g?x:x.reverse()),f("div",_({role:"tablist",class:p,tabindex:"0",onKeydown:n,style:c,ref:this.saveRef("root")},ae(d)),[x])}},Je={name:"ScrollableTabBarNode",mixins:[I],inheritAttrs:!1,props:{activeKey:i.any,getRef:i.func.def(function(){}),saveRef:i.func.def(function(){}),tabBarPosition:i.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:i.string.def(""),scrollAnimated:i.looseBool.def(!0),navWrapper:i.func.def(function(a){return a}),prevIcon:i.any,nextIcon:i.any,direction:i.string},data:function(){return this.offset=0,this.prevProps=b({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var e=this;this.tabBarPositionChange=!0,this.$nextTick(function(){e.setOffset(0)})}},mounted:function(){var e=this;this.$nextTick(function(){e.updatedCal(),e.debouncedResize=xe(function(){e.setNextPrev(),e.scrollToActiveTab()},200),e.resizeObserver=new Be(e.debouncedResize),e.resizeObserver.observe(e.$props.getRef("container"))})},updated:function(){var e=this;this.$nextTick(function(){e.updatedCal(e.prevProps),e.prevProps=b({},e.$props)})},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(e){var t=this,n=this.$props;if(e&&e.tabBarPosition!==n.tabBarPosition){this.setOffset(0);return}this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick(function(){t.scrollToActiveTab()})):(!e||n.activeKey!==e.activeKey)&&this.scrollToActiveTab()},setNextPrev:function(){var e=this.$props.getRef("nav"),t=this.$props.getRef("navTabsContainer"),n=this.getScrollWH(t||e),r=this.getOffsetWH(this.$props.getRef("container"))+1,s=this.getOffsetWH(this.$props.getRef("navWrap")),o=this.offset,l=r-n,c=this.next,d=this.prev;if(l>=0)c=!1,this.setOffset(0,!1),o=0;else if(l<o)c=!0;else{c=!1;var p=s-n;this.setOffset(p,!1),o=p}return o<0?d=!0:d=!1,this.setNext(c),this.setPrev(d),{next:c,prev:d}},getOffsetWH:function(e){var t=this.$props.tabBarPosition,n="offsetWidth";return(t==="left"||t==="right")&&(n="offsetHeight"),e[n]},getScrollWH:function(e){var t=this.tabBarPosition,n="scrollWidth";return(t==="left"||t==="right")&&(n="scrollHeight"),e[n]},getOffsetLT:function(e){var t=this.$props.tabBarPosition,n="left";return(t==="left"||t==="right")&&(n="top"),e.getBoundingClientRect()[n]},setOffset:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=Math.min(0,e);if(this.offset!==n){this.offset=n;var r={},s=this.$props.tabBarPosition,o=this.$props.getRef("nav").style,l=te(o);s==="left"||s==="right"?l?r={value:"translate3d(0,".concat(n,"px,0)")}:r={name:"top",value:"".concat(n,"px")}:l?(this.$props.direction==="rtl"&&(n=-n),r={value:"translate3d(".concat(n,"px,0,0)")}):r={name:"left",value:"".concat(n,"px")},l?H(o,r.value):o[r.name]=r.value,t&&this.setNextPrev()}},setPrev:function(e){this.prev!==e&&(this.prev=e)},setNext:function(e){this.next!==e&&(this.next=e)},isNextPrevShown:function(e){return e?e.next||e.prev:this.next||this.prev},prevTransitionEnd:function(e){if(e.propertyName==="opacity"){var t=this.$props.getRef("container");this.scrollToActiveTab({target:t,currentTarget:t})}},scrollToActiveTab:function(e){var t=this.$props.getRef("activeTab"),n=this.$props.getRef("navWrap");if(!(e&&e.target!==e.currentTarget||!t)){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),!!r){var s=this.getScrollWH(t),o=this.getOffsetWH(n),l=this.offset,c=this.getOffsetLT(n),d=this.getOffsetLT(t);c>d?(l+=c-d,this.setOffset(l)):c+o<d+s&&(l-=d+s-(c+o),this.setOffset(l))}}},prevClick:function(e){this.__emit("prevClick",e);var t=this.$props.getRef("navWrap"),n=this.getOffsetWH(t),r=this.offset;this.setOffset(r+n)},nextClick:function(e){this.__emit("nextClick",e);var t=this.$props.getRef("navWrap"),n=this.getOffsetWH(t),r=this.offset;this.setOffset(r-n)}},render:function(){var e,t,n,r,s=this.next,o=this.prev,l=this.$props,c=l.prefixCls,d=l.scrollAnimated,p=l.navWrapper,g=w(this,"prevIcon"),u=w(this,"nextIcon"),m=o||s,x=f("span",{onClick:o&&this.prevClick,unselectable:"unselectable",class:(e={},v(e,"".concat(c,"-tab-prev"),1),v(e,"".concat(c,"-tab-btn-disabled"),!o),v(e,"".concat(c,"-tab-arrow-show"),m),e),onTransitionend:this.prevTransitionEnd},[g||f("span",{class:"".concat(c,"-tab-prev-icon")},null)]),y=f("span",{onClick:s&&this.nextClick,unselectable:"unselectable",class:(t={},v(t,"".concat(c,"-tab-next"),1),v(t,"".concat(c,"-tab-btn-disabled"),!s),v(t,"".concat(c,"-tab-arrow-show"),m),t)},[u||f("span",{class:"".concat(c,"-tab-next-icon")},null)]),B="".concat(c,"-nav"),C=(n={},v(n,B,!0),v(n,d?"".concat(B,"-animated"):"".concat(B,"-no-animated"),!0),n);return f("div",{class:(r={},v(r,"".concat(c,"-nav-container"),1),v(r,"".concat(c,"-nav-container-scrolling"),m),r),key:"container",ref:this.saveRef("container")},[x,y,f("div",{class:"".concat(c,"-nav-wrap"),ref:this.saveRef("navWrap")},[f("div",{class:"".concat(c,"-nav-scroll")},[f("div",{class:C,ref:this.saveRef("nav")},[p(W(this))])])])])}},Qe={props:{children:i.func.def(function(){return null})},methods:{getRef:function(e){return this[e]},saveRef:function(e){var t=this;return function(n){n&&(t[e]=n)}}},render:function(){var e=this,t=function(s){return e.saveRef(s)},n=function(s){return e.getRef(s)};return this.children(t,n)}},Z=N({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var e=this,t=this.$attrs.children;return f(Qe,{children:function(r,s){return f(Ze,_({saveRef:r},e.$attrs),{default:function(){return[f(Je,_({saveRef:r,getRef:s},e.$attrs),{default:function(){return[f(qe,_({saveRef:r},b(b({},e.$attrs),{renderTabBarNode:t})),null),f(Ve,_({saveRef:r,getRef:s},e.$attrs),null)]}})]}})}},null)}}),Xe=N({name:"TabBar",inheritAttrs:!1,props:{prefixCls:i.string,centered:i.looseBool.def(!1),tabBarStyle:i.style,tabBarExtraContent:i.VNodeChild,type:i.oneOf(E("line","card","editable-card")),tabPosition:i.oneOf(E("top","right","bottom","left")).def("top"),tabBarPosition:i.oneOf(E("top","right","bottom","left")),size:i.oneOf(E("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:i.func,panels:i.array.def([]),activeKey:i.oneOfType([i.string,i.number]),tabBarGutter:i.number},render:function(){var e,t=this.$props,n=t.centered,r=t.tabBarStyle,s=t.animated,o=s===void 0?!0:s,l=t.renderTabBar,c=t.tabBarExtraContent,d=t.tabPosition,p=t.prefixCls,g=t.type,u=g===void 0?"line":g,m=t.size,x=Y(o)==="object"?o.inkBar:o,y=d==="left"||d==="right",B=f("span",{class:"".concat(p,"-tab-prev-icon")},[y?f(we,{class:"".concat(p,"-tab-prev-icon-target")},null):f(Ce,{class:"".concat(p,"-tab-prev-icon-target")},null)]),C=f("span",{class:"".concat(p,"-tab-next-icon")},[y?f(Pe,{class:"".concat(p,"-tab-next-icon-target")},null):f(Oe,{class:"".concat(p,"-tab-next-icon-target")},null)]),h=(e={},v(e,this.$attrs.class,this.$attrs.class),v(e,"".concat(p,"-centered-bar"),n),v(e,"".concat(p,"-").concat(d,"-bar"),!0),v(e,"".concat(p,"-").concat(m,"-bar"),!!m),v(e,"".concat(p,"-card-bar"),u&&u.indexOf("card")>=0),e),P=b(b(b({},this.$props),this.$attrs),{children:null,inkBarAnimated:x,extraContent:c,prevIcon:B,nextIcon:C,style:r,class:h});return l?l(b(b({},P),{DefaultTabBar:Z})):f(Z,P,null)}}),Ye=Xe,et=globalThis&&globalThis.__rest||function(a,e){var t={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(a);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(a,n[r])&&(t[n[r]]=a[n[r]]);return t},O=N({TabPane:ie,name:"ATabs",inheritAttrs:!1,props:{prefixCls:i.string,activeKey:i.oneOfType([i.string,i.number]),defaultActiveKey:i.oneOfType([i.string,i.number]),hideAdd:i.looseBool.def(!1),centered:i.looseBool.def(!1),tabBarStyle:i.object,tabBarExtraContent:i.any,destroyInactiveTabPane:i.looseBool.def(!1),type:i.oneOf(E("line","card","editable-card")),tabPosition:i.oneOf(["top","right","bottom","left"]).def("top"),size:i.oneOf(["default","small","large"]),animated:$e(i.oneOfType([i.looseBool,i.object])),tabBarGutter:i.number,renderTabBar:i.func,onChange:{type:Function},onTabClick:i.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:Q("configProvider",Se)}},methods:{removeTab:function(e,t){t.stopPropagation(),J(e)&&this.$emit("edit",e,"remove")},handleChange:function(e){this.$emit("update:activeKey",e),this.$emit("change",e)},createNewTab:function(e){this.$emit("edit",e,"add")}},render:function(){var e,t=this,n,r=_e(this),s=r.prefixCls,o=r.size,l=r.type,c=l===void 0?"line":l,d=r.tabPosition,p=r.animated,g=p===void 0?!0:p,u=r.hideAdd,m=r.renderTabBar,x=this.$attrs,y=x.class,B=et(x,["class"]),C=this.configProvider.getPrefixCls,h=C("tabs",s),P=ke(W(this)),T=w(this,"tabBarExtraContent"),$=Y(g)==="object"?g.tabPane:g;c!=="line"&&($="animated"in r?$:!1);var L=(e={},v(e,y,y),v(e,"".concat(h,"-vertical"),d==="left"||d==="right"),v(e,"".concat(h,"-").concat(o),!!o),v(e,"".concat(h,"-card"),c.indexOf("card")>=0),v(e,"".concat(h,"-").concat(c),!0),v(e,"".concat(h,"-no-animation"),!$),e),S=[];c==="editable-card"&&(S=[],P.forEach(function(k,de){var ve=X(k),K=ve.closable;K=typeof K=="undefined"?!0:K;var ue=K?f(Re,{class:"".concat(h,"-close-x"),onClick:function(pe){return t.removeTab(k.key,pe)}},null):null;S.push(R(k,{tab:f("div",{class:K?void 0:"".concat(h,"-tab-unclosable")},[w(k,"tab"),ue]),key:k.key||de}))}),u||(T=f("span",null,[f(Ee,{class:"".concat(h,"-new-tab"),onClick:this.createNewTab},null),T]))),T=T?f("div",{class:"".concat(h,"-extra-content")},[T]):null;var oe=m||this.$slots.renderTabBar,ce=b(b(b(b({},r),{prefixCls:h,tabBarExtraContent:T,renderTabBar:oe}),B),{children:P}),le=(n={},v(n,"".concat(h,"-").concat(d,"-content"),!0),v(n,"".concat(h,"-card-content"),c.indexOf("card")>=0),n),fe=b(b(b(b({},r),{prefixCls:h,tabBarPosition:d,renderTabBar:function(){return f(Ye,_({key:"tabBar"},ce),null)},renderTabContent:function(){return f(se,{class:le,animated:$,animatedWithMargin:!0},null)},children:S.length>0?S:P}),B),{onChange:this.handleChange,class:L});return f(Ue,fe,null)}});O.TabPane=b(b({},ie),{name:"ATabPane",__ANT_TAB_PANE:!0});O.TabContent=b(b({},se),{name:"ATabContent"});O.install=function(a){return a.component(O.name,O),a.component(O.TabPane.name,O.TabPane),a.component(O.TabContent.name,O.TabContent),a};export{O as T};
