import{r as i,R as c}from"./index-070054a4.js";var U={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=i,Ge=Symbol.for("react.element"),Qe=Symbol.for("react.fragment"),Xe=Object.prototype.hasOwnProperty,eo=Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oo={key:!0,ref:!0,__self:!0,__source:!0};function z(o,e,t){var n,r={},a=null,s=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)Xe.call(e,n)&&!oo.hasOwnProperty(n)&&(r[n]=e[n]);if(o&&o.defaultProps)for(n in e=o.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:Ge,type:o,key:a,ref:s,props:r,_owner:eo.current}}B.Fragment=Qe;B.jsx=z;B.jsxs=z;U.exports=B;var w=U.exports;const to=w.Fragment,d=w.jsx,v=w.jsxs;function no(o,e){e===void 0&&(e={});var t=e.insertAt;if(!(!o||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}var ro=`.styles-module_light__-Yxpk {\r
  color-scheme: light;\r
  --surfaceColorScheme: var(--surfaceColor, #fff);\r
  --onSurfaceColorScheme: var(--onSurfaceColor, #141414);\r
  --closeButtonColorScheme: #3d3d3d;\r
  --closeButtonHoverColorScheme: #f5f5f5;\r
  --closeButtonActiveColorScheme: #ebebeb;\r
  --confirmButtonColorScheme: var(--surfaceColor, #fff);\r
  --confirmButtonBgColorScheme: var(--onSurfaceColor, #141414);\r
  --confirmButtonHoverBgColorScheme: #3a3a3a;\r
  --confirmButtonActiveBgColorScheme: var(--onSurfaceColor, #141414);\r
  --cancelButtonColorScheme: var(--onSurfaceColor, #141414);\r
  --cancelButtonBgColorScheme: #f5f5f5;\r
  --cancelButtonHoverBgColorScheme: #ebebeb;\r
  --cancelButtonActiveBgColorScheme: #e0e0e0;\r
}\r
\r
.styles-module_light__-Yxpk::backdrop {\r
  --overlayScheme: var(--dialogBackdropLight, rgba(0,0,0,.32));\r
}\r
\r
.styles-module_dark__iZs3I {\r
  color-scheme: dark;\r
  --surfaceColorScheme: var(--surfaceColor, #292929);\r
  --onSurfaceColorScheme: var(--onSurfaceColor, #e0e0e0);\r
  --closeButtonColorScheme: #d6d6d6;\r
  --closeButtonHoverColorScheme: #3a3a3a;\r
  --closeButtonActiveColorScheme: #141414;\r
  --confirmButtonColorScheme: #141414;\r
  --confirmButtonBgColorScheme: #f5f5f5;\r
  --confirmButtonHoverBgColorScheme: #ebebeb;\r
  --confirmButtonActiveBgColorScheme: var(--onSurfaceColor, #e0e0e0);\r
  --cancelButtonColorScheme: var(--onSurfaceColor, #e0e0e0);\r
  --cancelButtonBgColorScheme: #1f1f1f;\r
  --cancelButtonHoverBgColorScheme: #3a3a3a;\r
  --cancelButtonActiveBgColorScheme: #141414;\r
}\r
\r
.styles-module_dark__iZs3I::backdrop {\r
  --overlayScheme: var(--dialogBackdropDark, rgba(0,0,0,.48));\r
}\r
\r
.styles-module_dialog__qMeos,\r
.styles-module_dialog__qMeos *,\r
.styles-module_dialog__qMeos::before,\r
.styles-module_dialog__qMeos::after,\r
.styles-module_dialog__qMeos ::before,\r
.styles-module_dialog__qMeos ::after {\r
  box-sizing: border-box;\r
}\r
\r
.styles-module_dialog__qMeos {\r
  min-width: var(--minWidth, 320px);\r
  width: var(--width, 380px);\r
  max-width: var(--maxWidth, 95dvw);\r
  padding: 0;\r
  font-family: var(--fontFamily, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif);\r
  color: var(--onSurfaceColorScheme);\r
  background-color: var(--surfaceColorScheme);\r
  border: var(--border);\r
  border-radius: var(--borderRadius, 8px);\r
  outline: var(--outline);\r
  box-shadow: var(--boxShadow);\r
}\r
\r
.styles-module_dialog__qMeos::backdrop {\r
  background-color: var(--overlayScheme);\r
}\r
\r
.styles-module_inner__I39Du {\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  min-height: var(--minHeight);\r
  height: var(--height, auto);\r
  max-height: var(--maxHeight);\r
  padding: var(--padding, 1rem);\r
}\r
\r
.styles-module_header__2msgj {\r
  display: flex;\r
  gap: 1rem;\r
  align-items: flex-start;\r
}\r
\r
.styles-module_title__Vedzp {\r
  margin: 0;\r
  padding-block-end: 1rem;\r
  text-wrap: balance;\r
  font-size: var(--titleFontSize, 1.125rem);\r
  font-weight: var(--titleFontWeight, 700);\r
  font-style: var(--titleFontStyle, normal);\r
  line-height: var(--titleLineHeight, 1.33);\r
}\r
\r
.styles-module_closeButton__hbqbL {\r
  position: relative;\r
  top: -0.5rem;\r
  right: -0.5rem;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  margin-inline-start: auto;\r
  padding: .5rem;\r
  color: var(--closeButtonColorScheme);\r
  background-color: transparent;\r
  border: none;\r
  border-radius: var(--closeButtonBorderRadius, 4px);\r
  cursor: pointer;\r
  transition:\r
    color .15s, background-color .15s,\r
    border-color .15s, outline-color .15s, box-shadow .15s;\r
}\r
\r
.styles-module_closeButton__hbqbL:hover,\r
.styles-module_closeButton__hbqbL:focus-visible {\r
  background-color: var(--closeButtonHoverColorScheme);\r
}\r
\r
.styles-module_closeButton__hbqbL:active {\r
  background-color: var(--closeButtonActiveColorScheme);\r
}\r
\r
.styles-module_body__u1SN8 {\r
  padding-block-end: 1rem;\r
}\r
\r
.styles-module_dialog__qMeos p {\r
  margin-block: 0;\r
  font-weight: var(--paragraphFontWeight, 500);\r
  line-height: var(--paragraphLineHeight, 1.5);\r
}\r
\r
.styles-module_footer__0lM5Y {\r
  display: flex;\r
  flex-direction: var(--footerDirection, row);\r
  justify-content: var(--buttonsAlign, flex-end);\r
  gap: .5rem;\r
  margin-block-start: auto;\r
  padding-block-start: 1rem;\r
}\r
\r
.styles-module_footer__0lM5Y button {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  padding: .5rem 1rem;\r
  font-family: inherit;\r
  font-size: .875rem;\r
  font-weight: 500;\r
  line-height: var(--actionButtonLineHeight, 1.71);\r
  border: none;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition:\r
    color .15s, background-color .15s,\r
    border-color .15s, outline-color .15s, box-shadow .15s;\r
}\r
\r
.styles-module_footer__0lM5Y button:disabled {\r
  pointer-events: none;\r
  opacity: .32;\r
}\r
\r
.styles-module_footerStretch__Pvoje button {\r
  flex: 1;\r
}\r
\r
.styles-module_confirmButton__3eAkF {\r
  color: var(--confirmButtonColorScheme);\r
  background-color: var(--confirmButtonBgColorScheme);\r
}\r
\r
.styles-module_confirmButton__3eAkF:hover,\r
.styles-module_confirmButton__3eAkF:focus-visible {\r
  background-color: var(--confirmButtonHoverBgColorScheme);\r
}\r
\r
.styles-module_confirmButton__3eAkF:active {\r
  background-color: var(--confirmButtonActiveBgColorScheme);\r
}\r
\r
.styles-module_cancelButton__uWYiO {\r
  color: var(--cancelButtonColorScheme);\r
  background-color: var(--cancelButtonBgColorScheme);\r
}\r
\r
.styles-module_cancelButton__uWYiO:hover,\r
.styles-module_cancelButton__uWYiO:focus-visible {\r
  background-color: var(--cancelButtonHoverBgColorScheme);\r
}\r
\r
.styles-module_cancelButton__uWYiO:active {\r
  background-color: var(--cancelButtonActiveBgColorScheme);\r
}\r
`,l={light:"styles-module_light__-Yxpk",dark:"styles-module_dark__iZs3I",dialog:"styles-module_dialog__qMeos",inner:"styles-module_inner__I39Du",header:"styles-module_header__2msgj",title:"styles-module_title__Vedzp",closeButton:"styles-module_closeButton__hbqbL",body:"styles-module_body__u1SN8",footer:"styles-module_footer__0lM5Y",footerStretch:"styles-module_footerStretch__Pvoje",confirmButton:"styles-module_confirmButton__3eAkF",cancelButton:"styles-module_cancelButton__uWYiO"};no(ro);const lo=o=>o?o==="center"?{"--buttonsAlign":o}:o==="start"||o==="end"?{"--buttonsAlign":`flex-${o}`}:o==="between"||o==="around"||o==="evenly"?{"--buttonsAlign":`space-${o}`}:{}:{},W=(o,e)=>{let t={};return o&&(t=Object.assign({},o)),e&&(t=Object.assign(Object.assign({},o),{order:e})),t},u=o=>{let e="";if(!o||Object.keys(o).length===0)return e;for(const[t,n]of Object.entries(o))e=e.concat(`${t}: ${n} !important; `);return e.trim()},co=(o,e)=>o.map(t=>t.value.length>0?t.type==="hover"?`
.${e[t.className]}${t.className==="footer"?" button":""}:hover,
.${e[t.className]}${t.className==="footer"?" button":""}:focus-visible {
  ${t.value}
}`:`
.${e[t.className]}${t.className==="footer"?" button":""}:active {
  ${t.value}
}`:"").join(""),ao=(o,e)=>{const t=u(e.buttonsHoverStyles),n=u(e.buttonsActiveStyles),r=u(e.confirmButtonHoverStyles),a=u(e.confirmButtonActiveStyles),s=u(e.cancelButtonHoverStyles),h=u(e.cancelButtonActiveStyles),_=u(e.closeButtonHoverStyles),m=u(e.closeButtonActiveStyles);return co([{type:"hover",className:"footer",value:t},{type:"active",className:"footer",value:n},{type:"hover",className:"confirmButton",value:r},{type:"active",className:"confirmButton",value:a},{type:"hover",className:"cancelButton",value:s},{type:"active",className:"cancelButton",value:h},{type:"hover",className:"closeButton",value:_},{type:"active",className:"closeButton",value:m}],o)},A=({isDialogOpen:o,setIsDialogOpen:e,escKeyAction:t,closeButtonAction:n,confirmButtonAction:r,cancelButtonAction:a,dialogCloseAction:s,children:h,theme:_="light",dialogClassNames:m,innerClassNames:g,headerClassNames:S,titleClassNames:C,closeButtonClassNames:k,bodyClassNames:x,footerClassNames:b,confirmButtonClassNames:H,cancelButtonClassNames:D,title:$,confirmButtonText:O,cancelButtonText:E,showCloseButton:R=!0,closeOnClickOutside:P=!1,isConfirmButtonDisabled:T=!1,isCancelButtonDisabled:Z=!1,minWidth:K,width:J,maxWidth:G,minHeight:Q,height:X,maxHeight:ee,padding:oe,fontFamily:te,surfaceColor:ne,onSurfaceColor:re,border:le,borderRadius:ce,outline:ae,boxShadow:se,titleFontSize:ie,titleFontWeight:ue,titleFontStyle:de,titleLineHeight:me,dialogStyles:fe,headerStyles:he,bodyStyles:_e,footerStyles:ve,footerDirection:ge,buttonsAlign:N,buttonsStyles:F,buttonsHoverStyles:be,buttonsActiveStyles:ye,confirmButtonStyles:pe,confirmButtonHoverStyles:Be,confirmButtonActiveStyles:Se,confirmButtonAriaLabel:Ce,confirmButtonOrder:ke,cancelButtonStyles:xe,cancelButtonHoverStyles:$e,cancelButtonActiveStyles:Oe,cancelButtonAriaLabel:Ee,cancelButtonOrder:je,closeButtonStyles:Ae,closeButtonHoverStyles:we,closeButtonActiveStyles:He,closeButtonIcon:L,closeButtonIconStyles:De,closeButtonAriaLabel:Re="close dialog",additionalFooterButtons:j})=>{const f=i.useRef(null),y=i.useRef(null);i.useEffect(()=>{f.current&&o&&f.current.showModal(),f.current&&!o&&f.current.close()},[f,o]),i.useEffect(()=>{if(P){const q=Ke=>{y.current&&!y.current.contains(Ke.target)&&e(!1)};return document.addEventListener("pointerdown",q),()=>{document.removeEventListener("pointerdown",q)}}},[y]);const Ne=Object.assign(Object.assign({},fe),{"--minWidth":K,"--width":J,"--maxWidth":G,"--fontFamily":te,"--surfaceColor":ne,"--onSurfaceColor":re,"--border":le,"--borderRadius":ce,"--outline":ae,"--boxShadow":se}),Fe={"--minHeight":Q,"--height":X,"--maxHeight":ee,"--padding":oe},Le={"--titleFontSize":ie,"--titleFontWeight":ue,"--titleFontStyle":de,"--titleLineHeight":me},Me=lo(N),qe=W(pe,ke),We=W(xe,je),M=ao(l,{buttonsHoverStyles:be,buttonsActiveStyles:ye,confirmButtonHoverStyles:Be,confirmButtonActiveStyles:Se,cancelButtonHoverStyles:$e,cancelButtonActiveStyles:Oe,closeButtonHoverStyles:we,closeButtonActiveStyles:He}),Ye=Object.assign(Object.assign(Object.assign({},Me),ve),{"--footerDirection":ge}),Ve=Object.assign(Object.assign({},F),qe),Ie=Object.assign(Object.assign({},F),We),Ue=()=>{s&&s()},ze=()=>{t&&t(),e(!1)},Pe=()=>{n&&n(),e(!1)},Te=()=>{r&&r(),e(!1)},Ze=()=>{a&&a(),e(!1)};return c.createElement("dialog",{ref:f,style:Ne,onCancel:ze,onClose:Ue,className:`${l[_]} ${l.dialog}${m?` ${m}`:""}`},M&&c.createElement("style",null,M),c.createElement("div",{ref:y,style:Fe,className:`${l.inner}${g?` ${g}`:""}`},($||R)&&c.createElement("header",{style:he,className:`${l.header}${S?` ${S}`:""}`},$&&c.createElement("h1",{style:Le,className:`${l.title}${C?` ${C}`:""}`},$),R&&c.createElement("button",{type:"button",style:Ae,onClick:Pe,"aria-label":Re,className:`${l.closeButton}${k?` ${k}`:""}`},L||c.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",style:De},c.createElement("path",{d:"M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z"})))),h&&c.createElement("div",{style:_e,className:`${l.body}${x?` ${x}`:""}`},h),(O||E||j)&&c.createElement("footer",{style:Ye,className:N==="stretch"?`${l.footer} ${l.footerStretch}${b?` ${b}`:""}`:`${l.footer}${b?` ${b}`:""}`},j&&j,E&&c.createElement("button",{type:"button",style:Ie,onClick:Ze,disabled:Z,"aria-label":Ee,className:`${l.cancelButton}${D?` ${D}`:""}`},E),O&&c.createElement("button",{type:"button",style:Ve,onClick:Te,disabled:T,"aria-label":Ce,className:`${l.confirmButton}${H?` ${H}`:""}`},O))))},uo={title:"Components",component:A,parameters:{layout:"centered"}},so=()=>{const[o,e]=i.useState(!1),[t,n]=i.useState(!1),[r,a]=i.useState(!1),[s,h]=i.useState(!1),_=()=>{e(!0)},m=()=>{n(!0)};return v(to,{children:[v("div",{style:{display:"flex",gap:"2rem"},children:[d("button",{type:"button",onClick:_,children:"Open styled dialog"}),d("button",{type:"button",onClick:m,children:"Open simplest dialog"})]}),v(A,{isDialogOpen:o,setIsDialogOpen:e,title:"Hello mate!",confirmButtonText:"Ok, thanks",cancelButtonText:"Cancel",escKeyAction:()=>{document.body.style.background="#fff"},dialogCloseAction:()=>{console.log("Dialog closed")},closeButtonAction:()=>{document.body.style.background="#eee"},confirmButtonAction:()=>{document.body.style.background="#e3faec"},cancelButtonAction:()=>{document.body.style.background="#ffecfb"},isConfirmButtonDisabled:r,isCancelButtonDisabled:s,children:[d("p",{children:"This is your new simple modal window."}),v("p",{style:{textWrap:"balance"},children:["Now you can use all benefits of the native ",d("code",{children:"<dialog />"})," element!"]}),v("p",{children:["To open next dialog",d("button",{type:"button",onClick:m,style:{marginLeft:".5rem"},children:"Click this button"})]})]}),d(A,{isDialogOpen:t,setIsDialogOpen:n,children:d("p",{children:"Bye React Portal :Ь"})})]})},p={render:()=>d(so,{})};var Y,V,I;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <DialogWithHooks />
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const mo=["DialogReact"];export{p as DialogReact,mo as __namedExportsOrder,uo as default};
//# sourceMappingURL=Dialog.stories-f0de891b.js.map
