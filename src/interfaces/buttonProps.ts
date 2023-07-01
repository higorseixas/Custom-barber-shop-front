export interface ButtonProps {
  display?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  margin?: string;
  width?: string;
  cursor?: string;
  border?: string;
  marginLeft?: string;
  marginBottom?: string;
  hoverBackgroundColor?: string;

  span?: {
    marginLeft?: string;
  };
}

export interface PasswordRevealButtonProps extends ButtonProps {
  right?: string;
  marginBottom?: string;
  position?: string;
  borderRadius?: string;
  display?: string;
  transition?: string;
}

export interface PasswordRecoverButtonProps extends ButtonProps {
  outline?: string;
  textDecoration?: string;
}