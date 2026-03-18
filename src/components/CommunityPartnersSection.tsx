import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Stack,
  IconButton,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { communityPartnersContent } from '../data/communityPartnersContent';
import reactHydLogo from '../assets/ReactHydLandscapeLogo.jpg';

const logoMap: Record<string, string> = {
  'ReactHydLandscapeLogo.jpg': reactHydLogo,
};

const socialIcons = [
  { key: 'website', icon: <LanguageIcon />, label: 'Website' },
  { key: 'linkedin', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { key: 'instagram', icon: <InstagramIcon />, label: 'Instagram' },
  { key: 'x', icon: <XIcon />, label: 'X' },
  { key: 'youtube', icon: <YouTubeIcon />, label: 'YouTube' },
  { key: 'whatsapp', icon: <WhatsAppIcon />, label: 'WhatsApp' },
] as const;

const CommunityPartnersSection = () => {
  return (
    <Box
      component="section"
      aria-label="Community partners"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'secondary.main',
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
          {communityPartnersContent.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            maxWidth: 520,
            mx: 'auto',
          }}
        >
          {communityPartnersContent.description}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {communityPartnersContent.partners.map((partner) => (
            <Grid key={partner.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {partner.logoPath && logoMap[partner.logoPath] ? (
                    <Box
                      component="img"
                      src={logoMap[partner.logoPath]}
                      alt={partner.name}
                      sx={{
                        display: 'block',
                        height: 80,
                        maxWidth: '100%',
                        objectFit: 'contain',
                        mx: 'auto',
                        mb: 2,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        height: 80,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        backgroundColor: 'secondary.main',
                        borderRadius: 1,
                      }}
                    >
                      <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {partner.name.charAt(0)}
                      </Typography>
                    </Box>
                  )}

                  <Typography
                    variant="h6"
                    sx={{ color: 'primary.main', mb: 2 }}
                  >
                    {partner.name}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.5}
                    justifyContent="center"
                    flexWrap="wrap"
                  >
                    {socialIcons.map(({ key, icon, label }) => {
                      const url = partner.socials[key as keyof typeof partner.socials];
                      if (!url) return null;
                      return (
                        <IconButton
                          key={key}
                          component="a"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${partner.name} ${label}`}
                          sx={{
                            color: 'primary.main',
                            '&:hover': { color: 'accent.main' },
                          }}
                        >
                          {icon}
                        </IconButton>
                      );
                    })}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunityPartnersSection;
