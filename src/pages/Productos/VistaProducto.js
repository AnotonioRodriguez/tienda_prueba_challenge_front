import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, {  useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles({
    image: {
		height: '100%',
		width: '100%',
	},
	containerImage:{
        maxHeight: 320,
        maxWidth: 300
	}
})

export default function VistaProducto({producto, open, setOpen}) {

    const [ contador , setContador] = useState(1)
    const classes = useStyles();
    const [ disable, setDisable] = useState(false);
    const [load, setLoad] = useState(false);
    const [ total, setTotal] = useState(0);

    const Agregar = () => {
		setContador(contador+1);
	};

    const Quitar = () => {
        if (contador === 1 ) {
            return;
        }else{
            setContador(contador-1);
        }
	};

    let array = [ 
        {
            nombre: producto.nombre,
            precio: producto.precio,
            total: (producto.precio * contador),
            "cantidad": contador,
        }
    ];

    const agregarCarrito = () => {
        setLoad(!load)
        if (contador === 0) {
            setDisable(true);
        }else{
            let datos = localStorage.getItem("carritoUsuario");
            if(datos === null){
                localStorage.setItem('carritoUsuario', JSON.stringify(array))
                setOpen(false);
            } else {
                let data = JSON.parse(datos)
                let newCar = {nombre: producto.nombre, precio: producto.precio, total: (producto.precio * contador), cantidad: contador}
                data.push(newCar);
                localStorage.setItem("carritoUsuario", JSON.stringify(data));
                setOpen(false);
            }
            localStorage.removeItem("codigoIndividual");
        }
	}; 



    return (
        <>
            <Grid container>
                <Grid item lg={5}>
                    <Box 
                        className={classes.containerImage} 
                    >
                        <img 
                            alt="Imagen producto" 
                            src={producto.imagen} 
                            className={classes.image}
                        />
                    </Box>
                </Grid>
                <Grid item lg={6} >
                    <Box p={2} >
                        <Paper elevation={3}>
                            <Box textAlign="center" p={1}> 
                                <Typography variant="h3">
                                    {producto.nombre}
                                </Typography>
                            </Box>
                            <Box textAlign="center" p={2} > 
                                <Typography variant="h3" style={{ color:"green"}}>
                                    ${producto.precio * contador}
                                </Typography>
                            </Box>
                            <Box p={1} >
                                <Paper elevation={3}>
                                    <Box display="flex" justifyContent="center" textAlign="center">
                                        <Box p={1}>
                                            <IconButton aria-label="play/pause" onClick={()=> Quitar() }>
                                                <RemoveIcon style={{fontSize: 25}} />
                                            </IconButton>
                                        </Box>
                                        <Box p={2}>
                                            <Typography component={'span'} variant="h5">
                                                {contador}
                                            </Typography>
                                        </Box>
                                        <Box p={1}>
                                            <IconButton aria-label="play/pause" onClick={()=> Agregar() }>
                                                <AddIcon style={{fontSize: 25}} />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                            <Box p={1}> 
                                <Typography variant="subtitle2">
                                    {producto.descripcion}
                                </Typography>
                            </Box>

                            <Box p={2} display="flex" justifyContent="center">
                                <Button 
                                    variant="outlined"
                                    size="large"
                                    startIcon={<ShoppingCartIcon/>}
                                    disabled={disable}
                                    onClick={() => agregarCarrito()}
                                >
                                    Agregar Carrito
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
