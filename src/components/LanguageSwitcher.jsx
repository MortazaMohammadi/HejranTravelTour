import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const currentKey = i18n.language === 'fa' ? 'persian' : i18n.language === 'ps' ? 'pashto' : 'english';

  return (
    <>
      <Button
        color="inherit"
        startIcon={<LanguageIcon />}
        onClick={handleOpen}
        sx={{ gap: 1, textTransform: 'none', minWidth: 120 }}
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {t(`language.${currentKey}`)}
      </Button>
      <Menu id="lang-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage('en')}>{t('language.english')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('fa')}>{t('language.persian')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('ps')}>{t('language.pashto')}</MenuItem>
      </Menu>
    </>
  );
}
