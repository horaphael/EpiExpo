import { Box } from "@mui/material";
import ProjectsGrid from "../Components/ProjectsGrid";
import ProjectForm from "../Components/ProjectForm";
import HeroSection from "../Components/Herosection";

export default function ProjectsSection() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: "transparent", color: "white" }}>
      <HeroSection />
      <ProjectsGrid />
      <ProjectForm />
    </Box>
  );
}
