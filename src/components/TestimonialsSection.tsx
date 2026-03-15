// 1. Imports
import { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { testimonialsContent } from '../data/testimonialsContent';

// 2. Interfaces
interface Testimonial {
  name: string;
  designation: string;
  content: string[];
}

// 3. Component
const TestimonialsSection = () => {
  const testimonials: Testimonial[] = testimonialsContent.testimonials;

  const [index, setIndex] = useState<number>(0);

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[index];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: 'primary.main', mb: 6 }}
      >
        {testimonialsContent.title}
      </Typography>

      <Box
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          p: { xs: 4, md: 6 },
          borderRadius: 1,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: 2,
        }}
      >
        <FormatQuoteIcon
          sx={{
            fontSize: 60,
            color: 'accent.main',
            mb: 3,
          }}
        />

        {/* Quote text */}
        <Box
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontStyle: 'system-ui',
          }}
        >
          {activeTestimonial.content.map((paragraph, i) => (
  <Typography
    key={i}
    variant="body1"
    sx={{ mb: 2 }}
  >
    {paragraph}
  </Typography>
))}
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
          }}
        >
          {activeTestimonial.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'accent.main' }}
        >
          {activeTestimonial.designation}
        </Typography>
      </Box>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {/* Left arrow */}
        <IconButton
          disableRipple
          onClick={handlePrev}
          sx={{
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '50%',
            width: 44,
            height: 44,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
            },
            '&.Mui-focusVisible': {
              outline: 'none',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Dots */}
        <Stack direction="row" spacing={1}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: i === index ? 'primary.main' : 'divider',
              }}
            />
          ))}
        </Stack>

        {/* Right arrow */}
        <IconButton
          disableRipple
          onClick={handleNext}
          sx={{
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '50%',
            width: 44,
            height: 44,
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:focus': {
              outline: 'none',
            },
            '&.Mui-focusVisible': {
              outline: 'none',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

// 4. Export
export default TestimonialsSection;
