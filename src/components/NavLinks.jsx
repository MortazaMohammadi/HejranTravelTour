import React from 'react';
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function NavLinks({ items = [], sx }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ...sx }}>
      {items.map((it) => (
        <Button
          key={it.key}
          color="inherit"
          href={it.href}
          sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' } }}
        >
          {t(`nav.${it.key}`)}
        </Button>
      ))}
    </Box>
  );
}
