import{_ as p,o as r,c as a,g as i,b as e,t as o,n as _,F as m,i as f,r as b,j as g}from"./index-wOL73cH9.js";const y={name:"ProductCard",props:{product:{}},data(){return{baseURL:"https://cozy-chicken-d411647e9f.strapiapp.com/",sum:""}},methods:{},computed:{priceRedact(){return this.product.attributes.sale>0}}},v={class:"product-card"},k={key:0,class:"sale"},x=["src"],w={class:"text-red-600"},C={key:1},P=e("button",{class:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"},[e("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full"},[e("a",{href:"https://www.aviasales.ru/?params=AER0107JKT1"},"Подробнее")])],-1);function j(s,c,t,l,u,n){return r(),a("div",v,[t.product.attributes.sale?(r(),a("div",k,"Скидка")):i("",!0),e("img",{src:t.product.attributes.img.data.attributes.url},null,8,x),e("h3",null,o(t.product.attributes.title),1),e("p",w,o(t.product.attributes.description),1),e("p",{class:_({price:n.priceRedact})},o(t.product.attributes.price+" ₽"),3),t.product.attributes.sale?(r(),a("h4",C,o(t.product.attributes.sale+" ₽"),1)):i("",!0),P])}const z=p(y,[["render",j]]);console.log("cozy-chicken-d411647e9f.strapiapp.com:443");const B={components:{ProductCard:z},data(){return{products:[],price:null}},methods:{changePrice(s){this.price=s}},async beforeMount(){const c=await(await fetch("https://cozy-chicken-d411647e9f.strapiapp.com/api/products?populate=*")).json();this.products=c.data}},F={class:"products"};function R(s,c,t,l,u,n){const h=b("ProductCard");return r(),a("div",F,[(r(!0),a(m,null,f(u.products,d=>(r(),g(h,{onMyFunc:n.changePrice,product:d,key:d.id},null,8,["onMyFunc","product"]))),128))])}const E=p(B,[["render",R],["__scopeId","data-v-47534445"]]);export{E as default};
