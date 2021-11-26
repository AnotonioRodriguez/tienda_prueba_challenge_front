import { Button, Card, CardActions, CardContent, CardMedia,  Grid,  Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';

export default function CardProducto({producto}) {

    return (
        <>
           <Card sx={{ minWidth: 270 }}>
                <CardMedia
                    component="img"
                    alt="Porducto dulce"
                    height="150"
                    image={producto.imagen}
                />
                <CardContent>
                    <Grid container>
                        <Grid item lg={9}>
                            <Box textAlign="left">
                                <Typography gutterBottom variant="h5" component="div">
                                    {producto.nombre}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3}>
                            <Box textAlign="rigth">
                                <Typography gutterBottom variant="h5" component="div">
                                    ${producto.precio}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {producto.descripcion}
                    </Typography>
                </CardContent>
                <Grid container>
                    <Box p={2} >
                        <Button 
                            variant="outlined"
                            size="small"
                            startIcon={<ShoppingCartIcon/>}
                        >
                            Agregar Carrito
                        </Button>
                    </Box>
                </Grid>
            </Card>
        </>
    )
}
