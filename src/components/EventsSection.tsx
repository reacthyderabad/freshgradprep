import { Box, Typography, Button, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { eventsContent } from '../data/eventsContent';

const EventsSection = () => {
  return (
    <Box
      id="events"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{ color: 'primary.main', mb: 6 }}
      >
        {eventsContent.title}
      </Typography>

      {eventsContent.events.map((event) => (
        <Box
          key={event.name}
          sx={{
            maxWidth: 900,
            mx: 'auto',
            p: { xs: 4, md: 6 },
            borderRadius: 1,
            bgcolor: 'background.paper',
            boxShadow: 2,
            textAlign: 'left',
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              mb: 3,
            }}
          >
            {event.name}
          </Typography>

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
                {event.timings}
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
                {event.venue}
              </Typography>
            </Stack>
          </Stack>

          {event.registrationOpen ? (
            <Button
              variant="contained"
              color="highlight"
              href={event.registrationLink}
              target="_blank"
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
              {event.registrationLabel}
            </Button>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontStyle: 'italic' }}
            >
              RSVP to be announced soon
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default EventsSection;
