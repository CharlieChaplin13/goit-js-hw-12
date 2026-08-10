import{a as m,S as g,i as l}from"./assets/vendor-CMFIJsrw.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(s){return m.get("https://pixabay.com/api/",{params:{key:"57059976-78b6aab6913e377eac19868e8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en"}}).then(a=>a.data)}const d=document.querySelector(".gallery"),n=document.querySelector(".loader");let c=null;function h(){d.innerHTML=""}function y(s){const i=s.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:o,comments:f,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img 
          class="gallery-image"
          src="${a}"
          alt="${e}"
          loading="lazy"
      />
      </a>
      <dl class="image-info">
        <div class="image-info-wrapper">
          <dt class="image-info-label">Likes</dt>
          <dd class="image-info-value">${r}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Views</dt>
          <dd class="image-info-value">${o}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Comments</dt>
          <dd class="image-info-value">${f}</dd>
        </div>
        <div class="image-info-wrapper">
          <dt class="image-info-label">Downloads</dt>
          <dd class="image-info-value">${u}</dd>
        </div>
      </dl>
    </li>
    `).join("");d.insertAdjacentHTML("beforeend",i),c?c.refresh():c=new g(".gallery .gallery-link",{captionsData:"alt",captionDelay:250})}function v(){n&&n.classList.remove("is-hidden")}function L(){n&&n.classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",w);function w(s){s.preventDefault();const i=s.currentTarget,a=i.elements["search-text"].value.trim();if(a===""){l.warning({message:"Please enter a search query.",position:"topRight"});return}h(),v(),p(a).then(t=>{if(!t||!t.hits||t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(t=>{console.error(t),l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),i.reset()})}
//# sourceMappingURL=index.js.map
