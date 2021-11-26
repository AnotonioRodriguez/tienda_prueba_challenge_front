import { Button, Card,  CardContent, CardMedia,  Dialog,  Grid, Slide, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import VistaProducto from './VistaProducto';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardProducto({producto}) {

    const [open, setOpen] = useState(false);
    
    const handleClick = () => setOpen(!open);

    return (
        <>
            <Card
                onClick={handleClick}
                sx={{ minWidth: 270 }}
            >
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

            <Dialog
                maxWidth='lg'
				open={open} 
				onClose={handleClick} 
				TransitionComponent={Transition}
            >
                <Grid>
                    <VistaProducto open={open} setOpen={setOpen} producto={producto} />
                </Grid>
            </Dialog>
        </>
    )
}
