import { Grid, Container } from "@mui/material";

function About() {
    return (
        <Grid container sx={{ backgroundColor: "pink", display: 'flex', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Grid item sx={{ backgroundColor: "orange", }}>
                About World!
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", }}>
                About World!
            </Grid>
        </Grid>
    );
}

export default About;