/**
 * SAMPLE COMPONENT
 *
 * This is a reference component showing the exact patterns used in this project.
 * New contributors should study this file to understand:
 *
 *  1. File layout order: imports → interfaces → component → export
 *  2. How to import content from a data file
 *  3. How to use MUI components with the sx prop
 *  4. How to use theme colors (never hardcode hex values)
 *  5. How to build responsive layouts with Grid
 *  6. How to render arrays with .map()
 *  7. How to structure a section with semantic HTML and accessibility
 *  8. How to use the section background alternation pattern
 *
 * This component is included in LandingPage.tsx just below the Navbar
 * so you can see it rendered in the browser.
 *
 * When you are done reviewing, remove it from LandingPage.tsx.
 */

// --- 1. IMPORTS ---
// MUI components
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
} from '@mui/material';
// Data import (content lives separately from the component)
import { sampleData } from '../data/sampleData';

// --- 2. COMPONENT (arrow function, no React.FC) ---
const SampleComponent = () => {
  return (
    // Semantic section with id for smooth scroll and aria-label for accessibility
    <Box
      component="section"
      id="sample"
      aria-label="Sample section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'secondary.main',
      }}
    >
      {/* Container constrains content to max-width (defaults to 'lg') */}
      <Container>
        {/* Section title — uses theme color, responsive font size */}
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {sampleData.sectionTitle}
        </Typography>

        {/* Section subtitle */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {sampleData.sectionSubtitle}
        </Typography>

        {/* Responsive grid of cards — rendered dynamically from data */}
        <Grid container spacing={3}>
          {sampleData.cards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Chip/badge using accent color */}
                  <Chip
                    label={card.tag}
                    size="small"
                    sx={{
                      backgroundColor: 'accent.light',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      mb: 2,
                    }}
                  />

                  {/* Card title — uses primary color */}
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {card.title}
                  </Typography>

                  {/* Card description — uses secondary text color */}
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA button — uses highlight color for primary actions */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            href={sampleData.ctaHref}
            sx={{
              backgroundColor: 'highlight.main',
              '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
            }}
          >
            {sampleData.ctaLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// --- 3. DEFAULT EXPORT ---
export default SampleComponent;
