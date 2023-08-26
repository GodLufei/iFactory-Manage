import{a_ as w,b as I,dA as L,b2 as g,bv as k,aV as M,f as $,u as b,i as U,c as A,a$ as o,o as O,e as x,k as n,l as d,s,x as t,t as N,F as E,by as R}from"./index.23965316.js";import{D as S}from"./siteSetting.c485f07c.js";import{c as C,a as V}from"./index.7168593c.js";import{b as P}from"./index.48aaa24a.js";import{h as B}from"./header.d801b988.js";import"./useContentViewHeight.553e56bf.js";import"./_baseIteratee.b86b01a2.js";import"./index.b163296c.js";import"./useSortable.edefc71c.js";import"./isEqual.d65954b3.js";const T=I({name:"UserDropdown",components:{Dropdown:L,Menu:g,MenuItem:C(()=>k(()=>import("./DropMenuItem.19151a50.js"),["assets/DropMenuItem.19151a50.js","assets/index.23965316.js","assets/index.fdb36ded.css"])),MenuDivider:g.Divider,LockAction:C(()=>k(()=>import("./LockModal.c056d8e7.js"),["assets/LockModal.c056d8e7.js","assets/LockModal.0068f88c.css","assets/index.23965316.js","assets/index.fdb36ded.css","assets/index.48aaa24a.js","assets/index.f6def211.css","assets/useContentViewHeight.553e56bf.js","assets/_baseIteratee.b86b01a2.js","assets/isEqual.d65954b3.js","assets/useForm.37d1448d.js","assets/useForm.e67c24b5.css","assets/index.a8ee9265.js","assets/index.0c17a9f4.css","assets/index.c8ee7c1a.js","assets/index.ccc15a38.css","assets/index.e35512a5.js","assets/index.17eb4c41.css","assets/index.08362023.js","assets/index.c4896195.css","assets/index.9863576d.js","assets/index.e0a015a1.css","assets/index.72f58c9d.js","assets/index.9604f5a2.css","assets/RedoOutlined.1e197eb0.js","assets/index.7168593c.js","assets/index.75b1ec6d.css","assets/index.b163296c.js","assets/index.d1fb21df.css","assets/useSortable.edefc71c.js","assets/header.d801b988.js"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=$("header-user-dropdown"),{t:m}=b(),{getShowDoc:u,getUseLockPage:_}=V(),a=U(),f=A(()=>{const{realName:p="",avatar:D,desc:y}=a.getUserInfo||{};return{realName:p,avatar:D||B,desc:y}}),[r,{openModal:i}]=P();function l(){i(!0)}function c(){a.confirmLoginOut()}function h(){R(S)}function v(p){switch(p.key){case"logout":c();break;case"doc":h();break;case"lock":l();break}}return{prefixCls:e,t:m,getUserInfo:f,handleMenuClick:v,getShowDoc:u,register:r,getUseLockPage:_}}}),F=["src"];function z(e,m,u,_,a,f){const r=o("MenuItem"),i=o("Menu"),l=o("Dropdown"),c=o("LockAction");return O(),x(E,null,[n(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[n(i,{onClick:e.handleMenuClick},{default:d(()=>[n(r,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[s("span",{class:t([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:t(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,F),s("span",{class:t(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:t([`${e.prefixCls}__name  `,"truncate"])},N(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),n(c,{onRegister:e.register},null,8,["onRegister"])],64)}var Z=w(T,[["render",z]]);export{Z as default};
