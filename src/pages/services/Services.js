import { Grid, Box, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import IMAGE from "../../assets/images";
function Services() {
    return (
        <Box sx={{ height: 'auto', }}>
            <Typography variant="h2" sx={{ marginTop: 12, textAlign: 'center' }}>Services</Typography>
            <Grid container rowSpacing={{ xs: 2, sm: 2, md: 2, xl: 4 }} columnSpacing={{ xs: 4, sm: 4, md: 4, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                <Grid item >
                    <Card raised sx={{ maxWidth: 445, borderTopRightRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.WebDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Web Development
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item >
                    <Card raised sx={{ maxWidth: 445, borderTopRightRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.ComputerFormat}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Formatting
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item >
                    <Card raised sx={{ maxWidth: 445, borderTopRightRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.GraphicDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Graphic Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.PhotoEdit}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Photo Editing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.UiDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    UI Design
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.VideoEdit}
                                alt="green iguana"
                            />
                            <CardContent sx={{backgroundColor:'lightblue'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Video Editing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Services;