import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { footerContent } from '../data/footerContent';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'primary.main',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{ color: '#ffffff', fontWeight: 700, mb: 1.5 }}
            >
              {footerContent.brand}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, maxWidth: 280 }}
            >
              {footerContent.tagline}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              Founded by {footerContent.founder}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, fontSize: '0.95rem' }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {footerContent.quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.875rem',
                    '&:hover': { color: 'accent.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, fontSize: '0.95rem' }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              {footerContent.serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.875rem',
                    '&:hover': { color: 'accent.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, fontSize: '0.95rem' }}
            >
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {footerContent.contactEmail}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {footerContent.contactWhatsApp}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />

        {/* Footer row 1: Copyright */}
        <Typography
          variant="caption"
          sx={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', display: 'block' }}
        >
          {footerContent.copyright}
        </Typography>

        {/* Footer row 2: Made with love */}
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            fontSize: '1rem',
            mt: 4,
          }}
        >
          Made with{' '}
          <FavoriteIcon sx={{ fontSize: 18, color: 'highlight.main' }} />{' '}
          in India by the{' '}
          <Link
            href={footerContent.communityLink.href}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              textDecorationColor: 'rgba(255,255,255,0.5)',
              '&:hover': { color: 'rgba(255,255,255,0.8)', textDecorationColor: 'rgba(255,255,255,0.8)' },
              transition: 'color 0.2s',
            }}
          >
            {footerContent.communityLink.label}
          </Link>
          {' '}community
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
