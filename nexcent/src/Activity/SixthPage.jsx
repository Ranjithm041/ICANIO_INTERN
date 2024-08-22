import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import pana from '../Activity/Images/pana.png';

const SixthPage = () => {
  return (
    <Box 
            sx={{ 
                flexGrow: 1, 
                height: 'auto', // Set to auto for responsive height
                marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' },
                fontFamily: 'Inter, sans-serif'
               // Add padding for mobile screens // Add padding for mobile screens
            }}
        >
            <Grid container spacing={2} columns={16} alignItems="center">
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center image on mobile
                        marginTop: { xs: '10px', sm: '0' }, // Adjust margin for mobile
                    }}
                >
                    <img 
                        src={pana}
                        alt="" 
                        style={{
                            maxWidth: '100%', // Make the image responsive
                            height: 'auto'
                        }} 
                    />
                </Grid>

                {/* Text Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={10} 
                    sx={{
                        marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile
                        paddingLeft: { sm: '150px' }, // Add padding on larger screens
                    }}
                >
                    <Box>
                        <div style={{
                            textAlign: 'left', 
                            fontSize: '1rem', // Adjust font size for responsiveness
                            width: '100%', 
                        }}>
                            <h1 style={{ margin: '10px 0' ,color:'#575555d5'}}>
                                How to design your site footer like 
                            </h1>
                            <h1 style={{ margin: '10px 0' ,color:'#575555d5'}}>
                                we did
                            </h1>
                            <p style={{ 
                                color: '#969191d5', 
                                textAlign: 'left', 
                                fontSize: '1rem', // Adjust font size for responsiveness
                                margin: '10px 0' 
                            }}>
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                                commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                                libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <Button 
                                sx={{ 
                                    bgcolor: '#4CAF4F', 
                                    color: 'white', 
                                    marginTop: '20px', 
                                    textTransform: 'none' 
                                }} 
                                variant="contained"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
  )
}

export default SixthPage