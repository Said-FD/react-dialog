'use strict';

var React = require('react');

const getFooterButtonsAlign = align => {
  if (!align) return {};
  if (align === 'center') return {
    '--buttonsAlign': align
  };
  if (align === 'start' || align === 'end') return {
    '--buttonsAlign': `flex-${align}`
  };
  if (align === 'between' || align === 'around' || align === 'evenly') return {
    '--buttonsAlign': `space-${align}`
  };
  return {};
};
const getButtonStyles = (styles, order) => {
  let buttonStyles = {};
  if (styles) buttonStyles = {
    ...styles
  };
  if (order) buttonStyles = {
    ...styles,
    order
  };
  return buttonStyles;
};
const convertToVanillaCSS = styles => {
  let values = '';
  if (!styles || Object.keys(styles).length === 0) return values;
  for (const [key, value] of Object.entries(styles)) {
    values = values.concat(`${key}: ${value} !important; `);
  }
  return values.trim();
};
const mergeVanillaCSS = (styles, classNames) => {
  return styles.map(style => {
    if (style.value.length > 0) {
      return style.type === 'hover' ? `
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:hover,
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:focus-visible {
  ${style.value}
}` : `
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:active {
  ${style.value}
}`;
    }
  }).join('');
};
const getStyleElementCSS = (classNames, userStyles) => {
  const buttonsHoverValues = convertToVanillaCSS(userStyles.buttonsHoverStyles);
  const buttonsActiveValues = convertToVanillaCSS(userStyles.buttonsActiveStyles);
  const confirmButtonHoverValues = convertToVanillaCSS(userStyles.confirmButtonHoverStyles);
  const confirmButtonActiveValues = convertToVanillaCSS(userStyles.confirmButtonActiveStyles);
  const cancelButtonHoverValues = convertToVanillaCSS(userStyles.cancelButtonHoverStyles);
  const cancelButtonActiveValues = convertToVanillaCSS(userStyles.cancelButtonActiveStyles);
  const closeButtonHoverValues = convertToVanillaCSS(userStyles.closeButtonHoverStyles);
  const closeButtonActiveValues = convertToVanillaCSS(userStyles.closeButtonActiveStyles);
  const styles = [{
    type: 'hover',
    className: 'footer',
    value: buttonsHoverValues
  }, {
    type: 'active',
    className: 'footer',
    value: buttonsActiveValues
  }, {
    type: 'hover',
    className: 'confirmButton',
    value: confirmButtonHoverValues
  }, {
    type: 'active',
    className: 'confirmButton',
    value: confirmButtonActiveValues
  }, {
    type: 'hover',
    className: 'cancelButton',
    value: cancelButtonHoverValues
  }, {
    type: 'active',
    className: 'cancelButton',
    value: cancelButtonActiveValues
  }, {
    type: 'hover',
    className: 'closeButton',
    value: closeButtonHoverValues
  }, {
    type: 'active',
    className: 'closeButton',
    value: closeButtonActiveValues
  }];
  return mergeVanillaCSS(styles, classNames);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Dialog-module_light__g0Dgi{--surfaceColorScheme:var(--surfaceColor,#fff);--onSurfaceColorScheme:var(--onSurfaceColor,#141414);--closeButtonColorScheme:#3d3d3d;--closeButtonHoverColorScheme:#f5f5f5;--closeButtonActiveColorScheme:#ebebeb;--confirmButtonColorScheme:var(--surfaceColor,#fff);--confirmButtonBgColorScheme:var(--onSurfaceColor,#141414);--confirmButtonHoverBgColorScheme:#3a3a3a;--confirmButtonActiveBgColorScheme:var(--onSurfaceColor,#141414);--cancelButtonColorScheme:var(--onSurfaceColor,#141414);--cancelButtonBgColorScheme:#f5f5f5;--cancelButtonHoverBgColorScheme:#ebebeb;--cancelButtonActiveBgColorScheme:#e0e0e0;color-scheme:light}.Dialog-module_light__g0Dgi::backdrop{--overlayScheme:var(--dialogBackdropColor,rgba(0,0,0,.32))}.Dialog-module_dark__74UI5{--surfaceColorScheme:var(--surfaceColor,#292929);--onSurfaceColorScheme:var(--onSurfaceColor,#e0e0e0);--closeButtonColorScheme:#d6d6d6;--closeButtonHoverColorScheme:#3a3a3a;--closeButtonActiveColorScheme:#141414;--confirmButtonColorScheme:#141414;--confirmButtonBgColorScheme:#f5f5f5;--confirmButtonHoverBgColorScheme:#ebebeb;--confirmButtonActiveBgColorScheme:var(--onSurfaceColor,#e0e0e0);--cancelButtonColorScheme:var(--onSurfaceColor,#e0e0e0);--cancelButtonBgColorScheme:#1f1f1f;--cancelButtonHoverBgColorScheme:#3a3a3a;--cancelButtonActiveBgColorScheme:#141414;color-scheme:dark}.Dialog-module_dark__74UI5::backdrop{--overlayScheme:var(--dialogBackdropColor,rgba(0,0,0,.48))}.Dialog-module_dialog__-Ih1r,.Dialog-module_dialog__-Ih1r *,.Dialog-module_dialog__-Ih1r :after,.Dialog-module_dialog__-Ih1r :before,.Dialog-module_dialog__-Ih1r:after,.Dialog-module_dialog__-Ih1r:before{box-sizing:border-box}.Dialog-module_dialog__-Ih1r{background-color:var(--surfaceColorScheme);border:var(--border);border-radius:var(--borderRadius,8px);box-shadow:var(--boxShadow);color:var(--onSurfaceColorScheme);font-family:var(--fontFamily,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Ubuntu,\"Helvetica Neue\",sans-serif);max-width:var(--maxWidth,95dvw);min-width:var(--minWidth,320px);outline:var(--outline);padding:0;width:var(--width,380px)}.Dialog-module_dialog__-Ih1r::backdrop{background-color:var(--overlayScheme)}.Dialog-module_inner__StB35{display:flex;flex-direction:column;height:var(--height,auto);max-height:var(--maxHeight);min-height:var(--minHeight);padding:var(--padding,1rem);position:relative}.Dialog-module_header__NquNN{align-items:flex-start;display:flex;gap:1rem}.Dialog-module_title__Vuwbv{text-wrap:balance;font-size:var(--titleFontSize,1.125rem);font-style:var(--titleFontStyle,normal);font-weight:var(--titleFontWeight,700);line-height:var(--titleLineHeight,1.33);margin:0;padding-block-end:1rem}.Dialog-module_closeButton__U4biQ{align-items:center;background-color:transparent;border:none;border-radius:var(--closeButtonBorderRadius,4px);color:var(--closeButtonColorScheme);cursor:pointer;display:flex;justify-content:center;margin-inline-start:auto;padding:.5rem;position:relative;right:-.5rem;top:-.5rem;transition:color .15s,background-color .15s,border-color .15s,outline-color .15s,box-shadow .15s}.Dialog-module_closeButton__U4biQ:focus-visible,.Dialog-module_closeButton__U4biQ:hover{background-color:var(--closeButtonHoverColorScheme)}.Dialog-module_closeButton__U4biQ:active{background-color:var(--closeButtonActiveColorScheme)}.Dialog-module_body__m4hYo{padding-block-end:1rem}.Dialog-module_dialog__-Ih1r p{font-weight:var(--paragraphFontWeight,500);line-height:var(--paragraphLineHeight,1.5);margin-block:0}.Dialog-module_footer__cVAfM{display:flex;flex-direction:var(--footerDirection,row);gap:.5rem;justify-content:var(--buttonsAlign,flex-end);margin-block-start:auto;padding-block-start:1rem}.Dialog-module_footer__cVAfM button{align-items:center;border:none;border-radius:4px;cursor:pointer;display:flex;font-family:inherit;font-size:.875rem;font-weight:500;justify-content:center;line-height:var(--actionButtonLineHeight,1.71);padding:.5rem 1rem;transition:color .15s,background-color .15s,border-color .15s,outline-color .15s,box-shadow .15s}.Dialog-module_footer__cVAfM button:disabled{opacity:.32;pointer-events:none}.Dialog-module_footerStretch__LKrHd button{flex:1}.Dialog-module_confirmButton__2uneb{background-color:var(--confirmButtonBgColorScheme);color:var(--confirmButtonColorScheme)}.Dialog-module_confirmButton__2uneb:focus-visible,.Dialog-module_confirmButton__2uneb:hover{background-color:var(--confirmButtonHoverBgColorScheme)}.Dialog-module_confirmButton__2uneb:active{background-color:var(--confirmButtonActiveBgColorScheme)}.Dialog-module_cancelButton__5EEMw{background-color:var(--cancelButtonBgColorScheme);color:var(--cancelButtonColorScheme)}.Dialog-module_cancelButton__5EEMw:focus-visible,.Dialog-module_cancelButton__5EEMw:hover{background-color:var(--cancelButtonHoverBgColorScheme)}.Dialog-module_cancelButton__5EEMw:active{background-color:var(--cancelButtonActiveBgColorScheme)}";
var styles = {"light":"Dialog-module_light__g0Dgi","dark":"Dialog-module_dark__74UI5","dialog":"Dialog-module_dialog__-Ih1r","inner":"Dialog-module_inner__StB35","header":"Dialog-module_header__NquNN","title":"Dialog-module_title__Vuwbv","closeButton":"Dialog-module_closeButton__U4biQ","body":"Dialog-module_body__m4hYo","footer":"Dialog-module_footer__cVAfM","footerStretch":"Dialog-module_footerStretch__LKrHd","confirmButton":"Dialog-module_confirmButton__2uneb","cancelButton":"Dialog-module_cancelButton__5EEMw"};
styleInject(css_248z);

const Dialog = ({
  isDialogOpen,
  setIsDialogOpen,
  children,
  theme = 'light',
  additionalClassNames,
  title,
  showCloseButton = true,
  confirmButtonText,
  confirmButtonAction,
  cancelButtonText,
  cancelButtonAction,
  isConfirmButtonDisabled = false,
  isCancelButtonDisabled = false,
  minWidth,
  width,
  maxWidth,
  minHeight,
  height,
  maxHeight,
  padding,
  fontFamily,
  surfaceColor,
  onSurfaceColor,
  border,
  borderRadius,
  outline,
  boxShadow,
  titleFontSize,
  titleFontWeight,
  titleFontStyle,
  titleLineHeight,
  dialogStyles,
  headerStyles,
  bodyStyles,
  footerStyles,
  footerDirection,
  buttonsAlign,
  buttonsStyles,
  buttonsHoverStyles,
  buttonsActiveStyles,
  confirmButtonStyles,
  confirmButtonHoverStyles,
  confirmButtonActiveStyles,
  confirmButtonAriaLabel,
  confirmButtonOrder,
  cancelButtonStyles,
  cancelButtonHoverStyles,
  cancelButtonActiveStyles,
  cancelButtonAriaLabel,
  cancelButtonOrder,
  closeButtonStyles,
  closeButtonHoverStyles,
  closeButtonActiveStyles,
  closeButtonIcon,
  closeButtonIconStyles,
  closeButtonAriaLabel = 'close dialog',
  additionalFooterButtons
}) => {
  const dialogRef = React.useRef(null);
  React.useEffect(() => {
    if (dialogRef && isDialogOpen) dialogRef.current?.showModal();
    if (dialogRef && !isDialogOpen) dialogRef.current?.close();
  }, [isDialogOpen, dialogRef]);
  const dialogUserStyles = {
    ...dialogStyles,
    '--minWidth': minWidth,
    '--width': width,
    '--maxWidth': maxWidth,
    '--fontFamily': fontFamily,
    '--surfaceColor': surfaceColor,
    '--onSurfaceColor': onSurfaceColor,
    '--border': border,
    '--borderRadius': borderRadius,
    '--outline': outline,
    '--boxShadow': boxShadow
  };
  const innerStyles = {
    '--minHeight': minHeight,
    '--height': height,
    '--maxHeight': maxHeight,
    '--padding': padding
  };
  const titleStyles = {
    '--titleFontSize': titleFontSize,
    '--titleFontWeight': titleFontWeight,
    '--titleFontStyle': titleFontStyle,
    '--titleLineHeight': titleLineHeight
  };
  const footerButtonsAlign = getFooterButtonsAlign(buttonsAlign);
  const confirmActionButtonStyles = getButtonStyles(confirmButtonStyles, confirmButtonOrder);
  const cancelActionButtonStyles = getButtonStyles(cancelButtonStyles, cancelButtonOrder);
  const styleElementCss = getStyleElementCSS(styles, {
    buttonsHoverStyles,
    buttonsActiveStyles,
    confirmButtonHoverStyles,
    confirmButtonActiveStyles,
    cancelButtonHoverStyles,
    cancelButtonActiveStyles,
    closeButtonHoverStyles,
    closeButtonActiveStyles
  });
  const footerUserStyles = {
    ...footerButtonsAlign,
    ...footerStyles,
    '--footerDirection': footerDirection
  };
  const confirmButtonUserStyles = {
    ...buttonsStyles,
    ...confirmActionButtonStyles
  };
  const cancelButtonUserStyles = {
    ...buttonsStyles,
    ...cancelActionButtonStyles
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleConfirm = () => {
    if (confirmButtonAction) confirmButtonAction();
    handleDialogClose();
  };
  const handleCancel = () => {
    if (cancelButtonAction) cancelButtonAction();
    handleDialogClose();
  };
  return /*#__PURE__*/React.createElement("dialog", {
    ref: dialogRef,
    onCancel: handleDialogClose,
    className: `${styles[theme]} ${styles.dialog}${additionalClassNames ? ` ${additionalClassNames}` : ''}`,
    style: dialogUserStyles
  }, styleElementCss && /*#__PURE__*/React.createElement("style", null, styleElementCss), /*#__PURE__*/React.createElement("div", {
    className: styles.inner,
    style: innerStyles
  }, (title || showCloseButton) && /*#__PURE__*/React.createElement("header", {
    className: styles.header,
    style: headerStyles
  }, title && /*#__PURE__*/React.createElement("h1", {
    className: styles.title,
    style: titleStyles
  }, title), showCloseButton && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles.closeButton,
    onClick: handleDialogClose,
    style: closeButtonStyles,
    "aria-label": closeButtonAriaLabel
  }, closeButtonIcon ? closeButtonIcon : /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    style: closeButtonIconStyles
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z"
  })))), children && /*#__PURE__*/React.createElement("div", {
    className: styles.body,
    style: bodyStyles
  }, children), (confirmButtonText || cancelButtonText || additionalFooterButtons) && /*#__PURE__*/React.createElement("footer", {
    className: buttonsAlign === 'stretch' ? `${styles.footer} ${styles.footerStretch}` : styles.footer,
    style: footerUserStyles
  }, additionalFooterButtons && additionalFooterButtons, cancelButtonText && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles.cancelButton,
    style: cancelButtonUserStyles,
    onClick: handleCancel,
    disabled: isCancelButtonDisabled,
    "aria-label": cancelButtonAriaLabel
  }, cancelButtonText), confirmButtonText && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: styles.confirmButton,
    style: confirmButtonUserStyles,
    onClick: handleConfirm,
    disabled: isConfirmButtonDisabled,
    "aria-label": confirmButtonAriaLabel
  }, confirmButtonText))));
};

exports.Dialog = Dialog;
