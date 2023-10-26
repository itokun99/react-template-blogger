export type VariantType =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'secondary'
  | 'primary';

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;
export type ButtonVariant = 'contained' | 'outline';
export type ButtonRounded = 'square' | 'smooth' | 'pil';
export type ButtonWidth = 'auto' | 'full';

export interface PostLabel {
  title: string;
  url: string;
}
