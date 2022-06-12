import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";



function App() {
  
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone ,This is my first react app using material-ui.
              Let's hope it i'll be good and i hope evryone will likes it
            </Typography>
            <div >
              <Grid container spacing={2} justify= 'center' >
                <Grid item>
                  <Button variant="contained" color="primary">
                   See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                   Secondary action
                  </Button>
                </Grid>
              </Grid>

            </div>
          </Container>
        </div>
        <Container  maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card >
                <CardMedia
                 image="https://images.unsplash.com/random"
                 title = "Image Title"
                 />
                 <CardContent>
                  <Typography gutterBottom variant="h6">
                    This is the first Card
                  </Typography>
                  <Typography>
                    This is a media card . you can use this section to  describe the content.
                  </Typography>
                 </CardContent>
                 <CardActions>
                  <Button size="small" color="primary">
                   view
                  </Button>
                  <Button size="small" color="primary">
                   Edit
                  </Button>
                  
                 </CardActions>

              </Card>

            </Grid>

          </Grid>

        </Container>
        <Container  maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card >
                <CardMedia
                 image="https://images.unsplash.com/random"
                 title = "Image Title"
                 />
                 <CardContent>
                  <Typography gutterBottom variant="h6">
                    This is the first Card
                  </Typography>
                  <Typography>
                    This is a media card . you can use this section to  describe the content.
                  </Typography>
                 </CardContent>
                 <CardActions>
                  <Button size="small" color="primary">
                   view
                  </Button>
                  <Button size="small" color="primary">
                   Edit
                  </Button>
                  
                 </CardActions>

              </Card>

            </Grid>

          </Grid>

        </Container>
        <Container  maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card >
                <CardMedia
                 image="https://images.unsplash.com/random"
                 title = "Image Title"
                 />
                 <CardContent>
                  <Typography gutterBottom variant="h6">
                    This is the first Card
                  </Typography>
                  <Typography>
                    This is a media card . you can use this section to  describe the content.
                  </Typography>
                 </CardContent>
                 <CardActions>
                  <Button size="small" color="primary">
                   view
                  </Button>
                  <Button size="small" color="primary">
                   Edit
                  </Button>
                  
                 </CardActions>

              </Card>

            </Grid>

          </Grid>

        </Container>
        <Container  maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card >
                <CardMedia
                 image="https://images.unsplash.com/random"
                 title = "Image Title"
                 />
                 <CardContent>
                  <Typography gutterBottom variant="h6">
                    This is the first Card
                  </Typography>
                  <Typography>
                    This is a media card . you can use this section to  describe the content.
                  </Typography>
                 </CardContent>
                 <CardActions>
                  <Button size="small" color="primary">
                   view
                  </Button>
                  <Button size="small" color="primary">
                   Edit
                  </Button>
                  
                 </CardActions>

              </Card>

            </Grid>

          </Grid>

        </Container>
      </main>
    </>
  );
}

export default App;
