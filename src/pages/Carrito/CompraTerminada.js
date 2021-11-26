import { Button, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CompraTerminada() {
    return (
        <>
            <Grid container>
                <Grid lg={12} xs={12}>
                <Box pt={5} display="flex" justifyContent="center" justifyItems="center" alignContent="center">
                    <Paper elevation={"5"}>
                        <Box p={3}>
                            <Typography variant="h5">
                                Muchas Gracias por su compra
                            </Typography>
                            <Typography variant="h6">
                                En un momento llegara un correo electronico con la confirmacion de su compra
                            </Typography>
                        </Box>
                        <Box p={2}>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                component={Link} 
                                to={`/`}
                            >
                                Terminar
                            </Button>
                        </Box>
                    </Paper>
                </Box>
                </Grid>
            </Grid>
        </>
    )   
}
