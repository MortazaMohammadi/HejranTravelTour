import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme as useAppTheme } from '@utils/ThemeContext';

export default function ThemeToggle(props) {
  const { mode, toggleTheme } = useAppTheme();
  return (
    <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme" {...props}>
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
