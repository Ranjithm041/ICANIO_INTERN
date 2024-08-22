import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Illustration from "../Activity/Images/Illustration.png" 

function Body() {
    return (
        <Box 
    sx={{ 
        flexGrow: 1,
        bgcolor: '#f5f5f5',
        height: 'auto',
        py: 4, // Add vertical padding for better spacing
        textAlign: { xs: 'left', md: 'left' } // Align text to the left
    }}
>
    <Grid container spacing={2} columns={16}>
        <Grid item xs={12} md={8}>
            <Box sx={{ height: '500px', marginLeft: '30px', padding: { xs: '0 16px', md: '0 50px' } }}>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        color: '4d4d4d',
                        marginTop: '70px',
                        fontSize: { xs: '50px', md: '50px' },  // Adjusted font size
                        fontWeight: 600,
                        mb: 1,
                        color: '4d4d4d',
                        // Prevents text from wrapping
                        // Ensures content doesn't overflow
                         // Adds ellipsis if the text is too long
                    }}
                >
                    Lessons and insights
                </Typography>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        color: '#4CAF4F', 
                        fontSize: { xs: '50px', md: '50px' }, 
                        fontWeight: 600,
                        mb: 1
                    }}
                >
                    from 8 years
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        color: '#969191d5', 
                        fontSize: { xs: '16px', md: '20px' }, 
                        mb: 2 
                    }}
                >
                    Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button 
                    sx={{ 
                        bgcolor: '#4CAF4F', 
                        color: 'white', 
                        textTransform: 'none', 
                        mt: 2 
                    }} 
                    variant="contained"
                >
                    Register
                </Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            mt: { xs: 2, md: 0 } 
        }}>
            <img 
                src={Illustration}
                alt="Illustration" 
                style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    marginLeft: '250px'
                }} 
            />
        </Grid>
    </Grid>
</Box>

    );
}

export default Body;