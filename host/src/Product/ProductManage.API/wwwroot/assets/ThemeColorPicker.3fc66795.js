import{a_ as p,b as m,cQ as c,f as d,a$ as u,o as r,e as n,F as _,b5 as f,x as a,bo as C,k}from"./index.23965316.js";import{b as h}from"./index.554b3666.js";import"./index.7168593c.js";import"./useContentViewHeight.553e56bf.js";import"./_baseIteratee.b86b01a2.js";import"./index.b163296c.js";import"./useSortable.edefc71c.js";import"./ArrowLeftOutlined.686d2e0c.js";import"./isEqual.d65954b3.js";import"./index.e35512a5.js";const v=m({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=d("setting-theme-picker");function s(i){e.event&&h(e.event,i)}return{prefixCls:o,handleClick:s}}}),y=["onClick"];function $(e,o,s,i,b,g){const l=u("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(_,null,f(e.colorList||[],t=>(r(),n("span",{key:t,onClick:x=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:C({background:t})},[k(l)],14,y))),128))],2)}var D=p(v,[["render",$]]);export{D as default};
