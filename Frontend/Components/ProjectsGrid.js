import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from "@mui/material";

const projects = [
  { title: "Project 1", img: "https://picsum.photos/id/1015/400/300" },
  { title: "Project 2", img: "https://picsum.photos/id/1016/400/300" },
  { title: "Project 3", img: "https://picsum.photos/id/1018/400/300" },
  { title: "Project 4", img: "https://picsum.photos/id/1020/400/300" },
  { title: "Project 5", img: "https://picsum.photos/id/1024/400/300" },
  { title: "Project 6", img: "https://picsum.photos/id/1035/400/300" },
  { title: "Project 7", img: "https://picsum.photos/id/1038/400/300" },
  { title: "Project 8", img: "https://picsum.photos/id/1043/400/300" },
];

export default function ProjectsGrid() {
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", py: 8 }}>
      <Typography 
        variant="h3" 
        sx={{ fontWeight: "bold", mb: 6, fontSize: { xs: "1.8rem", md: "2.5rem" }, color: "white" }}
      >
        Best Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              elevation={6}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-8px)", boxShadow: "0 12px 20px rgba(0,0,0,0.15)" },
                border: "1px solid #e0e0e0",
                mx: "auto",
                maxWidth: 280
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.img}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", p: 2.5 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: "#ffffffff" }}>
                  {project.title}
                </Typography>
                <Button variant="outlined" size="small" sx={{ alignSelf: "center", borderRadius: "20px", textTransform: "none", borderWidth: "2px", "&:hover": { borderWidth: "2px" } }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
