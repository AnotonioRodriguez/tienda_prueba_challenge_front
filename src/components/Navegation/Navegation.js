import { Avatar, Badge, IconButton, Tooltip, Typography} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from '../../img/Dulces.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

export default function Navegation() {

    const datos = JSON.parse(localStorage.getItem('carritoUsuario'));

    return (
        <>
            <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                <Avatar component={Link} to={`/`} alt="Remy Sharp" src={logo} sx={{ width: 70, height: 70 }} />
            </Box>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Dulces "El Foraneo"
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Mi carrito">
                    <Badge badgeContent={datos.length} color="error">
                        <IconButton sx={{ p: 0 }} component={Link} to={`/carrito`}>
                            <AddShoppingCartIcon color="inherit" sx={{ width: 30, height: 30 }} />
                        </IconButton>
                    </Badge>
                </Tooltip>
            </Box>
        </>
    )
}
