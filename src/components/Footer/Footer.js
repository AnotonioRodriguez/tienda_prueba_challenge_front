import { Avatar, Grid } from '@mui/material'
import { Box } from '@mui/system';
import { Typography, IconButton} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/Dulces.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
            <Grid container>
                <Grid item lg={4} xs={12}>
                    <Box textAlign="center">
                        <Box p="1">
                            <Typography variant="h6">
                                Dulces El Foraneo
                            </Typography>
                        </Box>
                        <Box p="1">
                            <Typography variant="h6">
                                Pipila #26, Autlan Navarro Jal, C.P. 48930
                            </Typography>
                        </Box>
                        <Box p="1">
                            <Typography variant="h6">
                                Tel: 317 387 34 62
                            </Typography>
                        </Box>
                        <Box p="1">
                            <Typography variant="h6">
                                Brayan Antonio Rodriguez Flores
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box  sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}}}>
                        <Box textAlign="center" display="flex" justifyContent="center" >
                            <Avatar component={Link} to={`/`} alt="Remy Sharp" src={logo} sx={{ width: 130, height: 130 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box p={1}>
                        <Typography variant="h6" >
                            Encuentranos en:
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Box>
                            <IconButton
                                href="https://www.facebook.com/dulcesforaneo/"
                                target="_blank"
                            >
                                <FacebookIcon style={{fontSize: 60}}/>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton
                                href="https://www.instagram.com/dulces_el_foraneo/?hl=es"
                                target="_blank"
                            >
                                <InstagramIcon style={{fontSize: 60}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
