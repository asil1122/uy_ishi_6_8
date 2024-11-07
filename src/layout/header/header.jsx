import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Stack bgcolor={'blue'} direction='row'py={'40px'} justifyContent={'center'}>
        <Typography variant='h1'>Header</Typography>
    </Stack>
)
}
