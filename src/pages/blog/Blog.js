import { Grid, Container } from "@mui/material";

function Blog() {
    return (
        <Grid container sx={{ backgroundColor: "purple", display: 'flex', justifyContent: 'space-evenly', alignContent: 'center' }}>
            <Grid item sx={{ backgroundColor: "orange", }}>
                Blog World!
            </Grid>
            <Grid item sx={{ backgroundColor: "yellow", }}>
                Blog World!
            </Grid>
        </Grid>
    );
}

export default Blog;