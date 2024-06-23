import { Grid, LinearProgress, Card, Typography, Box, Avatar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import IMAGE from "../../assets/images";

function About() {
    return (
        <Grid container sx={{ backgroundColor: "pink", display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Card raised={true} sx={{
                width: '50%',
                height: 900, display: 'inline-flex',
                flexDirection: 'column',
                justifyItems: 'center',
                alignContent: 'center',
                marginTop: -5,
                borderRadius: '50px',
                padding: 5,
                backgroundColor: 'lightblue',
                outlineStyle: 'dashed',
                outlineOffset: '-20px',
            }}>
                <Typography variant="h3" textAlign='center' paddingTop={1}>About Me</Typography>
                <hr color="black" style={{ width: '100%', marginTop: 2 }} />
                <Grid container>
                    <Grid item sx={{ width: "40%", display: 'inline-block', justifyContent: 'flex-start', alignContent: 'center', }}>
                        <Avatar src={IMAGE.Sample2} sx={{
                            width: 300, height: 300, outlineStyle: 'dashed', margin: 3
                        }} />
                        <Box>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <MailOutlineIcon sx={{ m: 1 }} />
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', m: 1 }}>
                                        Email :
                                    </Typography>
                                    <Typography sx={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', m: 1 }}>angelo.tadeo.f@gmail.com</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <PhoneIcon sx={{ m: 1 }} />
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', m: 1 }}>
                                        Phone :
                                    </Typography>
                                    <Typography sx={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', m: 1 }}>+639307608297</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sx={{ width: "60%", display: 'inline-block', justifyItems: 'center', alignContent: 'center', }}>
                        <Typography sx={{ fontSize: 20, }}>Dynamic and motivated professional with a diverse background in Business Process Outsourcing (BPO) and Junior Application Development. With nearly three months of experience in BPO operations and hands-on involvement as a Junior Application Developer at iRely PH, I bring a unique blend of skills in both operational efficiency and technical expertise.<br /><br />

                            I am now seeking a challenging career opportunity with a forward-thinking company in the field of Information Technology. With a passion for innovation and problem-solving, I aim to leverage my technical skills and abilities to drive impactful solutions. My approach is marked by creativity, adaptability, and a commitment to delivering projects with excellence.
                        </Typography>
                    </Grid>
                </Grid>
                <hr color="black" style={{ width: '100%', marginTop: 2 }} />
                <Typography variant="h5" textAlign='center' sx={{ fontStyle: 'italic' }}>Why Choose Me</Typography>
                <Typography variant="h4" textAlign='center' sx={{ fontWeight: 'bold' }}>My Expertise Area</Typography>
                <Grid container>
                    <Grid item sx={{ width: "50%", display: 'inline-block', justifyContent: 'flex-start', alignContent: 'center', }}>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Web UI Design</Typography>
                            <LinearProgress variant="determinate" value={80} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Web Design</Typography>
                            <LinearProgress variant="determinate" value={80} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Front-End Development</Typography>
                            <LinearProgress variant="determinate" value={70} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                    </Grid>
                    <Grid item sx={{ width: "50%", display: 'inline-block', justifyItems: 'center', alignContent: 'center', }}>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Graphic Design</Typography>
                            <LinearProgress variant="determinate" value={70} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Git Version Control</Typography>
                            <LinearProgress variant="determinate" value={50} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                        <Box sx={{ width: '100%', padding: 1 }}>
                            <Typography>Back-End Development</Typography>
                            <LinearProgress variant="determinate" value={60} sx={{
                                height: 10,
                                borderRadius: 5, margin: 1
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Grid >
    );
}

export default About;