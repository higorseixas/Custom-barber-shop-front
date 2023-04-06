export interface InputProps {
  display?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  cursor?: string;
  border?: string;
  marginLeft?: string;
  marginBottom?: string;
  borderRadius?: string;
  transition?: string;
}

export interface InputLoginProps extends InputProps {
  hoverBorderRadius?: string;
  hoverTransition?: string;
  hoverBoxShadow?: string;
  focusOutline?: string;
  focusBoxShadow?: string;
}