import{o as j,X as _,m as M,V as U,n as V,h as q,_ as D,R as B,p as y,r as b,S as Q}from"./q-5a607cbf.js";const K='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',$=y("qc-s"),z=y("qc-c"),pt=y("qc-ic"),X=y("qc-h"),Y=y("qc-l"),G=y("qc-n"),_t=y("qc-a"),Ct=y("qc-ir"),wt=q(()=>D(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),Et=()=>{},vt=V(q(()=>D(()=>import("./q-b03dd7f3.js"),["build/q-b03dd7f3.js","build/q-5a607cbf.js"]),"s_e0ssiDXoeAM")),k=new WeakMap,C=new Map,J="qaction",E=t=>t.pathname+t.search+t.hash,p=(t,e)=>new URL(t,e.href),Z=(t,e)=>t.origin===e.origin,H=(t,e)=>t.pathname+t.search===e.pathname+e.search,tt=(t,e)=>t.pathname===e.pathname,et=(t,e)=>t.search===e.search,nt=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+J+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},St=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=p(s.trim(),e.url),o=p("",e.url);if(Z(n,o))return E(n)}catch(n){console.error(n)}else if(t.reload)return E(p("",e.url));return null},At=(t,e,s)=>{if(t.prefetch===!0&&e){const n=p(e,s.url),o=p("",s.url);if(!tt(n,o)||!et(n,o))return""}return null},st=t=>t&&typeof t.then=="function",qt=(t,e,s,n)=>{const o=ot(),i={head:o,withLocale:a=>b(n,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[c];if(st(l))throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let a=s.length-1;a>=0;a--){const c=s[a]&&s[a].head;c&&(typeof c=="function"?O(o,b(n,()=>c(i))):typeof c=="object"&&O(o,c))}return i.head},O=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),w(t.meta,e.meta),w(t.links,e.links),w(t.styles,e.styles),w(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},w=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},ot=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function rt(t,e){const s=N(t),n=P(t),o=N(e),r=P(e);return x(t,s,n,e,o,r)}function x(t,e,s,n,o,r){let i=null;for(;e<s;){const a=t.charCodeAt(e++),c=n.charCodeAt(o++);if(a===91){const l=F(t,e),f=e+(l?3:0),h=S(t,f,s,93),u=t.substring(f,h),g=S(t,h+1,s,47),d=t.substring(h+1,g);e=h+1;const m=o-1;if(l){const T=at(u,d,n,m,r,t,e+d.length+1,s);if(T)return Object.assign(i||(i={}),T)}const v=S(n,m,r,47,d);if(v==-1)return null;const R=n.substring(m,v);if(!l&&!d&&!R)return null;o=v,(i||(i={}))[u]=decodeURIComponent(R)}else if(a!==c&&!(isNaN(c)&&it(t,e)))return null}return L(t,e)&&L(n,o)?i||{}:null}function it(t,e){return t.charCodeAt(e)===91&&F(t,e+1)}function P(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function L(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function N(t){return t.charCodeAt(0)===47?1:0}function F(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function S(t,e,s,n,o=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const r=o.length;for(let i=0;i<r;i++)if(t.charCodeAt(e-r+i)!==o.charCodeAt(i))return-1;return e-r}let I;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(I||(I={}));function at(t,e,s,n,o,r,i,a){s.charCodeAt(n)===47&&n++;let c=o;const l=e+"/";let f=5;for(;c>=n&&f--;){const h=x(r,i,a,s,c,o);if(h){let u=s.substring(n,Math.min(c,o));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),h[t]=decodeURIComponent(u),h}c=ct(s,n,l,c,n-1)+l.length}return null}function ct(t,e,s,n,o){let r=t.lastIndexOf(s,n);return r==n-s.length&&(r=t.lastIndexOf(s,n-s.length-1)),r>e?r:o}const Dt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0],i=rt(r,n);if(i){const a=o[1],c=o[3],l=new Array(a.length),f=[],h=lt(e,n);let u;return a.forEach((g,d)=>{W(g,f,m=>l[d]=m,s)}),W(h,f,g=>u=g==null?void 0:g.default,s),f.length>0&&await Promise.all(f),[r,i,l,u,c]}}return null},W=(t,e,s,n)=>{if(typeof t=="function"){const o=k.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(i=>{n!==!1&&k.set(t,i),s(i)})):r&&s(r)}}},lt=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Rt=(t,e,s,n,o=!1)=>{if(e!=="popstate"){const r=H(s,n),i=s.hash===n.hash;if(!r||!i){const a={_qCityScroll:ft()};o?t.history.replaceState(a,"",E(n)):t.history.pushState(a,"",E(n))}}},ft=()=>({x:0,y:0,w:0,h:0}),ht=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ut=async(t,e,s,n)=>{const o=t.pathname,r=t.search,i=nt(o,r,n);let a;n||(a=C.get(i)),ht({links:[o]});let c;if(!a){const l=dt(n);n&&(n.data=void 0),a=fetch(i,l).then(f=>{const h=new URL(f.url),u=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!u){location.href=h.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(g=>{const d=j(g,e);if(!d){location.href=t.href;return}if(s&&C.delete(i),d.redirect)location.href=d.redirect;else if(n){const m=d.loaders[n.id];c=()=>{n.resolve({status:f.status,result:m})}}return d});location.href=t.href}),n||C.set(i,a)}return a.then(l=>(l||C.delete(i),c&&c(),l))},dt=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Tt=()=>_(z),bt=()=>_(X),kt=()=>_(Y),Ot=()=>_(G),Pt=()=>M(U("qwikcity")),Lt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(gt(e,s)||window.scrollTo(0,0))},gt=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&H(t,e))},Nt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),It=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Wt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},jt=V(q(()=>D(()=>import("./q-38b483b2.js"),["build/q-38b483b2.js","build/q-5a607cbf.js"]),"s_TxCFOy819ag"));function Vt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const Bt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(A||(A=innerWidth),(!e||e&&A<520)&&ut(new URL(t.href),t))};let A=0;const Ht=t=>Q("script",{nonce:B(t,"nonce")},{dangerouslySetInnerHTML:K},null,3,"1Z_0"),xt=(t,...e)=>{const{id:s,validators:n}=yt(e,t);function o(){return _($,r=>{if(!(s in r))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return B(r,s)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=n,o.__id=s,Object.freeze(o),o},yt=(t,e)=>{let s;const n=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?n.push(o):(s=o.id,o.validation&&n.push(...o.validation)))}else t.length>1&&n.push(...t.filter(o=>!!o));return typeof s=="string"?s=`id_${s}`:s=e.getHash(),{validators:n.reverse(),id:s}},Ft=async function*(t,e,s){const n=t.getReader();try{let o="";const r=new TextDecoder;for(;!(s!=null&&s.aborted);){const i=await n.read();if(i.done)break;o+=r.decode(i.value,{stream:!0});const a=o.split(/\n/);o=a.pop();for(const c of a)yield await j(c,e)}}finally{n.releaseLock()}};export{Vt as A,Pt as B,z as C,X as D,Et as E,vt as F,Ft as G,Bt as H,xt as I,jt as Q,Y as R,Ht as S,kt as a,bt as b,Ot as c,At as d,ot as e,pt as f,St as g,G as h,$ as i,_t as j,Ct as k,Z as l,H as m,It as n,ut as o,Dt as p,tt as q,Lt as r,qt as s,p as t,Tt as u,C as v,Wt as w,Nt as x,wt as y,Rt as z};