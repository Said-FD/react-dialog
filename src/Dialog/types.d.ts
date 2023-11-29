import { ReactNode, SetStateAction } from "react";

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

export type IStyle = {
  [key: string]: string | number;
}

export type IUserStylesMap = {
  [key: string]: IStyle;
}

export type IStyleElementCSSMap = {
  type: string;
  className: string;
  value: string;
}

export type IDialog = {
  isDialogOpen: boolean;
  setIsDialogOpen: (arg: SetStateAction<boolean>) => void;
  escKeyAction?: () => void;
  closeButtonAction?: () => void;
  confirmButtonAction?: () => void;
  cancelButtonAction?: () => void;
  dialogCloseAction?: () => void;
  children?: ReactNode;
  theme?: string,
  dialogClassNames?: string;
  innerClassNames?: string;
  headerClassNames?: string;
  titleClassNames?: string;
  closeButtonClassNames?: string;
  bodyClassNames?: string;
  footerClassNames?: string;
  confirmButtonClassNames?: string;
  cancelButtonClassNames?: string;
  title?: string | ReactNode;
  confirmButtonText?: string | ReactNode;
  cancelButtonText?: string | ReactNode;
  showCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  isConfirmButtonDisabled?: boolean;
  isCancelButtonDisabled?: boolean;
  minWidth?: string;
  width?: string;
  maxWidth?: string;
  minHeight?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  fontFamily?: string;
  surfaceColor?: string;
  onSurfaceColor?: string;
  border?: string;
  borderRadius?: string;
  outline?: string;
  boxShadow?: string;
  titleFontSize?: string;
  titleFontWeight?: string;
  titleFontStyle?: string;
  titleLineHeight?: string;
  dialogStyles?: IStyle;
  headerStyles?: IStyle;
  bodyStyles?: IStyle;
  footerStyles?: IStyle;
  footerDirection?: string;
  buttonsAlign?: string;
  buttonsStyles?: IStyle;
  buttonsHoverStyles?: IStyle;
  buttonsActiveStyles?: IStyle;
  confirmButtonStyles?: IStyle;
  confirmButtonHoverStyles?: IStyle;
  confirmButtonActiveStyles?: IStyle;
  confirmButtonAriaLabel?: string;
  confirmButtonOrder?: number;
  cancelButtonStyles?: IStyle;
  cancelButtonHoverStyles?: IStyle;
  cancelButtonActiveStyles?: IStyle;
  cancelButtonAriaLabel?: string;
  cancelButtonOrder?: number;
  closeButtonStyles?: IStyle;
  closeButtonHoverStyles?: IStyle;
  closeButtonActiveStyles?: IStyle;
  closeButtonIcon?: string | ReactNode;
  closeButtonIconStyles?: IStyle;
  closeButtonAriaLabel?: string;
  additionalFooterButtons?: ReactNode;
}
