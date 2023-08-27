import{z as q,k as f,aB as G,aN as W,a9 as S,b as w,M as X,ag as J,r as F,j as K,T as Q,aa as A,ah as U,ec as Y,ep as Z,U as M,c as C,_ as E,G as k,R as I,V as ee,cn as te,cN as ne,f as j,i as oe,bA as re,bK as ae,o as m,b0 as h,l as ie,s as se,x as R,a as _,bR as ce,a_ as H,eq as le,bv as L,bG as ue,e6 as ve,bO as D,a$ as b,e as fe,b1 as O,F as ge}from"./index.f5037e0e.js";import{c as V,a as de}from"./index.028a86b0.js";import pe from"./Login.53f8a669.js";import{s as me,g as _e}from"./scrollTo.779d4262.js";import"./useContentViewHeight.bf04c9e4.js";import"./_baseIteratee.95b83d5c.js";import"./index.e7ac3e98.js";import"./useSortable.bb4baa66.js";import"./index.be215484.js";import"./index.8089f2c1.js";import"./isEqual.6f9a623a.js";function Te(t){var e,n=function(i){return function(){e=null,t.apply(void 0,q(i))}},r=function(){if(e==null){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];e=requestAnimationFrame(n(s))}};return r.cancel=function(){return cancelAnimationFrame(e)},r}var Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},be=Se;function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){he(t,a,n[a])})}return t}function he(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=function(e,n){var r=$({},e,n.attrs);return f(G,$({},r,{icon:be}),null)};x.displayName="VerticalAlignTopOutlined";x.inheritAttrs=!1;var Pe=x,ye={visibilityHeight:S.number.def(400),duration:S.number.def(450),target:Function,prefixCls:S.string,onClick:S.func},Be=w({name:"ABackTop",inheritAttrs:!1,props:ye,emits:["click"],setup:function(e,n){var r=n.slots,a=n.attrs,i=n.emit,s=X("configProvider",J),o=F(),l=K({visible:!1,scrollEvent:null}),g=function(){return o.value&&o.value.ownerDocument?o.value.ownerDocument:window},N=function(u){var v=e.target,d=v===void 0?g:v,p=e.duration;me(0,{getContainer:d,duration:p}),i("click",u)},P=Te(function(c){var u=e.visibilityHeight,v=_e(c.target,!0);l.visible=v>u}),y=function(){var u=e.target,v=u||g,d=v();l.scrollEvent=ne(d,"scroll",function(p){P(p)}),P({target:d})},B=function(){l.scrollEvent&&l.scrollEvent.remove(),P.cancel()};Q(function(){return e.target},function(){B(),A(function(){y()})}),U(function(){A(function(){y()})}),Y(function(){A(function(){y()})}),Z(function(){B()}),M(function(){B()});var T=C(function(){return s.getPrefixCls("back-top",e.prefixCls)});return function(){var c,u,v=f("div",{class:"".concat(T.value,"-content")},[f("div",{class:"".concat(T.value,"-icon")},[f(Pe,null,null)])]),d=E(E({},a),{onClick:N,class:(c={},k(c,"".concat(T.value),!0),k(c,"".concat(a.class),a.class),k(c,"".concat(T.value,"-rtl"),s.direction==="rtl"),c)}),p=l.visible?f("div",I(I({},d),{},{ref:o}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||v]):null,z=ee("fade");return f(te,z,{default:function(){return[p]}})}}}),Ae=W(Be);const ke=w({__name:"SessionTimeoutLogin",setup(t){const{prefixCls:e}=j("st-login"),n=oe(),r=re(),a=ae(),i=F(0),s=()=>a.getProjectConfig.permissionMode===le.BACK;return U(()=>{var o;i.value=(o=n.getUserInfo)==null?void 0:o.userId,console.log("Mounted",n.getUserInfo)}),M(()=>{(i.value&&i.value!==n.getUserInfo.userId||s()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(o,l)=>(m(),h(ce,null,{default:ie(()=>[se("div",{class:R(_(e))},[f(pe,{sessionTimeout:""})],2)]),_:1}))}});var Oe=H(ke,[["__scopeId","data-v-6fac6116"]]);const Ce=w({name:"LayoutFeatures",components:{BackTop:Ae,LayoutLockPage:V(()=>L(()=>import("./index.3f54c8f4.js"),["assets/index.3f54c8f4.js","assets/index.a27c5cec.css","assets/index.f5037e0e.js","assets/index.fdb36ded.css","assets/index.028a86b0.js","assets/index.75b1ec6d.css","assets/useContentViewHeight.bf04c9e4.js","assets/_baseIteratee.95b83d5c.js","assets/index.e7ac3e98.js","assets/index.d1fb21df.css","assets/useSortable.bb4baa66.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>L(()=>import("./index.df1d0163.js").then(function(t){return t.i}),["assets/index.df1d0163.js","assets/index.5c7227e9.css","assets/index.f5037e0e.js","assets/index.fdb36ded.css","assets/index.028a86b0.js","assets/index.75b1ec6d.css","assets/useContentViewHeight.bf04c9e4.js","assets/_baseIteratee.95b83d5c.js","assets/index.e7ac3e98.js","assets/index.d1fb21df.css","assets/useSortable.bb4baa66.js","assets/ArrowLeftOutlined.c09ac8d8.js","assets/isEqual.6f9a623a.js","assets/index.75b6fcd6.js","assets/index.17eb4c41.css"])),SessionTimeoutLogin:Oe},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:n,getFullContent:r}=ue(),a=ve(),{prefixCls:i}=j("setting-drawer-fearure"),{getShowHeader:s}=de(),o=C(()=>a.getSessionTimeout),l=C(()=>{if(!_(e))return!1;const g=_(n);return g===D.AUTO?!_(s)||_(r):g===D.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:l,prefixCls:i,getIsSessionTimeout:o}}});function we(t,e,n,r,a,i){const s=b("LayoutLockPage"),o=b("BackTop"),l=b("SettingDrawer"),g=b("SessionTimeoutLogin");return m(),fe(ge,null,[f(s),t.getUseOpenBackTop?(m(),h(o,{key:0,target:t.getTarget},null,8,["target"])):O("",!0),t.getIsFixedSettingDrawer?(m(),h(l,{key:1,class:R(t.prefixCls)},null,8,["class"])):O("",!0),t.getIsSessionTimeout?(m(),h(g,{key:2})):O("",!0)],64)}var He=H(Ce,[["render",we]]);export{He as default};