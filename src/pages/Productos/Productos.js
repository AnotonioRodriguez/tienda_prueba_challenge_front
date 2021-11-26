import React from 'react'
import { Grid, Box } from '@mui/material';
import productos from  './productos.json';
import CardProducto from './CardProducto';

export default function Productos() {

    return (
        <>
            <Grid container>
                {
                    productos.productos.map((producto) => {
                        return(
                            <Grid lg={3}>
                                <Box p={1}>
                                    <CardProducto producto={producto} />
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
