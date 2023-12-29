import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiText, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [mode, setMode] = useState<EuiThemeColorMode | undefined>('dark');
  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" }
    }
  }

  return (
    <EuiProvider colorMode={mode}>
      <EuiThemeProvider modify={overrides}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
