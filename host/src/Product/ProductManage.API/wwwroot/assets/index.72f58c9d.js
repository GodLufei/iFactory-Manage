import{aN as M,a8 as O,a9 as a,b as I,br as K,af as m,r as y,c as w,T as P,S as j,ah as p,aa as z,k as r,R as k,aR as A,a0 as R,cm as g,dn as U,aJ as S,G as i}from"./index.23965316.js";var D=O("small","default"),E={prefixCls:a.string,size:a.oneOf(D),disabled:a.looseBool,checkedChildren:a.VNodeChild,unCheckedChildren:a.VNodeChild,tabindex:a.oneOfType([a.string,a.number]),autofocus:a.looseBool,loading:a.looseBool,checked:a.oneOfType([a.string,a.number,a.looseBool]),checkedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!0),unCheckedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function}},G=I({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:E,slots:["checkedChildren","unCheckedChildren"],emits:["update:checked","mouseup","change","click","keydown"],setup:function(e,s){var d=s.attrs,C=s.slots,V=s.expose,o=s.emit;K(function(){m(!("defaultChecked"in d),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),m(!("value"in d),"Switch","`value` is not validate prop, do you mean `checked`?")});var h=y(e.checked!==void 0?e.checked:d.defaultChecked),f=w(function(){return h.value===e.checkedValue});P(function(){return e.checked},function(){h.value=e.checked});var x=j("switch",e),u=x.prefixCls,t=y(),b=function(){var n;(n=t.value)===null||n===void 0||n.focus()},T=function(){var n;(n=t.value)===null||n===void 0||n.blur()};V({focus:b,blur:T}),p(function(){z(function(){e.autofocus&&!e.disabled&&t.value.focus()})});var v=function(n,l){e.disabled||(o("update:checked",n),o("change",n,l))},N=function(n){b();var l=f.value?e.unCheckedValue:e.checkedValue;v(l,n),o("click",l,n)},_=function(n){n.keyCode===S.LEFT?v(e.unCheckedValue,n):n.keyCode===S.RIGHT&&v(e.checkedValue,n),o("keydown",n)},B=function(n){var l;(l=t.value)===null||l===void 0||l.blur(),o("mouseup",n)},F=w(function(){var c;return c={},i(c,"".concat(u.value,"-small"),e.size==="small"),i(c,"".concat(u.value,"-loading"),e.loading),i(c,"".concat(u.value,"-checked"),f.value),i(c,"".concat(u.value,"-disabled"),e.disabled),i(c,u.value,!0),c});return function(){return r(U,{insertExtraNode:!0},{default:function(){return[r("button",k(k(k({},A(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","defaultChecked","checkedValue","unCheckedValue"])),d),{},{onKeydown:_,onClick:N,onMouseup:B,type:"button",role:"switch","aria-checked":h.value,disabled:e.disabled||e.loading,class:[d.class,F.value],ref:t}),[e.loading?r(R,{class:"".concat(u.value,"-loading-icon")},null):null,r("span",{class:"".concat(u.value,"-inner")},[f.value?g(C,e,"checkedChildren"):g(C,e,"unCheckedChildren")])])]}})}}}),W=M(G);export{W as S};
