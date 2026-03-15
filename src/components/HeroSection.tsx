// Imports
import { Box, Typography, Button, Stack, Chip } from '@mui/material';

// Component
const HeroSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 24 },
        py: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 5, md: 6 }
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ maxWidth: { xs: '100%', md: 600 } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 700,
            color: 'primary.main',
            mb: 3
          }}
        >
          Career Clarity Built on Real Hiring Experience
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 400,
            color: 'text.secondary',
            mb: 2
          }}
        >
          FreshGradPrep helps students, fresh graduates, and professionals
          understand how recruitment actually works — so they can position
          themselves strategically in today's job market.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'accent.main',
            fontWeight: 600,
            fontSize: '0.8rem',
            mb: 4
          }}
        >
          Built on real HR insight and 9 years of hiring experience.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            color="highlight"
            sx={{
              width: { xs: '100%', md: 'auto' },
              '&:hover': {
                color: '#646cff',
                backgroundColor: 'highlight.main'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            Book a Career Session
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              width: { xs: '100%', md: 'auto' },
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
          >
            Explore Services
          </Button>
        </Stack>

        {/* Tags */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip
            label="Real HR Insight"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />

          <Chip
            label="Practical Guidance"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />

          <Chip
            label="Structured Clarity"
            variant="outlined"
            sx={{
              fontWeight: 550,
              fontSize: '0.7rem',
              color: 'primary.main',
              backgroundColor: 'secondary.main',
              borderColor: 'secondary.main'
            }}
          />
        </Stack>
      </Box>

      {/* RIGHT IMAGE PLACEHOLDER */}
      <Box
        sx={{
          width: { xs: '100%', md: 450 },
          height: { xs: 220, md: 300 },
          flexShrink: 0,
          order: { xs: 2, md: 0 },
          borderRadius: 4,
          background: 'linear-gradient(to bottom right, #e8e3cc, #fffffff0)',
          border: '2px dashed black',
          borderColor: 'text.secondary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Founder image, brand visual, or illustration
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;

