var f=(e,m,s)=>new Promise((p,r)=>{var d=o=>{try{a(s.next(o))}catch(n){r(n)}},t=o=>{try{a(s.throw(o))}catch(n){r(n)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(d,t);a((s=s.apply(e,m)).next())});import{a_ as $,b as w,u as y,f as F,i as L,c as _,a$ as u,o as M,b0 as S,l as g,s as i,x as c,t as k,k as h,m as b,b3 as I}from"./index.23965316.js";import{B as N,a as R}from"./index.48aaa24a.js";import{B as P,l as U}from"./useForm.37d1448d.js";import{u as V}from"./index.7168593c.js";import{h as D}from"./header.d801b988.js";import"./useContentViewHeight.553e56bf.js";import"./_baseIteratee.b86b01a2.js";import"./isEqual.d65954b3.js";import"./index.a8ee9265.js";import"./index.c8ee7c1a.js";import"./index.e35512a5.js";import"./index.08362023.js";import"./index.9863576d.js";import"./index.72f58c9d.js";import"./RedoOutlined.1e197eb0.js";import"./index.b163296c.js";import"./useSortable.edefc71c.js";const q=w({name:"LockModal",components:{BasicModal:N,BasicForm:P},setup(){const{t:e}=y(),{prefixCls:m}=F("header-lock-modal"),s=L(),p=V(),r=_(()=>{var l;return(l=s.getUserInfo)==null?void 0:l.realName}),[d,{closeModal:t}]=R(),[a,{validateFields:o,resetFields:n}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),p.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:l}=s.getUserInfo;return l||D});return{t:e,prefixCls:m,getRealName:r,register:d,registerForm:a,handleLock:v,avatar:B}}}),z=["src"];function A(e,m,s,p,r,d){const t=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return M(),S(o,I({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[i("div",{class:c(`${e.prefixCls}__entry`)},[i("div",{class:c(`${e.prefixCls}__header`)},[i("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,z),i("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),i("div",{class:c(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[b(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var re=$(q,[["render",A]]);export{re as default};
