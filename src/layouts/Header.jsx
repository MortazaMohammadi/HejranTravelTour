import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme as useAppTheme } from '@utils/ThemeContext';

// Small header components
import Logo from '@components/Logo';
import NavLinks from '@components/NavLinks';
import ThemeToggle from '@components/ThemeToggle';
import LanguageSwitcher from '@components/LanguageSwitcher';
import CallButton from '@components/CallButton';
import MobileMenu from '@components/MobileMenu';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('lg'));

  const { mode, toggleTheme } = useAppTheme();

  const openMobileMenu = () => setMobileOpen(true);
  const closeMobileMenu = () => setMobileOpen(false);

  const handleLangOpen = (e) => setLangAnchor(e.currentTarget);
  const handleLangClose = () => setLangAnchor(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLangClose();
  };

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'destinations', href: '#destinations' },
    { key: 'tours', href: '#tours' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Logo />
          </Box>

          {!isMobile ? (
            <>
              <NavLinks items={menuItems} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <ThemeToggle />
                <LanguageSwitcher />
                <CallButton />
              </Box>
            </>
          ) : (
            <>
              <IconButton color="inherit" onClick={openMobileMenu} aria-label="open menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </IconButton>
              <MobileMenu open={mobileOpen} onClose={closeMobileMenu} items={menuItems} mode={mode} toggleTheme={toggleTheme} onLangOpen={handleLangOpen} />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;