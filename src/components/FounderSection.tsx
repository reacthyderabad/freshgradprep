// 1. Imports
import { Box, Typography, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { founderContent } from '../data/founderContent';

// 2. Interfaces
interface FounderSectionProps {}

// 3. Component
const FounderSection = ({}: FounderSectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: '#F5F1E8',
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 8,
            color: '#1E3A8A',
          }}
        >
          {founderContent.title}
        </Typography>

        {/* Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 8,
            alignItems: 'center',
          }}
        >
          {/* LEFT - Image */}
          <Box
            sx={{
              flex: '0 0 320px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                border: '4px solid #D9A441',
                backgroundColor: '#E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Founder photo
              </Typography>
            </Box>
          </Box>

          {/* RIGHT - Content */}
          <Box sx={{ flex: 1 }}>
            {/* Name */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#1E3A8A',
                mb: 1,
              }}
            >
              {founderContent.name}
            </Typography>

            {/* Role */}
            <Typography
              variant="body2"
              sx={{
                color: '#D9A441',
                mb: 3,
                fontWeight: 500,
              }}
            >
              {founderContent.role}
            </Typography>

            {/* Paragraphs */}
            {founderContent.bio.map((para, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                {para}
              </Typography>
            ))}

            {/* Bullet Points */}
            <Box sx={{ mt: 3 }}>
              {[
                '9 years of hiring experience',
                'Practical, recruiter-backed perspective',
                'Focused on strategic positioning',
                'Helping people find career clarity',
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1.5,
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: '#D9A441',
                      fontSize: 18,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: '#1E3A8A', fontWeight: 500 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// 4. Export
export default FounderSection;