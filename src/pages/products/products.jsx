import styled from '@emotion/styled'
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  `
export const Products = () => {
  return (
    <Container>
      <Stack direction={'row'} gap={'40px'} justifyContent={'center'}>
        <CustomLink to={'/app/computer'}>
            <Typography variant='h2'>Computers</Typography>
        </CustomLink>
        <CustomLink to={'/app/phones'}>
            <Typography variant='h2'>Phones</Typography>
        </CustomLink>
      </Stack>
    </Container>

  )
}
