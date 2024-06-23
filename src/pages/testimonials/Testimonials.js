import { Grid, Container } from "@mui/material";

function Testimonials() {
    return (
        <Grid container sx={{ backgroundColor: "maroon", display: 'flex', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Grid item sx={{ backgroundColor: "orange", }}>
                Testimonials World!
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", }}>
                Testimonials World!
            </Grid>
        </Grid>
    );
}

export default Testimonials;