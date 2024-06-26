import { Grid, Box, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { motion } from "framer-motion"
import IMAGE from "../../assets/images";
import { useTheme } from "@emotion/react";
import App from "../../App";
function Services({ params }) {
    const theme = useTheme(App)
    return (
        <Box sx={{ height: 'auto', }}>
            <Typography variant="h2" sx={{ marginTop: 12, textAlign: 'center' }}>Services</Typography>
            <Grid container rowSpacing={{ xs: 2, sm: 2, md: 2, xl: 4 }} columnSpacing={{ xs: 4, sm: 4, md: 4, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
                <Grid item component={motion.div}
                    initial={{ x: -99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ width: 445, borderTopRightRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.WebDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Web Development
                                </Typography>
                                <Typography variant="body2" >
                                    Web development encompasses designing, building, and maintaining websites and web applications with a focus on functionality and user experience.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={motion.div}
                    initial={{ x: -99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ maxWidth: 445, borderTopRightRadius: 100, }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.ComputerFormat}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Computer Formatting
                                </Typography>
                                <Typography variant="body2" >
                                    "Computer formatting" involves preparing a storage device by deleting existing data and configuring a file system to make the device usable for storing new information.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={motion.div}
                    initial={{ x: -99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ maxWidth: 445, borderTopRightRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.GraphicDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Graphic Design
                                </Typography>
                                <Typography variant="body2" >
                                    Graphic design involves creating visual content to communicate messages, using typography, images, and layout techniques to convey ideas effectively.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={motion.div}
                    initial={{ x: 99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.PhotoEdit}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Photo Editing
                                </Typography>
                                <Typography variant="body2" >
                                    "Photo editing" involves enhancing, modifying, or retouching images using software to improve their appearance or convey specific artistic or informational purposes.                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={motion.div}
                    initial={{ x: 99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.UiDesign}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    UI Design
                                </Typography>
                                <Typography variant="body2" >
                                    "UI design" encompasses the creation of visually appealing and user-friendly interfaces for software applications and websites, that enhance the user experience.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={motion.div}
                    initial={{ x: 99 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 6
                        }
                    }}>
                    <Card raised sx={{ maxWidth: 445, borderTopLeftRadius: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={IMAGE.VideoEdit}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: params ? '#2E3829' : '#4D9AFF' }}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Video Editing
                                </Typography>
                                <Typography variant="body2" >
                                    "Video editing" is the process of enhancing and refining video footage by adding effects, sound, and other elements to create a finished product.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Services;