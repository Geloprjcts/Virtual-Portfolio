import { Grid, Container } from "@mui/material";

function Services() {
    return (
        <Grid container sx={{ backgroundColor: "brown", display: 'flex', justifyContent: 'space-evenly', alignContent: 'center', marginTop: -5, height: 500 }}>
            <Grid item sx={{ backgroundColor: "orange", }}>
                Services World!
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", }}>
                Services World!
            </Grid>
        </Grid>
    );
}

export default Services;