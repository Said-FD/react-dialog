import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&_(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function _(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",E=function(o,n){return new URL(o,n).href},u={},a=function(n,s,_){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=E(e,_),e in u)return;u[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!_)for(let c=t.length-1;c>=0;c--){const l=t[c];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":f,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:w}=__STORYBOOK_MODULE_CHANNELS__,{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,O=w({page:"preview"});m.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const R={"./src/stories/Dialog.stories.jsx":async()=>a(()=>import("./Dialog.stories-4e0e622d.js"),["./Dialog.stories-4e0e622d.js","./index-070054a4.js","./Dialog.stories-38bb634d.css"],import.meta.url)};async function S(o){return R[o]()}const{composeConfigs:p,PreviewWeb:P,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,T=async()=>{const o=await Promise.all([a(()=>import("./config-57adad36.js"),["./config-57adad36.js","./index-070054a4.js"],import.meta.url),a(()=>import("./preview-ba2273f4.js"),[],import.meta.url)]);return p(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:S,getProjectAnnotations:T});
//# sourceMappingURL=iframe-14c6053a.js.map
