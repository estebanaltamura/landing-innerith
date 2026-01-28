interface IColor {
  primary: string
  secondary: string
  'brand-brand': string
  'grey-brand': string
  white: string
  black: string
}

export const colors: IColor = {
  primary: '#F4822B',
  secondary: '#105B85',
  'brand-brand': '#231F1F',
  'grey-brand': '#404040',
  white: '#FFFFFF',
  black: '#000000',
} as const

export type ColorName = keyof typeof colors
