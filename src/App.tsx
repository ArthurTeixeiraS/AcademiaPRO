import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './Pages/Login';
import { DashBoard } from './Pages/DashBoard';
import { CadastroModalidade } from './Pages/CadastroModalidade';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/cadastro-modalidade" element={<CadastroModalidade />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
