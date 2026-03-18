import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { servicesContent } from '../data/servicesContent';

const INITIAL_VISIBLE = 2;
const STEP = 2;

const ServicesSection = () => {
  const totalServices = servicesContent.services.length;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleServices = servicesContent.services.slice(0, visibleCount);
  const allVisible = visibleCount >= totalServices;

  const handleToggle = () => {
    if (allVisible) {
      setVisibleCount(INITIAL_VISIBLE);
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount((prev) => Math.min(prev + STEP, totalServices));
    }
  };

  return (
    <Box
      component="section"
      id="services"
      aria-label="Services offered"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: 'primary.main',
            mb: 2,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {servicesContent.title}
        </Typography>
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
          Practical, recruiter-backed services designed to give you real career clarity.
        </Typography>

        <Grid container spacing={3}>
          {visibleServices.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                    {service.title}
                  </Typography>

                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                    <Chip
                      label={service.duration}
                      size="small"
                      sx={{
                        backgroundColor: 'accent.light',
                        color: 'accent.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', mb: 2 }}
                  >
                    {service.description}
                  </Typography>

                  {service.subSections && service.subSections.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      {service.subSections.map((sub) => (
                        <Box key={sub.title} sx={{ mb: 1.5 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700, color: 'text.primary' }}
                          >
                            {sub.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {sub.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {service.highlights.map((section) => (
                    <Box key={section.label} sx={{ mb: 1.5 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, color: 'text.primary' }}
                      >
                        {section.label}
                      </Typography>
                      <List dense disablePadding sx={{ pl: 1 }}>
                        {section.items.map((item) => (
                          <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
                            <ListItemText
                              primary={`• ${item}`}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}

                  {service.footer && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        display: 'block',
                        mb: 2,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {service.footer}
                    </Typography>
                  )}

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 'auto', pt: 2 }}
                  >
                    <Box>
                      {service.originalPrice ? (
                        <>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography
                              variant="h5"
                              component="span"
                              sx={{
                                color: 'text.disabled',
                                textDecoration: 'line-through',
                                fontWeight: 500,
                              }}
                            >
                              {service.originalPrice}
                            </Typography>
                            <Typography
                              variant="h4"
                              component="span"
                              sx={{ color: 'primary.main', fontWeight: 700 }}
                            >
                              {service.price}
                            </Typography>
                          </Stack>
                          {service.offerLabel && (
                            <Chip
                              label={service.offerLabel}
                              size="small"
                              color="success"
                              sx={{ mt: 0.5, fontWeight: 600, fontSize: '0.7rem' }}
                            />
                          )}
                        </>
                      ) : (
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                          }}
                        >
                          {service.price}
                        </Typography>
                      )}
                    </Box>
                    <Button
                      variant="contained"
                      href={service.ctaHref}
                      sx={{
                        whiteSpace: 'nowrap',
                        backgroundColor: 'highlight.main',
                        '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
                      }}
                    >
                      {service.ctaLabel}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {totalServices > INITIAL_VISIBLE && (
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="text" color="primary" onClick={handleToggle}>
              {allVisible ? 'Show Less' : 'View More'}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServicesSection;
