import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { founderContent } from '../data/founderContent';
import bhargaviPic from '../assets/BhargaviPic.png';

const FounderSection = () => {
  return (
    <Box
      component="section"
      id="founder"
      aria-label="About the founder"
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
            mb: 6,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {founderContent.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <Box
              component="img"
              src={bhargaviPic}
              alt={founderContent.name}
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                borderRadius: '50%',
                border: '4px solid',
                borderColor: 'accent.main',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />

            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              {founderContent.linkedin && (
                <IconButton
                  component="a"
                  href={founderContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{ color: 'accent.main', '&:hover': { color: 'accent.dark' } }}
                >
                  <LinkedInIcon />
                </IconButton>
              )}
              {founderContent.instagram && (
                <IconButton
                  component="a"
                  href={founderContent.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{ color: 'accent.main', '&:hover': { color: 'accent.dark' } }}
                >
                  <InstagramIcon />
                </IconButton>
              )}
            </Stack>
          </Box>

          {/* Bio content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ color: 'primary.main', mb: 0.5, fontSize: { xs: '1.5rem', md: '1.75rem' } }}
            >
              {founderContent.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'accent.main', fontWeight: 600, mb: 3 }}
            >
              {founderContent.role}
            </Typography>

            {founderContent.bio.map((paragraph, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{ color: 'text.secondary', mb: 2 }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FounderSection;
