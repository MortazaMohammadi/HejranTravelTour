import React from 'react';
import { Button } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function CallButton({ sx, href = '#contact' }) {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<Phone />}
      sx={{ gap: 1.5, '& .MuiButton-startIcon': { mr: 1.5 }, backgroundColor: '#ff6b35', '&:hover': { backgroundColor: '#e55a2b' }, ...sx }}
      href={href}
    >
      {t('nav.callNow')}
    </Button>
  );
}
