import{_ as p,o as e,c as r,h as i,a,t as c,n as h,F as m,g as b,r as f,i as g}from"./index-3gHUerDK.js";const y={name:"ProductCard",props:{product:{}},data(){return{baseURL:"https://hopeful-birds-d30950b277.strapiapp.com/",sum:""}},methods:{},computed:{priceRedact(){return this.product.attributes.sale>0}}},C={class:"product-card"},k={key:0,class:"sale"},P=["src"],v={key:1};function x(s,o,t,l,u,d){return e(),r("div",C,[t.product.attributes.sale?(e(),r("div",k,"Скидка")):i("",!0),a("img",{src:t.product.attributes.img.data.attributes.url},null,8,P),a("h3",null,c(t.product.attributes.title),1),a("p",null,c(t.product.attributes.description),1),a("p",{class:h({price:d.priceRedact})},c(t.product.attributes.price+" ₽"),3),t.product.attributes.sale?(e(),r("h4",v,c(t.product.attributes.sale+" ₽"),1)):i("",!0)])}const B=p(y,[["render",x]]);console.log("hopeful-birds-d30950b277.strapiapp.com:443");const F={components:{ProductCard:B},data(){return{products:[],price:null}},methods:{changePrice(s){this.price=s}},async beforeMount(){const o=await(await fetch("https://hopeful-birds-d30950b277.strapiapp.com/api/products?populate=*")).json();this.products=o.data}},M={class:"products"};function R(s,o,t,l,u,d){const _=f("ProductCard");return e(),r("div",M,[(e(!0),r(m,null,b(u.products,n=>(e(),g(_,{onMyFunc:d.changePrice,product:n,key:n.id},null,8,["onMyFunc","product"]))),128))])}const w=p(F,[["render",R],["__scopeId","data-v-0c9e0067"]]);export{w as default};
