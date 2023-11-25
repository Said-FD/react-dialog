import { useEffect, useRef } from 'react';
import { IDialog, IStyle, IUserStylesMap } from './types';
import { getFooterButtonsAlign, getButtonStyles, getStyleElementCSS } from './utils';
import styles from './Dialog.module.css';

export const Dialog = ({
  isDialogOpen,
  setIsDialogOpen,
  escKeyAction,
  closeButtonAction,
  confirmButtonAction,
  cancelButtonAction,
  dialogCloseAction,
  children,
  theme = 'light',
  dialogClassNames,
  innerClassNames,
  headerClassNames,
  titleClassNames,
  closeButtonClassNames,
  bodyClassNames,
  footerClassNames,
  confirmButtonClassNames,
  cancelButtonClassNames,
  title,
  showCloseButton = true,
  confirmButtonText,
  cancelButtonText,
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
  additionalFooterButtons,
}: IDialog) => {
  const dialogRef = useRef < HTMLDialogElement | null > (null);

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
  } as IStyle;

  const innerUserStyles = {
    '--minHeight': minHeight,
    '--height': height,
    '--maxHeight': maxHeight,
    '--padding': padding,
  } as IStyle;

  const titleUserStyles = {
    '--titleFontSize': titleFontSize,
    '--titleFontWeight': titleFontWeight,
    '--titleFontStyle': titleFontStyle,
    '--titleLineHeight': titleLineHeight,
  } as IStyle;

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
  } as IUserStylesMap);

  const footerUserStyles = {
    ...footerButtonsAlign,
    ...footerStyles,
    '--footerDirection': footerDirection,
  } as IStyle;

  const confirmButtonUserStyles = {
    ...buttonsStyles,
    ...confirmActionButtonStyles,
  };

  const cancelButtonUserStyles = {
    ...buttonsStyles,
    ...cancelActionButtonStyles,
  };

  const handleCloseEvent = () => {
    if (dialogCloseAction) dialogCloseAction();
  };

  const handleEscape = () => {
    if (escKeyAction) escKeyAction();
    setIsDialogOpen(false);
  };

  const handleClose = () => {
    if (closeButtonAction) closeButtonAction();
    setIsDialogOpen(false);
  };

  const handleConfirm = () => {
    if (confirmButtonAction) confirmButtonAction();
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    if (cancelButtonAction) cancelButtonAction();
    setIsDialogOpen(false);
  };

  return (
    <dialog
      ref={dialogRef}
      style={dialogUserStyles}
      onCancel={handleEscape}
      onClose={handleCloseEvent}
      className={`${styles[theme]} ${styles.dialog}${dialogClassNames
        ? ` ${dialogClassNames}` : ''}`}
    >
      {styleElementCss && (
        <style>{styleElementCss}</style>
      )}
      <div
        style={innerUserStyles}
        className={`${styles.inner}${innerClassNames
          ? ` ${innerClassNames}` : ''}`}
      >
        {(title || showCloseButton) && (
          <header
            style={headerStyles}
            className={`${styles.header}${headerClassNames
              ? ` ${headerClassNames}` : ''}`}
          >
            {title && (
              <h1
                style={titleUserStyles}
                className={`${styles.title}${titleClassNames
                  ? ` ${titleClassNames}` : ''}`}
              >
                {title}
              </h1>
            )}
            {showCloseButton && (
              <button
                type="button"
                style={closeButtonStyles}
                onClick={handleClose}
                aria-label={closeButtonAriaLabel}
                className={`${styles.closeButton}${closeButtonClassNames
                  ? ` ${closeButtonClassNames}` : ''}`}
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
          <div
            style={bodyStyles}
            className={`${styles.body}${bodyClassNames
              ? ` ${bodyClassNames}` : ''}`}
          >
            {children}
          </div>
        )}
        {(confirmButtonText || cancelButtonText || additionalFooterButtons) && (
          <footer
            style={footerUserStyles}
            className={buttonsAlign === 'stretch'
              ? `${styles.footer} ${styles.footerStretch}${footerClassNames
                ? ` ${footerClassNames}` : ''}`
              : `${styles.footer}${footerClassNames
                ? ` ${footerClassNames}` : ''}`
            }
          >
            {additionalFooterButtons && additionalFooterButtons}
            {cancelButtonText && (
              <button
                type="button"
                style={cancelButtonUserStyles}
                onClick={handleCancel}
                disabled={isCancelButtonDisabled}
                aria-label={cancelButtonAriaLabel}
                className={`${styles.cancelButton}${cancelButtonClassNames
                  ? ` ${cancelButtonClassNames}` : ''}`}
              >
                {cancelButtonText}
              </button>
            )}
            {confirmButtonText && (
              <button
                type="button"
                style={confirmButtonUserStyles}
                onClick={handleConfirm}
                disabled={isConfirmButtonDisabled}
                aria-label={confirmButtonAriaLabel}
                className={`${styles.confirmButton}${confirmButtonClassNames
                  ? ` ${confirmButtonClassNames}` : ''}`}
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
