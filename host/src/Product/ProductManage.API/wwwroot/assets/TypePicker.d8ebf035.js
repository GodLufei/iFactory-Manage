import{a_ as r,b as i,bm as l,f as c,a$ as d,o as s,e as a,F as _,b5 as u,b0 as f,l as m,s as n,x as o,ek as y,el as v}from"./index.23965316.js";const k=i({name:"MenuTypePicker",components:{Tooltip:l},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=c("setting-menu-type-picker");return{prefixCls:e}}}),C=e=>(y("data-v-7796e69a"),e=e(),v(),e),$=["onClick"],h=C(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[h];function b(e,g,x,B,I,S){const p=d("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(_,null,u(e.menuTypeList||[],t=>(s(),f(p,{key:t.title,title:t.title,placement:"bottom"},{default:m(()=>[n("div",{onClick:F=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,$)]),_:2},1032,["title"]))),128))],2)}var P=r(k,[["render",b],["__scopeId","data-v-7796e69a"]]);export{P as default};
