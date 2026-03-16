import { Box, Typography, Container, Fade } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { aboutContent } from '../data/aboutContent';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: `${theme.palette.primary.main}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3.5rem' },
                mb: 4,
                background: `white`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'slideInUp 1s ease-out',
                '@keyframes slideInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              {aboutContent.title}
            </Typography>

            <Box sx={{ mb: 6 }}>
              {aboutContent.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    mb: index < aboutContent.paragraphs.length - 1 ? 3 : 0,
                    maxWidth: '800px',
                    mx: 'auto',
                    animation: `fadeInUp 1s ease-out ${index * 0.2 + 0.5}s both`,
                    '@keyframes fadeInUp': {
                      from: {
                        opacity: 0,
                        transform: 'translateY(20px)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
              }}
            >
              {aboutContent.highlights.map((highlight, index) => (
                <Fade in={isVisible} timeout={1000} style={{ transitionDelay: `${index * 100 + 1000}ms` }}>
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '50px',
                      px: 3,
                      py: 1.5,
                      border: `1px solid rgba(255, 255, 255, 0.2)`,
                      transition: 'all 0.2s ease-out',
                      transform: 'translateY(0)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-1px) scale(1.01)',
                        backgroundColor: 'rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                    }}
                  >
                    <CheckCircleOutline
                      sx={{
                        color: theme.palette.accent.main,
                        fontSize: '1.5rem',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 500,
                        color: 'white',
                      }}
                    >
                      {highlight}
                    </Typography>
                  </Box>
                </Fade>
              ))}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
