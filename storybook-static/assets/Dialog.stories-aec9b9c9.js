import{r as m,R as c}from"./index-070054a4.js";var U={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=m,Ke=Symbol.for("react.element"),Je=Symbol.for("react.fragment"),Ge=Object.prototype.hasOwnProperty,Qe=Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function z(o,e,t){var n,r={},a=null,s=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)Ge.call(e,n)&&!Xe.hasOwnProperty(n)&&(r[n]=e[n]);if(o&&o.defaultProps)for(n in e=o.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:Ke,type:o,key:a,ref:s,props:r,_owner:Qe.current}}p.Fragment=Je;p.jsx=z;p.jsxs=z;U.exports=p;var w=U.exports;const eo=w.Fragment,u=w.jsx,v=w.jsxs;function oo(o,e){e===void 0&&(e={});var t=e.insertAt;if(!(!o||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}var to=`.styles-module_light__-Yxpk {\r
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
`,l={light:"styles-module_light__-Yxpk",dark:"styles-module_dark__iZs3I",dialog:"styles-module_dialog__qMeos",inner:"styles-module_inner__I39Du",header:"styles-module_header__2msgj",title:"styles-module_title__Vedzp",closeButton:"styles-module_closeButton__hbqbL",body:"styles-module_body__u1SN8",footer:"styles-module_footer__0lM5Y",footerStretch:"styles-module_footerStretch__Pvoje",confirmButton:"styles-module_confirmButton__3eAkF",cancelButton:"styles-module_cancelButton__uWYiO"};oo(to);const no=o=>o?o==="center"?{"--buttonsAlign":o}:o==="start"||o==="end"?{"--buttonsAlign":`flex-${o}`}:o==="between"||o==="around"||o==="evenly"?{"--buttonsAlign":`space-${o}`}:{}:{},L=(o,e)=>{let t={};return o&&(t=Object.assign({},o)),e&&(t=Object.assign(Object.assign({},o),{order:e})),t},i=o=>{let e="";if(!o||Object.keys(o).length===0)return e;for(const[t,n]of Object.entries(o))e=e.concat(`${t}: ${n} !important; `);return e.trim()},ro=(o,e)=>o.map(t=>t.value.length>0?t.type==="hover"?`
.${e[t.className]}${t.className==="footer"?" button":""}:hover,
.${e[t.className]}${t.className==="footer"?" button":""}:focus-visible {
  ${t.value}
}`:`
.${e[t.className]}${t.className==="footer"?" button":""}:active {
  ${t.value}
}`:"").join(""),lo=(o,e)=>{const t=i(e.buttonsHoverStyles),n=i(e.buttonsActiveStyles),r=i(e.confirmButtonHoverStyles),a=i(e.confirmButtonActiveStyles),s=i(e.cancelButtonHoverStyles),h=i(e.cancelButtonActiveStyles),_=i(e.closeButtonHoverStyles),d=i(e.closeButtonActiveStyles);return ro([{type:"hover",className:"footer",value:t},{type:"active",className:"footer",value:n},{type:"hover",className:"confirmButton",value:r},{type:"active",className:"confirmButton",value:a},{type:"hover",className:"cancelButton",value:s},{type:"active",className:"cancelButton",value:h},{type:"hover",className:"closeButton",value:_},{type:"active",className:"closeButton",value:d}],o)},H=({isDialogOpen:o,setIsDialogOpen:e,escKeyAction:t,closeButtonAction:n,confirmButtonAction:r,cancelButtonAction:a,dialogCloseAction:s,children:h,theme:_="light",dialogClassNames:d,innerClassNames:g,headerClassNames:B,titleClassNames:S,closeButtonClassNames:C,bodyClassNames:k,footerClassNames:b,confirmButtonClassNames:D,cancelButtonClassNames:N,title:x,showCloseButton:R=!0,confirmButtonText:$,cancelButtonText:O,isConfirmButtonDisabled:P=!1,isCancelButtonDisabled:T=!1,minWidth:Z,width:K,maxWidth:J,minHeight:G,height:Q,maxHeight:X,padding:ee,fontFamily:oe,surfaceColor:te,onSurfaceColor:ne,border:re,borderRadius:le,outline:ce,boxShadow:ae,titleFontSize:se,titleFontWeight:ie,titleFontStyle:ue,titleLineHeight:de,dialogStyles:me,headerStyles:fe,bodyStyles:he,footerStyles:_e,footerDirection:ve,buttonsAlign:F,buttonsStyles:M,buttonsHoverStyles:ge,buttonsActiveStyles:be,confirmButtonStyles:ye,confirmButtonHoverStyles:pe,confirmButtonActiveStyles:Be,confirmButtonAriaLabel:Se,confirmButtonOrder:Ce,cancelButtonStyles:ke,cancelButtonHoverStyles:xe,cancelButtonActiveStyles:$e,cancelButtonAriaLabel:Oe,cancelButtonOrder:je,closeButtonStyles:Ae,closeButtonHoverStyles:Ee,closeButtonActiveStyles:He,closeButtonIcon:q,closeButtonIconStyles:we,closeButtonAriaLabel:De="close dialog",additionalFooterButtons:j})=>{const f=m.useRef(null);m.useEffect(()=>{var A,E;f&&o&&((A=f.current)===null||A===void 0||A.showModal()),f&&!o&&((E=f.current)===null||E===void 0||E.close())},[o,f]);const Ne=Object.assign(Object.assign({},me),{"--minWidth":Z,"--width":K,"--maxWidth":J,"--fontFamily":oe,"--surfaceColor":te,"--onSurfaceColor":ne,"--border":re,"--borderRadius":le,"--outline":ce,"--boxShadow":ae}),Re={"--minHeight":G,"--height":Q,"--maxHeight":X,"--padding":ee},Fe={"--titleFontSize":se,"--titleFontWeight":ie,"--titleFontStyle":ue,"--titleLineHeight":de},Me=no(F),qe=L(ye,Ce),We=L(ke,je),W=lo(l,{buttonsHoverStyles:ge,buttonsActiveStyles:be,confirmButtonHoverStyles:pe,confirmButtonActiveStyles:Be,cancelButtonHoverStyles:xe,cancelButtonActiveStyles:$e,closeButtonHoverStyles:Ee,closeButtonActiveStyles:He}),Le=Object.assign(Object.assign(Object.assign({},Me),_e),{"--footerDirection":ve}),Ye=Object.assign(Object.assign({},M),qe),Ie=Object.assign(Object.assign({},M),We),Ve=()=>{s&&s()},Ue=()=>{t&&t(),e(!1)},ze=()=>{n&&n(),e(!1)},Pe=()=>{r&&r(),e(!1)},Te=()=>{a&&a(),e(!1)};return c.createElement("dialog",{ref:f,style:Ne,onCancel:Ue,onClose:Ve,className:`${l[_]} ${l.dialog}${d?` ${d}`:""}`},W&&c.createElement("style",null,W),c.createElement("div",{style:Re,className:`${l.inner}${g?` ${g}`:""}`},(x||R)&&c.createElement("header",{style:fe,className:`${l.header}${B?` ${B}`:""}`},x&&c.createElement("h1",{style:Fe,className:`${l.title}${S?` ${S}`:""}`},x),R&&c.createElement("button",{type:"button",style:Ae,onClick:ze,"aria-label":De,className:`${l.closeButton}${C?` ${C}`:""}`},q||c.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",style:we},c.createElement("path",{d:"M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z"})))),h&&c.createElement("div",{style:he,className:`${l.body}${k?` ${k}`:""}`},h),($||O||j)&&c.createElement("footer",{style:Le,className:F==="stretch"?`${l.footer} ${l.footerStretch}${b?` ${b}`:""}`:`${l.footer}${b?` ${b}`:""}`},j&&j,O&&c.createElement("button",{type:"button",style:Ie,onClick:Te,disabled:T,"aria-label":Oe,className:`${l.cancelButton}${N?` ${N}`:""}`},O),$&&c.createElement("button",{type:"button",style:Ye,onClick:Pe,disabled:P,"aria-label":Se,className:`${l.confirmButton}${D?` ${D}`:""}`},$))))},so={title:"Components",component:H,parameters:{layout:"centered"}},co=()=>{const[o,e]=m.useState(!1),[t,n]=m.useState(!1),[r,a]=m.useState(!1),[s,h]=m.useState(!1),_=()=>{e(!0)},d=()=>{n(!0)};return v(eo,{children:[v("div",{style:{display:"flex",gap:"2rem"},children:[u("button",{type:"button",onClick:_,children:"Open styled dialog"}),u("button",{type:"button",onClick:d,children:"Open simplest dialog"})]}),v(H,{isDialogOpen:o,setIsDialogOpen:e,title:"Hello mate!",confirmButtonText:"Ok, thanks",cancelButtonText:"Cancel",escKeyAction:()=>{document.body.style.background="#fff"},dialogCloseAction:()=>{console.log("Dialog closed")},closeButtonAction:()=>{document.body.style.background="#eee"},confirmButtonAction:()=>{document.body.style.background="#e3faec"},cancelButtonAction:()=>{document.body.style.background="#ffecfb"},isConfirmButtonDisabled:r,isCancelButtonDisabled:s,children:[u("p",{children:"This is your new simple modal window."}),v("p",{style:{textWrap:"balance"},children:["Now you can use all benefits of the native ",u("code",{children:"<dialog />"})," element!"]}),v("p",{children:["To open next dialog",u("button",{type:"button",onClick:d,style:{marginLeft:".5rem"},children:"Click this button"})]})]}),u(H,{isDialogOpen:t,setIsDialogOpen:n,children:u("p",{children:"Bye React Portal :Ь"})})]})},y={render:()=>u(co,{})};var Y,I,V;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <DialogWithHooks />
}`,...(V=(I=y.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const io=["DialogReact"];export{y as DialogReact,io as __namedExportsOrder,so as default};
//# sourceMappingURL=Dialog.stories-aec9b9c9.js.map
