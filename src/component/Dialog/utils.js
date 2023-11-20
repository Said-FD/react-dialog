export const getFooterButtonsAlign = align => {
  if (!align) return {};
  if (align === 'center') return { '--buttonsAlign': align };
  if (align === 'start' || align === 'end') return { '--buttonsAlign': `flex-${align}` };
  if (align === 'between' || align === 'around' || align === 'evenly') return { '--buttonsAlign': `space-${align}` };
  return {};
};

export const getButtonStyles = (styles, order) => {
  let buttonStyles = {};
  if (styles) buttonStyles = { ...styles };
  if (order) buttonStyles = { ...styles, order };
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
      return style.type === 'hover' ? (`
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:hover,
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:focus-visible {
  ${style.value}
}`) : (`
.${classNames[style.className]}${style.className === 'footer' ? ' button' : ''}:active {
  ${style.value}
}`);
    }
  }).join('');
};

export const getStyleElementCSS = (classNames, userStyles) => {
  const buttonsHoverValues = convertToVanillaCSS(userStyles.buttonsHoverStyles);
  const buttonsActiveValues = convertToVanillaCSS(userStyles.buttonsActiveStyles);
  const confirmButtonHoverValues = convertToVanillaCSS(userStyles.confirmButtonHoverStyles);
  const confirmButtonActiveValues = convertToVanillaCSS(userStyles.confirmButtonActiveStyles);
  const cancelButtonHoverValues = convertToVanillaCSS(userStyles.cancelButtonHoverStyles);
  const cancelButtonActiveValues = convertToVanillaCSS(userStyles.cancelButtonActiveStyles);
  const closeButtonHoverValues = convertToVanillaCSS(userStyles.closeButtonHoverStyles);
  const closeButtonActiveValues = convertToVanillaCSS(userStyles.closeButtonActiveStyles);
  const styles = [
    { type: 'hover', className: 'footer', value: buttonsHoverValues },
    { type: 'active', className: 'footer', value: buttonsActiveValues },
    { type: 'hover', className: 'confirmButton', value: confirmButtonHoverValues },
    { type: 'active', className: 'confirmButton', value: confirmButtonActiveValues },
    { type: 'hover', className: 'cancelButton', value: cancelButtonHoverValues },
    { type: 'active', className: 'cancelButton', value: cancelButtonActiveValues },
    { type: 'hover', className: 'closeButton', value: closeButtonHoverValues },
    { type: 'active', className: 'closeButton', value: closeButtonActiveValues },
  ];
  return mergeVanillaCSS(styles, classNames);
};
