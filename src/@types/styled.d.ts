import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    black: string;
    gray: string;
    'background-gray': string;
    'blue-primary': string;
    'yellow-secondary': string;
    'orange-alternative': string;
    'border-gray': string;
    'container-colors': string;
  }
}