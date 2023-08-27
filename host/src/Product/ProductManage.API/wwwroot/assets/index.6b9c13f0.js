var E=(e,u,n)=>new Promise((p,d)=>{var I=l=>{try{a(n.next(l))}catch(r){d(r)}},o=l=>{try{a(n.throw(l))}catch(r){d(r)}},a=l=>l.done?p(l.value):Promise.resolve(l.value).then(I,o);a((n=n.apply(e,u)).next())});import{B as D,l as R,T as N}from"./useForm.ede354a2.js";import{B as S,u as V}from"./useTable.ceee4688.js";import{a as $}from"./index.088c10bd.js";import{ci as c,ei as s,b as T,a_ as q,a$ as f,o as k,b0 as y,l as b,k as m,b3 as O,b8 as _,d2 as G,aD as z,aE as W,aG as j,j as x,ch as H,m as K,p as U}from"./index.f5037e0e.js";import{C as B,S as v}from"./index.0c746c63.js";import"./index.e7ac3e98.js";import"./index.8089f2c1.js";import{p as w}from"./pc.9bd1b3cb.js";import{B as J,a as L,b as Q}from"./index.20502e53.js";import{f as X,h as Y,i as Z,j as ee}from"./productApi.1f1fcae7.js";import"./index.be215484.js";import"./_baseIteratee.95b83d5c.js";import"./isEqual.6f9a623a.js";import"./index.75b6fcd6.js";import"./index.a3b14931.js";import"./index.7bad8a45.js";import"./useContentViewHeight.bf04c9e4.js";import"./index.f2477e00.js";import"./RedoOutlined.16dcdfe4.js";import"./useSortable.bb4baa66.js";import"./index.6e45ebf0.js";import"./scrollTo.779d4262.js";import"./index.dcc1b961.js";import"./index.bb86497d.js";import"./ArrowLeftOutlined.c09ac8d8.js";const te=w.map(e=>({id:e.code,label:e.name,value:e.name,key:e.code})),oe=[{label:c.ShaftingSystem.name,value:c.ShaftingSystem.id},{label:c.RudderSystem.name,value:c.RudderSystem.id},{label:c.NonStandardPart.name,value:c.NonStandardPart.id},{label:c.StandardPart.name,value:c.StandardPart.id},{label:c.Other.name,value:c.Other.id}];s.Blanking.name,s.Blanking.id,s.RoughTurning.name,s.RoughTurning.id,s.FineTurning.name,s.FineTurning.id,s.Perforate.name,s.Perforate.id,s.FineMilling.name,s.FineMilling.id,s.Compounding.name,s.Compounding.id;const ae=[{title:"\u540D\u79F0",dataIndex:"productItemName",width:100},{title:"\u4EA7\u54C1\u7C7B\u578B",dataIndex:"productTypeId",width:100,customRender:({text:e})=>{const u=c.from(e);return u==null?void 0:u.name}},{title:"\u6280\u672F\u8981\u6C42",dataIndex:"technicalRequirements",width:100},{title:"\u6750\u6599",dataIndex:"material",width:100},{title:"\u89C4\u683C",dataIndex:"diameter",width:100},{title:"\u957F\u5EA6",dataIndex:"length",width:100},{title:"\u56FE\u53F7",dataIndex:"figureNo",width:100},{title:"\u603B\u8BA1",dataIndex:"amount",width:100},{title:"\u5355\u4F4D",dataIndex:"unit",width:100}],A=[{field:"productItemName",component:"Input",label:"\u540D\u5B57",required:!0},{field:"productTypeId",component:"Select",label:"\u4EA7\u54C1\u7C7B\u578B",required:!0,componentProps:{options:oe}},{field:"technicalRequirements",component:"Input",label:"\u6280\u672F\u8981\u6C42",required:!0},{field:"material",component:"Input",label:"\u6750\u6599",required:!0},{field:"diameter",component:"Input",label:"\u89C4\u683C",required:!0},{field:"length",component:"Input",label:"\u957F\u5EA6",required:!0},{field:"figureNo",component:"Input",label:"\u56FE\u53F7",required:!0},{field:"amount",component:"Input",label:"\u603B\u8BA1",required:!0},{field:"unit",component:"Input",label:"\u5355\u4F4D",required:!0},{field:"id",component:"Input",label:"id",required:!0,show:!1}],ue=e=>(console.log(e),[{field:"id",component:"Input",label:"id",required:!0,defaultValue:e.id,show:!1,colProps:{span:4}},{field:"description",component:"Input",label:"\u63CF\u8FF0",defaultValue:e.description,required:!0,colProps:{span:4}},{field:"divider-info-linked",component:"Divider",label:"\u7532\u65B9\u4FE1\u606F",colProps:{span:24}},{field:"title",component:"Input",label:"\u516C\u53F8\u540D\u79F0",defaultValue:e.title,required:!0,colProps:{span:4}},{field:"tax",component:"Input",label:"\u7A0E\u53F7",defaultValue:e.tax,required:!0,colProps:{span:4,offset:2}},{field:"bankInfo",component:"Input",label:"\u5F00\u6237\u94F6\u884C",required:!0,defaultValue:e.bankInfo,colProps:{span:4,offset:2}},{field:"bankAccount",component:"Input",label:"\u94F6\u884C\u8D26\u53F7",defaultValue:e.bankAccount,required:!0,colProps:{span:4,offset:2}},{field:"phoneNumber",component:"Input",label:"\u8054\u7CFB\u7535\u8BDD",defaultValue:e.phoneNumber,required:!0,colProps:{span:4}},{field:"divider-address-linked",component:"Divider",label:"\u7532\u65B9\u5730\u5740",colProps:{span:24}},{field:"province",component:"Select",label:"\u7701\u4EFD",defaultValue:e.province,required:!0,colProps:{span:4},componentProps:({formModel:u,formActionType:n})=>({options:te,placeholder:"\u8BF7\u9009\u62E9\u7701\u4EFD",onChange:p=>{var o;console.log(p);const d=(o=w.find(a=>a.name==p))==null?void 0:o.children.map(a=>({id:a.code,label:a.name,value:a.name,key:a.code}));u.city=void 0;const{updateSchema:I}=n;I({field:"city",componentProps:{options:d}})}})},{field:"city",component:"Select",label:"\u57CE\u5E02",defaultValue:e.city,required:!0,colProps:{span:4,offset:2},componentProps:{options:[],placeholder:"\u8BF7\u9009\u62E9\u57CE\u5E02"}},{field:"street",component:"Input",label:"\u8857\u9053",defaultValue:e.street,required:!0,colProps:{span:4,offset:2}},{field:"zipCode",component:"Input",defaultValue:e.zipCode,label:"\u90AE\u653F\u7F16\u7801",required:!0,colProps:{span:4,offset:2}}]),ne=T({components:{BasicModal:J,BasicForm:D},emits:["ok"],setup(e,{emit:u}){const[n,{validate:p,resetFields:d,setFieldsValue:I}]=R({labelWidth:120,schemas:A,showActionButtonGroup:!1,actionColOptions:{span:24}}),[o,{closeModal:a}]=L(r=>{console.log(_(r)),I(_(r).productItem)});return{register:o,productItemFormSchemas:A,registerForm:n,editProductItem:()=>E(this,null,function*(){const r=yield p();yield X(r),u("ok",r),a(),d()}),closeModal:a}}});function re(e,u,n,p,d,I){const o=f("BasicForm"),a=f("BasicModal");return k(),y(a,O(e.$attrs,{onRegister:e.register,title:"\u521B\u5EFA\u4EA7\u54C1\u660E\u7EC6\u9879",onOk:e.editProductItem,onCancel:e.closeModal}),{default:b(()=>[m(o,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","onOk","onCancel"])}var le=q(ne,[["render",re]]);const ie=T({name:"EditProductPage",components:{BasicForm:D,PageWrapper:$,BasicTable:S,TableAction:N,EditProductItemModal:le,PopConfirmButton:G,[B.name]:B,[v.name]:v},setup(){const e=z(),u=W(),{createMessage:n}=U(),[p,{openModal:d}]=Q();isNaN(parseInt(e.params.id))&&u(`${j.PRODUCT_HOME}`);const I=parseInt(e.params.id),o=x({product:{}}),[a,{resetFields:l,validate:r,setFieldsValue:g}]=R({layout:"vertical",baseColProps:{span:6},schemas:ue(o.product),showActionButtonGroup:!1}),[h,{reload:F,setTableData:C}]=V({columns:ae,dataSource:o.product.productItemDetailDtos,showIndexColumn:!1,canResize:!0,rowKey:"name",scroll:{y:200},pagination:!1,actionColumn:{dataIndex:"action",title:"\u64CD\u4F5C",width:150,slots:{customRender:"action"}}});return Y(I).then(t=>{o.product=t.data,g(o.product),C(o.product.productItemDetailDtos)}),{register:a,registerTable:h,registerModal:p,editProductItem:()=>{d(!0)},updateProduct:()=>E(this,null,function*(){const t=yield r();console.log(t),yield Z({city:t.city,street:t.street,province:t.province,zipCode:t.zipCode,description:t.description,title:t.title,tax:t.tax,bankInfo:t.bankInfo,bankAccount:t.bankAccount,phoneNumber:t.phoneNumber,productItems:[],id:parseInt(t.id)}),n.success("\u66F4\u65B0\u6210\u529F")}),resetInput:()=>{l(),o.product.productItemDetailDtos.length=0,F()},editItem:t=>{d(!0,{productItem:t})},deleteItem:t=>{ee(t.id).then(()=>{n.success("\u5220\u9664\u6210\u529F");debugger;const i=_(o.product.productItemDetailDtos);o.product.productItemDetailDtos.length=0,i.forEach(M=>{M.id!=t.id&&o.product.productItemDetailDtos.push(t)}),F()})},submitItem:t=>{o.product.productItemDetailDtos.forEach(i=>{i.id==t.id&&(i.productTypeId=t.productTypeId,i.amount=t.amount,i.productItemName=t.productItemName,i.technicalRequirements=t.technicalRequirements,i.material=t.material,i.diameter=t.diameter,i.length=t.length,i.figureNo=t.figureNo,i.unit=t.unit)})},RoleEnum:H}}});function se(e,u,n,p,d,I){const o=f("BasicForm"),a=f("a-card"),l=f("PopConfirmButton"),r=f("a-space"),g=f("TableAction"),h=f("BasicTable"),F=f("EditProductItemModal"),C=f("PageWrapper");return k(),y(C,{class:"high-form",title:"\u4EA7\u54C1\u7F16\u8F91",content:"\u72EC\u7ACB\u63D0\u4EA4\u4EA7\u54C1\u4FE1\u606F\u548C\u4EA7\u54C1\u9879"},{default:b(()=>[m(a,{title:"\u4EA7\u54C1\u4FE1\u606F",bordered:!1},{default:b(()=>[m(o,{onRegister:e.register},null,8,["onRegister"])]),_:1}),m(a,{bordered:!1,align:"center",class:"!mt-5"},{default:b(()=>[m(r,null,{default:b(()=>[m(l,{type:"primary",class:"!ml-5",title:"\u786E\u8BA4\u63D0\u4EA4\uFF1F",onConfirm:e.updateProduct},{default:b(()=>[K("\u63D0\u4EA4")]),_:1},8,["onConfirm"])]),_:1})]),_:1}),m(a,{title:"\u4EA7\u54C1\u9879",bordered:!1,class:"!mt-5"},{default:b(()=>[m(h,{onRegister:e.registerTable},{action:b(({record:P})=>[m(g,{actions:[{label:"\u7F16\u8F91",color:"success",auth:[e.RoleEnum.MANAGER],onClick:e.editItem.bind(null,P)},{label:"\u5220\u9664",color:"error",auth:[e.RoleEnum.MANAGER],popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",confirm:e.deleteItem.bind(null,P)}}]},null,8,["actions"])]),_:1},8,["onRegister"])]),_:1}),m(F,{onRegister:e.registerModal,onOk:e.submitItem},null,8,["onRegister","onOk"])]),_:1})}var ze=q(ie,[["render",se],["__scopeId","data-v-78a25cea"]]);export{ze as default};
