import React from 'react';
import { Button, Typography, Container, Grid, Card } from '@mui/material';

const Dashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '2rem' }}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: '#000' }}>
                Welcome to TaskMaster
            </Typography>
            <Typography variant="h5" align="center" paragraph sx={{ color: '#000' }}>
                Your ultimate task management solution to boost productivity and stay organized.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
                        <Typography variant="h6" sx={{ color: '#000' }}>Organize Your Tasks</Typography>
                        <Typography paragraph sx={{ color: '#000' }}>
                            Create, edit, and manage your tasks effortlessly with our intuitive interface.
                        </Typography>
                        <Button variant="contained" color="primary">Get Started</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
                        <Typography variant="h6" sx={{ color: '#000' }}>Collaborate with Teams</Typography>
                        <Typography paragraph sx={{ color: '#000' }}>
                            Share tasks and collaborate with your team in real-time to achieve your goals.
                        </Typography>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
                        <Typography variant="h6" sx={{ color: '#000' }}>Track Your Progress</Typography>
                        <Typography paragraph sx={{ color: '#000' }}>
                            Monitor your task completion and stay on top of your deadlines with ease.
                        </Typography>
                        <Button variant="contained" color="primary">View Dashboard</Button>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="h4" align="center" sx={{ marginTop: '4rem', color: '#000' }}>
                Ready to take control of your tasks?
            </Typography>
        </Container>
    );
}

export default Dashboard;