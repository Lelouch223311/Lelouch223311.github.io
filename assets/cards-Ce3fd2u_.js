import{P as p}from"./ProductCard-CPmyTw-6.js";import{_ as d,c as r,F as u,g as i,r as l,o as t,h as _}from"./index-DHgL_fyz.js";console.log("cozy-chicken-d411647e9f.strapiapp.com:443");const h={components:{ProductCard:p},data(){return{products:[],price:null}},methods:{changePrice(c){this.price=c}},async beforeMount(){const o=await(await fetch("https://cozy-chicken-d411647e9f.strapiapp.com/api/products?populate=*")).json();this.products=o.data}},m={class:"products"};function f(c,o,k,y,a,s){const n=l("ProductCard");return t(),r("div",m,[(t(!0),r(u,null,i(a.products,e=>(t(),_(n,{onMyFunc:s.changePrice,product:e,key:e.id},null,8,["onMyFunc","product"]))),128))])}const C=d(h,[["render",f],["__scopeId","data-v-91a8e2a3"]]);export{C as default};
