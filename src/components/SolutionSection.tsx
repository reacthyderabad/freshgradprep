import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { solutionContent } from "../data/solutionContent";
import { freshgradTheme1 } from "../theme/colorThemes";

const SolutionSection = () => {
  const theme = freshgradTheme1;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#ffffff",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: 28, md: 34 },
                fontWeight: 700,
                color: theme.primary,
                mb: 3,
              }}
            >
              {solutionContent.title}
            </Typography>

            {/* Intro */}
            <Typography
              sx={{
                fontSize: 14.5,
                color: "text.secondary",
                lineHeight: 1.6,
                mb: 4,
                maxWidth: 700,
              }}
            >
              {solutionContent.introParagraph}
            </Typography>

            {/* Pain Points */}
            <Box sx={{ mb: 4.5 }}>
              {solutionContent.painPoints.map((point: string) => (
                <Box
                  key={point}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    mb: 2.2,
                  }}
                >
                  <RemoveCircleOutlineIcon
                    sx={{
                      color: theme.highlight,
                      fontSize: 18,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: "text.secondary",
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Gap Statement */}
            <Typography
              sx={{
                fontSize: 15.5,
                fontWeight: 600,
                color: theme.primary,
              }}
            >
              {solutionContent.gapStatement}
            </Typography>
          </Grid>

          {/* RIGHT SIDE CARD */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: theme.secondary,
                borderRadius: "36px",
                px: { xs: 4, md: 6 },
                py: { xs: 4, md: 5 },
                maxWidth: 460,
                ml: { md: "auto" },
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              {/* Heading */}
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: theme.primary,
                  mb: 3,
                }}
              >
                {solutionContent.bridgeIntro}
              </Typography>

              {/* Points */}
              <Box sx={{ mb: 3 }}>
                {solutionContent.bridgePoints.map((point: string) => (
                  <Box
                    key={point}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      mb: 2.2,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        color: theme.accent,
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: 14.5,
                        color: theme.primary,
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Closing Lines */}
              {solutionContent.closingLines.map((line: string) => (
                <Typography
                  key={line}
                  sx={{
                    fontSize: 14,
                    color: theme.accent,
                    mb: 0.6,
                  }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionSection;
