import{S as m,o as C,F as v}from"./assets/footer-87ceeb04.js";import{S as f}from"./assets/vendor-5ef907e7.js";const x="shop-storage",L=new m(x),h=document.querySelector(".cart-content-container"),S=document.querySelector(".empty-cart");l();function l(){L.getAllProducts().length?(h.classList.remove("is-hidden"),S.classList.add("is-hidden")):(h.classList.add("is-hidden"),S.classList.remove("is-hidden"))}function P(t){return t.map(({category:o,img:c,name:s,price:e,size:r,_id:u})=>`<li class="cart-item" data-id="${u}">
                        <img class="cart-img-product" src="${c}" alt="${s}" />
                        <div class="cart-product-description">
                            <p class="cart-product-name">${s}</p>
                            <p class="cart-product-text">Category: <span class="cart-text-black gap">${o}</span>  Size: <span class="cart-text-black">${r}</span></p>
                            <p class="cart-product-price">$${e}</p>
                        </div>
                        <button type="button" class="cart-product-close-btn">
                            <svg class="cart-icon-close">
                                <use href="./icons-tank.svg#icon-close"></use>
                            </svg>
                    </button>
                    </li>`).join("")}let a=[];const b=document.querySelector(".number-of-product"),A=document.querySelector(".nav-span"),q=document.querySelector(".total-amount"),p=document.querySelector(".cart-list"),n=new m("shop-storage");p.addEventListener("click",w);function g(t){b.textContent=t,A.textContent=t}function i(t){q.textContent=t.toFixed(2)}const I=document.querySelector(".js-delete-all-btn");I.addEventListener("click",()=>{p.innerHTML="",n.removeAllProducts(),g(0),i(0),l()});function y(){a=n.getAllProducts()??[],p.innerHTML=P(a),g(a.length),i(a.reduce((o,c)=>o+c.price,0))}y();function w(t){if(!t.target.closest(".cart-product-close-btn"))return;const c=t.target.closest("li").dataset.id,s=n.getAllProducts().filter(e=>e._id!==c);n.setAllProduct(s),y(),i(s.reduce((e,r)=>e+r.price,0)),n.getAllProducts.length||l()}const d=new m("shop-storage"),B=new v,E=document.getElementById("subscription-form"),O=document.querySelector(".cart-list"),$=document.getElementById("email");function T(t){const o="Order Success! ",c=t.indexOf(o);return c!==-1?t.slice(c+Textsuccessxt.length):t}E.addEventListener("submit",async t=>{t.preventDefault();const o=d.getAllProducts(),c=document.getElementById("email").value;if(o&&o.length>0){const s={email:c,products:o.map(e=>({productId:e._id,amount:1}))};try{const e=await B.placeOrder(s);if(e&&e.message){d.removeAllProducts(),C();const r=document.querySelector(".modal-success-title"),u=document.querySelector(".modal-success-message");r.textContent="Order success",u.textContent=T(e.message),O.innerHTML="",$.value="",i(0),g(d.getAllProducts().length),l()}}catch(e){f.fire({icon:"error",title:"Error",text:e.response.data.message,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}}else f.fire({icon:"error",title:"Error",text:"The cart is empty. Please add products to the cart!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})});
//# sourceMappingURL=commonHelpers.js.map
