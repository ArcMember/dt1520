import{z as h,b as _,j as b,C as P,a as k,U as u,m as f,_ as d}from"./q-c22284a5.js";import{c as A,a as C,g,d as D}from"./q-f0051382.js";const m=async(a,e)=>{const[t,o,r,n]=h();e.hasAttribute("preventdefault:click")&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:r,scroll:n}),e.removeAttribute("aria-pressed")))},y=a=>{const e=A(),t=C(),{onClick$:o,reload:r,replaceState:n,scroll:v,...s}=(()=>a)(),c=_(()=>g({...s,reload:r},t)),l=_(()=>D(a,c,t));s["preventdefault:click"]=!!c,s.href=c||a.href;const i=l!=null?u(f(()=>d(()=>import("./q-8cbab85d.js"),["build/q-8cbab85d.js","build/q-f0051382.js","build/q-c22284a5.js"]),"s_eBQ0vFsFKsk")):void 0,p=u(f(()=>d(()=>Promise.resolve().then(()=>L),void 0),"s_i1Cv0pYJNR0",[e,r,n,v]));return b("a",{...s,children:P(k,null,3,"AD_0"),"data-prefetch":l,onClick$:[o,p],onFocus$:i,onMouseOver$:i,onQVisible$:i},null,0,"AD_1")},L=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:y,s_i1Cv0pYJNR0:m},Symbol.toStringTag,{value:"Module"}));export{y as s_8gdLBszqbaM,m as s_i1Cv0pYJNR0};