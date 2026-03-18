import {
  Box,
  Typography,
  Button,
  Chip,
  Container,
  Stack,
} from '@mui/material';
import { heroContent } from '../data/heroContent';
import heroImage from '../assets/560.jpg';

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="hero"
      aria-label="Hero"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1, maxWidth: { md: '58%' } }}>
            <Typography
              variant="h1"
              sx={{
                color: 'primary.main',
                mb: 3,
                fontSize: { xs: '2.2rem', sm: '2.75rem', md: '3.25rem' },
              }}
            >
              {heroContent.headline}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                mb: 2,
                maxWidth: 560,
                fontSize: { xs: '1rem', sm: '1.1rem' },
              }}
            >
              {heroContent.subheadline}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'accent.main',
                fontWeight: 600,
                mb: 4,
              }}
            >
              {heroContent.trustLine}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                href={heroContent.primaryCta.href}
                sx={{
                  backgroundColor: 'highlight.main',
                  '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
                }}
              >
                {heroContent.primaryCta.label}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={heroContent.secondaryCta.href}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(4,58,126,0.04)',
                  },
                }}
              >
                {heroContent.secondaryCta.label}
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {heroContent.trustChips.map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  size="small"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Right visual placeholder */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '42%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Career guidance illustration"
              sx={{
                width: '100%',
                maxWidth: 420,
                aspectRatio: '4 / 3',
                borderRadius: 4,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
