import{ai as Y,aj as Z,ak as I,al as W,am as G,an as m,ao as $,ap as M,aq as C,ar as x,as as y,at as z,au as B,av as c,J as h,aw as q,ax as H,ay as J,az as o,aA as V}from"./index.f5037e0e.js";function j(n,r){for(var e=-1,f=n==null?0:n.length;++e<f;)if(r(n[e],e,n))return!0;return!1}var k=1,nn=2;function b(n,r,e,f,a,i){var t=e&k,u=n.length,g=r.length;if(u!=g&&!(t&&g>u))return!1;var l=i.get(n),v=i.get(r);if(l&&v)return l==r&&v==n;var A=-1,s=!0,P=e&nn?new Y:void 0;for(i.set(n,r),i.set(r,n);++A<u;){var O=n[A],d=r[A];if(f)var p=t?f(d,O,A,r,n,i):f(O,d,A,n,r,i);if(p!==void 0){if(p)continue;s=!1;break}if(P){if(!j(r,function(T,_){if(!Z(P,_)&&(O===T||a(O,T,e,f,i)))return P.push(_)})){s=!1;break}}else if(!(O===d||a(O,d,e,f,i))){s=!1;break}}return i.delete(n),i.delete(r),s}function rn(n){var r=-1,e=Array(n.size);return n.forEach(function(f,a){e[++r]=[a,f]}),e}var en=1,fn=2,an="[object Boolean]",un="[object Date]",sn="[object Error]",tn="[object Map]",gn="[object Number]",ln="[object RegExp]",An="[object Set]",vn="[object String]",On="[object Symbol]",dn="[object ArrayBuffer]",Pn="[object DataView]",F=I?I.prototype:void 0,E=F?F.valueOf:void 0;function pn(n,r,e,f,a,i,t){switch(e){case Pn:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case dn:return!(n.byteLength!=r.byteLength||!i(new G(n),new G(r)));case an:case un:case gn:return W(+n,+r);case sn:return n.name==r.name&&n.message==r.message;case ln:case vn:return n==r+"";case tn:var u=rn;case An:var g=f&en;if(u||(u=m),n.size!=r.size&&!g)return!1;var l=t.get(n);if(l)return l==r;f|=fn,t.set(n,r);var v=b(u(n),u(r),f,a,i,t);return t.delete(n),v;case On:if(E)return E.call(n)==E.call(r)}return!1}var Tn=1,_n=Object.prototype,Ln=_n.hasOwnProperty;function Rn(n,r,e,f,a,i){var t=e&Tn,u=$(n),g=u.length,l=$(r),v=l.length;if(g!=v&&!t)return!1;for(var A=g;A--;){var s=u[A];if(!(t?s in r:Ln.call(r,s)))return!1}var P=i.get(n),O=i.get(r);if(P&&O)return P==r&&O==n;var d=!0;i.set(n,r),i.set(r,n);for(var p=t;++A<g;){s=u[A];var T=n[s],_=r[s];if(f)var D=t?f(_,T,s,r,n,i):f(T,_,s,n,r,i);if(!(D===void 0?T===_||a(T,_,e,f,i):D)){d=!1;break}p||(p=s=="constructor")}if(d&&!p){var L=n.constructor,R=r.constructor;L!=R&&"constructor"in n&&"constructor"in r&&!(typeof L=="function"&&L instanceof L&&typeof R=="function"&&R instanceof R)&&(d=!1)}return i.delete(n),i.delete(r),d}var wn=1,N="[object Arguments]",U="[object Array]",w="[object Object]",yn=Object.prototype,K=yn.hasOwnProperty;function En(n,r,e,f,a,i){var t=M(n),u=M(r),g=t?U:C(n),l=u?U:C(r);g=g==N?w:g,l=l==N?w:l;var v=g==w,A=l==w,s=g==l;if(s&&x(n)){if(!x(r))return!1;t=!0,v=!1}if(s&&!v)return i||(i=new y),t||z(n)?b(n,r,e,f,a,i):pn(n,r,g,e,f,a,i);if(!(e&wn)){var P=v&&K.call(n,"__wrapped__"),O=A&&K.call(r,"__wrapped__");if(P||O){var d=P?n.value():n,p=O?r.value():r;return i||(i=new y),a(d,p,e,f,i)}}return s?(i||(i=new y),Rn(n,r,e,f,a,i)):!1}function S(n,r,e,f,a){return n===r?!0:n==null||r==null||!B(n)&&!B(r)?n!==n&&r!==r:En(n,r,e,f,S,a)}var Mn=1,Sn=2;function Dn(n,r,e,f){var a=e.length,i=a,t=!f;if(n==null)return!i;for(n=Object(n);a--;){var u=e[a];if(t&&u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++a<i;){u=e[a];var g=u[0],l=n[g],v=u[1];if(t&&u[2]){if(l===void 0&&!(g in n))return!1}else{var A=new y;if(f)var s=f(l,v,g,n,r,A);if(!(s===void 0?S(v,l,Mn|Sn,f,A):s))return!1}}return!0}function Q(n){return n===n&&!c(n)}function In(n){for(var r=h(n),e=r.length;e--;){var f=r[e],a=n[f];r[e]=[f,a,Q(a)]}return r}function X(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function Gn(n){var r=In(n);return r.length==1&&r[0][2]?X(r[0][0],r[0][1]):function(e){return e===n||Dn(e,n,r)}}function $n(n,r,e){var f=n==null?void 0:q(n,r);return f===void 0?e:f}var Cn=1,xn=2;function Bn(n,r){return H(n)&&Q(r)?X(J(n),r):function(e){var f=$n(e,n);return f===void 0&&f===r?o(e,n):S(r,f,Cn|xn)}}function Fn(n){return function(r){return r==null?void 0:r[n]}}function Nn(n){return function(r){return q(r,n)}}function Un(n){return H(n)?Fn(J(n)):Nn(n)}function qn(n){return typeof n=="function"?n:n==null?V:typeof n=="object"?M(n)?Bn(n[0],n[1]):Gn(n):Un(n)}export{S as a,qn as b,$n as g};