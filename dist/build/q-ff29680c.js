import{C as t}from"./q-0b4aa1f1.js";import{j as u,S as s,R as e,Y as r,a as o}from"./q-5a607cbf.js";import{s as c}from"./q-9fc080a3.js";import{useGetPages as p}from"./q-89d43425.js";import"./q-4db72093.js";const f=n=>{const a=p().value.filter(l=>l.branch=="news").sort(c).reverse();return u(t,{rowElements:3,get pages(){return n.pages},children:s("div",null,{class:"carousel-children"},a.map(l=>s("div",null,{class:"carousel-child"},s("a",{href:"/"+l.url.replace("src\\routes\\","")},null,s("div",null,{class:"child-container"},[s("img",{src:e(l,"cover")},{class:"cover"},null,3,null),s("div",null,null,[s("p",{dangerouslySetInnerHTML:e(l,"date")},{class:"date"},null,3,null),s("p",{dangerouslySetInnerHTML:e(l,"title")},{class:"title"},null,3,null)],1,null)],1,null),1,null),1,l.url)),1,null),type:"news",[r]:{pages:o(l=>l.pages,[n]),rowElements:r,type:r}},1,"AI_0")};export{f as s_KD7Y08B0IyI};