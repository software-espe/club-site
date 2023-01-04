export type SizeProps =
  | { size: number; width?: never; height?: never }
  | { size?: never; width: number; height: number }
  | { size?: never; width?: never; height?: never };
