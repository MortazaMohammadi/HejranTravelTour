import React from 'react';
import { Drawer, Box, Divider, List, ListItemButton, ListItemText, Button } from '@mui/material';
import { Phone, FlightTakeoff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function MobileMenu({ open, onClose, items = [], mode, toggleTheme, onLangOpen }) {
  const { t } = useTranslation();
  return (
    <Drawer anchor="top" open={open} onClose={onClose} PaperProps={{ sx: { width: '100%', borderRadius: 0 } }}>
      <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FlightTakeoff />
          <Box component="span" sx={{ fontWeight: 700 }}>{t('brand.name')}</Box>
        </Box>
        <Box>
          <Button onClick={toggleTheme} color="inherit">{mode === 'dark' ? t('theme.light') : t('theme.dark')}</Button>
          <Button onClick={onLangOpen} color="inherit">{t('language.' + (document.documentElement.lang === 'en' ? 'persian' : 'english'))}</Button>
        </Box>
      </Box>
      <Divider />
      <List disablePadding>
        {items.map((it) => (
          <ListItemButton key={it.key} component="a" href={it.href} onClick={onClose} sx={{ py: 3 }}>
            <ListItemText primary={t(`nav.${it.key}`)} primaryTypographyProps={{ align: 'center', variant: 'h6' }} />
          </ListItemButton>
        ))}
        <ListItemButton onClick={onClose} sx={{ py: 3 }}>
          <ListItemText primary={t('nav.search')} primaryTypographyProps={{ align: 'center', variant: 'h6' }} />
        </ListItemButton>
        <ListItemButton component="a" href="#contact" onClick={onClose} sx={{ py: 3 }}>
          <ListItemText primary={t('nav.callNow')} primaryTypographyProps={{ align: 'center', variant: 'h6', sx: { color: 'secondary.main', fontWeight: 700 } }} />
        </ListItemButton>
      </List>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="secondary" startIcon={<Phone />} sx={{ width: '90%', gap: 1.5 }} href="#contact">{t('nav.callNow')}</Button>
      </Box>
    </Drawer>
  );
}
