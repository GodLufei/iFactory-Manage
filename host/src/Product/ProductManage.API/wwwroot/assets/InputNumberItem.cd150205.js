import{a_ as a,b as o,f as p,a$ as m,o as i,e as u,s as l,t as c,k as d,b3 as _,x as f}from"./index.23965316.js";import{I as b}from"./index.9863576d.js";import{b as I}from"./index.554b3666.js";import"./useContentViewHeight.553e56bf.js";import"./_baseIteratee.b86b01a2.js";import"./index.7168593c.js";import"./index.b163296c.js";import"./useSortable.edefc71c.js";import"./ArrowLeftOutlined.686d2e0c.js";import"./isEqual.d65954b3.js";import"./index.e35512a5.js";const g=o({name:"InputNumberItem",components:{InputNumber:b},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=p("setting-input-number-item");function n(s){e.event&&I(e.event,s)}return{prefixCls:t,handleChange:n}}});function v(e,t,n,s,C,N){const r=m("InputNumber");return i(),u("div",{class:f(e.prefixCls)},[l("span",null,c(e.title),1),d(r,_(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}var H=a(g,[["render",v],["__scopeId","data-v-19883dde"]]);export{H as default};