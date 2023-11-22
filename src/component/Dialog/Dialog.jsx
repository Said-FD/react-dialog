import React, { useEffect, useRef } from 'react';
import { getFooterButtonsAlign, getButtonStyles, getStyleElementCSS } from './utils';
import styles from './Dialog.module.css';

export const Dialog = ({
  isDialogOpen,
  setIsDialogOpen,
  children,
  theme = 'light', // -
  additionalClassNames, // -
  title,
  showCloseButton = true,
  confirmButtonText,
  confirmButtonAction,
  cancelButtonText,
  cancelButtonAction,
  isConfirmButtonDisabled = false,
  isCancelButtonDisabled = false,
  minWidth, // -
  width, // -
  maxWidth, // -
  minHeight, // -
  height, // -
  maxHeight, // -
  padding, // -
  fontFamily, // -
  surfaceColor, // -
  onSurfaceColor, // -
  border, // -
  borderRadius, // -
  outline, // -
  boxShadow, // -
  titleFontSize, // -
  titleFontWeight, // -
  titleFontStyle, // -
  titleLineHeight, // -
  dialogStyles, // -
  headerStyles, // -
  bodyStyles, // -
  footerStyles, // -
  footerDirection, // -
  buttonsAlign, // -
  buttonsStyles, // -
  buttonsHoverStyles, // -
  buttonsActiveStyles, // -
  confirmButtonStyles, // -
  confirmButtonHoverStyles, // -
  confirmButtonActiveStyles, // -
  confirmButtonAriaLabel,
  confirmButtonOrder, // -
  cancelButtonStyles, // -
  cancelButtonHoverStyles, // -
  cancelButtonActiveStyles, // -
  cancelButtonAriaLabel,
  cancelButtonOrder, // -
  closeButtonStyles, // -
  closeButtonHoverStyles, // -
  closeButtonActiveStyles, // -
  closeButtonIcon,
  closeButtonIconStyles, // -
  closeButtonAriaLabel = 'close dialog',
  additionalFooterButtons,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
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
    '--boxShadow': boxShadow,
  };

  const innerStyles = {
    '--minHeight': minHeight,
    '--height': height,
    '--maxHeight': maxHeight,
    '--padding': padding,
  };

  const titleStyles = {
    '--titleFontSize': titleFontSize,
    '--titleFontWeight': titleFontWeight,
    '--titleFontStyle': titleFontStyle,
    '--titleLineHeight': titleLineHeight,
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
    closeButtonActiveStyles,
  });

  const footerUserStyles = {
    ...footerButtonsAlign,
    ...footerStyles,
    '--footerDirection': footerDirection,
  };

  const confirmButtonUserStyles = {
    ...buttonsStyles,
    ...confirmActionButtonStyles,
  };

  const cancelButtonUserStyles = {
    ...buttonsStyles,
    ...cancelActionButtonStyles,
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

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleDialogClose}
      className={`${styles[theme]} ${styles.dialog}${additionalClassNames ? ` ${additionalClassNames}` : ''}`}
      style={dialogUserStyles}
    >
      {styleElementCss && (
        <style>{styleElementCss}</style>
      )}
      <div className={styles.inner} style={innerStyles}>
        {(title || showCloseButton) && (
          <header className={styles.header} style={headerStyles}>
            {title && (
              <h1 className={styles.title} style={titleStyles}>
                {title}
              </h1>
            )}
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleDialogClose}
                style={closeButtonStyles}
                aria-label={closeButtonAriaLabel}
              >
                {closeButtonIcon ? (
                  closeButtonIcon
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={closeButtonIconStyles}>
                    <path d="M7.147 7.91 2.854 3.463l.959-.926 4.277 4.43 4.105-4.105.943.943-4.122 4.121 4.13 4.278-.959.926-4.113-4.26-4.27 4.268-.942-.943L7.147 7.91Z" />
                  </svg>
                )}
              </button>
            )}
          </header>
        )}
        {children && (
          <div className={styles.body} style={bodyStyles}>
            {children}
          </div>
        )}
        {(confirmButtonText || cancelButtonText || additionalFooterButtons) && (
          <footer
            className={
              buttonsAlign === 'stretch'
                ? `${styles.footer} ${styles.footerStretch}`
                : styles.footer
            }
            style={footerUserStyles}
          >
            {additionalFooterButtons && additionalFooterButtons}
            {cancelButtonText && (
              <button
                type="button"
                className={styles.cancelButton}
                style={cancelButtonUserStyles}
                onClick={handleCancel}
                disabled={isCancelButtonDisabled}
                aria-label={cancelButtonAriaLabel}
              >
                {cancelButtonText}
              </button>
            )}
            {confirmButtonText && (
              <button
                type="button"
                className={styles.confirmButton}
                style={confirmButtonUserStyles}
                onClick={handleConfirm}
                disabled={isConfirmButtonDisabled}
                aria-label={confirmButtonAriaLabel}
              >
                {confirmButtonText}
              </button>
            )}
          </footer>
        )}
      </div>
    </dialog>
  );
};
