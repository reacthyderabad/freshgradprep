import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

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
    <Box sx={{ py: 10, backgroundColor: "secondary.main" }}>
      {/* Heading */}
      <Typography
        align="center"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          color: "primary.main",
          mb: 7,
        }}
      >
        {audienceContent.title}
      </Typography>

      {/* Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {audienceContent.cards.map((item, index) => {
          const IconComponent = icons[index];
          return (
            <Grid
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: 360,
                  borderRadius: "22px",
                  textAlign: "center",
                  p: 4,
                  backgroundColor: "background.paper",
                  boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: "accent.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2.5,
                    }}
                  >
                    <IconComponent
                      sx={{ fontSize: 28, color: "accent.main" }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      fontSize: "20px",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
