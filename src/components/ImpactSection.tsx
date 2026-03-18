
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { impactContent } from "../data/impactContent";

const ImpactSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          align="center"
          sx={{
            color: "common.white",
            fontSize: { xs: 28, md: 34 },
            fontWeight: 600,
            mb: { xs: 6, md: 10 },
          }}
        >
          {impactContent.title}
        </Typography>

        {/* Stats */}
        <Grid container spacing={6} justifyContent="center">
          {impactContent.stats.map((item) => (
            <Grid size={{ xs: 6, md: 3 }} key={item.label}>
              <Box textAlign="center">
                {/* Number */}
                <Typography
                  sx={{
                    fontSize: { xs: 36, md: 48 },
                    fontWeight: 700,
                    color: "accent.main",
                    lineHeight: 1.1,
                  }}
                >
                  {item.value}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: "#D0D5DD",
                    mt: 1,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default ImpactSection;
