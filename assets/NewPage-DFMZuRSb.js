import{_,h as l,c,b as t,t as n,F as u,i,o as r,e as h,p as g,f}from"./index-q7qTMtun.js";const y={name:"ProductList",setup(){const e=l("Product List"),a=l([]);return a.name=fetch("https://dummyjson.com/product/1"),(async()=>{try{const d=await(await fetch("https://dummyjson.com/products")).json();a.value=d,console.log(d)}catch(s){console.error("Error fetching products:",s)}})(),{title:e,products:a}},methods:{images:"https://i.dummyjson.com/data/products/1/1.jpg"}},v=e=>(g("data-v-202509ba"),e=e(),f(),e),j={class:"product-list"},P=["src"],k=v(()=>t("strong",null,"Name: ",-1));function w(e,a,p,s,d,m){return r(),c("div",null,[t("h2",null,n(s.title),1),t("div",j,[(r(!0),c(u,null,i(s.products,o=>(r(),c("div",{key:o.id,class:"product-card"},[t("h3",null,n(o.name),1),t("p",null,n(o.price),1),t("img",{src:m.images,alt:"product image"},null,8,P),t("p",null,[k,h(" "+n(o.name),1)])]))),128)),(r(!0),c(u,null,i(s.products,o=>(r(),c("div",{key:o.title}))),128))])])}const I=_(y,[["render",w],["__scopeId","data-v-202509ba"]]);export{I as default};
