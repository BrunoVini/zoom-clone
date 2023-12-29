import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiText, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [mode, setMode] = useState<EuiThemeColorMode | undefined>('dark');

  useEffect(() => {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersColorScheme.matches) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
    , []);

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
