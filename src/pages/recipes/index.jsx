import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";




export default function Recipes() {
    return (
       <Container sx={{my: "2rem"}} maxWidth="sm">
            <TextField fullWidth id="outlined-basic" 
            label="Want to cook? Enter the meal name here to find the Recipe!" 
            variant="outlined" />
            <Grid container spacing={3}>
                <Grid sx={{mt: "1rem"}}item xs={4}>
                    <Card sx={{maxWidth: 345}}>
                            <CardMedia 
                                sx={{height: 140}}
                                image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fHww"/>
                    </Card>
                    <CardContent>
                        <Typography variant="h5">Bolongnese</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
            </Grid>
       </Container>
    )
}

