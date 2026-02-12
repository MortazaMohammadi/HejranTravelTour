import React from 'react';
import { Box, Typography } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Logo({ sx }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx }}>
      <FlightTakeoff sx={{ fontSize: 28, flexShrink: 0 }} aria-hidden />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.1rem', md: '1.4rem' },
          background: 'linear-gradient(45deg, #fff 30%, #f5f5f5 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        aria-label={t('brand.name')}
      >
        {t('brand.name')}
      </Typography>
    </Box>
  );
}
