import{b as z,c as h,j as ae,r as R,T as F,X as ne,_ as i,k as d,Q as D,S as Q,a5 as re,a7 as J,a9 as u,dl as le,R as V,a8 as M,G as g,cm as oe,a6 as ue,ee as se,C as ce,V as ie,cn as ve,w as fe,v as de}from"./index.f5037e0e.js";function q(r){var e=r.prefixCls,l=r.value,t=r.current,a=r.offset,C=a===void 0?0:a,n;return C&&(n={position:"absolute",top:"".concat(C,"00%"),left:0}),d("p",{style:n,class:D("".concat(e,"-only-unit"),{current:t})},[l])}function me(r,e,l){for(var t=r,a=0;(t+10)%10!==e;)t+=l,a+=l;return a}var be=z({name:"SingleNumber",props:{prefixCls:String,value:String,count:Number},setup:function(e){var l=h(function(){return Number(e.value)}),t=h(function(){return Math.abs(e.count)}),a=ae({prevValue:l.value,prevCount:t.value}),C=function(){a.prevValue=l.value,a.prevCount=t.value},n=R();return F(l,function(){clearTimeout(n.value),n.value=setTimeout(function(){C()},1e3)},{flush:"post"}),ne(function(){clearTimeout(n.value)}),function(){var m,s={},c=l.value;if(a.prevValue===c||Number.isNaN(c)||Number.isNaN(a.prevValue))m=[q(i(i({},e),{current:!0}))],s={transition:"none"};else{m=[];for(var f=c+10,v=[],b=c;b<=f;b+=1)v.push(b);var N=v.findIndex(function(y){return y%10===a.prevValue});m=v.map(function(y,x){var _=y%10;return q(i(i({},e),{value:_,offset:x-N,current:x===N}))});var p=a.prevCount<t.value?1:-1;s={transform:"translateY(".concat(-me(a.prevValue,c,p),"00%)")}}return d("span",{class:"".concat(e.prefixCls,"-only"),style:s,onTransitionend:function(){return C()}},[m])}}}),ye=globalThis&&globalThis.__rest||function(r,e){var l={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(l[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(l[t[a]]=r[t[a]]);return l},ge={prefixCls:u.string,count:u.any,component:u.string,title:u.oneOfType([u.number,u.string,null]),show:Boolean},Ce=z({name:"ScrollNumber",inheritAttrs:!1,props:ge,setup:function(e,l){var t=l.attrs,a=l.slots,C=Q("scroll-number",e),n=C.prefixCls;return function(){var m,s=i(i({},e),t);s.prefixCls;var c=s.count,f=s.title;s.show;var v=s.component,b=v===void 0?"sup":v,N=s.class,p=s.style,y=ye(s,["prefixCls","count","title","show","component","class","style"]),x=i(i({},y),{style:p,"data-show":e.show,class:D(n.value,N),title:f}),_=c;if(c&&Number(c)%1===0){var A=String(c).split("");_=A.map(function(o,j){return d(be,{prefixCls:n.value,count:Number(c),value:o,key:A.length-j},null)})}p&&p.borderColor&&(x.style=i(i({},p),{boxShadow:"0 0 0 1px ".concat(p.borderColor," inset")}));var T=re((m=a.default)===null||m===void 0?void 0:m.call(a));return T&&T.length?J(T,{class:D("".concat(n.value,"-custom-component"))},!1):d(b,x,{default:function(){return[_]}})}}});function I(r){return le.indexOf(r)!==-1}var xe=globalThis&&globalThis.__rest||function(r,e){var l={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(l[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(l[t[a]]=r[t[a]]);return l},he={prefix:u.string,color:{type:String},text:u.any,placement:u.oneOf(M("start","end")).def("end")},pe=z({name:"ABadgeRibbon",inheritAttrs:!1,props:he,slots:["text"],setup:function(e,l){var t=l.attrs,a=l.slots,C=Q("ribbon",e),n=C.prefixCls,m=C.direction,s=h(function(){return I(e.color)}),c=h(function(){var f;return[n.value,"".concat(n.value,"-placement-").concat(e.placement),(f={},g(f,"".concat(n.value,"-rtl"),m.value==="rtl"),g(f,"".concat(n.value,"-color-").concat(e.color),s.value),f)]});return function(){var f,v,b=t.class,N=t.style,p=xe(t,["class","style"]),y={},x={};return e.color&&!s.value&&(y.background=e.color,x.color=e.color),d("div",V({class:"".concat(n.value,"-wrapper")},p),[(f=a.default)===null||f===void 0?void 0:f.call(a),d("div",{class:[c.value,b],style:i(i({},y),N)},[d("span",{class:"".concat(n.value,"-text")},[e.text||((v=a.text)===null||v===void 0?void 0:v.call(a))]),d("div",{class:"".concat(n.value,"-corner"),style:x},null)])])}}}),Ne={count:u.any,showZero:u.looseBool,overflowCount:u.number.def(99),dot:u.looseBool,prefixCls:u.string,scrollNumberPrefixCls:u.string,status:u.oneOf(M("success","processing","default","error","warning")),size:u.oneOf(M("default","small")).def("default"),color:u.string,text:u.VNodeChild,offset:u.arrayOf(u.oneOfType([String,Number])),numberStyle:u.style,title:u.string},Oe=z({name:"ABadge",Ribbon:pe,inheritAttrs:!1,props:Ne,slots:["text","count"],setup:function(e,l){var t=l.slots,a=l.attrs,C=Q("badge",e),n=C.prefixCls,m=C.direction,s=h(function(){return e.count>e.overflowCount?"".concat(e.overflowCount,"+"):e.count}),c=h(function(){return e.status!==null&&e.status!==void 0||e.color!==null&&e.color!==void 0}),f=h(function(){return s.value==="0"||s.value===0}),v=h(function(){return e.dot&&!f.value||c.value}),b=h(function(){return v.value?"":s.value}),N=h(function(){var o=b.value===null||b.value===void 0||b.value==="";return(o||f.value&&!e.showZero)&&!v.value}),p=R(e.count),y=R(b.value),x=R(v.value);F([function(){return e.count},b,v],function(){N.value||(p.value=e.count,y.value=b.value,x.value=v.value)},{immediate:!0});var _=h(function(){var o;return o={},g(o,"".concat(n.value,"-status-dot"),c.value),g(o,"".concat(n.value,"-status-").concat(e.status),!!e.status),g(o,"".concat(n.value,"-status-").concat(e.color),I(e.color)),o}),A=h(function(){return e.color&&!I(e.color)?{background:e.color}:{}}),T=h(function(){var o;return o={},g(o,"".concat(n.value,"-dot"),x.value),g(o,"".concat(n.value,"-count"),!x.value),g(o,"".concat(n.value,"-count-sm"),e.size==="small"),g(o,"".concat(n.value,"-multiple-words"),!x.value&&y.value&&y.value.toString().length>1),g(o,"".concat(n.value,"-status-").concat(e.status),!!e.status),g(o,"".concat(n.value,"-status-").concat(e.color),I(e.color)),o});return function(){var o,j,U,P=e.offset,Z=e.title,$=e.color,X=a.style,G=oe(t,e,"text"),S=n.value,w=p.value,O=ue((j=t.default)===null||j===void 0?void 0:j.call(t));O=O.length?O:null;var H=!!(!N.value||t.count),B=function(){if(!P)return i({},X);var k={marginTop:se(P[1])?"".concat(P[1],"px"):P[1]};return m.value==="rtl"?k.left="".concat(parseInt(P[0],10),"px"):k.right="".concat(-parseInt(P[0],10),"px"),i(i({},k),X)}(),K=Z!=null?Z:typeof w=="string"||typeof w=="number"?w:void 0,W=H||!G?null:d("span",{class:"".concat(S,"-status-text")},[G]),L=ce(w)==="object"||w===void 0&&t.count?J(w!=null?w:(U=t.count)===null||U===void 0?void 0:U.call(t),{style:B},!1):null,Y=D(S,(o={},g(o,"".concat(S,"-status"),c.value),g(o,"".concat(S,"-not-a-wrapper"),!O),g(o,"".concat(S,"-rtl"),m.value==="rtl"),o),a.class);if(!O&&c.value){var ee=B.color;return d("span",V(V({},a),{},{class:Y,style:B}),[d("span",{class:_.value,style:A.value},null),d("span",{style:{color:ee},class:"".concat(S,"-status-text")},[G])])}var te=ie(O?"".concat(S,"-zoom"):"",{appear:!1}),E=i(i({},B),e.numberStyle);return $&&!I($)&&(E=E||{},E.background=$),d("span",V(V({},a),{},{class:Y}),[O,d(ve,te,{default:function(){return[fe(d(Ce,{prefixCls:e.scrollNumberPrefixCls,show:H,class:T.value,count:y.value,title:K,style:E,key:"scrollNumber"},{default:function(){return[L]}}),[[de,H]])]}}),W])}}});export{Oe as B,pe as R};