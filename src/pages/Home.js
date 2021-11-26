import React from 'react';
import { Typography } from '@mui/material'
import Productos from './Productos/Productos';

export default function Home() {
    return (
        <div>
            <Typography variant="h4">Home</Typography>
            <Productos />
        </div>
    )
}
