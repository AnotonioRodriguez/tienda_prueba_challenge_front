import { Button, Grid,  Paper,  TextField,  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    formInputFlex: {
		display: 'flex',
		marginTop: 1,
        paddingTop: 0,
        alignItems: "left",
        justifyItems: "left"
	},
}))

export default function Carrito() {
    const classes = useStyles();
    // const datosCarrito = JSON.parse(localStorage.getItem('carritoUsuario'));

    return (
        <>
            <Grid container>
                <Grid lg={12} xs={12}>
                    <Box textAlign="center" p={2}>
                        <Typography variant="h5">
                            Terminar tu compra ahora mismo
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Paper elevation={5}>
                       
                    </Paper>
                </Grid>
                <Grid item lg={5} xs={12}>
                    <Paper elevation={5}>
                        <Box>
                            <Typography variant="h6" >
                                Datos Personales:
                            </Typography>
                        </Box>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Nombre:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>Telefono:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Localidad:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>Ciudad:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Estado:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>C.P.:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <Box>
                            <Typography variant="h6" >
                                Datos Tarjeta:
                            </Typography>
                        </Box>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Fecha Expiración:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box width="100%" p={1}>
                                <Typography>C.V.C.:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <div className={classes.formInputFlex}>
                            <Box width="100%" p={1}>
                                <Typography>Numero Tarjeta:</Typography>
                                <Box display="flex">
                                    <TextField
                                        fullWidth
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                        </div>
                        <Box p={2} textAlign="center">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                onClick={() => localStorage.removeItem('carritoUsuario')}
                                component={Link} 
                                to={`/finalizada`}
                            >
                                Comprar Ahora
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
