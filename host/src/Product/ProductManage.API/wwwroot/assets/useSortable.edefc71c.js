var d=Object.defineProperty;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))y.call(t,a)&&c(e,a,t[a]);return e};var _=(e,t,a)=>new Promise((i,u)=>{var f=r=>{try{n(a.next(r))}catch(o){u(o)}},b=r=>{try{n(a.throw(r))}catch(o){u(o)}},n=r=>r.done?i(r.value):Promise.resolve(r.value).then(f,b);n((a=a.apply(e,t)).next())});import{aa as S,bv as p,a as v}from"./index.23965316.js";function x(e,t){function a(){S(()=>_(this,null,function*(){if(!e)return;(yield p(()=>import("./sortable.esm.2632adaa.js"),[])).default.create(v(e),s({animation:500,delay:400,delayOnTouchOnly:!0},t))}))}return{initSortable:a}}export{x as u};
