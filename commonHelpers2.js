/* empty css                      */import{a as p,S as d}from"./assets/vendor-bb007519.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();p.defaults.baseURL="https://food-boutique.b.goit.study/api";const y=new FoodBoutiqueApi,m=document.querySelector('form[name="E-mail"]'),i=document.getElementById("mail"),n=document.querySelector("#mail + span.error");i.addEventListener("input",function(o){i.validity.valid?(n.textContent="",n.className="error"):f()});m.addEventListener("submit",function(o){i.validity.valid||(f(),o.preventDefault())});function f(){i.validity.valueMissing?n.textContent="You need to enter an e-mail address.":i.validity.typeMismatch?n.textContent="Entered value needs to be an e-mail address.":i.validity.tooShort&&(n.textContent=`Email shouid be at least ${i.minLength} characters; you entered ${i.value.length}.`),n.className="error active"}m.addEventListener("submit",async function(o){o.preventDefault();const s=o.currentTarget.elements.email,a=s.value;try{const t=await y.subscribeToNewsletter({email:a});s.value="";let e="Thanks for subscribing!";t&&t.data&&t.data.message&&(e=t.data.message),d.fire({icon:"good",title:e,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCanceButton:!1,usuallyClass:{popup:"small-popup",title:"usually-title",icon:"usually-icon"}})}catch(t){console.error("Error:",t);let e="Error. Try again.";t.resp&&t.resp.data&&t.resp.data.message&&(e=t.resp.data.message),d.fire({icon:"error",title:"Error",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCanceButton:!1,text:e,usuallyClass:{popup:"small-popup",title:"usually-title",icon:"usually-icon"}})}});const c=document.querySelector(".custom-select-ctg"),u=document.querySelector(".custom-select-sort");document.addEventListener("click",function(o){const s=c.contains(o.target),a=u.contains(o.target);s||c.classList.remove("active"),a||u.classList.remove("active")});document.addEventListener("keydown",function(o){o.code==="Escape"&&(c.classList.remove("active"),u.classList.remove("active"))});
//# sourceMappingURL=commonHelpers2.js.map