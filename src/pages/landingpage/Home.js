import { Grid, Container, Box, Typography, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IMAGE from "../../assets/images";
function Home() {
    return (
        <Grid container sx={{ backgroundColor: "gray", minHeight: '600px' }}>
            <Grid item sx={{ backgroundColor: "orange", display: 'flex', justifyItems: 'flex-Start', flexGrow: .5, alignItems: 'center' }}>
                <Grid item sx={{ backgroundColor: "blue", flexGrow: .1, }}>
                    <Box sx={{ '& > :not(style)': { margin: 1 }, display: 'flex', flexDirection: 'column', }}>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Box>
                </Grid>
                <Grid item sx={{ backgroundColor: "pink", display: 'flex', flexDirection: 'column', flexGrow: .4 }}>
                    <Typography>
                        Hi, I am
                    </Typography>
                    <Typography>
                        Angelo Tadeo
                    </Typography>
                    <Typography>
                        Web Developer
                    </Typography>
                </Grid>
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", display: 'flex', justifyContent: 'flex-end', flexGrow: .5, alignItems: 'center' }}>
                <Box component="img" src={IMAGE.Sample} alt="Sample"
                    sx={{
                        height: 600,
                        width: 720,
                    }} />
            </Grid>
        </Grid>
    );
}

export default Home;