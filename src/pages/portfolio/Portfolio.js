import { Grid, Container } from "@mui/material";

function Portfolio() {
    return (
        <Grid container sx={{ backgroundColor: "lightblue", display: 'flex', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Grid item sx={{ backgroundColor: "orange", }}>
                Portfolio World!
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", }}>
                Portfolio World!
            </Grid>
        </Grid>
    );
}

export default Portfolio;