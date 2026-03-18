import { Box, Typography, Container, Card, CardContent } from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { problemContent } from "../data/problemContent";

const icons = [
  <MailOutlineIcon sx={{ fontSize: 36, color: "highlight.main" }} />,
  <HelpOutlineIcon sx={{ fontSize: 36, color: "highlight.main" }} />,
  <VisibilityOffIcon sx={{ fontSize: 36, color: "highlight.main" }} />,
  <PsychologyAltIcon sx={{ fontSize: 36, color: "highlight.main" }} />,
];

const ProblemSection = () => {
  return (
    <Box
      component="section"
      id="problem"
      aria-label="Problems fresh graduates face"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "secondary.main",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "primary.main",
            mb: 2,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
          }}
        >
          {problemContent.title}
        </Typography>

        {/* Cards */}
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
          {problemContent.problems.map((item, index) => (
            <Card
              sx={{
                height: "100%",
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <CardContent>
                {/* Icon */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  {icons[index]}
                </Box>

                {/* Title */}
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

                {/* Description */}
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
          ))}
        </Box>

        {/* Bottom Line */}
        <Typography
          align="center"
          sx={{
            mt: 5,
            fontWeight: 600,
            color: "primary.main",
            fontSize: "16px",
            maxWidth: "520px",
            mx: "auto",
          }}
        >
          {problemContent.transitionLine}
        </Typography>
      </Container>
    </Box>
  );
};

export default ProblemSection;
