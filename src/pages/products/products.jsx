import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <Container>
      <Stack>
        <Link to={'/app/computer'}>
            <Typography>Computers</Typography>
        </Link>
        <Link to={'/app/phones'}>
            <Typography>Phones</Typography>
        </Link>
      </Stack>
    </Container>

  )
}
