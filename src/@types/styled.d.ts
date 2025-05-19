import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      colors: {
        background: string;
        black: string;
        'primary': string;
        'secondary': string;
        'success': string;
        'error': string;
        'metrics': string;
        'font-primary': string;
        'font-secondary': string;
      },

      spacing: {
        headerPadding : string;
        gap: string 
      }
  }
}