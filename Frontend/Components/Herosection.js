import { Box, Container, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "transparent",
        color: "white",
        py: 40,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          Découvrez nos Projets Innovants
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            fontWeight: 300,
            fontSize: { xs: "1.1rem", md: "1.5rem" }
          }}
        >
          Une plateforme dédiée à la présentation et au partage des projets créatifs de notre communauté.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "30px",
            backgroundColor: "white",
            color: "#6a11cb",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
            }
          }}
        >
          Explorer les Projets
        </Button>
      </Container>
    </Box>
  );
}
