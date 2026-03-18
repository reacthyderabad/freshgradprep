import { Box, Typography, Button, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import { bookingContent } from "../data/bookingContent";

const BookingSection = () => {
  const { title, description, primaryCta, secondaryCta, whatsappNumber } =
    bookingContent;

  return (
    <Box
      id="booking"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "440px",
          mx: "auto",

          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25px",
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.6)",
          mb: 4,
        }}
      >
        {description}
      </Typography>

      {/* Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        {/* Calendly Button */}
        <Button
          variant="contained"
          href={primaryCta.href}
          target="_blank"
          startIcon={<CalendarMonthIcon />}
          sx={{
            backgroundColor: "#E0A648",
            color: "white",
            px: 3,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#c88d35",
            },
          }}
        >
          {primaryCta.label}
        </Button>

        {/* WhatsApp Button */}
        <Button
          variant="outlined"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          startIcon={<WhatsAppIcon />}
          sx={{
            borderColor: "white",
            color: "white",
            px: 3,
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          {secondaryCta.label}
        </Button>

        {/* Email Button */}
        <Button
          variant="outlined"
          href="mailto:freshgradprep@gmail.com"
          startIcon={<EmailIcon />}
          sx={{
            borderColor: "white",
            color: "white",
            px: 3,
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          Email Us
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingSection;
