import{z as m,J as g,n as y,q as b,m as i,_,N as f}from"./q-c22284a5.js";import{B as u}from"./q-bfd65552.js";import{s as p}from"./q-0780c415.js";const v=()=>{const[o]=m(),e=[];let r=20;for(let t=0;t<14;t++)e.push(r),r=Math.round(r*1.2);const n=[];for(let t=0;t<250;t++){const l=Math.round(Math.random()*Math.random()*(e.length-1)),c=new u(o[Math.round(Math.random()*(o.length-1))],Math.random()*1800,Math.random()*290-200,"bold "+e[l]+"px Verdana",.5+Math.round(100*(.5+3*(l/(e.length-1))))/100,.1+(e.length-1-l)/(e.length-1));n.push(c)}const s=document.getElementById("id_canvas_rain_short"),a=s.getContext("2d");a.canvas.width=1800,a.canvas.height=90;const h=new Image;h.src="/rain/ground_rain_short.svg",setInterval(function(){a.textBaseline="top",a.clearRect(0,-200,1800,290);for(let t=0;t<250;t++)a.fillStyle="#D30422",n[t].y=Math.round(n[t].y+n[t].speed),n[t].y>90&&(n[t].y=-200,n[t].x=Math.round(Math.random()*1800)-20),a.globalAlpha=n[t].alpha,a.font=n[t].size,a.fillText(n[t].symbol,n[t].x,n[t].y);a.globalAlpha=1,a.drawImage(h,0,0,s.width,s.height);for(let t=0;t<250;t++)a.fillStyle="#808080",a.globalAlpha=.3*n[t].alpha,a.font=n[t].size,a.fillText(n[t].symbol,n[t].x,n[t].y)},30)},M=()=>(g(i(()=>_(()=>Promise.resolve().then(()=>d),void 0),"s_r3grqUnUHb4")),y(i(()=>_(()=>Promise.resolve().then(()=>d),void 0),"s_W0aQn8OEznI",[["0","1"]])),b("canvas",null,{class:"dt1520-rain-short",id:"id_canvas_rain_short"},null,3,"b5_0")),x=p,d=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_W0aQn8OEznI:v,s_r3grqUnUHb4:x,s_tv0G0SbNq5c:M},Symbol.toStringTag,{value:"Module"}));export{f as _hW,v as s_W0aQn8OEznI,x as s_r3grqUnUHb4,M as s_tv0G0SbNq5c};
