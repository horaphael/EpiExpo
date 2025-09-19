import { Container, Paper, Typography, Grid, TextField, Button } from "@mui/material";

export default function ProjectForm() {
  return (
    <Container maxWidth="md" sx={{ mt: 40, mb: 8 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: '16px' }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Créer un Nouveau Projet
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Epitech"
              name="email"
              autoComplete="email"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "400%" },
                maxWidth: "800px",
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", mt: 9, ml: -32 }}>
            <TextField
              required
              id="name"
              label="Nom"
              name="name"
              autoComplete="name"
              variant="outlined"
              sx={{ width: "350px" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-start", mt: 9, ml: 1 }}>
            <TextField required fullWidth id="prenom" label="Prenom" name="prenom" variant="outlined" sx={{ width: "400px" }} />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="context" label="Contexte" name="context" multiline rows={3} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="description" label="Description du Projet" name="description" multiline rows={4} variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" fullWidth sx={{ py: 1.5 }}>
              Télécharger une Image
              <input type="file" accept="image/*" hidden />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" fullWidth sx={{ py: 1.5 }}>
              Télécharger une Vidéo
              <input type="file" accept="video/*" hidden />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2, py: 1.5, borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Créer le Projet
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
