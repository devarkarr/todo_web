(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#pay-with-crypto`),t=document.querySelector(`#modal`),n=document.querySelector(`#content`),r=document.querySelector(`#modalContent`),i=[],a=e=>{let t=document.createElement(`div`);t.classList.add(`cardContainer`),t.dataset.productId=e.id;let r=document.createElement(`p`);r.classList.add(`text-xs`),r.textContent=e.title;let i=document.createElement(`div`);i.classList.add(`flex`,`justify-center`),i.innerHTML=`<img src="${e.thumbnail}" class="w-52 h-60" />`;let a=document.createElement(`div`);a.classList.add(`flex`,`justify-between`,`items-center`),a.innerHTML=`
    <p class="text-xs">$${e.price.toLocaleString()} </p>
    <div class="flex items-center gap-3">
      <button class="btn-minus size-8 border rounded-sm border-[#E5E7EB]">-</button>
      <p class="text-sm font-medium" id="price-${e.id}">0</p>
      <button class="btn-plus size-8 border rounded-sm border-[#E5E7EB]">+</button>
    </div>
  `,t.appendChild(r),t.appendChild(i),t.appendChild(a),n.appendChild(t);let s=a.querySelector(`.btn-plus`),c=a.querySelector(`.btn-minus`);s.addEventListener(`click`,()=>{o(e,1)}),c.addEventListener(`click`,()=>{o(e,-1)})},o=(e,t)=>{let n=i.find(t=>t.id===e.id);n?(n.quantity+=t,n.quantity<=0&&(i=i.filter(t=>t.id!==e.id))):t>0&&i.push({...e,quantity:1});let r=i.find(t=>t.id===e.id),a=r?r.quantity:0;document.querySelector(`#price-${e.id}`).textContent=a,s()},s=()=>{r.innerHTML=`<h3 class="text-base font-bold mb-2">Checkout Cart</h3>`,i.length===0?r.innerHTML+=`<p class="text-sm text-gray-500 py-4 text-center">Your cart is empty.</p>`:i.forEach(e=>{let t=document.createElement(`div`);t.classList.add(`flex`,`justify-between`,`gap-4`,`mt-4`,`border-b`,`pb-2`),t.innerHTML=` 
      <div>
        <p class="text-sm font-medium">${e.name}</p>
        <div class="flex items-center gap-2 mt-1">
          <img src="${e.thumbnail}" class="w-10" />
          <span class="text-xs text-gray-500">Qty: ${e.quantity}</span>
        </div>
      </div>
      <div class="flex justify-between gap-3 items-center">
        <p class="text-sm font-semibold">$${(e.price*e.quantity).toLocaleString()}</p>
        <div class="flex items-center gap-3">
          <button class="btn-modal-minus size-8 border rounded-sm border-border flex items-center justify-center font-bold">
            -
          </button>
        </div>
      </div>`,t.querySelector(`.btn-modal-minus`).addEventListener(`click`,()=>{o(e,-1)}),r.appendChild(t)})},c=()=>{n.classList.remove(`grid`),n.innerHTML=` <div id="loading" class="grid grid-cols-2 gap-3">
   <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
    <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
      <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
        <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
          <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
            <div class="h-80 w-full bg-slate-50 rounded-lg"></div>
  </div>`},l=()=>{document.querySelector(`#loading`).remove(),n.classList.add(`grid`)},u=()=>{throw n.innerHTML=`<p class="text-sm text-gray-500 py-4 text-center">Failed to load products. Please try again later.</p>`,n.classList.remove(`grid`),Error(`Network response was not ok`)},d=()=>{n.innerHTML=`<p class="text-sm text-gray-500 py-4 text-center">No products available at the moment.</p>`,n.classList.remove(`grid`)},f=async()=>{c();let e=await fetch(`https://dummyjson.com/products`);e.ok||u(),l();let t=await e.json();return t.products.length===0&&d(),t};window.onload=async()=>{let{products:e}=await f();e.forEach(e=>{a(e)}),s()},e.addEventListener(`click`,()=>{t.classList.remove(`hidden`),t.classList.add(`flex`)}),t.addEventListener(`click`,()=>{p()}),r.addEventListener(`click`,e=>{e.stopPropagation()});var p=()=>{t.classList.remove(`flex`),t.classList.add(`hidden`)};