import{a_ as r,b as d,f as l,u as c,c as p,a$ as m,o as u,e as h,s as f,t as C,k as _,b3 as g,x as v}from"./index.f5037e0e.js";import{S as b}from"./index.f2477e00.js";import{b as y}from"./index.df1d0163.js";import"./index.028a86b0.js";import"./useContentViewHeight.bf04c9e4.js";import"./_baseIteratee.95b83d5c.js";import"./index.e7ac3e98.js";import"./useSortable.bb4baa66.js";import"./ArrowLeftOutlined.c09ac8d8.js";import"./isEqual.6f9a623a.js";import"./index.75b6fcd6.js";const S=d({name:"SwitchItem",components:{Switch:b},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=l("setting-switch-item"),{t:n}=c(),a=p(()=>e.def?{checked:e.def}:{});function o(s){e.event&&y(e.event,s)}return{prefixCls:t,t:n,handleChange:o,getBindValue:a}}});function k(e,t,n,a,o,s){const i=m("Switch");return u(),h("div",{class:v(e.prefixCls)},[f("span",null,C(e.title),1),_(i,g(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var j=r(S,[["render",k],["__scopeId","data-v-fd7354e2"]]);export{j as default};
