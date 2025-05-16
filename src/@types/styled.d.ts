import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      colors: {
        white: string;
        black: string;
        'navy-blue': string;
        'blue-grotto': string;
        'green-blue': string;
        'baby-blue': string;
      },

      spacing: {
        headerPadding : string;
        gap: string 
      }
  }
}