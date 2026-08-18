import { Box, Typography, Container, Card, CardContent } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";
import { audienceContent } from "../data/audienceContent";
import type { SvgIconComponent } from "@mui/icons-material";

const icons: SvgIconComponent[] = [
  SchoolIcon,
  WorkOutlineIcon,
  TrendingUpIcon,
  SwapHorizIcon,
  SearchIcon,
];

export default function AudienceSection() {
  return (
    <Box
      component="section"
      aria-label="Who FreshGradPrep is designed for"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "secondary.main",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "primary.main",
            mb: 2,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
          }}
        >
          {audienceContent.title}
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {audienceContent.cards.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 3,
                    py: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: "accent.light",
                      mb: 1.5,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 36, color: "accent.main" }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textAlign: "center",
                      maxWidth: 240,
                      mx: "auto",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
