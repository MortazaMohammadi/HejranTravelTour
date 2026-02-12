import React from 'react';
import Header from '@layouts/Header';
import { ThemeProvider } from '@utils/ThemeContext';
import { Box, Typography } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const theme = useMuiTheme();

  return (
    <ThemeProvider>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.primary.main }}>
                {t('hero.welcome')}
              </Typography>

              <Typography variant="h6" sx={{ mb: 8, color: theme.palette.text.secondary.main }}>
                {t('hero.subtitle')}
              </Typography>

              <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, p: 6, maxWidth: 900, mx: 'auto' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
                  {t('hero.whyChoose')}
                </Typography>

                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <Box sx={{ p: 4 }}>
                    <div className="text-3xl mb-2">✈️</div>
                    <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>{t('features.expertPlanning')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('features.expertDesc')}</Typography>
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <div className="text-3xl mb-2">🌍</div>
                    <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>{t('features.globalDestinations')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('features.globalDesc')}</Typography>
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <div className="text-3xl mb-2">💎</div>
                    <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>{t('features.premiumService')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('features.premiumDesc')}</Typography>
                  </Box>
                </div>
              </Box>
            </div>
          </div>
        </main>
      </Box>
    </ThemeProvider>
  );
}

export default App;