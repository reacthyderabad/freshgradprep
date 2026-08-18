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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { servicesContent } from '../data/servicesContent';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesContent.services[0] | null>(null);
  const activeService = selectedService;

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
          {servicesContent.services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
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
                      onClick={() => setSelectedService(service)}
                      sx={{
                        whiteSpace: 'nowrap',
                        backgroundColor: 'highlight.main',
                        '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
                      }}
                    >
                      View More
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>



        <Dialog
          open={Boolean(activeService)}
          onClose={() => setSelectedService(null)}
          fullWidth
          maxWidth="sm"
          aria-labelledby="service-dialog-title"
          sx={{
            '& .MuiDialog-paper': {
              borderRadius: 2,
              p: 1,
            },
          }}
        >
          {activeService && (
            <>
              <DialogTitle id="service-dialog-title" sx={{ m: 0, p: 2, pr: 6, position: 'relative' }}>
                <Typography variant="h5" component="div" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  {activeService.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={() => setSelectedService(null)}
                  sx={{
                    position: 'absolute',
                    right: 12,
                    top: 12,
                    color: 'text.secondary',
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent sx={{ p: 2, pt: 0 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                  <Chip
                    label={activeService.duration}
                    size="small"
                    sx={{
                      backgroundColor: 'accent.light',
                      color: 'accent.main',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  />
                </Stack>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {activeService.description}
                </Typography>

                {activeService.subSections && activeService.subSections.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    {activeService.subSections.map((sub) => (
                      <Box key={sub.title} sx={{ mb: 2 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}
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

                {activeService.highlights && activeService.highlights.map((section) => (
                  <Box key={section.label} sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}
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

                {activeService.footer && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      display: 'block',
                      mt: 2,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {activeService.footer}
                  </Typography>
                )}
              </DialogContent>

              <DialogActions sx={{ p: 2, pt: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  {activeService.originalPrice ? (
                    <>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.disabled',
                            textDecoration: 'line-through',
                            fontWeight: 500,
                          }}
                        >
                          {activeService.originalPrice}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ color: 'primary.main', fontWeight: 700 }}
                        >
                          {activeService.price}
                        </Typography>
                      </Stack>
                      {activeService.offerLabel && (
                        <Chip
                          label={activeService.offerLabel}
                          size="small"
                          color="success"
                          sx={{ mt: 0.5, fontWeight: 600, fontSize: '0.7rem' }}
                        />
                      )}
                    </>
                  ) : (
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                      }}
                    >
                      {activeService.price}
                    </Typography>
                  )}
                </Box>
                <Button
                  variant="contained"
                  href={activeService.ctaHref}
                  onClick={() => setSelectedService(null)}
                  sx={{
                    whiteSpace: 'nowrap',
                    backgroundColor: 'highlight.main',
                    '&:hover': { backgroundColor: 'highlight.dark', opacity: 0.9 },
                    borderRadius: 2,
                  }}
                >
                  {activeService.ctaLabel}
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ServicesSection;
