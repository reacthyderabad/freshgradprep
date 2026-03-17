// 1. Imports
import { Box, Typography, Button, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// 2. Interfaces
interface EventItem {
  title: string;
  date: string;
  time: string;
  mode: string;
  location: string;
  cta: string;
}

// 3. Component
const EventsSection = () => {
  const event: EventItem = {
    title: 'How Hiring Actually Works (From the Other Side of the Table)',
    date: '22nd Mar, 2026',
    time: '4 PM to 6 PM',
    mode: 'Offline',
    location: 'TBA',
    cta: 'RSVP Open',
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{ color: 'primary.main', mb: 6 }}
      >
        Upcoming Events
      </Typography>

      {/* Card */}
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          p: { xs: 4, md: 6 },
          borderRadius: 1,
          bgcolor: 'background.paper',
          boxShadow: 2,
          textAlign: 'left',
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            mb: 3,
          }}
        >
          {event.title}
        </Typography>

        {/* Details */}
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarTodayIcon sx={{ color: 'accent.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.date}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTimeIcon sx={{ color: 'accent.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.time}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <WifiOffIcon sx={{ color: 'accent.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.mode}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnIcon sx={{ color: 'accent.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {event.location}
            </Typography>
          </Stack>
        </Stack>

        {/* CTA */}
        <Button
  variant="contained"
  color="highlight"
  sx={{
    px: 4,
    py: 1.2,
    fontWeight: 600,
    '&:hover': {
      color: '#646cff',
      backgroundColor: 'highlight.main',
    },
    '&:active': {
      color: '#646cff',          
      backgroundColor: 'highlight.main',
    },
    '&:focus': {
      color: '#646cff',
      outline: 'none',
    },
  }}
>
  {event.cta}
</Button>
      </Box>
    </Box>
  );
};

// 4. Export
export default EventsSection;
