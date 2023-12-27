import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiText, EuiThemeColorMode } from '@elastic/eui';
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

  return (
    <EuiProvider colorMode={mode}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </EuiProvider>
  );
}

export default App;
