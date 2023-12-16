import{i as u,S as b}from"./assets/vendor-4971c7df.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let o=0,d;const m=document.querySelector(".gallery"),n=document.querySelector(".loader");n.classList.remove("loader");const f=document.querySelector(".form");f.addEventListener("submit",v);document.querySelector(".page-section").insertAdjacentHTML("beforeend",'<button class="download-more">Download more</button>');const c=document.querySelector(".download-more");c.addEventListener("click",S);function v(r){r.preventDefault();let s=r.target.elements.search.value.trim();if(s===""){u.show({message:"❌ Field must be filled in",position:"topRight",color:"red"});return}f.reset(),m.innerHTML="",n.classList.add("loader");const i=`https://pixabay.com/api/?${new URLSearchParams({key:"41274788-792c8d92905fcf9da75194117",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:100}).toString()}`;fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){n.classList.remove("loader"),u.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),c.classList.remove("is-visibal");return}w(e.hits)}).catch(e=>{console.log(e)})}function w(r){o=0,d=r;let s=r.slice(o,o+20);n.classList.remove("loader"),m.insertAdjacentHTML("afterbegin",p(s)),g.refresh(),r.length>=21&&c.classList.add("is-visibal")}function S(){o+=20,m.insertAdjacentHTML("beforeend",p(d.slice(o,o+20))),o+21>=d.length&&c.classList.remove("is-visibal"),g.refresh()}function p(r){let s="";return r.forEach(a=>{const{webformatURL:i,largeImageURL:e,tags:t,likes:l,views:h,comments:y,downloads:L}=a;s+=`<li class="gallery-item">
          <a class="link" href="${e}">
            <img class="form-img" src="${i}" alt="${t}" />
            <ul class="description-list">
              <li class="description-item">
                <p class="text-">Likes</p>
                <p class="number">${l}</p>
              </li>
              <li class="description-item">
                <p class="text-">Views</p>
                <p class="number">${h}</p>
              </li>
              <li class="description-item">
                <p class="text-">Comments</p>
                <p class="number">${y}</p>
              </li>
              <li class="description-item">
                <p class="text-">Downloads</p>
                <p class="number">${L}</p>
              </li>
            </ul>
          </a>
        </li>`}),s}const g=new b(".gallery .link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
