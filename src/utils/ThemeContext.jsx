import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Get theme from localStorage or default to light
    const savedMode = localStorage.getItem('theme');
    return savedMode || 'light';
  });

  // track language so we can update MUI typography when language changes
  const [lang, setLang] = useState(() => {
    return document.documentElement.lang || 'en';
  });

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  // update `lang` when i18n changes so theme typography updates
  useEffect(() => {
    const handleLangChange = () => setLang(document.documentElement.lang || 'en');
    window.addEventListener('languagechange', handleLangChange);
    return () => window.removeEventListener('languagechange', handleLangChange);
  }, []);

  // choose font-family based on current language
  const fontFamilyForLang = lang.startsWith('fa')
    ? '"Vazirmatn", "Noto Sans Arabic", Roboto, "Helvetica", Arial, sans-serif'
    : lang.startsWith('ps')
    ? '"Noto Sans Arabic", "Vazirmatn", Roboto, "Helvetica", Arial, sans-serif'
    : '"Roboto", "Helvetica", "Arial", sans-serif';

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9', // Blue
      },
      secondary: {
        main: '#ff6b35', // Orange/Coral (same for both modes)
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
        secondary: mode === 'light' ? '#666666' : '#cccccc',
      },
    },
    typography: {
      fontFamily: fontFamilyForLang,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#1976d2' : '#333333',
          },
        },
      },
    },
  });

  useEffect(() => {
    // Apply theme to document for Tailwind CSS
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};