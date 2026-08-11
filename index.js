import{a as B,S as R,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();async function p(r,o){return(await B.get("https://pixabay.com/api/",{params:{key:"57059976-78b6aab6913e377eac19868e8",q:r,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");let s=null;function M(){d&&(d.innerHTML=""),s&&(s.destroy(),s=null)}function v(r){if(!d)return;const o=r.map(({webformatURL:t,largeImageURL:n,tags:e,likes:i,views:l,comments:S,downloads:q})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img 
          class="gallery-image"
          src="${t}"
          alt="${e}"
          loading="lazy"
      />
      </a>
      <dl class="image-info">
        <div class="image-info-wrapper">
          <dt class="image-info-label">Likes</dt>
          <dd class="image-info-value">${i}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Views</dt>
          <dd class="image-info-value">${l}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Comments</dt>
          <dd class="image-info-value">${S}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Downloads</dt>
          <dd class="image-info-value">${q}</dd>
        </div>
      </dl>
    </li>
    `).join("");d.insertAdjacentHTML("beforeend",o),s?s.refresh():s=new R(".gallery .gallery-link",{captionsData:"alt",captionDelay:250})}function L(){u&&u.classList.remove("is-hidden")}function w(){u&&u.classList.add("is-hidden")}function m(){f&&f.classList.remove("is-hidden")}function h(){f&&f.classList.add("is-hidden")}const b=document.querySelector(".form"),P=document.querySelector(".load-more-btn");let g=1,y="",c=0;b.addEventListener("submit",$);async function $(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o===""){a.error({message:"Please enter a search query.",position:"topRight"});return}y=o,g=1,c=0,M(),h(),L();try{const t=await p(y,g);if(!t||!t.hits||t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else c+=t.hits.length,v(t.hits),c<t.totalHits?m():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){console.error(t),a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),b.reset()}}P.addEventListener("click",E);async function E(){g+=1,L(),h();try{const r=await p(y,g);c+=r.hits.length,v(r.hits),setTimeout(()=>{const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}},100),c<r.totalHits?m():(h(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error(r),m(),a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
