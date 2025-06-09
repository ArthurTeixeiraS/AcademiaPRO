import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router.tsx'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
