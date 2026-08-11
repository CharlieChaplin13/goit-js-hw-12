import{a as B,S as R,i}from"./assets/vendor-S2qh7U4E.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();async function p(o,r){return(await B.get("https://pixabay.com/api/",{params:{key:"57059976-78b6aab6913e377eac19868e8",q:o,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}})).data}const g=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let s=null;function M(){g&&(g.innerHTML=""),s&&(s.destroy(),s=null)}function v(o){const r=o.map(({webformatURL:t,largeImageURL:n,tags:e,likes:a,views:l,comments:S,downloads:q})=>`
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
          <dd class="image-info-value">${a}</dd>
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
    `).join("");g.insertAdjacentHTML("beforeend",r),s?s.refresh():s=new R(".gallery .gallery-link",{captionsData:"alt",captionDelay:250})}function L(){d&&d.classList.remove("is-hidden")}function w(){d&&d.classList.add("is-hidden")}function m(){u&&u.classList.remove("is-hidden")}function h(){u&&u.classList.add("is-hidden")}const b=document.querySelector(".form"),P=document.querySelector(".load-more-btn");let f=1,y="",c=0;b.addEventListener("submit",$);async function $(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){i.error({message:"Please enter a search query.",position:"topRight"});return}y=r,f=1,c=0,M(),h(),L();try{const t=await p(y,f);if(!t||!t.hits||t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else c+=t.hits.length,v(t.hits),c<t.totalHits?m():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){console.error(t),i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),b.reset()}}P.addEventListener("click",E);async function E(){f+=1,L(),h();try{const o=await p(y,f);c+=o.hits.length,v(o.hits),setTimeout(()=>{const r=document.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}},100),c<o.totalHits?m():(h(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.error(o),m(),i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
