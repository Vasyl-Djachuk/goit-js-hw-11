import{i as n}from"./assets/vendor-17ede762.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery"),a=document.querySelector(".form");a.addEventListener("submit",p);function p(o){o.preventDefault();let r=o.target.elements.search.value.trim();if(r===""){n.show({message:"❌ Field must be filled in",position:"topLeft",color:"red"});return}a.reset();const s=`https://pixabay.com/api/?${new URLSearchParams({key:"41274788-792c8d92905fcf9da75194117",q:`${r}`,image_type:"photo",orientation:"horizontal"}).toString()}`;fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){n.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topLeft",color:"red"});return}d(e.hits)}).catch(e=>{console.log(e)})}function d(o){let r="";o.forEach(l=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:i,views:c,comments:m,downloads:u}=l;r+=`<li class="gallery-item">
          <a class="link" href="${e}">
            <img class="form-img" src="${s}" alt="${t}" />
            <ul class="description-list">
              <li class="description-item">
                <p class="text-">Likes</p>
                <p class="number">${i}</p>
              </li>
              <li class="description-item">
                <p class="text-">Views</p>
                <p class="number">${c}</p>
              </li>
              <li class="description-item">
                <p class="text-">Comments</p>
                <p class="number">${m}</p>
              </li>
              <li class="description-item">
                <p class="text-">Downloads</p>
                <p class="number">${u}</p>
              </li>
            </ul>
          </a>
        </li>`}),f.insertAdjacentHTML("afterbegin",r)}
//# sourceMappingURL=commonHelpers.js.map
