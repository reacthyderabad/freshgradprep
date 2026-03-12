
import { Box, Typography, Grid, Container } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { aboutContent } from "../data/aboutContent";

const AboutSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">

        <Grid container spacing={6}>

          {/* LEFT */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom  sx={{ color: '#043a7e' ,mb:3}}>
              {aboutContent.title} 
            </Typography>

            {aboutContent.paragraphs.map((para, index) => (
              <Typography key={index} sx={{ mb: 2 }} color="text.secondary">
                {para}
              </Typography>
            ))}
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 5}}>
            <Box
              sx={{
                backgroundColor: "#e9e1cc",
                p: 3,
                borderRadius: 3,
                color: '#043a7e',
                mt:6
                
                ,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                <h3>Why FreshGradPrep</h3>
              </Typography>

              {aboutContent.highlights.map((item, index) => (
                <Box key={index} sx={{ display: "flex", mb: 1.5 }}>
                  <CheckCircleOutlineIcon sx={{ mr: 1 , color: '#d7a449' }} />
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default AboutSection;