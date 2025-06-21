//declaração das clores goblais
 
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      colors: {
        background: string;
        black: string;
        'primary': string;
        'primary-hover': string;
        'secondary': string;
        'success': string;
        'error': string;
        'metrics': string;
        'font-primary': string;
        'font-secondary': string;
      }
  }
}