import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Stack, 
  Chip 
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f6f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 4, boxShadow: 3, textAlign: 'center', p: 2 }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <RocketLaunchIcon sx={{ fontSize: 50, color: 'primary.main' }} />
            </Box>

            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
              React + MUI Starter
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Development environment is fully configured and running. Ready to build features and connect with your Express API.
            </Typography>

            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 4 }}>
              <Chip icon={<CheckCircleOutlineIcon />} label="Vite" color="primary" variant="outlined" />
              <Chip icon={<CheckCircleOutlineIcon />} label="Material UI" color="primary" variant="outlined" />
              <Chip icon={<CheckCircleOutlineIcon />} label="Redux Toolkit" color="primary" variant="outlined" />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                variant="contained" 
                size="large" 
                disableElevation
                onClick={() => alert('React + MUI Starter is operational!')}
              >
                Test Interaction
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="https://mui.com" 
                target="_blank"
                rel="noopener noreferrer"
              >
                MUI Docs
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}