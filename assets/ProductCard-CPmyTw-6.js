import{_ as d,o as s,c as r,i as c,a as e,t as a,n as i}from"./index-DHgL_fyz.js";const l={name:"ProductCard",props:{product:{}},data(){return{baseURL:"https://cozy-chicken-d411647e9f.strapiapp.com/",sum:""}},methods:{},computed:{priceRedact(){return this.product.attributes.sale>0}}},n={class:"product-card"},p={key:0,class:"sale"},_=["src"],m={key:1};function h(o,b,t,f,k,u){return s(),r("div",n,[t.product.attributes.sale?(s(),r("div",p,"Скидка")):c("",!0),e("img",{src:t.product.attributes.img.data.attributes.url},null,8,_),e("h3",null,a(t.product.attributes.title),1),e("p",null,a(t.product.attributes.description),1),e("p",{class:i({price:u.priceRedact})},a(t.product.attributes.price+" ₽"),3),t.product.attributes.sale?(s(),r("h4",m,a(t.product.attributes.sale+" ₽"),1)):c("",!0)])}const C=d(l,[["render",h]]);export{C as P};
